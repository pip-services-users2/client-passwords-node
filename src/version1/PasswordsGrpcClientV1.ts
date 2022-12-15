const services = require('../../../src/protos/passwords_v1_grpc_pb');
const messages = require('../../../src/protos/passwords_v1_pb');

import { GrpcClient } from 'pip-services3-grpc-nodex';

import { IPasswordsClientV1 } from './IPasswordsClientV1';
import { UserPasswordInfoV1 } from './UserPasswordInfoV1';
import { PasswordsGrpcConverterV1 } from './PasswordsGrpcConverterV1';

export class PasswordsGrpcClientV1 extends GrpcClient implements IPasswordsClientV1 {
        
    public constructor() {
        super(services.PasswordsClient);
    }

    public async getPasswordInfo(correlationId: string, userId: string): Promise<UserPasswordInfoV1> {

        let request = new messages.PasswordIdRequest();
        request.setUserId(userId);

        let timing = this.instrument(correlationId, 'passwords.get_password_info');

        try {
            let response = await this.call<any>('get_password_info', correlationId, request);

            if (response.error != null)
                throw PasswordsGrpcConverterV1.toError(response.error);

            timing.endTiming();
            return response ? PasswordsGrpcConverterV1.toPasswordInfo(response.getInfo()) : null;
        } catch (err) {
            timing.endFailure(err);
            throw err;
        }    
    }

    public async setTempPassword(correlationId: string, userId: string): Promise<string> {
        let request = new messages.PasswordIdRequest();
        request.setUserId(userId);
        
        let timing = this.instrument(correlationId, 'passwords.set_temp_password');

        try {
            let response = await this.call<any>('set_temp_password', correlationId, request);

            if (response.error != null)
                throw PasswordsGrpcConverterV1.toError(response.error);

            timing.endTiming();
            return response ? response.getPassword() : null;
        } catch (err) {
            timing.endFailure(err);
            throw err;
        }  
    }

    public async setPassword(correlationId: string, userId: string, password: string): Promise<void> {
        let request = new messages.PasswordIdAndValueRequest();
        request.setUserId(userId);
        request.setPassword(password);
        
        let timing = this.instrument(correlationId, 'passwords.set_password');

        try {
            let response = await this.call<any>('set_password', correlationId, request);

            if (response.error != null)
                throw PasswordsGrpcConverterV1.toError(response.error);
            timing.endTiming();
        } catch (err) {
            timing.endFailure(err);
            throw err;
        }    
    }

    public async deletePassword(correlationId: string, userId: string): Promise<void> {

        let request = new messages.PasswordIdRequest();
        request.setUserId(userId);  
        
        let timing = this.instrument(correlationId, 'passwords.delete_password');

        try {
            let response = await this.call<any>('delete_password', correlationId, request);

            if (response.error != null)
                throw PasswordsGrpcConverterV1.toError(response.error);
            timing.endTiming();
        } catch (err) {
            timing.endFailure(err);
            throw err;
        }    
    }

    public async authenticate(correlationId: string, userId: string, password: string): Promise<boolean> {
        let request = new messages.PasswordIdAndValueRequest();
        request.setUserId(userId);
        request.setPassword(password);
        
        let timing = this.instrument(correlationId, 'passwords.authenticate');

        try {
            let response = await this.call<any>('authenticate', correlationId, request);

            if (response.error != null)
                throw PasswordsGrpcConverterV1.toError(response.error);

            timing.endTiming();
            return response ? response.getAuthenticated() : null;
        } catch (err) {
            timing.endFailure(err);
            throw err;
        }
    }

    public async changePassword(correlationId: string, userId: string, oldPassword: string, newPassword: string): Promise<void> {
        let request = new messages.PasswordIdAndValuesRequest();
        request.setUserId(userId);
        request.setOldPassword(oldPassword);
        request.setNewPassword(newPassword);
        
        let timing = this.instrument(correlationId, 'passwords.change_password');

        try {
            let response = await this.call<any>('change_password', correlationId, request);

            if (response.error != null)
                throw PasswordsGrpcConverterV1.toError(response.error);

            timing.endTiming();
        } catch (err) {
            timing.endFailure(err);
            throw err;
        }
    }

    public async validateCode(correlationId: string, userId: string, code: string): Promise<boolean> {
        let request = new messages.PasswordIdAndCodeRequest();
        request.setUserId(userId);
        request.setCode(code);
        
        let timing = this.instrument(correlationId, 'passwords.validate_code');

        try {
            let response = await this.call<any>('validate_code', correlationId, request);

            if (response.error != null)
                throw PasswordsGrpcConverterV1.toError(response.error);
            
            timing.endTiming();
            return response ? response.getValid() : null;
        } catch (err) {
            timing.endFailure(err);
            throw err;
        }
    }

    public async resetPassword(correlationId: string, userId: string, code: string, password: string): Promise<void> {
        let request = new messages.PasswordIdAndCodeAndValueRequest();
        request.setUserId(userId);
        request.setCode(code);
        request.setPassword(password);  
        
        let timing = this.instrument(correlationId, 'passwords.reset_password');

        try {
            let response = await this.call<any>('reset_password', correlationId, request);

            if (response.error != null)
                throw PasswordsGrpcConverterV1.toError(response.error);
            timing.endTiming();
        } catch (err) {
            timing.endFailure(err);
            throw err;
        }
    }

    public async recoverPassword(correlationId: string, userId: string): Promise<void> {
        let request = new messages.PasswordIdRequest();
        request.setUserId(userId);  
        
        let timing = this.instrument(correlationId, 'passwords.recover_password');

        try {
            let response = await this.call<any>('recover_password', correlationId, request);

            if (response.error != null)
                throw PasswordsGrpcConverterV1.toError(response.error);
            timing.endTiming();
        } catch (err) {
            timing.endFailure(err);
            throw err;
        }
    }
  
}
