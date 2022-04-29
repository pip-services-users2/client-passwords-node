import { UserPasswordInfoV1 } from './UserPasswordInfoV1';
import { IPasswordsClientV1 } from './IPasswordsClientV1';

export class PasswordsNullClientV1 implements IPasswordsClientV1 {

    public async getPasswordInfo(correlationId: string, userId: string): Promise<UserPasswordInfoV1> {
        return { id: userId, change_time: null, locked: false, lock_time: null }
    }

    public async setTempPassword(correlationId: string, userId: string): Promise<string> {
        return '123';
    }

    public async authenticate(correlationId: string, userId: string, password: string): Promise<boolean> {
        return true;
    }

    public async validateCode(correlationId: string, userId: string, code: string): Promise<boolean> {
        return true;
    }

    public async setPassword(correlationId: string, userId: string, password: string): Promise<void> {
        return null;
    }

    public async deletePassword(correlationId: string, userId: string): Promise<void> {
        return null;
    }

    public async changePassword(correlationId: string, userId: string, oldPassword: string, newPassword: string): Promise<void> {
        return null;
    }

    public async resetPassword(correlationId: string, userId: string, code: string, password: string): Promise<void> {
        return null;
    }

    public async recoverPassword(correlationId: string, userId: string): Promise<void> {
        return null;
    }

}
