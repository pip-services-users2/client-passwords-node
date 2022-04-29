import { Descriptor } from 'pip-services3-commons-nodex';
import { References } from 'pip-services3-commons-nodex';
import { ConsoleLogger } from 'pip-services3-components-nodex';

import { PasswordsMemoryPersistence } from 'service-passwords-node';
import { PasswordsController } from 'service-passwords-node';
import { PasswordsDirectClientV1 } from '../../src/version1/PasswordsDirectClientV1';
import { PasswordsClientFixtureV1 } from './PasswordsClientFixtureV1';

suite('PasswordsDirectClientV1', ()=> {
    let client: PasswordsDirectClientV1;
    let fixture: PasswordsClientFixtureV1;

    suiteSetup(async () => {
        let logger = new ConsoleLogger();
        let persistence = new PasswordsMemoryPersistence();
        let controller = new PasswordsController();

        let references: References = References.fromTuples(
            new Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('service-passwords', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('service-passwords', 'controller', 'default', 'default', '1.0'), controller,
        );
        controller.setReferences(references);

        client = new PasswordsDirectClientV1();
        client.setReferences(references);

        fixture = new PasswordsClientFixtureV1(client);

        await client.open(null);
    });
    
    suiteTeardown(async () => {
        await client.close(null);
    });

    test('Test Recover Password', async () => {
        await fixture.testRecoverPassword();
    });

    test('Test Change Password', async () => {
        await fixture.testChangePassword();
    });

    test('Test Signin with Wrong Password', async () => {
        await fixture.testSigninWithWrongPassword();
    });

});
