import { Controller, Get, HttpCode, Param } from '@nestjs/common'
import { UserService } from './user.service'

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @HttpCode(200)
  @Get(':id')
  public async getUser (@Param() params: { id: string }) {
    const { id } = params
    const user = await this.userService.getUser(id)

    return { user }
  }
}
