"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PasswordsClientFactory = void 0;
const pip_services3_commons_nodex_1 = require("pip-services3-commons-nodex");
const pip_services3_components_nodex_1 = require("pip-services3-components-nodex");
const PasswordsNullClientV1_1 = require("../version1/PasswordsNullClientV1");
const PasswordsDirectClientV1_1 = require("../version1/PasswordsDirectClientV1");
const PasswordsCommandableHttpClientV1_1 = require("../version1/PasswordsCommandableHttpClientV1");
const PasswordsCommandableLambdaClientV1_1 = require("../version1/PasswordsCommandableLambdaClientV1");
const PasswordsCommandableGrpcClientV1_1 = require("../version1/PasswordsCommandableGrpcClientV1");
const PasswordsGrpcClientV1_1 = require("../version1/PasswordsGrpcClientV1");
class PasswordsClientFactory extends pip_services3_components_nodex_1.Factory {
    constructor() {
        super();
        this.registerAsType(PasswordsClientFactory.NullClientV1Descriptor, PasswordsNullClientV1_1.PasswordsNullClientV1);
        this.registerAsType(PasswordsClientFactory.DirectClientV1Descriptor, PasswordsDirectClientV1_1.PasswordsDirectClientV1);
        this.registerAsType(PasswordsClientFactory.HttpClientV1Descriptor, PasswordsCommandableHttpClientV1_1.PasswordsCommandableHttpClientV1);
        this.registerAsType(PasswordsClientFactory.LambdaClientV1Descriptor, PasswordsCommandableLambdaClientV1_1.PasswordsCommandableLambdaClientV1);
        this.registerAsType(PasswordsClientFactory.CommandableGrpcClientV1Descriptor, PasswordsCommandableGrpcClientV1_1.PasswordsCommandableGrpcClientV1);
        this.registerAsType(PasswordsClientFactory.GrpcClientV1Descriptor, PasswordsGrpcClientV1_1.PasswordsGrpcClientV1);
    }
}
exports.PasswordsClientFactory = PasswordsClientFactory;
PasswordsClientFactory.Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-passwords', 'factory', 'default', 'default', '1.0');
PasswordsClientFactory.NullClientV1Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-passwords', 'client', 'null', 'default', '1.0');
PasswordsClientFactory.DirectClientV1Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-passwords', 'client', 'direct', 'default', '1.0');
PasswordsClientFactory.HttpClientV1Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-passwords', 'client', 'commandable-http', 'default', '1.0');
PasswordsClientFactory.LambdaClientV1Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-passwords', 'client', 'commandable-lambda', 'default', '1.0');
PasswordsClientFactory.CommandableGrpcClientV1Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-passwords', 'client', 'commandable-grpc', 'default', '1.0');
PasswordsClientFactory.GrpcClientV1Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-passwords', 'client', 'grpc', 'default', '1.0');
//# sourceMappingURL=PasswordsClientFactory.js.map