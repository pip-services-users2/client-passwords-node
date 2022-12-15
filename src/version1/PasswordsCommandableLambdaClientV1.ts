import { ConfigParams } from 'pip-services3-commons-nodex';
import { CommandableLambdaClient } from 'pip-services3-aws-nodex';

import { UserPasswordInfoV1 } from './UserPasswordInfoV1';
import { IPasswordsClientV1 } from './IPasswordsClientV1';

export class PasswordsCommandableLambdaClientV1 extends CommandableLambdaClient implements IPasswordsClientV1 {

    constructor(config?: any) {
        super('passwords');

        if (config != null)
            this.configure(ConfigParams.fromValue(config));
    }
        
    public async getPasswordInfo(correlationId: string, userId: string): Promise<UserPasswordInfoV1> {
        return await this.callCommand(
            'get_password_info',
            correlationId,
            {
                user_id: userId
            }
        );
    }

    public async setTempPassword(correlationId: string, userId: string): Promise<string> {
        return await this.callCommand(
            'set_temp_password',
            correlationId,
            {
                user_id: userId
            }
        );
    }

    public async setPassword(correlationId: string, userId: string, password: string): Promise<void> {
        await this.callCommand(
            'set_password',
            correlationId,
            {
                user_id: userId,
                password: password
            }
        );
    }

    public async deletePassword(correlationId: string, userId: string): Promise<void> {
        await this.callCommand(
            'delete_password',
            correlationId,
            {
                user_id: userId
            }
        );
    }

    public async authenticate(correlationId: string, userId: string, password: string): Promise<boolean> {
        let result = await this.callCommand(
            'authenticate',
            correlationId,
            {
                user_id: userId,
                password: password
            }
        );
        return result != null ? result.authenticated : false;
    }

    public async changePassword(correlationId: string, userId: string, oldPassword: string, newPassword: string): Promise<void> {
        await this.callCommand(
            'change_password',
            correlationId,
            {
                user_id: userId,
                old_password: oldPassword,
                new_password: newPassword
            }
        );
    }

    public async validateCode(correlationId: string, userId: string, code: string): Promise<boolean> {
        let result = await this.callCommand(
            'validate_code',
            correlationId,
            {
                user_id: userId,
                code: code
            }
        );
        return result != null ? result.valid : null;
    }

    public async resetPassword(correlationId: string, userId: string, code: string, password: string): Promise<void> {
        await this.callCommand(
            'reset_password',
            correlationId,
            {
                user_id: userId,
                code: code,
                password: password
            }
        );
    }

    public async recoverPassword(correlationId: string, userId: string): Promise<void> {
        await this.callCommand(
            'recover_password',
            correlationId,
            {
                user_id: userId
            }
        );
    }
}
