import { PassportStrategy } from '@nestjs/passport'
import { Request } from 'express'
import { ExtractJwt, Strategy } from 'passport-jwt'

export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        JwtStrategy.extractJWT
      ]),
      secretOrKey: process.env.JWT_SECRET
    })
  }

  public async validate (payload: { id: string, email: string }) {
    return payload
  }

  private static extractJWT (request: Request): string | null {
    if (request.cookies && 'token' in request.cookies) {
      return request.cookies.token
    }
    return null
  }
}

