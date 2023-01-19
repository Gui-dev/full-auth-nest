import { Controller, Get, HttpCode, Param, UseGuards } from '@nestjs/common'

import { JwtGuard } from '../auth/jwt.guard'
import { UserService } from './user.service'

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @HttpCode(200)
  @UseGuards(JwtGuard)
  @Get(':id')
  public async getUser (@Param() params: { id: string }) {
    const { id } = params
    const user = await this.userService.getUser(id)

    return { user }
  }

  @HttpCode(200)
  @Get()
  public async getUsers () {
    const users = await this.userService.getUsers()

    return { users }
  }
}
