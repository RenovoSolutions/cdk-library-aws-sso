import {
  Stack,
  App,
  aws_identitystore as identityStore,
  Fn,
} from 'aws-cdk-lib';
// import { Template } from 'aws-cdk-lib/assertions';
import {
  Assignment,
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

test('SettingPrincipalIdInAssignmentFromUnresolvedTokenDoesNotErrorForUnresolvedToken', () => {
  const app = new App();
  const stack = new Stack(app, 'TestStack');

  expect(() => {
    const group = new identityStore.CfnGroup(stack, 'Group', {
      displayName: 'TestGroup',
      identityStoreId: '24e986f7-6bbb-44d2-bee3-c3bce03fc77c',
    });

    const permissionSet = new PermissionSet(stack, 'PermissionSet', {
      name: 'TestPermissionSet',
      ssoInstanceArn: 'arn:aws:sso:::instance/ssoins-1234567891234567',
    });

    new Assignment(stack, 'Assignment', {
      permissionSet,
      principal: {
        principalId: group.attrGroupId,
        principalType: PrincipalTypes.GROUP,
      },
      targetId: '123456789012',
    });
  }).not.toThrow();
});

test('SettingTargetAccountIdOnAssignmentFromUnresolvedTokenDoesNotErrorForUnresolvedToken', () => {
  const app = new App();
  const stack = new Stack(app, 'TestStack');

  expect(() => {
    const permissionSet = new PermissionSet(stack, 'PermissionSet', {
      name: 'TestPermissionSet',
      ssoInstanceArn: 'arn:aws:sso:::instance/ssoins-1234567891234567',
    });

    new Assignment(stack, 'Assignment', {
      permissionSet,
      principal: {
        principalId: '12350630-0ae9-479a-97c2-0afc2d5b4eac',
        principalType: PrincipalTypes.GROUP,
      },
      targetId: Fn.importValue('path.to.targetAccountId.in.buildConfig'),
    });
  }).not.toThrow();
});

test('SettingSsoInstanceArnOnPermissionSetFromImportedValueDoesNotErrorForUnresolvedToken', () => {
  const app = new App();
  const stack = new Stack(app, 'TestStack');

  const ssoInstanceArn = Fn.importValue('path.to.ssoInstanceArn.in.buildConfig');

  expect(() => {
    new PermissionSet(stack, 'PermissionSet', {
      name: 'TestPermissionSet',
      ssoInstanceArn,
    });
  }).not.toThrow();
});

test('SettingRelayStateTypeOnPermissionSetFromImportedValueDoesNotErrorForUnresolvedToken', () => {
  const app = new App();
  const stack = new Stack(app, 'TestStack');

  expect(() => {
    new PermissionSet(stack, 'PermissionSet', {
      name: 'TestPermissionSet',
      ssoInstanceArn: 'arn:aws:sso:::instance/ssoins-1234567891234567',
      relayStateType: Fn.importValue('path.to.relayStateType.in.buildConfig'),
    });
  }).not.toThrow();
});

test('SettingNameOnPermissionSetFromImportedValueDoesNotErrorForUnresolvedToken', () => {
  const app = new App();
  const stack = new Stack(app, 'TestStack');

  expect(() => {
    new PermissionSet(stack, 'PermissionSet', {
      name: Fn.importValue('path.to.permissionSetName.in.buildConfig'),
      ssoInstanceArn: 'arn:aws:sso:::instance/ssoins-1234567891234567',
    });
  }).not.toThrow();
});

// test defining both boundaries
// test with no policies
// test non-console relay
// test bad name
