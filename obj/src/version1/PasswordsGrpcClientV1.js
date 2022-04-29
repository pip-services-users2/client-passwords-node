"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PasswordsGrpcClientV1 = void 0;
const services = require('../../../src/protos/passwords_v1_grpc_pb');
const messages = require('../../../src/protos/passwords_v1_pb');
const pip_services3_grpc_nodex_1 = require("pip-services3-grpc-nodex");
const PasswordsGrpcConverterV1_1 = require("./PasswordsGrpcConverterV1");
class PasswordsGrpcClientV1 extends pip_services3_grpc_nodex_1.GrpcClient {
    constructor() {
        super(services.PasswordsClient);
    }
    getPasswordInfo(correlationId, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            let request = new messages.PasswordIdRequest();
            request.setUserId(userId);
            let timing = this.instrument(correlationId, 'passwords.get_password_info');
            try {
                let response = yield this.call('get_password_info', correlationId, request);
                if (response.error != null)
                    throw PasswordsGrpcConverterV1_1.PasswordsGrpcConverterV1.toError(response.error);
                return response ? PasswordsGrpcConverterV1_1.PasswordsGrpcConverterV1.toPasswordInfo(response.getInfo()) : null;
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
    setTempPassword(correlationId, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            let request = new messages.PasswordIdRequest();
            request.setUserId(userId);
            let timing = this.instrument(correlationId, 'passwords.set_temp_password');
            try {
                let response = yield this.call('set_temp_password', correlationId, request);
                if (response.error != null)
                    throw PasswordsGrpcConverterV1_1.PasswordsGrpcConverterV1.toError(response.error);
                return response ? response.getPassword() : null;
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
    setPassword(correlationId, userId, password) {
        return __awaiter(this, void 0, void 0, function* () {
            let request = new messages.PasswordIdAndValueRequest();
            request.setUserId(userId);
            request.setPassword(password);
            let timing = this.instrument(correlationId, 'passwords.set_password');
            try {
                let response = yield this.call('set_password', correlationId, request);
                if (response.error != null)
                    throw PasswordsGrpcConverterV1_1.PasswordsGrpcConverterV1.toError(response.error);
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
    deletePassword(correlationId, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            let request = new messages.PasswordIdRequest();
            request.setUserId(userId);
            let timing = this.instrument(correlationId, 'passwords.delete_password');
            try {
                let response = yield this.call('delete_password', correlationId, request);
                if (response.error != null)
                    throw PasswordsGrpcConverterV1_1.PasswordsGrpcConverterV1.toError(response.error);
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
    authenticate(correlationId, userId, password) {
        return __awaiter(this, void 0, void 0, function* () {
            let request = new messages.PasswordIdAndValueRequest();
            request.setUserId(userId);
            request.setPassword(password);
            let timing = this.instrument(correlationId, 'passwords.authenticate');
            try {
                let response = yield this.call('authenticate', correlationId, request);
                if (response.error != null)
                    throw PasswordsGrpcConverterV1_1.PasswordsGrpcConverterV1.toError(response.error);
                return response ? response.getAuthenticated() : null;
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
    changePassword(correlationId, userId, oldPassword, newPassword) {
        return __awaiter(this, void 0, void 0, function* () {
            let request = new messages.PasswordIdAndValuesRequest();
            request.setUserId(userId);
            request.setOldPassword(oldPassword);
            request.setNewPassword(newPassword);
            let timing = this.instrument(correlationId, 'passwords.change_password');
            try {
                let response = yield this.call('change_password', correlationId, request);
                if (response.error != null)
                    throw PasswordsGrpcConverterV1_1.PasswordsGrpcConverterV1.toError(response.error);
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
    validateCode(correlationId, userId, code) {
        return __awaiter(this, void 0, void 0, function* () {
            let request = new messages.PasswordIdAndCodeRequest();
            request.setUserId(userId);
            request.setCode(code);
            let timing = this.instrument(correlationId, 'passwords.validate_code');
            try {
                let response = yield this.call('validate_code', correlationId, request);
                if (response.error != null)
                    throw PasswordsGrpcConverterV1_1.PasswordsGrpcConverterV1.toError(response.error);
                return response ? response.getValid() : null;
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
    resetPassword(correlationId, userId, code, password) {
        return __awaiter(this, void 0, void 0, function* () {
            let request = new messages.PasswordIdAndCodeAndValueRequest();
            request.setUserId(userId);
            request.setCode(code);
            request.setPassword(password);
            let timing = this.instrument(correlationId, 'passwords.reset_password');
            try {
                let response = yield this.call('reset_password', correlationId, request);
                if (response.error != null)
                    throw PasswordsGrpcConverterV1_1.PasswordsGrpcConverterV1.toError(response.error);
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
    recoverPassword(correlationId, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            let request = new messages.PasswordIdRequest();
            request.setUserId(userId);
            let timing = this.instrument(correlationId, 'passwords.recover_password');
            try {
                let response = yield this.call('recover_password', correlationId, request);
                if (response.error != null)
                    throw PasswordsGrpcConverterV1_1.PasswordsGrpcConverterV1.toError(response.error);
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
}
exports.PasswordsGrpcClientV1 = PasswordsGrpcClientV1;
//# sourceMappingURL=PasswordsGrpcClientV1.js.map