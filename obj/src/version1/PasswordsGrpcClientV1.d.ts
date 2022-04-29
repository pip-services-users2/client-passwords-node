import { GrpcClient } from 'pip-services3-grpc-nodex';
import { IPasswordsClientV1 } from './IPasswordsClientV1';
import { UserPasswordInfoV1 } from './UserPasswordInfoV1';
export declare class PasswordsGrpcClientV1 extends GrpcClient implements IPasswordsClientV1 {
    constructor();
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
