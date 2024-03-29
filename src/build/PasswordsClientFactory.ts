import { Descriptor } from 'pip-services3-commons-nodex';
import { Factory } from 'pip-services3-components-nodex';

import { PasswordsNullClientV1 } from '../version1/PasswordsNullClientV1';
import { PasswordsDirectClientV1 } from '../version1/PasswordsDirectClientV1';
import { PasswordsCommandableHttpClientV1 } from '../version1/PasswordsCommandableHttpClientV1';
import { PasswordsCommandableLambdaClientV1 } from '../version1/PasswordsCommandableLambdaClientV1';
import { PasswordsCommandableGrpcClientV1 } from '../version1/PasswordsCommandableGrpcClientV1';
import { PasswordsGrpcClientV1 } from '../version1/PasswordsGrpcClientV1';

export class PasswordsClientFactory extends Factory {
	public static Descriptor: Descriptor = new Descriptor('service-passwords', 'factory', 'default', 'default', '1.0');
	public static NullClientV1Descriptor = new Descriptor('service-passwords', 'client', 'null', 'default', '1.0');
	public static DirectClientV1Descriptor = new Descriptor('service-passwords', 'client', 'direct', 'default', '1.0');
	public static HttpClientV1Descriptor = new Descriptor('service-passwords', 'client', 'commandable-http', 'default', '1.0');
	public static LambdaClientV1Descriptor = new Descriptor('service-passwords', 'client', 'commandable-lambda', 'default', '1.0');
	public static CommandableGrpcClientV1Descriptor = new Descriptor('service-passwords', 'client', 'commandable-grpc', 'default', '1.0');
	public static GrpcClientV1Descriptor = new Descriptor('service-passwords', 'client', 'grpc', 'default', '1.0');
	
	constructor() {
		super();

		this.registerAsType(PasswordsClientFactory.NullClientV1Descriptor, PasswordsNullClientV1);
		this.registerAsType(PasswordsClientFactory.DirectClientV1Descriptor, PasswordsDirectClientV1);
		this.registerAsType(PasswordsClientFactory.HttpClientV1Descriptor, PasswordsCommandableHttpClientV1);
		this.registerAsType(PasswordsClientFactory.LambdaClientV1Descriptor, PasswordsCommandableLambdaClientV1);
		this.registerAsType(PasswordsClientFactory.CommandableGrpcClientV1Descriptor, PasswordsCommandableGrpcClientV1);
		this.registerAsType(PasswordsClientFactory.GrpcClientV1Descriptor, PasswordsGrpcClientV1);
	}
	
}
