import config from "config";
import { SubnetType, Vpc } from "@aws-cdk/aws-ec2";
import { Construct, Stack, StackProps } from "@aws-cdk/core";
import { DatabaseInstance, DatabaseInstanceEngine, StorageType, MysqlEngineVersion } from '@aws-cdk/aws-rds';

export interface DbStackProps extends StackProps {
  vpc: Vpc;
}

export class DbStack extends Stack {

  readonly mySQLInstance: DatabaseInstance;

  constructor(scope: Construct, id: string, props: DbStackProps) {
    super(scope, id, props);

    const { namespace } = config.get("cdk");

    const dbName = `dummy-${namespace}`;

    this.mySQLInstance = new DatabaseInstance(this, 'mysql-instance', {
      engine: DatabaseInstanceEngine.mysql({ version: MysqlEngineVersion.VER_8_0_19 }),
      vpc: props.vpc,
      vpcSubnets: {
        subnetType: SubnetType.PRIVATE_ISOLATED,
      },
      storageEncrypted: true,
      multiAz: false,
      allocatedStorage: 25,
      storageType: StorageType.GP2,
      databaseName: dbName,
      port: 3306
    });
  }
}