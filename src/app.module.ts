import { Module } from '@nestjs/common'
import { AuthModule } from './app/auth/auth.module'
import { PrismaModule } from './app/database/prisma/prisma.module'
import { UserModule } from './app/user/user.module'

@Module({
  imports: [AuthModule, PrismaModule, UserModule],
  controllers: [],
  providers: []
})
export class AppModule { }
