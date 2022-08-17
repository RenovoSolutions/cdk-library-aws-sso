import {
  Stack,
  App,
} from 'aws-cdk-lib';
// import { Template } from 'aws-cdk-lib/assertions';
import {
  PermissionSet,
  PrincipalTypes,
} from '../src/index';

test('PermissionSetImportSucceeds', () => {
  const app = new App();
  const stack = new Stack(app, 'TestStack');

  expect(() => {
    PermissionSet.fromPermissionSetArn(stack, 'PermissionSet', 'arn:aws:sso:::permissionSet/ssoins-1234567891234567/ps-55a5555a5a55ab55');
  }).not.toThrow();
});

test('PermissionSetImportErrorsWithInvalidArn', () => {
  const app = new App();
  const stack = new Stack(app, 'TestStack');

  expect(() => {
    PermissionSet.fromPermissionSetArn(stack, 'PermissionSet', 'arn:aws:sso:::permissionSet/ssoins-foobar/ps-55a5555a5a55ab55');
  }).toThrow(/Invalid SSO permission set ARN: arn:aws:sso:::permissionSet\/ssoins-foobar\/ps-55a5555a5a55ab55/);
});

test('PermissionSetImportGrantsWithoutError', () => {
  const app = new App();
  const stack = new Stack(app, 'TestStack');

  const permissionSet = PermissionSet.fromPermissionSetArn(stack, 'PermissionSet', 'arn:aws:sso:::permissionSet/ssoins-1234567891234567/ps-55a5555a5a55ab55');

  expect(() => {
    permissionSet.grant('permissionSetAssignment', {
      principal: {
        principalId: '12350630-0ae9-479a-97c2-0afc2d5b4eac',
        principalType: PrincipalTypes.GROUP,
      },
      targetId: '344567890123456',
    });
  }).not.toThrow();
});

test('PermissionSetImportGrantErrorsWithNonGUIDPrincipalId', () => {
  const app = new App();
  const stack = new Stack(app, 'TestStack');

  const permissionSet = PermissionSet.fromPermissionSetArn(stack, 'PermissionSet', 'arn:aws:sso:::permissionSet/ssoins-1234567891234567/ps-55a5555a5a55ab55');

  expect(() => {
    permissionSet.grant('permissionSetAssignment', {
      principal: {
        principalId: 'bad-principal-id',
        principalType: PrincipalTypes.GROUP,
      },
      targetId: '344567890123456',
    });
  }).toThrow(/PrincipalId must be a valid GUID: bad-principal-id/);
});

test('PermissionSetGrantedToMultipleAccountsDoesNotError', () => {
  const app = new App();
  const stack = new Stack(app, 'TestStack');

  const permissionSet = PermissionSet.fromPermissionSetArn(stack, 'PermissionSet', 'arn:aws:sso:::permissionSet/ssoins-1234567891234567/ps-55a5555a5a55ab55');

  permissionSet.grant('permissionSetAssignment1', {
    principal: {
      principalId: '12350630-0ae9-479a-97c2-0afc2d5b4eac',
      principalType: PrincipalTypes.GROUP,
    },
    targetId: '123567890123456',
  });

  expect(() => {
    permissionSet.grant('permissionSetAssignment2', {
      principal: {
        principalId: '12350630-0ae9-479a-97c2-0afc2d5b4eac',
        principalType: PrincipalTypes.GROUP,
      },
      targetId: '344567890123456',
    });
  }).not.toThrow();
});

// test('PermissionSetImportGrantErrorsWithNonValidTargetId', () => {
//   const app = new App();
//   const stack = new Stack(app, 'TestStack');

//   const permissionSet = PermissionSet.fromPermissionSetArn(stack, 'PermissionSet', 'arn:aws:sso:::permissionSet/ssoins-1234567891234567/ps-55a5555a5a55ab55');

//   expect(() => {
//     permissionSet.grant('permissionSetAssignment', {
//       principal: {
//         principalId: '12350630-0ae9-479a-97c2-0afc2d5b4eac',
//         principalType: PrincipalTypes.GROUP,
//       },
//       targetId: '123',
//     });
//   }).toThrow(/targetId should be a 12 digit AWS account id: 123/);
// });

test('PermissionSetCreationSucceedsWithRequiredPropsOnly', () => {
  const app = new App();
  const stack = new Stack(app, 'TestStack');

  expect(() => {
    new PermissionSet(stack, 'PermissionSet', {
      name: 'TestPermissionSet',
      ssoInstanceArn: 'arn:aws:sso:::instance/ssoins-1234567891234567',
    });
  }).not.toThrow();
});

test('PermissionSetCreationSucceedsWithRequiredPropsOnly', () => {
  const app = new App();
  const stack = new Stack(app, 'TestStack');

  expect(() => {
    new PermissionSet(stack, 'PermissionSet', {
      name: 'TestPermissionSet',
      ssoInstanceArn: 'arn:aws:sso:::instance/ssoins-1234567891234567',
    });
  }).not.toThrow();
});

// test defining both boundaries
// test with no policies
// test non-console relay
// test bad name
