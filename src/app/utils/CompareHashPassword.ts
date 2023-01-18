import * as bcrypt from 'bcrypt'

export class CompareHashPassword {
  public static async compareHash (password: string, hash: string): Promise<boolean> {
    const compareHash = await bcrypt.compare(password, hash)
    if (compareHash) return true
    return false
  }
}
