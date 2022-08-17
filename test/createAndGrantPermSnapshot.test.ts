import {
  Stack,
  App,
  aws_iam as iam,
  Duration,
} from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import {
  PermissionSet,
  PrincipalTypes,
} from '../src/index';

test('Snapshot', () => {
  const app = new App();
  const stack = new Stack(app, 'TestStack');

  const permissionSet = new PermissionSet(stack, 'PermissionSet', {
    awsManagedPolicies: [
      iam.ManagedPolicy.fromAwsManagedPolicyName('AmazonRDSPerformanceInsightsReadOnly'),
    ],
    description: 'Test Permission Set',
    name: 'TestPermissionSet',
    ssoInstanceArn: 'arn:aws:sso:::instance/ssoins-1234567891234567',
    relayStateType: 'https://us-east-1.console.aws.amazon.com/rds/home',
    sessionDuration: Duration.hours(10),
    customerManagedPolicyReferences: [
      {
        name: 'TestPolicy',
        path: '/',
      },
    ],
    inlinePolicy: new iam.PolicyDocument({
      statements: [
        new iam.PolicyStatement({
          actions: ['rds:*'],
          resources: ['*'],
        }),
      ],
    }),
    permissionsBoundary: {
      managedPolicyArn: iam.ManagedPolicy.fromAwsManagedPolicyName('AmazonRDSPerformanceInsightsReadOnly').managedPolicyArn,
    },
  });

  permissionSet.grant('permissionSetAssignment', {
    principal: {
      principalId: '12350630-0ae9-479a-97c2-0afc2d5b4eac',
      principalType: PrincipalTypes.GROUP,
    },
    targetId: '344567890123456',
  });

  expect(Template.fromStack(stack)).toMatchSnapshot();
});