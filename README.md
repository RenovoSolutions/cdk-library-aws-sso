# CDK Library for AWS SSO

[![build](https://github.com/RenovoSolutions/cdk-library-aws-sso/actions/workflows/build.yml/badge.svg)](https://github.com/RenovoSolutions/cdk-library-aws-sso/actions/workflows/build.yml)

**Note: This construct library is currently being developed and requires more tests, but fundamentally it should work.**

This CDK library provides L2 constructs for the AWS SSO CfnPermissionSet and CfnAssignment. Assignment is not consumed by other resources so it's attributes and properties are minimal, but a L2 construct makes it easier to interact with and allows providing a more fully featured construct for the Permission Set and assignment requires.

## Features

- L2 Construct for `PermissionSet` including importing from ARN and granting the permission
- L2 Construct for `Assignment`
- Some enums to provide valid inputs for certain properties

## API Doc

See [API](API.md)

## Examples

### PermissionSet

```typescript
import { PermissionSet, Assignment, PrincipalTypes } from '@renovosolutions/cdk-library-aws-sso';
import {
  App,
  Stack,
  StackProps,
  aws_sso as sso,
  aws_iam as iam,
  Duration,
} from 'aws-cdk-lib';

// create a permission set
const permissionSetExample = new PermissionSet(this, 'permissionSet', {
  ssoInstanceArn: 'arn:aws:sso:::instance/ssoins-1234567891234567',
  name: 'ExamplePermissionSet',
  description: 'Example permission set with some policies',
  awsManagedPolicies:  [
    iam.ManagedPolicy.fromAwsManagedPolicyName('job-function/ViewOnlyAccess'),
  ],
  customerManagedPolicyReferences: [
    {
      name: 'someServiceLogRead', // must exist in the target account
      path: '/',
    }
  ],
  relayStateType: 'https://us-east-1.console.aws.amazon.com/cloudwatch/home'
})

// assign it to an account/principal with an Assignment
new Assignment(this, 'ExampleAssignment', {
  permissionSet: permissionSetExample,
  principal: {
    principalId: '25750630-0ae9-479a-97c2-0afc2d5b4eac',
    principalType: PrincipalTypes.GROUP,
  },
  targetId: '124567890123456',
});

// assign it to something else with a grant
permissionSetExample.grant('permissionSetExampleAssignment', {
  principal: {
    principalId: '12350630-0ae9-479a-97c2-0afc2d5b4eac',
    principalType: PrincipalTypes.GROUP,
  },
  targetId: '344567890123456',
});

// import an existing permission set
const existingPermissionSetExample = PermissionSet.fromPermissionSetArn(this, 'existingPermissionSetExample', 'arn:aws:sso:::permissionSet/ssoins-1234567891234567/ps-55a5555a5a55ab55');
```
