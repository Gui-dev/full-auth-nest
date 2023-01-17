import { HttpException, HttpStatus, Injectable } from '@nestjs/common'


import { SignupDTO } from '../dtos/SignupDTO'
import { HashedPassword } from '../utils/HashedPassword'
import { PrismaService } from './../database/prisma/prisma.service'


@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService
  ) { }

  public async signup ({ email, password }: SignupDTO): Promise<void> {
    const foundUser = await this.prisma.user.findUnique({
      where: {
        email
      }
    })
    if (foundUser) {
      throw new HttpException({
        status: HttpStatus.CONFLICT,
        error: 'User already exists'
      }, HttpStatus.CONFLICT)
    }
    const hashedPassword = await HashedPassword.hashPassword(password)
    await this.prisma.user.create({
      data: {
        email,
        hashedPassword
      }
    })
  }

  public async signin () {
    return { message: 'SignIn' }
  }

  public async signout () {
    return { message: 'SignOut' }
  }
}
