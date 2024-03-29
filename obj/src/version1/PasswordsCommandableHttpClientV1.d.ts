import { CommandableHttpClient } from 'pip-services3-rpc-nodex';
import { UserPasswordInfoV1 } from './UserPasswordInfoV1';
import { IPasswordsClientV1 } from './IPasswordsClientV1';
export declare class PasswordsCommandableHttpClientV1 extends CommandableHttpClient implements IPasswordsClientV1 {
    constructor(config?: any);
    getPasswordInfo(correlationId: string, userId: string): Promise<UserPasswordInfoV1>;
    setTempPassword(correlationId: string, userId: string): Promise<string>;
    setPassword(correlationId: string, userId: string, password: string): Promise<void>;
    deletePassword(correlationId: string, userId: string): Promise<void>;
    authenticate(correlationId: string, userId: string, password: string): Promise<boolean>;
    changePassword(correlationId: string, userId: string, oldPassword: string, newPassword: string): Promise<void>;
    validateCode(correlationId: string, userId: string, code: string): Promise<boolean>;
    resetPassword(correlationId: string, userId: string, code: string, password: string): Promise<void>;
    recoverPassword(correlationId: string, userId: string): Promise<void>;
}
