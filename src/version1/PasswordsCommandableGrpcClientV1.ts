import { ConfigParams } from 'pip-services3-commons-nodex';
import { CommandableGrpcClient } from 'pip-services3-grpc-nodex';

import { UserPasswordInfoV1 } from './UserPasswordInfoV1';
import { IPasswordsClientV1 } from './IPasswordsClientV1';

export class PasswordsCommandableGrpcClientV1 extends CommandableGrpcClient implements IPasswordsClientV1 {

    constructor(config?: any) {
        super('v1/passwords');

        if (config != null)
            this.configure(ConfigParams.fromValue(config));
    }
        
    public async getPasswordInfo(correlationId: string, userId: string): Promise<UserPasswordInfoV1> {
        let timing = this.instrument(correlationId, 'passwords.get_password_info');

        try {
            return await this.callCommand(
                'get_password_info',
                correlationId,
                {
                    user_id: userId
                }
            );    
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async setTempPassword(correlationId: string, userId: string): Promise<string> {
        let timing = this.instrument(correlationId, 'passwords.set_temp_password');

        try {
            return await this.callCommand(
                'set_temp_password',
                correlationId,
                {
                    user_id: userId
                }
            );
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async setPassword(correlationId: string, userId: string, password: string): Promise<void> {
        let timing = this.instrument(correlationId, 'passwords.set_password');

        try {
            await this.callCommand(
                'set_password',
                correlationId,
                {
                    user_id: userId,
                    password: password
                }
            );
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async deletePassword(correlationId: string, userId: string): Promise<void> {
        let timing = this.instrument(correlationId, 'passwords.delete_password');

        try {
            await this.callCommand(
                'delete_password',
                correlationId,
                {
                    user_id: userId
                }
            );
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async authenticate(correlationId: string, userId: string, password: string): Promise<boolean> {
        let timing = this.instrument(correlationId, 'passwords.authenticate');

        try {
            let result = await this.callCommand<any>(
                'authenticate',
                correlationId,
                {
                    user_id: userId,
                    password: password
                }
            );
            let authenticated = result != null ? result.authenticated : false;
            return authenticated;
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async changePassword(correlationId: string, userId: string, oldPassword: string, newPassword: string): Promise<void> {
        let timing = this.instrument(correlationId, 'passwords.change_password');

        try {
            await this.callCommand(
                'change_password',
                correlationId,
                {
                    user_id: userId,
                    old_password: oldPassword,
                    new_password: newPassword
                }
            );
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async validateCode(correlationId: string, userId: string, code: string): Promise<boolean> {
        let timing = this.instrument(correlationId, 'passwords.validate_code');

        try {
            let result = await this.callCommand<any>(
                'validate_code',
                correlationId,
                {
                    user_id: userId,
                    code: code
                }
            );
            return result != null ? result.valid : null;
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async resetPassword(correlationId: string, userId: string, code: string, password: string): Promise<void> {
        let timing = this.instrument(correlationId, 'passwords.reset_password');

        try {
            await this.callCommand(
                'reset_password',
                correlationId,
                {
                    user_id: userId,
                    code: code,
                    password: password
                }
            );
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async recoverPassword(correlationId: string, userId: string): Promise<void> {
        let timing = this.instrument(correlationId, 'passwords.reset_password');

        try {
            await this.callCommand(
                'recover_password',
                correlationId,
                {
                    user_id: userId
                }
            );
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }
}
