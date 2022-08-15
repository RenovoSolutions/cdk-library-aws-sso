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
public grant(principal: PrincipalProperty, targetId: string, ssoInstanceArn: string): Assignment
```

Grant this permission set to a given principal for a given targetId (AWS account identifier) on a given SSO instance.

###### `principal`<sup>Required</sup> <a name="principal" id="@renovosolutions/cdk-library-aws-sso.PermissionSet.grant.parameter.principal"></a>

- *Type:* <a href="#@renovosolutions/cdk-library-aws-sso.PrincipalProperty">PrincipalProperty</a>

---

###### `targetId`<sup>Required</sup> <a name="targetId" id="@renovosolutions/cdk-library-aws-sso.PermissionSet.grant.parameter.targetId"></a>

- *Type:* string

---

###### `ssoInstanceArn`<sup>Required</sup> <a name="ssoInstanceArn" id="@renovosolutions/cdk-library-aws-sso.PermissionSet.grant.parameter.ssoInstanceArn"></a>

- *Type:* string

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


## Structs <a name="Structs" id="Structs"></a>

### AssignmentAttributes <a name="AssignmentAttributes" id="@renovosolutions/cdk-library-aws-sso.AssignmentAttributes"></a>

Attributes for an assignment of which there are none.

#### Initializer <a name="Initializer" id="@renovosolutions/cdk-library-aws-sso.AssignmentAttributes.Initializer"></a>

```typescript
import { AssignmentAttributes } from '@renovosolutions/cdk-library-aws-sso'

const assignmentAttributes: AssignmentAttributes = { ... }
```


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
| <code><a href="#@renovosolutions/cdk-library-aws-sso.AssignmentProps.property.permissionSet">permissionSet</a></code> | <code><a href="#@renovosolutions/cdk-library-aws-sso.IPermissionSet">IPermissionSet</a></code> | The permission set to assign to the principal. |
| <code><a href="#@renovosolutions/cdk-library-aws-sso.AssignmentProps.property.principal">principal</a></code> | <code><a href="#@renovosolutions/cdk-library-aws-sso.PrincipalProperty">PrincipalProperty</a></code> | The principal to assign the permission set to. |
| <code><a href="#@renovosolutions/cdk-library-aws-sso.AssignmentProps.property.ssoInstanceArn">ssoInstanceArn</a></code> | <code>string</code> | The ARN of the AWS SSO instance. |
| <code><a href="#@renovosolutions/cdk-library-aws-sso.AssignmentProps.property.targetId">targetId</a></code> | <code>string</code> | The target id the permission set will be assigned to. |

---

##### `permissionSet`<sup>Required</sup> <a name="permissionSet" id="@renovosolutions/cdk-library-aws-sso.AssignmentProps.property.permissionSet"></a>

```typescript
public readonly permissionSet: IPermissionSet;
```

- *Type:* <a href="#@renovosolutions/cdk-library-aws-sso.IPermissionSet">IPermissionSet</a>

The permission set to assign to the principal.

---

##### `principal`<sup>Required</sup> <a name="principal" id="@renovosolutions/cdk-library-aws-sso.AssignmentProps.property.principal"></a>

```typescript
public readonly principal: PrincipalProperty;
```

- *Type:* <a href="#@renovosolutions/cdk-library-aws-sso.PrincipalProperty">PrincipalProperty</a>

The principal to assign the permission set to.

---

##### `ssoInstanceArn`<sup>Required</sup> <a name="ssoInstanceArn" id="@renovosolutions/cdk-library-aws-sso.AssignmentProps.property.ssoInstanceArn"></a>

```typescript
public readonly ssoInstanceArn: string;
```

- *Type:* string

The ARN of the AWS SSO instance.

---

##### `targetId`<sup>Required</sup> <a name="targetId" id="@renovosolutions/cdk-library-aws-sso.AssignmentProps.property.targetId"></a>

```typescript
public readonly targetId: string;
```

- *Type:* string

The target id the permission set will be assigned to.

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
| <code><a href="#@renovosolutions/cdk-library-aws-sso.CustomerManagedPolicyReference.property.name">name</a></code> | <code>string</code> | `CfnPermissionSet.CustomerManagedPolicyReferenceProperty.Name`. |
| <code><a href="#@renovosolutions/cdk-library-aws-sso.CustomerManagedPolicyReference.property.path">path</a></code> | <code>string</code> | `CfnPermissionSet.CustomerManagedPolicyReferenceProperty.Path`. |

---

##### `name`<sup>Required</sup> <a name="name" id="@renovosolutions/cdk-library-aws-sso.CustomerManagedPolicyReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

`CfnPermissionSet.CustomerManagedPolicyReferenceProperty.Name`.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sso-permissionset-customermanagedpolicyreference.html#cfn-sso-permissionset-customermanagedpolicyreference-name](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sso-permissionset-customermanagedpolicyreference.html#cfn-sso-permissionset-customermanagedpolicyreference-name)

---

##### `path`<sup>Optional</sup> <a name="path" id="@renovosolutions/cdk-library-aws-sso.CustomerManagedPolicyReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

`CfnPermissionSet.CustomerManagedPolicyReferenceProperty.Path`.

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
| <code><a href="#@renovosolutions/cdk-library-aws-sso.PermissionBoundary.property.customerManagedPolicyReference">customerManagedPolicyReference</a></code> | <code>aws-cdk-lib.aws_sso.CfnPermissionSet.CustomerManagedPolicyReferenceProperty \| aws-cdk-lib.IResolvable</code> | `CfnPermissionSet.PermissionsBoundaryProperty.CustomerManagedPolicyReference`. |
| <code><a href="#@renovosolutions/cdk-library-aws-sso.PermissionBoundary.property.managedPolicyArn">managedPolicyArn</a></code> | <code>string</code> | `CfnPermissionSet.PermissionsBoundaryProperty.ManagedPolicyArn`. |

---

##### `customerManagedPolicyReference`<sup>Optional</sup> <a name="customerManagedPolicyReference" id="@renovosolutions/cdk-library-aws-sso.PermissionBoundary.property.customerManagedPolicyReference"></a>

```typescript
public readonly customerManagedPolicyReference: CustomerManagedPolicyReferenceProperty | IResolvable;
```

- *Type:* aws-cdk-lib.aws_sso.CfnPermissionSet.CustomerManagedPolicyReferenceProperty | aws-cdk-lib.IResolvable

`CfnPermissionSet.PermissionsBoundaryProperty.CustomerManagedPolicyReference`.

> [http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sso-permissionset-permissionsboundary.html#cfn-sso-permissionset-permissionsboundary-customermanagedpolicyreference](http://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sso-permissionset-permissionsboundary.html#cfn-sso-permissionset-permissionsboundary-customermanagedpolicyreference)

---

##### `managedPolicyArn`<sup>Optional</sup> <a name="managedPolicyArn" id="@renovosolutions/cdk-library-aws-sso.PermissionBoundary.property.managedPolicyArn"></a>

```typescript
public readonly managedPolicyArn: string;
```

- *Type:* string

`CfnPermissionSet.PermissionsBoundaryProperty.ManagedPolicyArn`.

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
public grant(principal: PrincipalProperty, targetId: string, ssoInstanceArn: string): Assignment
```

Grant this permission set to a given principal for a given targetId (AWS account identifier) on a given SSO instance.

###### `principal`<sup>Required</sup> <a name="principal" id="@renovosolutions/cdk-library-aws-sso.IPermissionSet.grant.parameter.principal"></a>

- *Type:* <a href="#@renovosolutions/cdk-library-aws-sso.PrincipalProperty">PrincipalProperty</a>

---

###### `targetId`<sup>Required</sup> <a name="targetId" id="@renovosolutions/cdk-library-aws-sso.IPermissionSet.grant.parameter.targetId"></a>

- *Type:* string

---

###### `ssoInstanceArn`<sup>Required</sup> <a name="ssoInstanceArn" id="@renovosolutions/cdk-library-aws-sso.IPermissionSet.grant.parameter.ssoInstanceArn"></a>

- *Type:* string

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@renovosolutions/cdk-library-aws-sso.IPermissionSet.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@renovosolutions/cdk-library-aws-sso.IPermissionSet.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@renovosolutions/cdk-library-aws-sso.IPermissionSet.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#@renovosolutions/cdk-library-aws-sso.IPermissionSet.property.permissionSetArn">permissionSetArn</a></code> | <code>string</code> | The permission set ARN of the permission set. |

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

