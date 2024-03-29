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
exports.PasswordsDirectClientV1 = void 0;
const pip_services3_commons_nodex_1 = require("pip-services3-commons-nodex");
const pip_services3_commons_nodex_2 = require("pip-services3-commons-nodex");
const pip_services3_rpc_nodex_1 = require("pip-services3-rpc-nodex");
//import { IPasswordsController } from 'service-passwords-node';
class PasswordsDirectClientV1 extends pip_services3_rpc_nodex_1.DirectClient {
    constructor(config) {
        super();
        this._dependencyResolver.put('controller', new pip_services3_commons_nodex_2.Descriptor("service-passwords", "controller", "*", "*", "*"));
        if (config != null)
            this.configure(pip_services3_commons_nodex_1.ConfigParams.fromValue(config));
    }
    getPasswordInfo(correlationId, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'passwords.get_password_info');
            try {
                let res = yield this._controller.getPasswordInfo(correlationId, userId);
                timing.endTiming();
                return res;
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
        });
    }
    setTempPassword(correlationId, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'passwords.set_temp_password');
            try {
                let res = yield this._controller.setTempPassword(correlationId, userId);
                timing.endTiming();
                return res;
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
        });
    }
    setPassword(correlationId, userId, password) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'passwords.set_password');
            try {
                yield this._controller.setPassword(correlationId, userId, password);
                timing.endTiming();
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
        });
    }
    deletePassword(correlationId, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'passwords.delete_password');
            try {
                yield this._controller.deletePassword(correlationId, userId);
                timing.endTiming();
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
        });
    }
    authenticate(correlationId, userId, password) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'passwords.authenticate');
            try {
                let res = yield this._controller.authenticate(correlationId, userId, password);
                timing.endTiming();
                return res;
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
        });
    }
    changePassword(correlationId, userId, oldPassword, newPassword) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'passwords.change_password');
            try {
                let res = yield this._controller.changePassword(correlationId, userId, oldPassword, newPassword);
                timing.endTiming();
                return res;
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
        });
    }
    validateCode(correlationId, userId, code) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'passwords.validate_code');
            try {
                let res = yield this._controller.validateCode(correlationId, userId, code);
                timing.endTiming();
                return res;
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
        });
    }
    resetPassword(correlationId, userId, code, password) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'passwords.reset_password');
            try {
                yield this._controller.resetPassword(correlationId, userId, code, password);
                timing.endTiming();
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
        });
    }
    recoverPassword(correlationId, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'passwords.recover_password');
            try {
                yield this._controller.recoverPassword(correlationId, userId);
                timing.endTiming();
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
        });
    }
}
exports.PasswordsDirectClientV1 = PasswordsDirectClientV1;
//# sourceMappingURL=PasswordsDirectClientV1.js.map