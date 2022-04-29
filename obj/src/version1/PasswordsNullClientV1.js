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
exports.PasswordsNullClientV1 = void 0;
class PasswordsNullClientV1 {
    getPasswordInfo(correlationId, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            return { id: userId, change_time: null, locked: false, lock_time: null };
        });
    }
    setTempPassword(correlationId, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            return '123';
        });
    }
    authenticate(correlationId, userId, password) {
        return __awaiter(this, void 0, void 0, function* () {
            return true;
        });
    }
    validateCode(correlationId, userId, code) {
        return __awaiter(this, void 0, void 0, function* () {
            return true;
        });
    }
    setPassword(correlationId, userId, password) {
        return __awaiter(this, void 0, void 0, function* () {
            return null;
        });
    }
    deletePassword(correlationId, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            return null;
        });
    }
    changePassword(correlationId, userId, oldPassword, newPassword) {
        return __awaiter(this, void 0, void 0, function* () {
            return null;
        });
    }
    resetPassword(correlationId, userId, code, password) {
        return __awaiter(this, void 0, void 0, function* () {
            return null;
        });
    }
    recoverPassword(correlationId, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            return null;
        });
    }
}
exports.PasswordsNullClientV1 = PasswordsNullClientV1;
//# sourceMappingURL=PasswordsNullClientV1.js.map