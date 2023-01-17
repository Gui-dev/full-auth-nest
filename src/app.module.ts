import { Module } from '@nestjs/common'
import { AuthModule } from './app/auth/auth.module'
import { PrismaModule } from './app/database/prisma/prisma.module'

@Module({
  imports: [AuthModule, PrismaModule],
  controllers: [],
  providers: []
})
export class AppModule { }
