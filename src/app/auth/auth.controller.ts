import { Body, Controller, Post, HttpCode, Req, Res, Get } from '@nestjs/common'
import { Request, Response } from 'express'
import { AuthDTO } from '../dtos/AuthDTO'
import { AuthService } from './auth.service'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @HttpCode(201)
  @Post('signup')
  public async signup (@Body() body: AuthDTO) {
    const { email, password } = body
    await this.authService.signup({
      email,
      password
    })
  }

  @Post('signin')
  public async signin (@Body() body: AuthDTO, @Req() request: Request, @Res() response: Response) {
    const { email, password } = body
    const data = await this.authService.signin({
      email,
      password,
    })
    response.cookie('token', data.token)
    return response.status(201).json(data)
  }
}
