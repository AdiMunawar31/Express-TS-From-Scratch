import bcrypt from 'bcrypt';

class PasswordHash {
    public static hash = (password: string): Promise<string> => {
        const saltOrRounds = 10;
        return bcrypt.hash(password, saltOrRounds);
    }
}

export default PasswordHash;