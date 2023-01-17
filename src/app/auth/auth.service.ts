import { Injectable } from '@nestjs/common'

import { SignupDTO } from '../dtos/SignupDTO'
import { PrismaService } from './../database/prisma/prisma.service'


@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService
  ) { }

  public async signup ({ email, password }: SignupDTO) {
    return {
      email,
      password
    }
  }

  public async signin () {
    return { message: 'SignIn' }
  }

  public async signout () {
    return { message: 'SignOut' }
  }
}
