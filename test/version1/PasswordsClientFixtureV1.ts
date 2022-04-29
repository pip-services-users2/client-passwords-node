const assert = require('chai').assert;

import { IPasswordsClientV1 } from '../../src/version1/IPasswordsClientV1';

let USER_PWD = {
    id: '1',
    password: 'password123'
};

export class PasswordsClientFixtureV1 {
    private _client: IPasswordsClientV1;
    
    constructor(client: IPasswordsClientV1) {
        this._client = client;
    }

    public async testRecoverPassword() {
        // Create a new user
        await this._client.setPassword(null, USER_PWD.id, USER_PWD.password);

        // Recover password
        await this._client.recoverPassword(null, USER_PWD.id);
    }

    public async testChangePassword() {
        // Sign up
        await this._client.setPassword(null, USER_PWD.id, USER_PWD.password);

        // Change password
        await this._client.changePassword(null, USER_PWD.id, USER_PWD.password, 'xxx123');

        // Sign in with new password
        let authenticated = await this._client.authenticate(null, USER_PWD.id, 'xxx123');

        assert.isTrue(authenticated);

        // Delete password  
        await this._client.deletePassword(null, USER_PWD.id);
    }

    public async testSigninWithWrongPassword() {
        // Sign up
        await this._client.setPassword(null, USER_PWD.id, USER_PWD.password);
        
        // Sign in with wrong password
        let err;

        try {
            await this._client.authenticate(null, USER_PWD.id, 'xxx');
        } catch (e) {
            err = err;
        }

        assert.isNotNull(err);
    }
}
