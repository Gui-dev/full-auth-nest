import { Body, Controller, Post } from '@nestjs/common'
import { SignupDTO } from '../dtos/SignupDTO'
import { AuthService } from './auth.service'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('signup')
  public async signup (@Body() body: SignupDTO) {
    const { email, password } = body
    const user = await this.authService.signup({
      email,
      password
    })
    return user
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
