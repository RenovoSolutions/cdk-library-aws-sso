import {
  Stack,
  App,
} from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import {
  PermissionSet,
  PrincipalTypes,
} from '../src/index';

test('Snapshot', () => {
  const app = new App();
  const stack = new Stack(app, 'TestStack');

  const permissionSet = PermissionSet.fromPermissionSetArn(stack, 'PermissionSet', 'arn:aws:sso:::permissionSet/ssoins-1234567891234567/ps-55a5555a5a55ab55');

  permissionSet.grant('permissionSetAssignment', {
    principal: {
      principalId: '12350630-0ae9-479a-97c2-0afc2d5b4eac',
      principalType: PrincipalTypes.GROUP,
    },
    targetId: '344567890123456',
  });

  expect(Template.fromStack(stack)).toMatchSnapshot();
});