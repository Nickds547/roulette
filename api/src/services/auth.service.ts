import * as bcrypt from 'bcrypt';

export const comparePasswords = async (plainPass: string, hashedPass: string ): Promise<boolean> =>{
   return await bcrypt.compare(plainPass, hashedPass)
}

export const hashPassword = async (plainPass: string): Promise<string> => {
    var salt = await bcrypt.genSalt(10);
    var hash = await bcrypt.hash(plainPass, salt)

    return hash;
}