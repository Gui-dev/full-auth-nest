import { JwtService } from '@nestjs/jwt'

interface ISignToken {
  jwt: JwtService
  id: string
  email: string
}

export class SignToken {
  public static async generateToken ({ jwt, id, email }: ISignToken): Promise<string> {
    const payload = {
      id,
      email
    }
    const token = jwt.signAsync(payload, {
      secret: process.env.JWT_SECRET,
      expiresIn: '7d'
    })

    return token
  }
}
