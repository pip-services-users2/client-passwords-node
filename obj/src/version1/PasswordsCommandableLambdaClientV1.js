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
exports.PasswordsCommandableLambdaClientV1 = void 0;
const pip_services3_commons_nodex_1 = require("pip-services3-commons-nodex");
const pip_services3_aws_nodex_1 = require("pip-services3-aws-nodex");
class PasswordsCommandableLambdaClientV1 extends pip_services3_aws_nodex_1.CommandableLambdaClient {
    constructor(config) {
        super('passwords');
        if (config != null)
            this.configure(pip_services3_commons_nodex_1.ConfigParams.fromValue(config));
    }
    getPasswordInfo(correlationId, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.callCommand('get_password_info', correlationId, {
                user_id: userId
            });
        });
    }
    setTempPassword(correlationId, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.callCommand('set_temp_password', correlationId, {
                user_id: userId
            });
        });
    }
    setPassword(correlationId, userId, password) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.callCommand('set_password', correlationId, {
                user_id: userId,
                password: password
            });
        });
    }
    deletePassword(correlationId, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.callCommand('delete_password', correlationId, {
                user_id: userId
            });
        });
    }
    authenticate(correlationId, userId, password) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = yield this.callCommand('authenticate', correlationId, {
                user_id: userId,
                password: password
            });
            return result != null ? result.authenticated : false;
        });
    }
    changePassword(correlationId, userId, oldPassword, newPassword) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.callCommand('change_password', correlationId, {
                user_id: userId,
                old_password: oldPassword,
                new_password: newPassword
            });
        });
    }
    validateCode(correlationId, userId, code) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = yield this.callCommand('validate_code', correlationId, {
                user_id: userId,
                code: code
            });
            return result != null ? result.valid : null;
        });
    }
    resetPassword(correlationId, userId, code, password) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.callCommand('reset_password', correlationId, {
                user_id: userId,
                code: code,
                password: password
            });
        });
    }
    recoverPassword(correlationId, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.callCommand('recover_password', correlationId, {
                user_id: userId
            });
        });
    }
}
exports.PasswordsCommandableLambdaClientV1 = PasswordsCommandableLambdaClientV1;
//# sourceMappingURL=PasswordsCommandableLambdaClientV1.js.map