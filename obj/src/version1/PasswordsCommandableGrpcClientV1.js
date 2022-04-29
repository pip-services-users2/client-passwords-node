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
exports.PasswordsCommandableGrpcClientV1 = void 0;
const pip_services3_commons_nodex_1 = require("pip-services3-commons-nodex");
const pip_services3_grpc_nodex_1 = require("pip-services3-grpc-nodex");
class PasswordsCommandableGrpcClientV1 extends pip_services3_grpc_nodex_1.CommandableGrpcClient {
    constructor(config) {
        super('v1/passwords');
        if (config != null)
            this.configure(pip_services3_commons_nodex_1.ConfigParams.fromValue(config));
    }
    getPasswordInfo(correlationId, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'passwords.get_password_info');
            try {
                return yield this.callCommand('get_password_info', correlationId, {
                    user_id: userId
                });
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
            let timing = this.instrument(correlationId, 'passwords.set_temp_password');
            try {
                return yield this.callCommand('set_temp_password', correlationId, {
                    user_id: userId
                });
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
            let timing = this.instrument(correlationId, 'passwords.set_password');
            try {
                yield this.callCommand('set_password', correlationId, {
                    user_id: userId,
                    password: password
                });
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
            let timing = this.instrument(correlationId, 'passwords.delete_password');
            try {
                yield this.callCommand('delete_password', correlationId, {
                    user_id: userId
                });
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
            let timing = this.instrument(correlationId, 'passwords.authenticate');
            try {
                let result = yield this.callCommand('authenticate', correlationId, {
                    user_id: userId,
                    password: password
                });
                let authenticated = result != null ? result.authenticated : false;
                return authenticated;
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
            let timing = this.instrument(correlationId, 'passwords.change_password');
            try {
                yield this.callCommand('change_password', correlationId, {
                    user_id: userId,
                    old_password: oldPassword,
                    new_password: newPassword
                });
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
            let timing = this.instrument(correlationId, 'passwords.validate_code');
            try {
                let result = yield this.callCommand('validate_code', correlationId, {
                    user_id: userId,
                    code: code
                });
                return result != null ? result.valid : null;
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
            let timing = this.instrument(correlationId, 'passwords.reset_password');
            try {
                yield this.callCommand('reset_password', correlationId, {
                    user_id: userId,
                    code: code,
                    password: password
                });
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
            let timing = this.instrument(correlationId, 'passwords.reset_password');
            try {
                yield this.callCommand('recover_password', correlationId, {
                    user_id: userId
                });
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
exports.PasswordsCommandableGrpcClientV1 = PasswordsCommandableGrpcClientV1;
//# sourceMappingURL=PasswordsCommandableGrpcClientV1.js.map