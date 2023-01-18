import { HttpException, HttpStatus, Injectable } from '@nestjs/common'

import { PrismaService } from '../database/prisma/prisma.service'

type UserResponse = {
  id: string
  email: string
  createdAt: Date
}

@Injectable()
export class UserService {
  constructor(
    private readonly prisma: PrismaService
  ) { }

  public async getUser (id: string): Promise<UserResponse> {
    const foundUser = await this.prisma.user.findUnique({
      where: {
        id
      },
      select: {
        id: true,
        email: true,
        createdAt: true
      }
    })
    if (!foundUser) {
      throw new HttpException({
        status: HttpStatus.NOT_FOUND,
        error: 'User not found'
      }, HttpStatus.NOT_FOUND)
    }

    return foundUser
  }
}
