import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

class Authentication {
    public static PasswordHash = (password: string): Promise<string> => {
        const saltOrRounds = 10;
        return bcrypt.hash(password, saltOrRounds);
    }

    public static PasswordCompare = async (password: string, passwordHashed: string): Promise<boolean> => {
        const result = await bcrypt.compare(password, passwordHashed);
        return result;
    }

    public static generateToken = (id: number, username: string, password: string): string => {
        const secretKey: any = process.env.JWT_SECRET_KEY;
        const token: string = jwt.sign({ id, username, password }, secretKey);

        return token;
    }
}

export default Authentication;