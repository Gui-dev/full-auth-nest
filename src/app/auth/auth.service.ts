import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'

import { AuthDTO } from '../dtos/AuthDTO'
import { CompareHashPassword } from '../utils/CompareHashPassword'
import { HashedPassword } from '../utils/HashedPassword'
import { SignToken } from '../utils/SignToken'
import { PrismaService } from './../database/prisma/prisma.service'


type SigninResponse = {
  user: {
    id: string
    email: string
  }
  token: string
}

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwt: JwtService
  ) { }

  public async signup ({ email, password }: AuthDTO): Promise<void> {
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

  public async signin ({ email, password }: AuthDTO): Promise<SigninResponse> {
    const foundUser = await this.prisma.user.findUnique({
      where: {
        email
      }
    })
    if (!foundUser) {
      throw new HttpException({
        status: HttpStatus.UNAUTHORIZED,
        error: 'Email or Password invalid'
      }, HttpStatus.UNAUTHORIZED)
    }
    const isMatch = await CompareHashPassword.compareHash(password, foundUser.hashedPassword)
    if (!isMatch) {
      throw new HttpException({
        status: HttpStatus.UNAUTHORIZED,
        error: 'Email or Password invalid'
      }, HttpStatus.UNAUTHORIZED)
    }
    const token = await SignToken.generateToken({
      jwt: this.jwt,
      id: foundUser.id,
      email: foundUser.email
    })
    if (!token) {
      throw new HttpException({
        status: HttpStatus.UNAUTHORIZED,
        error: 'Token invalid'
      }, HttpStatus.UNAUTHORIZED)
    }

    return {
      user: {
        id: foundUser.id,
        email: foundUser.email
      },
      token
    }
  }
}
