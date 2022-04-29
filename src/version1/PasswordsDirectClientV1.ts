import { ConfigParams } from 'pip-services3-commons-nodex';
import { Descriptor } from 'pip-services3-commons-nodex';
import { DirectClient } from 'pip-services3-rpc-nodex';

import { UserPasswordInfoV1 } from './UserPasswordInfoV1';
import { IPasswordsClientV1 } from './IPasswordsClientV1';
//import { IPasswordsController } from 'service-passwords-node';

export class PasswordsDirectClientV1 extends DirectClient<any> implements IPasswordsClientV1 {
            
    public constructor(config?: any) {
        super();
        this._dependencyResolver.put('controller', new Descriptor("service-passwords", "controller", "*", "*", "*"))

        if (config != null)
            this.configure(ConfigParams.fromValue(config));
    }

    public async getPasswordInfo(correlationId: string, userId: string): Promise<UserPasswordInfoV1> {
        let timing = this.instrument(correlationId, 'passwords.get_password_info');

        try {
            return await this._controller.getPasswordInfo(correlationId, userId);
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
            return await this._controller.setTempPassword(correlationId, userId);
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
            await this._controller.setPassword(correlationId, userId, password);
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
            await this._controller.deletePassword(correlationId, userId);
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
            return await this._controller.authenticate(correlationId, userId, password);
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
            return await this._controller.changePassword(correlationId, userId, oldPassword, newPassword);
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
            return await this._controller.validateCode(correlationId, userId, code);
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
            await this._controller.resetPassword(correlationId, userId, code, password);
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async recoverPassword(correlationId: string, userId: string): Promise<void> {
        let timing = this.instrument(correlationId, 'passwords.recover_password');
        
        try {
            await this._controller.recoverPassword(correlationId, userId);
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }
}