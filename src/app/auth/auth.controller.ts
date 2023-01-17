import { Body, Controller, Post, HttpCode } from '@nestjs/common'
import { SignupDTO } from '../dtos/SignupDTO'
import { AuthService } from './auth.service'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @HttpCode(201)
  @Post('signup')
  public async signup (@Body() body: SignupDTO) {
    const { email, password } = body
    await this.authService.signup({
      email,
      password
    })
  }

  @Post('signin')
  public async signin () {
    const data = await this.authService.signin
    return data
  }

  @Post('signout')
  public async signout () {
    const data = await this.authService.signout
    return data
  }
}
