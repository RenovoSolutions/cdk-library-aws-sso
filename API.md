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
    principalId: '25750630-0ae9-479a-97c2-0afc2d5b4eac,
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

# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Assignment <a name="Assignment" id="@renovosolutions/cdk-library-aws-sso.Assignment"></a>

- *Implements:* <a href="#@renovosolutions/cdk-library-aws-sso.IAssignment">IAssignment</a>

The assignment construct.

Has no import method because there is no attributes to import.

#### Initializers <a name="Initializers" id="@renovosolutions/cdk-library-aws-sso.Assignment.Initializer"></a>

```typescript
import { Assignment } from '@renovosolutions/cdk-library-aws-sso'

new Assignment(scope: Construct, id: string, props: AssignmentProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@renovosolutions/cdk-library-aws-sso.Assignment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@renovosolutions/cdk-library-aws-sso.Assignment.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@renovosolutions/cdk-library-aws-sso.Assignment.Initializer.parameter.props">props</a></code> | <code><a href="#@renovosolutions/cdk-library-aws-sso.AssignmentProps">AssignmentProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@renovosolutions/cdk-library-aws-sso.Assignment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@renovosolutions/cdk-library-aws-sso.Assignment.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@renovosolutions/cdk-library-aws-sso.Assignment.Initializer.parameter.props"></a>

- *Type:* <a href="#@renovosolutions/cdk-library-aws-sso.AssignmentProps">AssignmentProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@renovosolutions/cdk-library-aws-sso.Assignment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@renovosolutions/cdk-library-aws-sso.Assignment.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |

---

##### `toString` <a name="toString" id="@renovosolutions/cdk-library-aws-sso.Assignment.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="@renovosolutions/cdk-library-aws-sso.Assignment.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="@renovosolutions/cdk-library-aws-sso.Assignment.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@renovosolutions/cdk-library-aws-sso.Assignment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@renovosolutions/cdk-library-aws-sso.Assignment.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#@renovosolutions/cdk-library-aws-sso.Assignment.isResource">isResource</a></code> | Check whether the given construct is a Resource. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@renovosolutions/cdk-library-aws-sso.Assignment.isConstruct"></a>

```typescript
import { Assignment } from '@renovosolutions/cdk-library-aws-sso'

Assignment.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@renovosolutions/cdk-library-aws-sso.Assignment.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="@renovosolutions/cdk-library-aws-sso.Assignment.isOwnedResource"></a>

```typescript
import { Assignment } from '@renovosolutions/cdk-library-aws-sso'

Assignment.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="@renovosolutions/cdk-library-aws-sso.Assignment.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="@renovosolutions/cdk-library-aws-sso.Assignment.isResource"></a>

```typescript
import { Assignment } from '@renovosolutions/cdk-library-aws-sso'

Assignment.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="@renovosolutions/cdk-library-aws-sso.Assignment.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@renovosolutions/cdk-library-aws-sso.Assignment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@renovosolutions/cdk-library-aws-sso.Assignment.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@renovosolutions/cdk-library-aws-sso.Assignment.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |

---

##### `node`<sup>Required</sup> <a name="node" id="@renovosolutions/cdk-library-aws-sso.Assignment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="@renovosolutions/cdk-library-aws-sso.Assignment.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="@renovosolutions/cdk-library-aws-sso.Assignment.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---


### PermissionSet <a name="PermissionSet" id="@renovosolutions/cdk-library-aws-sso.PermissionSet"></a>

- *Implements:* <a href="#@renovosolutions/cdk-library-aws-sso.IPermissionSet">IPermissionSet</a>

#### Initializers <a name="Initializers" id="@renovosolutions/cdk-library-aws-sso.PermissionSet.Initializer"></a>

```typescript
import { PermissionSet } from '@renovosolutions/cdk-library-aws-sso'

new PermissionSet(scope: Construct, id: string, props: PermissionSetProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@renovosolutions/cdk-library-aws-sso.PermissionSet.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@renovosolutions/cdk-library-aws-sso.PermissionSet.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@renovosolutions/cdk-library-aws-sso.PermissionSet.Initializer.parameter.props">props</a></code> | <code><a href="#@renovosolutions/cdk-library-aws-sso.PermissionSetProps">PermissionSetProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@renovosolutions/cdk-library-aws-sso.PermissionSet.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@renovosolutions/cdk-library-aws-sso.PermissionSet.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@renovosolutions/cdk-library-aws-sso.PermissionSet.Initializer.parameter.props"></a>

- *Type:* <a href="#@renovosolutions/cdk-library-aws-sso.PermissionSetProps">PermissionSetProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@renovosolutions/cdk-library-aws-sso.PermissionSet.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@renovosolutions/cdk-library-aws-sso.PermissionSet.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#@renovosolutions/cdk-library-aws-sso.PermissionSet.grant">grant</a></code> | Grant this permission set to a given principal for a given targetId (AWS account identifier) on a given SSO instance. |

---

##### `toString` <a name="toString" id="@renovosolutions/cdk-library-aws-sso.PermissionSet.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="@renovosolutions/cdk-library-aws-sso.PermissionSet.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="@renovosolutions/cdk-library-aws-sso.PermissionSet.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `grant` <a name="grant" id="@renovosolutions/cdk-library-aws-sso.PermissionSet.grant"></a>

```typescript
public grant(id: string, assignmentOptions: AssignmentOptions): Assignment
```

Grant this permission set to a given principal for a given targetId (AWS account identifier) on a given SSO instance.

###### `id`<sup>Required</sup> <a name="id" id="@renovosolutions/cdk-library-aws-sso.PermissionSet.grant.parameter.id"></a>

- *Type:* string

---

###### `assignmentOptions`<sup>Required</sup> <a name="assignmentOptions" id="@renovosolutions/cdk-library-aws-sso.PermissionSet.grant.parameter.assignmentOptions"></a>

- *Type:* <a href="#@renovosolutions/cdk-library-aws-sso.AssignmentOptions">AssignmentOptions</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@renovosolutions/cdk-library-aws-sso.PermissionSet.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@renovosolutions/cdk-library-aws-sso.PermissionSet.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#@renovosolutions/cdk-library-aws-sso.PermissionSet.isResource">isResource</a></code> | Check whether the given construct is a Resource. |
| <code><a href="#@renovosolutions/cdk-library-aws-sso.PermissionSet.fromPermissionSetArn">fromPermissionSetArn</a></code> | Reference an existing permission set by ARN. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@renovosolutions/cdk-library-aws-sso.PermissionSet.isConstruct"></a>

```typescript
import { PermissionSet } from '@renovosolutions/cdk-library-aws-sso'

PermissionSet.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@renovosolutions/cdk-library-aws-sso.PermissionSet.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="@renovosolutions/cdk-library-aws-sso.PermissionSet.isOwnedResource"></a>

```typescript
import { PermissionSet } from '@renovosolutions/cdk-library-aws-sso'

PermissionSet.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="@renovosolutions/cdk-library-aws-sso.PermissionSet.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="@renovosolutions/cdk-library-aws-sso.PermissionSet.isResource"></a>

```typescript
import { PermissionSet } from '@renovosolutions/cdk-library-aws-sso'

PermissionSet.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="@renovosolutions/cdk-library-aws-sso.PermissionSet.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `fromPermissionSetArn` <a name="fromPermissionSetArn" id="@renovosolutions/cdk-library-aws-sso.PermissionSet.fromPermissionSetArn"></a>

```typescript
import { PermissionSet } from '@renovosolutions/cdk-library-aws-sso'

PermissionSet.fromPermissionSetArn(scope: Construct, id: string, permissionSetArn: string)
```

Reference an existing permission set by ARN.

###### `scope`<sup>Required</sup> <a name="scope" id="@renovosolutions/cdk-library-aws-sso.PermissionSet.fromPermissionSetArn.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="@renovosolutions/cdk-library-aws-sso.PermissionSet.fromPermissionSetArn.parameter.id"></a>

- *Type:* string

---

###### `permissionSetArn`<sup>Required</sup> <a name="permissionSetArn" id="@renovosolutions/cdk-library-aws-sso.PermissionSet.fromPermissionSetArn.parameter.permissionSetArn"></a>

- *Type:* string

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@renovosolutions/cdk-library-aws-sso.PermissionSet.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@renovosolutions/cdk-library-aws-sso.PermissionSet.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@renovosolutions/cdk-library-aws-sso.PermissionSet.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#@renovosolutions/cdk-library-aws-sso.PermissionSet.property.cfnPermissionSet">cfnPermissionSet</a></code> | <code>aws-cdk-lib.aws_sso.CfnPermissionSet</code> | The underlying CfnPermissionSet resource. |
| <code><a href="#@renovosolutions/cdk-library-aws-sso.PermissionSet.property.permissionSetArn">permissionSetArn</a></code> | <code>string</code> | The permission set ARN of the permission set. |
| <code><a href="#@renovosolutions/cdk-library-aws-sso.PermissionSet.property.ssoInstanceArn">ssoInstanceArn</a></code> | <code>string</code> | The SSO instance the permission set belongs to. |

---

##### `node`<sup>Required</sup> <a name="node" id="@renovosolutions/cdk-library-aws-sso.PermissionSet.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="@renovosolutions/cdk-library-aws-sso.PermissionSet.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="@renovosolutions/cdk-library-aws-sso.PermissionSet.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `cfnPermissionSet`<sup>Required</sup> <a name="cfnPermissionSet" id="@renovosolutions/cdk-library-aws-sso.PermissionSet.property.cfnPermissionSet"></a>

```typescript
public readonly cfnPermissionSet: CfnPermissionSet;
```

- *Type:* aws-cdk-lib.aws_sso.CfnPermissionSet

The underlying CfnPermissionSet resource.

---

##### `permissionSetArn`<sup>Required</sup> <a name="permissionSetArn" id="@renovosolutions/cdk-library-aws-sso.PermissionSet.property.permissionSetArn"></a>

```typescript
public readonly permissionSetArn: string;
```

- *Type:* string

The permission set ARN of the permission set.

---

##### `ssoInstanceArn`<sup>Required</sup> <a name="ssoInstanceArn" id="@renovosolutions/cdk-library-aws-sso.PermissionSet.property.ssoInstanceArn"></a>

```typescript
public readonly ssoInstanceArn: string;
```

- *Type:* string

The SSO instance the permission set belongs to.

---


## Structs <a name="Structs" id="Structs"></a>

### AssignmentAttributes <a name="AssignmentAttributes" id="@renovosolutions/cdk-library-aws-sso.AssignmentAttributes"></a>

Attributes for an assignment of which there are none.

#### Initializer <a name="Initializer" id="@renovosolutions/cdk-library-aws-sso.AssignmentAttributes.Initializer"></a>

```typescript
import { AssignmentAttributes } from '@renovosolutions/cdk-library-aws-sso'

const assignmentAttributes: AssignmentAttributes = { ... }
```


### AssignmentOptions <a name="AssignmentOptions" id="@renovosolutions/cdk-library-aws-sso.AssignmentOptions"></a>

The options for creating an assignment.

#### Initializer <a name="Initializer" id="@renovosolutions/cdk-library-aws-sso.AssignmentOptions.Initializer"></a>

```typescript
import { AssignmentOptions } from '@renovosolutions/cdk-library-aws-sso'

const assignmentOptions: AssignmentOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@renovosolutions/cdk-library-aws-sso.AssignmentOptions.property.principal">principal</a></code> | <code><a href="#@renovosolutions/cdk-library-aws-sso.PrincipalProperty">PrincipalProperty</a></code> | The principal to assign the permission set to. |
| <code><a href="#@renovosolutions/cdk-library-aws-sso.AssignmentOptions.property.targetId">targetId</a></code> | <code>string</code> | The target id the permission set will be assigned to. |
| <code><a href="#@renovosolutions/cdk-library-aws-sso.AssignmentOptions.property.targetType">targetType</a></code> | <code><a href="#@renovosolutions/cdk-library-aws-sso.TargetTypes">TargetTypes</a></code> | The entity type for which the assignment will be created. |

---

##### `principal`<sup>Required</sup> <a name="principal" id="@renovosolutions/cdk-library-aws-sso.AssignmentOptions.property.principal"></a>

```typescript
public readonly principal: PrincipalProperty;
```

- *Type:* <a href="#@renovosolutions/cdk-library-aws-sso.PrincipalProperty">PrincipalProperty</a>

The principal to assign the permission set to.

---

##### `targetId`<sup>Required</sup> <a name="targetId" id="@renovosolutions/cdk-library-aws-sso.AssignmentOptions.property.targetId"></a>

```typescript
public readonly targetId: string;
```

- *Type:* string

The target id the permission set will be assigned to.

---

##### `targetType`<sup>Optional</sup> <a name="targetType" id="@renovosolutions/cdk-library-aws-sso.AssignmentOptions.property.targetType"></a>

```typescript
public readonly targetType: TargetTypes;
```

- *Type:* <a href="#@renovosolutions/cdk-library-aws-sso.TargetTypes">TargetTypes</a>
- *Default:* TargetTypes.AWS_ACCOUNT

The entity type for which the assignment will be created.

---

### AssignmentProps <a name="AssignmentProps" id="@renovosolutions/cdk-library-aws-sso.AssignmentProps"></a>

The properties of a new assignment.

#### Initializer <a name="Initializer" id="@renovosolutions/cdk-library-aws-sso.AssignmentProps.Initializer"></a>

```typescript
import { AssignmentProps } from '@renovosolutions/cdk-library-aws-sso'

const assignmentProps: AssignmentProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@renovosolutions/cdk-library-aws-sso.AssignmentProps.property.principal">principal</a></code> | <code><a href="#@renovosolutions/cdk-library-aws-sso.PrincipalProperty">PrincipalProperty</a></code> | The principal to assign the permission set to. |
| <code><a href="#@renovosolutions/cdk-library-aws-sso.AssignmentProps.property.targetId">targetId</a></code> | <code>string</code> | The target id the permission set will be assigned to. |
| <code><a href="#@renovosolutions/cdk-library-aws-sso.AssignmentProps.property.targetType">targetType</a></code> | <code><a href="#@renovosolutions/cdk-library-aws-sso.TargetTypes">TargetTypes</a></code> | The entity type for which the assignment will be created. |
| <code><a href="#@renovosolutions/cdk-library-aws-sso.AssignmentProps.property.permissionSet">permissionSet</a></code> | <code><a href="#@renovosolutions/cdk-library-aws-sso.IPermissionSet">IPermissionSet</a></code> | The permission set to assign to the principal. |

---

##### `principal`<sup>Required</sup> <a name="principal" id="@renovosolutions/cdk-library-aws-sso.AssignmentProps.property.principal"></a>

```typescript
public readonly principal: PrincipalProperty;
```

- *Type:* <a href="#@renovosolutions/cdk-library-aws-sso.PrincipalProperty">PrincipalProperty</a>

The principal to assign the permission set to.

---

##### `targetId`<sup>Required</sup> <a name="targetId" id="@renovosolutions/cdk-library-aws-sso.AssignmentProps.property.targetId"></a>

```typescript
public readonly targetId: string;
```

- *Type:* string

The target id the permission set will be assigned to.

---

##### `targetType`<sup>Optional</sup> <a name="targetType" id="@renovosolutions/cdk-library-aws-sso.AssignmentProps.property.targetType"></a>

```typescript
public readonly targetType: TargetTypes;
```

- *Type:* <a href="#@renovosolutions/cdk-library-aws-sso.TargetTypes">TargetTypes</a>
- *Default:* TargetTypes.AWS_ACCOUNT

The entity type for which the assignment will be created.

---

##### `permissionSet`<sup>Required</sup> <a name="permissionSet" id="@renovosolutions/cdk-library-aws-sso.AssignmentProps.property.permissionSet"></a>

```typescript
public readonly permissionSet: IPermissionSet;
```

- *Type:* <a href="#@renovosolutions/cdk-library-aws-sso.IPermissionSet">IPermissionSet</a>

The permission set to assign to the principal.

---

### CustomerManagedPolicyReference <a name="CustomerManagedPolicyReference" id="@renovosolutions/cdk-library-aws-sso.CustomerManagedPolicyReference"></a>

#### Initializer <a name="Initializer" id="@renovosolutions/cdk-library-aws-sso.CustomerManagedPolicyReference.Initializer"></a>

```typescript
import { CustomerManagedPolicyReference } from '@renovosolutions/cdk-library-aws-sso'

const customerManagedPolicyReference: CustomerManagedPolicyReference = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@renovosolutions/cdk-library-aws-sso.CustomerManagedPolicyReference.property.name">name</a></code> | <code>string</code> | The name of the IAM policy that you have configured in each account where you want to deploy your permission set. |
| <code><a href="#@renovosolutions/cdk-library-aws-sso.CustomerManagedPolicyReference.property.path">path</a></code> | <code>string</code> | The path to the IAM policy that you have configured in each account where you want to deploy your permission set. |

---

##### `name`<sup>Required</sup> <a name="name" id="@renovosolutions/cdk-library-aws-sso.CustomerManagedPolicyReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the IAM policy that you have configured in each account where you want to deploy your permission set.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sso-permissionset-customermanagedpolicyreference.html#cfn-sso-permissionset-customermanagedpolicyreference-name](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sso-permissionset-customermanagedpolicyreference.html#cfn-sso-permissionset-customermanagedpolicyreference-name)

---

##### `path`<sup>Optional</sup> <a name="path" id="@renovosolutions/cdk-library-aws-sso.CustomerManagedPolicyReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

The path to the IAM policy that you have configured in each account where you want to deploy your permission set.

The default is `/` . For more information, see [Friendly names and paths](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html#identifiers-friendly-names) in the *IAM User Guide* .

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sso-permissionset-customermanagedpolicyreference.html#cfn-sso-permissionset-customermanagedpolicyreference-path](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sso-permissionset-customermanagedpolicyreference.html#cfn-sso-permissionset-customermanagedpolicyreference-path)

---

### PermissionBoundary <a name="PermissionBoundary" id="@renovosolutions/cdk-library-aws-sso.PermissionBoundary"></a>

#### Initializer <a name="Initializer" id="@renovosolutions/cdk-library-aws-sso.PermissionBoundary.Initializer"></a>

```typescript
import { PermissionBoundary } from '@renovosolutions/cdk-library-aws-sso'

const permissionBoundary: PermissionBoundary = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@renovosolutions/cdk-library-aws-sso.PermissionBoundary.property.customerManagedPolicyReference">customerManagedPolicyReference</a></code> | <code>aws-cdk-lib.IResolvable \| aws-cdk-lib.aws_sso.CfnPermissionSet.CustomerManagedPolicyReferenceProperty</code> | Specifies the name and path of a customer managed policy. |
| <code><a href="#@renovosolutions/cdk-library-aws-sso.PermissionBoundary.property.managedPolicyArn">managedPolicyArn</a></code> | <code>string</code> | The AWS managed policy ARN that you want to attach to a permission set as a permissions boundary. |

---

##### `customerManagedPolicyReference`<sup>Optional</sup> <a name="customerManagedPolicyReference" id="@renovosolutions/cdk-library-aws-sso.PermissionBoundary.property.customerManagedPolicyReference"></a>

```typescript
public readonly customerManagedPolicyReference: IResolvable | CustomerManagedPolicyReferenceProperty;
```

- *Type:* aws-cdk-lib.IResolvable | aws-cdk-lib.aws_sso.CfnPermissionSet.CustomerManagedPolicyReferenceProperty

Specifies the name and path of a customer managed policy.

You must have an IAM policy that matches the name and path in each AWS account where you want to deploy your permission set.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sso-permissionset-permissionsboundary.html#cfn-sso-permissionset-permissionsboundary-customermanagedpolicyreference](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sso-permissionset-permissionsboundary.html#cfn-sso-permissionset-permissionsboundary-customermanagedpolicyreference)

---

##### `managedPolicyArn`<sup>Optional</sup> <a name="managedPolicyArn" id="@renovosolutions/cdk-library-aws-sso.PermissionBoundary.property.managedPolicyArn"></a>

```typescript
public readonly managedPolicyArn: string;
```

- *Type:* string

The AWS managed policy ARN that you want to attach to a permission set as a permissions boundary.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sso-permissionset-permissionsboundary.html#cfn-sso-permissionset-permissionsboundary-managedpolicyarn](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sso-permissionset-permissionsboundary.html#cfn-sso-permissionset-permissionsboundary-managedpolicyarn)

---

### PermissionSetAttributes <a name="PermissionSetAttributes" id="@renovosolutions/cdk-library-aws-sso.PermissionSetAttributes"></a>

Attributes for a permission set.

#### Initializer <a name="Initializer" id="@renovosolutions/cdk-library-aws-sso.PermissionSetAttributes.Initializer"></a>

```typescript
import { PermissionSetAttributes } from '@renovosolutions/cdk-library-aws-sso'

const permissionSetAttributes: PermissionSetAttributes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@renovosolutions/cdk-library-aws-sso.PermissionSetAttributes.property.permissionSetArn">permissionSetArn</a></code> | <code>string</code> | The permission set ARN of the permission set. |
| <code><a href="#@renovosolutions/cdk-library-aws-sso.PermissionSetAttributes.property.ssoInstanceArn">ssoInstanceArn</a></code> | <code>string</code> | The SSO instance ARN of the permission set. |

---

##### `permissionSetArn`<sup>Required</sup> <a name="permissionSetArn" id="@renovosolutions/cdk-library-aws-sso.PermissionSetAttributes.property.permissionSetArn"></a>

```typescript
public readonly permissionSetArn: string;
```

- *Type:* string

The permission set ARN of the permission set.

Such as
`arn:aws:sso:::permissionSet/ins-instanceid/ps-permissionsetid`.

---

##### `ssoInstanceArn`<sup>Required</sup> <a name="ssoInstanceArn" id="@renovosolutions/cdk-library-aws-sso.PermissionSetAttributes.property.ssoInstanceArn"></a>

```typescript
public readonly ssoInstanceArn: string;
```

- *Type:* string

The SSO instance ARN of the permission set.

---

### PermissionSetProps <a name="PermissionSetProps" id="@renovosolutions/cdk-library-aws-sso.PermissionSetProps"></a>

The properties of a new permission set.

#### Initializer <a name="Initializer" id="@renovosolutions/cdk-library-aws-sso.PermissionSetProps.Initializer"></a>

```typescript
import { PermissionSetProps } from '@renovosolutions/cdk-library-aws-sso'

const permissionSetProps: PermissionSetProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@renovosolutions/cdk-library-aws-sso.PermissionSetProps.property.name">name</a></code> | <code>string</code> | The name of the permission set. |
| <code><a href="#@renovosolutions/cdk-library-aws-sso.PermissionSetProps.property.ssoInstanceArn">ssoInstanceArn</a></code> | <code>string</code> | The ARN of the SSO instance under which the operation will be executed. |
| <code><a href="#@renovosolutions/cdk-library-aws-sso.PermissionSetProps.property.awsManagedPolicies">awsManagedPolicies</a></code> | <code>aws-cdk-lib.aws_iam.IManagedPolicy[]</code> | The AWS managed policies to attach to the `PermissionSet`. |
| <code><a href="#@renovosolutions/cdk-library-aws-sso.PermissionSetProps.property.customerManagedPolicyReferences">customerManagedPolicyReferences</a></code> | <code><a href="#@renovosolutions/cdk-library-aws-sso.CustomerManagedPolicyReference">CustomerManagedPolicyReference</a>[]</code> | Specifies the names and paths of a customer managed policy. |
| <code><a href="#@renovosolutions/cdk-library-aws-sso.PermissionSetProps.property.description">description</a></code> | <code>string</code> | The description of the `PermissionSet`. |
| <code><a href="#@renovosolutions/cdk-library-aws-sso.PermissionSetProps.property.inlinePolicy">inlinePolicy</a></code> | <code>aws-cdk-lib.aws_iam.PolicyDocument</code> | The IAM inline policy that is attached to the permission set. |
| <code><a href="#@renovosolutions/cdk-library-aws-sso.PermissionSetProps.property.permissionsBoundary">permissionsBoundary</a></code> | <code><a href="#@renovosolutions/cdk-library-aws-sso.PermissionBoundary">PermissionBoundary</a></code> | Specifies the configuration of the AWS managed or customer managed policy that you want to set as a permissions boundary. |
| <code><a href="#@renovosolutions/cdk-library-aws-sso.PermissionSetProps.property.relayStateType">relayStateType</a></code> | <code>string</code> | Used to redirect users within the application during the federation authentication process. |
| <code><a href="#@renovosolutions/cdk-library-aws-sso.PermissionSetProps.property.sessionDuration">sessionDuration</a></code> | <code>aws-cdk-lib.Duration</code> | The length of time that the application user sessions are valid for. |

---

##### `name`<sup>Required</sup> <a name="name" id="@renovosolutions/cdk-library-aws-sso.PermissionSetProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the permission set.

---

##### `ssoInstanceArn`<sup>Required</sup> <a name="ssoInstanceArn" id="@renovosolutions/cdk-library-aws-sso.PermissionSetProps.property.ssoInstanceArn"></a>

```typescript
public readonly ssoInstanceArn: string;
```

- *Type:* string

The ARN of the SSO instance under which the operation will be executed.

---

##### `awsManagedPolicies`<sup>Optional</sup> <a name="awsManagedPolicies" id="@renovosolutions/cdk-library-aws-sso.PermissionSetProps.property.awsManagedPolicies"></a>

```typescript
public readonly awsManagedPolicies: IManagedPolicy[];
```

- *Type:* aws-cdk-lib.aws_iam.IManagedPolicy[]
- *Default:* No AWS managed policies

The AWS managed policies to attach to the `PermissionSet`.

---

##### `customerManagedPolicyReferences`<sup>Optional</sup> <a name="customerManagedPolicyReferences" id="@renovosolutions/cdk-library-aws-sso.PermissionSetProps.property.customerManagedPolicyReferences"></a>

```typescript
public readonly customerManagedPolicyReferences: CustomerManagedPolicyReference[];
```

- *Type:* <a href="#@renovosolutions/cdk-library-aws-sso.CustomerManagedPolicyReference">CustomerManagedPolicyReference</a>[]
- *Default:* No customer managed policies

Specifies the names and paths of a customer managed policy.

You must have an IAM policy that matches the name and path in each
AWS account where you want to deploy your permission set.

---

##### `description`<sup>Optional</sup> <a name="description" id="@renovosolutions/cdk-library-aws-sso.PermissionSetProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* No description

The description of the `PermissionSet`.

---

##### `inlinePolicy`<sup>Optional</sup> <a name="inlinePolicy" id="@renovosolutions/cdk-library-aws-sso.PermissionSetProps.property.inlinePolicy"></a>

```typescript
public readonly inlinePolicy: PolicyDocument;
```

- *Type:* aws-cdk-lib.aws_iam.PolicyDocument
- *Default:* No inline policy

The IAM inline policy that is attached to the permission set.

---

##### `permissionsBoundary`<sup>Optional</sup> <a name="permissionsBoundary" id="@renovosolutions/cdk-library-aws-sso.PermissionSetProps.property.permissionsBoundary"></a>

```typescript
public readonly permissionsBoundary: PermissionBoundary;
```

- *Type:* <a href="#@renovosolutions/cdk-library-aws-sso.PermissionBoundary">PermissionBoundary</a>
- *Default:* No permissions boundary

Specifies the configuration of the AWS managed or customer managed policy that you want to set as a permissions boundary.

Specify either
customerManagedPolicyReference to use the name and path of a customer
managed policy, or managedPolicy to use the ARN of an AWS managed
policy.

A permissions boundary represents the maximum permissions that any
policy can grant your role. For more information, see Permissions boundaries
for IAM entities in the AWS Identity and Access Management User Guide.

> [https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html)

---

##### `relayStateType`<sup>Optional</sup> <a name="relayStateType" id="@renovosolutions/cdk-library-aws-sso.PermissionSetProps.property.relayStateType"></a>

```typescript
public readonly relayStateType: string;
```

- *Type:* string
- *Default:* No redirection

Used to redirect users within the application during the federation authentication process.

By default, when a user signs into the AWS access portal, chooses an account,
and then chooses the role that AWS creates from the assigned permission set,
IAM Identity Center redirects the user’s browser to the AWS Management Console.

You can change this behavior by setting the relay state to a different console
URL. Setting the relay state enables you to provide the user with quick access
to the console that is most appropriate for their role. For example, you can
set the relay state to the Amazon EC2 console URL (https://console.aws.amazon.com/ec2/)
to redirect the user to that console when they choose the Amazon EC2
administrator role.

> [https://docs.aws.amazon.com/singlesignon/latest/userguide/howtopermrelaystate.html](https://docs.aws.amazon.com/singlesignon/latest/userguide/howtopermrelaystate.html)

---

##### `sessionDuration`<sup>Optional</sup> <a name="sessionDuration" id="@renovosolutions/cdk-library-aws-sso.PermissionSetProps.property.sessionDuration"></a>

```typescript
public readonly sessionDuration: Duration;
```

- *Type:* aws-cdk-lib.Duration

The length of time that the application user sessions are valid for.

---

### PrincipalProperty <a name="PrincipalProperty" id="@renovosolutions/cdk-library-aws-sso.PrincipalProperty"></a>

#### Initializer <a name="Initializer" id="@renovosolutions/cdk-library-aws-sso.PrincipalProperty.Initializer"></a>

```typescript
import { PrincipalProperty } from '@renovosolutions/cdk-library-aws-sso'

const principalProperty: PrincipalProperty = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@renovosolutions/cdk-library-aws-sso.PrincipalProperty.property.principalId">principalId</a></code> | <code>string</code> | The id of the principal. |
| <code><a href="#@renovosolutions/cdk-library-aws-sso.PrincipalProperty.property.principalType">principalType</a></code> | <code><a href="#@renovosolutions/cdk-library-aws-sso.PrincipalTypes">PrincipalTypes</a></code> | The type of the principal. |

---

##### `principalId`<sup>Required</sup> <a name="principalId" id="@renovosolutions/cdk-library-aws-sso.PrincipalProperty.property.principalId"></a>

```typescript
public readonly principalId: string;
```

- *Type:* string

The id of the principal.

---

##### `principalType`<sup>Required</sup> <a name="principalType" id="@renovosolutions/cdk-library-aws-sso.PrincipalProperty.property.principalType"></a>

```typescript
public readonly principalType: PrincipalTypes;
```

- *Type:* <a href="#@renovosolutions/cdk-library-aws-sso.PrincipalTypes">PrincipalTypes</a>

The type of the principal.

---


## Protocols <a name="Protocols" id="Protocols"></a>

### IAssignment <a name="IAssignment" id="@renovosolutions/cdk-library-aws-sso.IAssignment"></a>

- *Extends:* aws-cdk-lib.IResource

- *Implemented By:* <a href="#@renovosolutions/cdk-library-aws-sso.Assignment">Assignment</a>, <a href="#@renovosolutions/cdk-library-aws-sso.IAssignment">IAssignment</a>

The resource interface for an AWS SSO assignment.

This interface has no attributes because the resulting resource has none.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@renovosolutions/cdk-library-aws-sso.IAssignment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@renovosolutions/cdk-library-aws-sso.IAssignment.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@renovosolutions/cdk-library-aws-sso.IAssignment.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |

---

##### `node`<sup>Required</sup> <a name="node" id="@renovosolutions/cdk-library-aws-sso.IAssignment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="@renovosolutions/cdk-library-aws-sso.IAssignment.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="@renovosolutions/cdk-library-aws-sso.IAssignment.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

### IPermissionSet <a name="IPermissionSet" id="@renovosolutions/cdk-library-aws-sso.IPermissionSet"></a>

- *Extends:* aws-cdk-lib.IResource

- *Implemented By:* <a href="#@renovosolutions/cdk-library-aws-sso.PermissionSet">PermissionSet</a>, <a href="#@renovosolutions/cdk-library-aws-sso.IPermissionSet">IPermissionSet</a>

The resource interface for an AWS SSO permission set.

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@renovosolutions/cdk-library-aws-sso.IPermissionSet.grant">grant</a></code> | Grant this permission set to a given principal for a given targetId (AWS account identifier) on a given SSO instance. |

---

##### `grant` <a name="grant" id="@renovosolutions/cdk-library-aws-sso.IPermissionSet.grant"></a>

```typescript
public grant(id: string, assignmentOptions: AssignmentOptions): Assignment
```

Grant this permission set to a given principal for a given targetId (AWS account identifier) on a given SSO instance.

###### `id`<sup>Required</sup> <a name="id" id="@renovosolutions/cdk-library-aws-sso.IPermissionSet.grant.parameter.id"></a>

- *Type:* string

---

###### `assignmentOptions`<sup>Required</sup> <a name="assignmentOptions" id="@renovosolutions/cdk-library-aws-sso.IPermissionSet.grant.parameter.assignmentOptions"></a>

- *Type:* <a href="#@renovosolutions/cdk-library-aws-sso.AssignmentOptions">AssignmentOptions</a>

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@renovosolutions/cdk-library-aws-sso.IPermissionSet.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@renovosolutions/cdk-library-aws-sso.IPermissionSet.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@renovosolutions/cdk-library-aws-sso.IPermissionSet.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#@renovosolutions/cdk-library-aws-sso.IPermissionSet.property.permissionSetArn">permissionSetArn</a></code> | <code>string</code> | The permission set ARN of the permission set. |
| <code><a href="#@renovosolutions/cdk-library-aws-sso.IPermissionSet.property.ssoInstanceArn">ssoInstanceArn</a></code> | <code>string</code> | The SSO instance ARN of the permission set. |

---

##### `node`<sup>Required</sup> <a name="node" id="@renovosolutions/cdk-library-aws-sso.IPermissionSet.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="@renovosolutions/cdk-library-aws-sso.IPermissionSet.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="@renovosolutions/cdk-library-aws-sso.IPermissionSet.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `permissionSetArn`<sup>Required</sup> <a name="permissionSetArn" id="@renovosolutions/cdk-library-aws-sso.IPermissionSet.property.permissionSetArn"></a>

```typescript
public readonly permissionSetArn: string;
```

- *Type:* string

The permission set ARN of the permission set.

Such as
`arn:aws:sso:::permissionSet/ins-instanceid/ps-permissionsetid`.

---

##### `ssoInstanceArn`<sup>Required</sup> <a name="ssoInstanceArn" id="@renovosolutions/cdk-library-aws-sso.IPermissionSet.property.ssoInstanceArn"></a>

```typescript
public readonly ssoInstanceArn: string;
```

- *Type:* string

The SSO instance ARN of the permission set.

---

## Enums <a name="Enums" id="Enums"></a>

### PrincipalTypes <a name="PrincipalTypes" id="@renovosolutions/cdk-library-aws-sso.PrincipalTypes"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@renovosolutions/cdk-library-aws-sso.PrincipalTypes.USER">USER</a></code> | *No description.* |
| <code><a href="#@renovosolutions/cdk-library-aws-sso.PrincipalTypes.GROUP">GROUP</a></code> | *No description.* |

---

##### `USER` <a name="USER" id="@renovosolutions/cdk-library-aws-sso.PrincipalTypes.USER"></a>

---


##### `GROUP` <a name="GROUP" id="@renovosolutions/cdk-library-aws-sso.PrincipalTypes.GROUP"></a>

---


### TargetTypes <a name="TargetTypes" id="@renovosolutions/cdk-library-aws-sso.TargetTypes"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@renovosolutions/cdk-library-aws-sso.TargetTypes.AWS_ACCOUNT">AWS_ACCOUNT</a></code> | *No description.* |

---

##### `AWS_ACCOUNT` <a name="AWS_ACCOUNT" id="@renovosolutions/cdk-library-aws-sso.TargetTypes.AWS_ACCOUNT"></a>

---

