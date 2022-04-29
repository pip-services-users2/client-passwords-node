import { Descriptor } from 'pip-services3-commons-nodex';
import { ConfigParams } from 'pip-services3-commons-nodex';
import { References } from 'pip-services3-commons-nodex';
import { ConsoleLogger } from 'pip-services3-components-nodex';

import { PasswordsMemoryPersistence } from 'service-passwords-node';
import { PasswordsController } from 'service-passwords-node';
import { PasswordsGrpcServiceV1 } from 'service-passwords-node';
import { PasswordsGrpcClientV1 } from '../../src/version1/PasswordsGrpcClientV1';
import { PasswordsClientFixtureV1 } from './PasswordsClientFixtureV1';

var httpConfig = ConfigParams.fromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 3000
);

suite('PasswordsGrpcClientV1', ()=> {
    let service: PasswordsGrpcServiceV1;
    let client: PasswordsGrpcClientV1;
    let fixture: PasswordsClientFixtureV1;

    suiteSetup(async () => {
        let logger = new ConsoleLogger();
        let persistence = new PasswordsMemoryPersistence();
        let controller = new PasswordsController();

        service = new PasswordsGrpcServiceV1();
        service.configure(httpConfig);

        let references: References = References.fromTuples(
            new Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('service-passwords', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('service-passwords', 'controller', 'default', 'default', '1.0'), controller,
            new Descriptor('service-passwords', 'service', 'grpc', 'default', '1.0'), service
        );
        controller.setReferences(references);
        service.setReferences(references);

        client = new PasswordsGrpcClientV1();
        client.setReferences(references);
        client.configure(httpConfig);

        fixture = new PasswordsClientFixtureV1(client);

        await service.open(null);
        await client.open(null);
    });
    
    suiteTeardown(async () => {
        await client.close(null);
        await service.close(null);
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
