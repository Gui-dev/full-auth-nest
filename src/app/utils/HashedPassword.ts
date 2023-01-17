import * as bcrypt from 'bcrypt'

export class HashedPassword {
  public static async hashPassword (password: string): Promise<string> {
    const saltOrRounds = 10
    const hashed = await bcrypt.hash(password, saltOrRounds)

    return hashed
  }
}
