// GENERATED TYPES FOR NEXUS-PRISMA. /!\ DO NOT EDIT MANUALLY

import { core } from 'nexus'
import { GraphQLResolveInfo } from 'graphql'
import * as prisma from '../prisma-client'

declare global {
  interface NexusPrismaGen extends NexusPrismaTypes {}
}

export interface NexusPrismaTypes {
  objectTypes: {
    fields: {
      Query: QueryObject
      Account: AccountObject
      AccessKey: AccessKeyObject
      Group: GroupObject
      Permission: PermissionObject
      AccountConnection: AccountConnectionObject
      PageInfo: PageInfoObject
      AccountEdge: AccountEdgeObject
      AggregateAccount: AggregateAccountObject
      JwtRsa: JwtRsaObject
      JwtRsaConnection: JwtRsaConnectionObject
      JwtRsaEdge: JwtRsaEdgeObject
      AggregateJwtRsa: AggregateJwtRsaObject
      AccessKeyConnection: AccessKeyConnectionObject
      AccessKeyEdge: AccessKeyEdgeObject
      AggregateAccessKey: AggregateAccessKeyObject
      ServiceRole: ServiceRoleObject
      ServiceRoleConnection: ServiceRoleConnectionObject
      ServiceRoleEdge: ServiceRoleEdgeObject
      AggregateServiceRole: AggregateServiceRoleObject
      PermissionConnection: PermissionConnectionObject
      PermissionEdge: PermissionEdgeObject
      AggregatePermission: AggregatePermissionObject
      GroupConnection: GroupConnectionObject
      GroupEdge: GroupEdgeObject
      AggregateGroup: AggregateGroupObject
      Mutation: MutationObject
      BatchPayload: BatchPayloadObject
      Subscription: SubscriptionObject
      AccountSubscriptionPayload: AccountSubscriptionPayloadObject
      AccountPreviousValues: AccountPreviousValuesObject
      JwtRsaSubscriptionPayload: JwtRsaSubscriptionPayloadObject
      JwtRsaPreviousValues: JwtRsaPreviousValuesObject
      AccessKeySubscriptionPayload: AccessKeySubscriptionPayloadObject
      AccessKeyPreviousValues: AccessKeyPreviousValuesObject
      ServiceRoleSubscriptionPayload: ServiceRoleSubscriptionPayloadObject
      ServiceRolePreviousValues: ServiceRolePreviousValuesObject
      PermissionSubscriptionPayload: PermissionSubscriptionPayloadObject
      PermissionPreviousValues: PermissionPreviousValuesObject
      GroupSubscriptionPayload: GroupSubscriptionPayloadObject
      GroupPreviousValues: GroupPreviousValuesObject
    }
    fieldsDetails: {
      Query: QueryFieldDetails
      Account: AccountFieldDetails
      AccessKey: AccessKeyFieldDetails
      Group: GroupFieldDetails
      Permission: PermissionFieldDetails
      AccountConnection: AccountConnectionFieldDetails
      PageInfo: PageInfoFieldDetails
      AccountEdge: AccountEdgeFieldDetails
      AggregateAccount: AggregateAccountFieldDetails
      JwtRsa: JwtRsaFieldDetails
      JwtRsaConnection: JwtRsaConnectionFieldDetails
      JwtRsaEdge: JwtRsaEdgeFieldDetails
      AggregateJwtRsa: AggregateJwtRsaFieldDetails
      AccessKeyConnection: AccessKeyConnectionFieldDetails
      AccessKeyEdge: AccessKeyEdgeFieldDetails
      AggregateAccessKey: AggregateAccessKeyFieldDetails
      ServiceRole: ServiceRoleFieldDetails
      ServiceRoleConnection: ServiceRoleConnectionFieldDetails
      ServiceRoleEdge: ServiceRoleEdgeFieldDetails
      AggregateServiceRole: AggregateServiceRoleFieldDetails
      PermissionConnection: PermissionConnectionFieldDetails
      PermissionEdge: PermissionEdgeFieldDetails
      AggregatePermission: AggregatePermissionFieldDetails
      GroupConnection: GroupConnectionFieldDetails
      GroupEdge: GroupEdgeFieldDetails
      AggregateGroup: AggregateGroupFieldDetails
      Mutation: MutationFieldDetails
      BatchPayload: BatchPayloadFieldDetails
      Subscription: SubscriptionFieldDetails
      AccountSubscriptionPayload: AccountSubscriptionPayloadFieldDetails
      AccountPreviousValues: AccountPreviousValuesFieldDetails
      JwtRsaSubscriptionPayload: JwtRsaSubscriptionPayloadFieldDetails
      JwtRsaPreviousValues: JwtRsaPreviousValuesFieldDetails
      AccessKeySubscriptionPayload: AccessKeySubscriptionPayloadFieldDetails
      AccessKeyPreviousValues: AccessKeyPreviousValuesFieldDetails
      ServiceRoleSubscriptionPayload: ServiceRoleSubscriptionPayloadFieldDetails
      ServiceRolePreviousValues: ServiceRolePreviousValuesFieldDetails
      PermissionSubscriptionPayload: PermissionSubscriptionPayloadFieldDetails
      PermissionPreviousValues: PermissionPreviousValuesFieldDetails
      GroupSubscriptionPayload: GroupSubscriptionPayloadFieldDetails
      GroupPreviousValues: GroupPreviousValuesFieldDetails
    }
  }
  inputTypes: {
    fields: {
      AccountWhereUniqueInput: AccountWhereUniqueInputInputObject
      AccountWhereInput: AccountWhereInputInputObject
      AccessKeyWhereInput: AccessKeyWhereInputInputObject
      GroupWhereInput: GroupWhereInputInputObject
      PermissionWhereInput: PermissionWhereInputInputObject
      JwtRsaWhereUniqueInput: JwtRsaWhereUniqueInputInputObject
      JwtRsaWhereInput: JwtRsaWhereInputInputObject
      AccessKeyWhereUniqueInput: AccessKeyWhereUniqueInputInputObject
      ServiceRoleWhereUniqueInput: ServiceRoleWhereUniqueInputInputObject
      ServiceRoleWhereInput: ServiceRoleWhereInputInputObject
      PermissionWhereUniqueInput: PermissionWhereUniqueInputInputObject
      GroupWhereUniqueInput: GroupWhereUniqueInputInputObject
      AccountCreateInput: AccountCreateInputInputObject
      AccountCreateOneWithoutSubAccountInput: AccountCreateOneWithoutSubAccountInputInputObject
      AccountCreateWithoutSubAccountInput: AccountCreateWithoutSubAccountInputInputObject
      AccessKeyCreateManyWithoutAccountInput: AccessKeyCreateManyWithoutAccountInputInputObject
      AccessKeyCreateWithoutAccountInput: AccessKeyCreateWithoutAccountInputInputObject
      GroupCreateManyWithoutAccountsInput: GroupCreateManyWithoutAccountsInputInputObject
      GroupCreateWithoutAccountsInput: GroupCreateWithoutAccountsInputInputObject
      PermissionCreateManyInput: PermissionCreateManyInputInputObject
      PermissionCreateInput: PermissionCreateInputInputObject
      AccountCreateManyWithoutParentAccountInput: AccountCreateManyWithoutParentAccountInputInputObject
      AccountCreateWithoutParentAccountInput: AccountCreateWithoutParentAccountInputInputObject
      AccountUpdateInput: AccountUpdateInputInputObject
      AccountUpdateOneWithoutSubAccountInput: AccountUpdateOneWithoutSubAccountInputInputObject
      AccountUpdateWithoutSubAccountDataInput: AccountUpdateWithoutSubAccountDataInputInputObject
      AccessKeyUpdateManyWithoutAccountInput: AccessKeyUpdateManyWithoutAccountInputInputObject
      AccessKeyUpdateWithWhereUniqueWithoutAccountInput: AccessKeyUpdateWithWhereUniqueWithoutAccountInputInputObject
      AccessKeyUpdateWithoutAccountDataInput: AccessKeyUpdateWithoutAccountDataInputInputObject
      AccessKeyUpsertWithWhereUniqueWithoutAccountInput: AccessKeyUpsertWithWhereUniqueWithoutAccountInputInputObject
      AccessKeyScalarWhereInput: AccessKeyScalarWhereInputInputObject
      AccessKeyUpdateManyWithWhereNestedInput: AccessKeyUpdateManyWithWhereNestedInputInputObject
      AccessKeyUpdateManyDataInput: AccessKeyUpdateManyDataInputInputObject
      GroupUpdateManyWithoutAccountsInput: GroupUpdateManyWithoutAccountsInputInputObject
      GroupUpdateWithWhereUniqueWithoutAccountsInput: GroupUpdateWithWhereUniqueWithoutAccountsInputInputObject
      GroupUpdateWithoutAccountsDataInput: GroupUpdateWithoutAccountsDataInputInputObject
      PermissionUpdateManyInput: PermissionUpdateManyInputInputObject
      PermissionUpdateWithWhereUniqueNestedInput: PermissionUpdateWithWhereUniqueNestedInputInputObject
      PermissionUpdateDataInput: PermissionUpdateDataInputInputObject
      PermissionUpsertWithWhereUniqueNestedInput: PermissionUpsertWithWhereUniqueNestedInputInputObject
      PermissionScalarWhereInput: PermissionScalarWhereInputInputObject
      PermissionUpdateManyWithWhereNestedInput: PermissionUpdateManyWithWhereNestedInputInputObject
      PermissionUpdateManyDataInput: PermissionUpdateManyDataInputInputObject
      GroupUpsertWithWhereUniqueWithoutAccountsInput: GroupUpsertWithWhereUniqueWithoutAccountsInputInputObject
      GroupScalarWhereInput: GroupScalarWhereInputInputObject
      GroupUpdateManyWithWhereNestedInput: GroupUpdateManyWithWhereNestedInputInputObject
      GroupUpdateManyDataInput: GroupUpdateManyDataInputInputObject
      AccountUpsertWithoutSubAccountInput: AccountUpsertWithoutSubAccountInputInputObject
      AccountUpdateManyWithoutParentAccountInput: AccountUpdateManyWithoutParentAccountInputInputObject
      AccountUpdateWithWhereUniqueWithoutParentAccountInput: AccountUpdateWithWhereUniqueWithoutParentAccountInputInputObject
      AccountUpdateWithoutParentAccountDataInput: AccountUpdateWithoutParentAccountDataInputInputObject
      AccountUpsertWithWhereUniqueWithoutParentAccountInput: AccountUpsertWithWhereUniqueWithoutParentAccountInputInputObject
      AccountScalarWhereInput: AccountScalarWhereInputInputObject
      AccountUpdateManyWithWhereNestedInput: AccountUpdateManyWithWhereNestedInputInputObject
      AccountUpdateManyDataInput: AccountUpdateManyDataInputInputObject
      AccountUpdateManyMutationInput: AccountUpdateManyMutationInputInputObject
      JwtRsaCreateInput: JwtRsaCreateInputInputObject
      JwtRsaUpdateInput: JwtRsaUpdateInputInputObject
      JwtRsaUpdateManyMutationInput: JwtRsaUpdateManyMutationInputInputObject
      AccessKeyCreateInput: AccessKeyCreateInputInputObject
      AccountCreateOneWithoutAccessKeysInput: AccountCreateOneWithoutAccessKeysInputInputObject
      AccountCreateWithoutAccessKeysInput: AccountCreateWithoutAccessKeysInputInputObject
      AccessKeyUpdateInput: AccessKeyUpdateInputInputObject
      AccountUpdateOneRequiredWithoutAccessKeysInput: AccountUpdateOneRequiredWithoutAccessKeysInputInputObject
      AccountUpdateWithoutAccessKeysDataInput: AccountUpdateWithoutAccessKeysDataInputInputObject
      AccountUpsertWithoutAccessKeysInput: AccountUpsertWithoutAccessKeysInputInputObject
      AccessKeyUpdateManyMutationInput: AccessKeyUpdateManyMutationInputInputObject
      ServiceRoleCreateInput: ServiceRoleCreateInputInputObject
      ServiceRoleUpdateInput: ServiceRoleUpdateInputInputObject
      ServiceRoleUpdateManyMutationInput: ServiceRoleUpdateManyMutationInputInputObject
      PermissionUpdateInput: PermissionUpdateInputInputObject
      PermissionUpdateManyMutationInput: PermissionUpdateManyMutationInputInputObject
      GroupCreateInput: GroupCreateInputInputObject
      AccountCreateManyWithoutGroupsInput: AccountCreateManyWithoutGroupsInputInputObject
      AccountCreateWithoutGroupsInput: AccountCreateWithoutGroupsInputInputObject
      GroupUpdateInput: GroupUpdateInputInputObject
      AccountUpdateManyWithoutGroupsInput: AccountUpdateManyWithoutGroupsInputInputObject
      AccountUpdateWithWhereUniqueWithoutGroupsInput: AccountUpdateWithWhereUniqueWithoutGroupsInputInputObject
      AccountUpdateWithoutGroupsDataInput: AccountUpdateWithoutGroupsDataInputInputObject
      AccountUpsertWithWhereUniqueWithoutGroupsInput: AccountUpsertWithWhereUniqueWithoutGroupsInputInputObject
      GroupUpdateManyMutationInput: GroupUpdateManyMutationInputInputObject
      AccountSubscriptionWhereInput: AccountSubscriptionWhereInputInputObject
      JwtRsaSubscriptionWhereInput: JwtRsaSubscriptionWhereInputInputObject
      AccessKeySubscriptionWhereInput: AccessKeySubscriptionWhereInputInputObject
      ServiceRoleSubscriptionWhereInput: ServiceRoleSubscriptionWhereInputInputObject
      PermissionSubscriptionWhereInput: PermissionSubscriptionWhereInputInputObject
      GroupSubscriptionWhereInput: GroupSubscriptionWhereInputInputObject
    }
  }
  enumTypes: {
    GroupType: GroupTypeValues,
    PermissionType: PermissionTypeValues,
    AccountOrderByInput: AccountOrderByInputValues,
    AccessKeyOrderByInput: AccessKeyOrderByInputValues,
    GroupOrderByInput: GroupOrderByInputValues,
    PermissionOrderByInput: PermissionOrderByInputValues,
    JwtRsaOrderByInput: JwtRsaOrderByInputValues,
    ServiceRoleOrderByInput: ServiceRoleOrderByInputValues,
    MutationType: MutationTypeValues,
  }
}

// Types for Query

type QueryObject =
  | QueryFields
  | { name: 'account', args?: QueryAccountArgs[] | false, alias?: string  } 
  | { name: 'accounts', args?: QueryAccountsArgs[] | false, alias?: string  } 
  | { name: 'accountsConnection', args?: QueryAccountsConnectionArgs[] | false, alias?: string  } 
  | { name: 'jwtRsa', args?: QueryJwtRsaArgs[] | false, alias?: string  } 
  | { name: 'jwtRsas', args?: QueryJwtRsasArgs[] | false, alias?: string  } 
  | { name: 'jwtRsasConnection', args?: QueryJwtRsasConnectionArgs[] | false, alias?: string  } 
  | { name: 'accessKey', args?: QueryAccessKeyArgs[] | false, alias?: string  } 
  | { name: 'accessKeys', args?: QueryAccessKeysArgs[] | false, alias?: string  } 
  | { name: 'accessKeysConnection', args?: QueryAccessKeysConnectionArgs[] | false, alias?: string  } 
  | { name: 'serviceRole', args?: QueryServiceRoleArgs[] | false, alias?: string  } 
  | { name: 'serviceRoles', args?: QueryServiceRolesArgs[] | false, alias?: string  } 
  | { name: 'serviceRolesConnection', args?: QueryServiceRolesConnectionArgs[] | false, alias?: string  } 
  | { name: 'permission', args?: QueryPermissionArgs[] | false, alias?: string  } 
  | { name: 'permissions', args?: QueryPermissionsArgs[] | false, alias?: string  } 
  | { name: 'permissionsConnection', args?: QueryPermissionsConnectionArgs[] | false, alias?: string  } 
  | { name: 'group', args?: QueryGroupArgs[] | false, alias?: string  } 
  | { name: 'groups', args?: QueryGroupsArgs[] | false, alias?: string  } 
  | { name: 'groupsConnection', args?: QueryGroupsConnectionArgs[] | false, alias?: string  } 
  | { name: 'node', args?: QueryNodeArgs[] | false, alias?: string  } 

type QueryFields =
  | 'account'
  | 'accounts'
  | 'accountsConnection'
  | 'jwtRsa'
  | 'jwtRsas'
  | 'jwtRsasConnection'
  | 'accessKey'
  | 'accessKeys'
  | 'accessKeysConnection'
  | 'serviceRole'
  | 'serviceRoles'
  | 'serviceRolesConnection'
  | 'permission'
  | 'permissions'
  | 'permissionsConnection'
  | 'group'
  | 'groups'
  | 'groupsConnection'
  | 'node'


type QueryAccountArgs =
  | 'where'
type QueryAccountsArgs =
  | 'where'
  | 'orderBy'
  | 'skip'
  | 'after'
  | 'before'
  | 'first'
  | 'last'
type QueryAccountsConnectionArgs =
  | 'where'
  | 'orderBy'
  | 'skip'
  | 'after'
  | 'before'
  | 'first'
  | 'last'
type QueryJwtRsaArgs =
  | 'where'
type QueryJwtRsasArgs =
  | 'where'
  | 'orderBy'
  | 'skip'
  | 'after'
  | 'before'
  | 'first'
  | 'last'
type QueryJwtRsasConnectionArgs =
  | 'where'
  | 'orderBy'
  | 'skip'
  | 'after'
  | 'before'
  | 'first'
  | 'last'
type QueryAccessKeyArgs =
  | 'where'
type QueryAccessKeysArgs =
  | 'where'
  | 'orderBy'
  | 'skip'
  | 'after'
  | 'before'
  | 'first'
  | 'last'
type QueryAccessKeysConnectionArgs =
  | 'where'
  | 'orderBy'
  | 'skip'
  | 'after'
  | 'before'
  | 'first'
  | 'last'
type QueryServiceRoleArgs =
  | 'where'
type QueryServiceRolesArgs =
  | 'where'
  | 'orderBy'
  | 'skip'
  | 'after'
  | 'before'
  | 'first'
  | 'last'
type QueryServiceRolesConnectionArgs =
  | 'where'
  | 'orderBy'
  | 'skip'
  | 'after'
  | 'before'
  | 'first'
  | 'last'
type QueryPermissionArgs =
  | 'where'
type QueryPermissionsArgs =
  | 'where'
  | 'orderBy'
  | 'skip'
  | 'after'
  | 'before'
  | 'first'
  | 'last'
type QueryPermissionsConnectionArgs =
  | 'where'
  | 'orderBy'
  | 'skip'
  | 'after'
  | 'before'
  | 'first'
  | 'last'
type QueryGroupArgs =
  | 'where'
type QueryGroupsArgs =
  | 'where'
  | 'orderBy'
  | 'skip'
  | 'after'
  | 'before'
  | 'first'
  | 'last'
type QueryGroupsConnectionArgs =
  | 'where'
  | 'orderBy'
  | 'skip'
  | 'after'
  | 'before'
  | 'first'
  | 'last'
type QueryNodeArgs =
  | 'id'
  

export interface QueryFieldDetails {
  account: {
    type: 'Account'
    args: Record<QueryAccountArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"Query">,
      args: { where: AccountWhereUniqueInput }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Account | null> | prisma.Account | null
  }
  accounts: {
    type: 'Account'
    args: Record<QueryAccountsArgs, core.NexusArgDef<string>>
    description: string
    list: true
    nullable: false
    resolve: (
      root: core.RootValue<"Query">,
      args: { where?: AccountWhereInput | null, orderBy?: prisma.AccountOrderByInput | null, skip?: number | null, after?: string | null, before?: string | null, first?: number | null, last?: number | null }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Account[]> | prisma.Account[]
  }
  accountsConnection: {
    type: 'AccountConnection'
    args: Record<QueryAccountsConnectionArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"Query">,
      args: { where?: AccountWhereInput | null, orderBy?: prisma.AccountOrderByInput | null, skip?: number | null, after?: string | null, before?: string | null, first?: number | null, last?: number | null }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.AccountConnection> | prisma.AccountConnection
  }
  jwtRsa: {
    type: 'JwtRsa'
    args: Record<QueryJwtRsaArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"Query">,
      args: { where: JwtRsaWhereUniqueInput }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.JwtRsa | null> | prisma.JwtRsa | null
  }
  jwtRsas: {
    type: 'JwtRsa'
    args: Record<QueryJwtRsasArgs, core.NexusArgDef<string>>
    description: string
    list: true
    nullable: false
    resolve: (
      root: core.RootValue<"Query">,
      args: { where?: JwtRsaWhereInput | null, orderBy?: prisma.JwtRsaOrderByInput | null, skip?: number | null, after?: string | null, before?: string | null, first?: number | null, last?: number | null }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.JwtRsa[]> | prisma.JwtRsa[]
  }
  jwtRsasConnection: {
    type: 'JwtRsaConnection'
    args: Record<QueryJwtRsasConnectionArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"Query">,
      args: { where?: JwtRsaWhereInput | null, orderBy?: prisma.JwtRsaOrderByInput | null, skip?: number | null, after?: string | null, before?: string | null, first?: number | null, last?: number | null }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.JwtRsaConnection> | prisma.JwtRsaConnection
  }
  accessKey: {
    type: 'AccessKey'
    args: Record<QueryAccessKeyArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"Query">,
      args: { where: AccessKeyWhereUniqueInput }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.AccessKey | null> | prisma.AccessKey | null
  }
  accessKeys: {
    type: 'AccessKey'
    args: Record<QueryAccessKeysArgs, core.NexusArgDef<string>>
    description: string
    list: true
    nullable: false
    resolve: (
      root: core.RootValue<"Query">,
      args: { where?: AccessKeyWhereInput | null, orderBy?: prisma.AccessKeyOrderByInput | null, skip?: number | null, after?: string | null, before?: string | null, first?: number | null, last?: number | null }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.AccessKey[]> | prisma.AccessKey[]
  }
  accessKeysConnection: {
    type: 'AccessKeyConnection'
    args: Record<QueryAccessKeysConnectionArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"Query">,
      args: { where?: AccessKeyWhereInput | null, orderBy?: prisma.AccessKeyOrderByInput | null, skip?: number | null, after?: string | null, before?: string | null, first?: number | null, last?: number | null }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.AccessKeyConnection> | prisma.AccessKeyConnection
  }
  serviceRole: {
    type: 'ServiceRole'
    args: Record<QueryServiceRoleArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"Query">,
      args: { where: ServiceRoleWhereUniqueInput }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.ServiceRole | null> | prisma.ServiceRole | null
  }
  serviceRoles: {
    type: 'ServiceRole'
    args: Record<QueryServiceRolesArgs, core.NexusArgDef<string>>
    description: string
    list: true
    nullable: false
    resolve: (
      root: core.RootValue<"Query">,
      args: { where?: ServiceRoleWhereInput | null, orderBy?: prisma.ServiceRoleOrderByInput | null, skip?: number | null, after?: string | null, before?: string | null, first?: number | null, last?: number | null }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.ServiceRole[]> | prisma.ServiceRole[]
  }
  serviceRolesConnection: {
    type: 'ServiceRoleConnection'
    args: Record<QueryServiceRolesConnectionArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"Query">,
      args: { where?: ServiceRoleWhereInput | null, orderBy?: prisma.ServiceRoleOrderByInput | null, skip?: number | null, after?: string | null, before?: string | null, first?: number | null, last?: number | null }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.ServiceRoleConnection> | prisma.ServiceRoleConnection
  }
  permission: {
    type: 'Permission'
    args: Record<QueryPermissionArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"Query">,
      args: { where: PermissionWhereUniqueInput }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Permission | null> | prisma.Permission | null
  }
  permissions: {
    type: 'Permission'
    args: Record<QueryPermissionsArgs, core.NexusArgDef<string>>
    description: string
    list: true
    nullable: false
    resolve: (
      root: core.RootValue<"Query">,
      args: { where?: PermissionWhereInput | null, orderBy?: prisma.PermissionOrderByInput | null, skip?: number | null, after?: string | null, before?: string | null, first?: number | null, last?: number | null }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Permission[]> | prisma.Permission[]
  }
  permissionsConnection: {
    type: 'PermissionConnection'
    args: Record<QueryPermissionsConnectionArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"Query">,
      args: { where?: PermissionWhereInput | null, orderBy?: prisma.PermissionOrderByInput | null, skip?: number | null, after?: string | null, before?: string | null, first?: number | null, last?: number | null }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.PermissionConnection> | prisma.PermissionConnection
  }
  group: {
    type: 'Group'
    args: Record<QueryGroupArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"Query">,
      args: { where: GroupWhereUniqueInput }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Group | null> | prisma.Group | null
  }
  groups: {
    type: 'Group'
    args: Record<QueryGroupsArgs, core.NexusArgDef<string>>
    description: string
    list: true
    nullable: false
    resolve: (
      root: core.RootValue<"Query">,
      args: { where?: GroupWhereInput | null, orderBy?: prisma.GroupOrderByInput | null, skip?: number | null, after?: string | null, before?: string | null, first?: number | null, last?: number | null }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Group[]> | prisma.Group[]
  }
  groupsConnection: {
    type: 'GroupConnection'
    args: Record<QueryGroupsConnectionArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"Query">,
      args: { where?: GroupWhereInput | null, orderBy?: prisma.GroupOrderByInput | null, skip?: number | null, after?: string | null, before?: string | null, first?: number | null, last?: number | null }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.GroupConnection> | prisma.GroupConnection
  }
  node: {
    type: 'Node'
    args: Record<QueryNodeArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"Query">,
      args: { id: string }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Node | null> | prisma.Node | null
  }
}
  

// Types for Account

type AccountObject =
  | AccountFields
  | { name: 'id', args?: [] | false, alias?: string  } 
  | { name: 'userName', args?: [] | false, alias?: string  } 
  | { name: 'email', args?: [] | false, alias?: string  } 
  | { name: 'mobileNo', args?: [] | false, alias?: string  } 
  | { name: 'idCard', args?: [] | false, alias?: string  } 
  | { name: 'name', args?: [] | false, alias?: string  } 
  | { name: 'headpic', args?: [] | false, alias?: string  } 
  | { name: 'password', args?: [] | false, alias?: string  } 
  | { name: 'resetPasswordNext', args?: [] | false, alias?: string  } 
  | { name: 'enable', args?: [] | false, alias?: string  } 
  | { name: 'parentAccount', args?: [] | false, alias?: string  } 
  | { name: 'subAccount', args?: AccountSubAccountArgs[] | false, alias?: string  } 
  | { name: 'accessKeys', args?: AccountAccessKeysArgs[] | false, alias?: string  } 
  | { name: 'groups', args?: AccountGroupsArgs[] | false, alias?: string  } 
  | { name: 'permissions', args?: AccountPermissionsArgs[] | false, alias?: string  } 
  | { name: 'lastLoginAt', args?: [] | false, alias?: string  } 
  | { name: 'updatedAt', args?: [] | false, alias?: string  } 
  | { name: 'createdAt', args?: [] | false, alias?: string  } 

type AccountFields =
  | 'id'
  | 'userName'
  | 'email'
  | 'mobileNo'
  | 'idCard'
  | 'name'
  | 'headpic'
  | 'password'
  | 'resetPasswordNext'
  | 'enable'
  | 'parentAccount'
  | 'subAccount'
  | 'accessKeys'
  | 'groups'
  | 'permissions'
  | 'lastLoginAt'
  | 'updatedAt'
  | 'createdAt'


type AccountSubAccountArgs =
  | 'where'
  | 'orderBy'
  | 'skip'
  | 'after'
  | 'before'
  | 'first'
  | 'last'
type AccountAccessKeysArgs =
  | 'where'
  | 'orderBy'
  | 'skip'
  | 'after'
  | 'before'
  | 'first'
  | 'last'
type AccountGroupsArgs =
  | 'where'
  | 'orderBy'
  | 'skip'
  | 'after'
  | 'before'
  | 'first'
  | 'last'
type AccountPermissionsArgs =
  | 'where'
  | 'orderBy'
  | 'skip'
  | 'after'
  | 'before'
  | 'first'
  | 'last'
  

export interface AccountFieldDetails {
  id: {
    type: 'ID'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  userName: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  email: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: undefined
  }
  mobileNo: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: undefined
  }
  idCard: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: undefined
  }
  name: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: undefined
  }
  headpic: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: undefined
  }
  password: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  resetPasswordNext: {
    type: 'Boolean'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  enable: {
    type: 'Boolean'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  parentAccount: {
    type: 'Account'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"Account">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Account | null> | prisma.Account | null
  }
  subAccount: {
    type: 'Account'
    args: Record<AccountSubAccountArgs, core.NexusArgDef<string>>
    description: string
    list: true
    nullable: false
    resolve: (
      root: core.RootValue<"Account">,
      args: { where?: AccountWhereInput | null, orderBy?: prisma.AccountOrderByInput | null, skip?: number | null, after?: string | null, before?: string | null, first?: number | null, last?: number | null }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Account[]> | prisma.Account[]
  }
  accessKeys: {
    type: 'AccessKey'
    args: Record<AccountAccessKeysArgs, core.NexusArgDef<string>>
    description: string
    list: true
    nullable: false
    resolve: (
      root: core.RootValue<"Account">,
      args: { where?: AccessKeyWhereInput | null, orderBy?: prisma.AccessKeyOrderByInput | null, skip?: number | null, after?: string | null, before?: string | null, first?: number | null, last?: number | null }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.AccessKey[]> | prisma.AccessKey[]
  }
  groups: {
    type: 'Group'
    args: Record<AccountGroupsArgs, core.NexusArgDef<string>>
    description: string
    list: true
    nullable: false
    resolve: (
      root: core.RootValue<"Account">,
      args: { where?: GroupWhereInput | null, orderBy?: prisma.GroupOrderByInput | null, skip?: number | null, after?: string | null, before?: string | null, first?: number | null, last?: number | null }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Group[]> | prisma.Group[]
  }
  permissions: {
    type: 'Permission'
    args: Record<AccountPermissionsArgs, core.NexusArgDef<string>>
    description: string
    list: true
    nullable: false
    resolve: (
      root: core.RootValue<"Account">,
      args: { where?: PermissionWhereInput | null, orderBy?: prisma.PermissionOrderByInput | null, skip?: number | null, after?: string | null, before?: string | null, first?: number | null, last?: number | null }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Permission[]> | prisma.Permission[]
  }
  lastLoginAt: {
    type: 'DateTime'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: undefined
  }
  updatedAt: {
    type: 'DateTime'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  createdAt: {
    type: 'DateTime'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
}
  

// Types for AccessKey

type AccessKeyObject =
  | AccessKeyFields
  | { name: 'id', args?: [] | false, alias?: string  } 
  | { name: 'secret', args?: [] | false, alias?: string  } 
  | { name: 'activated', args?: [] | false, alias?: string  } 
  | { name: 'account', args?: [] | false, alias?: string  } 
  | { name: 'updatedAt', args?: [] | false, alias?: string  } 
  | { name: 'createdAt', args?: [] | false, alias?: string  } 

type AccessKeyFields =
  | 'id'
  | 'secret'
  | 'activated'
  | 'account'
  | 'updatedAt'
  | 'createdAt'



  

export interface AccessKeyFieldDetails {
  id: {
    type: 'ID'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  secret: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: undefined
  }
  activated: {
    type: 'Boolean'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  account: {
    type: 'Account'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"AccessKey">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Account> | prisma.Account
  }
  updatedAt: {
    type: 'DateTime'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  createdAt: {
    type: 'DateTime'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
}
  

// Types for Group

type GroupObject =
  | GroupFields
  | { name: 'id', args?: [] | false, alias?: string  } 
  | { name: 'type', args?: [] | false, alias?: string  } 
  | { name: 'accounts', args?: GroupAccountsArgs[] | false, alias?: string  } 
  | { name: 'permissions', args?: GroupPermissionsArgs[] | false, alias?: string  } 
  | { name: 'updatedAt', args?: [] | false, alias?: string  } 
  | { name: 'createdAt', args?: [] | false, alias?: string  } 

type GroupFields =
  | 'id'
  | 'type'
  | 'accounts'
  | 'permissions'
  | 'updatedAt'
  | 'createdAt'


type GroupAccountsArgs =
  | 'where'
  | 'orderBy'
  | 'skip'
  | 'after'
  | 'before'
  | 'first'
  | 'last'
type GroupPermissionsArgs =
  | 'where'
  | 'orderBy'
  | 'skip'
  | 'after'
  | 'before'
  | 'first'
  | 'last'
  

export interface GroupFieldDetails {
  id: {
    type: 'ID'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  type: {
    type: 'GroupType'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"Group">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.GroupType | null> | prisma.GroupType | null
  }
  accounts: {
    type: 'Account'
    args: Record<GroupAccountsArgs, core.NexusArgDef<string>>
    description: string
    list: true
    nullable: false
    resolve: (
      root: core.RootValue<"Group">,
      args: { where?: AccountWhereInput | null, orderBy?: prisma.AccountOrderByInput | null, skip?: number | null, after?: string | null, before?: string | null, first?: number | null, last?: number | null }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Account[]> | prisma.Account[]
  }
  permissions: {
    type: 'Permission'
    args: Record<GroupPermissionsArgs, core.NexusArgDef<string>>
    description: string
    list: true
    nullable: false
    resolve: (
      root: core.RootValue<"Group">,
      args: { where?: PermissionWhereInput | null, orderBy?: prisma.PermissionOrderByInput | null, skip?: number | null, after?: string | null, before?: string | null, first?: number | null, last?: number | null }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Permission[]> | prisma.Permission[]
  }
  updatedAt: {
    type: 'DateTime'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  createdAt: {
    type: 'DateTime'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
}
  

// Types for Permission

type PermissionObject =
  | PermissionFields
  | { name: 'name', args?: [] | false, alias?: string  } 
  | { name: 'remark', args?: [] | false, alias?: string  } 
  | { name: 'type', args?: [] | false, alias?: string  } 
  | { name: 'usedCount', args?: [] | false, alias?: string  } 
  | { name: 'currentVersion', args?: [] | false, alias?: string  } 
  | { name: 'version1Content', args?: [] | false, alias?: string  } 
  | { name: 'version2Content', args?: [] | false, alias?: string  } 
  | { name: 'version3Content', args?: [] | false, alias?: string  } 
  | { name: 'version4Content', args?: [] | false, alias?: string  } 
  | { name: 'version5Content', args?: [] | false, alias?: string  } 
  | { name: 'updatedAt', args?: [] | false, alias?: string  } 
  | { name: 'createdAt', args?: [] | false, alias?: string  } 

type PermissionFields =
  | 'name'
  | 'remark'
  | 'type'
  | 'usedCount'
  | 'currentVersion'
  | 'version1Content'
  | 'version2Content'
  | 'version3Content'
  | 'version4Content'
  | 'version5Content'
  | 'updatedAt'
  | 'createdAt'



  

export interface PermissionFieldDetails {
  name: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  remark: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  type: {
    type: 'PermissionType'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"Permission">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.PermissionType | null> | prisma.PermissionType | null
  }
  usedCount: {
    type: 'Int'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  currentVersion: {
    type: 'Int'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  version1Content: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: undefined
  }
  version2Content: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: undefined
  }
  version3Content: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: undefined
  }
  version4Content: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: undefined
  }
  version5Content: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: undefined
  }
  updatedAt: {
    type: 'DateTime'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  createdAt: {
    type: 'DateTime'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
}
  

// Types for AccountConnection

type AccountConnectionObject =
  | AccountConnectionFields
  | { name: 'pageInfo', args?: [] | false, alias?: string  } 
  | { name: 'edges', args?: [] | false, alias?: string  } 
  | { name: 'aggregate', args?: [] | false, alias?: string  } 

type AccountConnectionFields =
  | 'pageInfo'
  | 'edges'
  | 'aggregate'



  

export interface AccountConnectionFieldDetails {
  pageInfo: {
    type: 'PageInfo'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"AccountConnection">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.PageInfo> | prisma.PageInfo
  }
  edges: {
    type: 'AccountEdge'
    args: {}
    description: string
    list: true
    nullable: false
    resolve: (
      root: core.RootValue<"AccountConnection">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.AccountEdge[]> | prisma.AccountEdge[]
  }
  aggregate: {
    type: 'AggregateAccount'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"AccountConnection">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.AggregateAccount> | prisma.AggregateAccount
  }
}
  

// Types for PageInfo

type PageInfoObject =
  | PageInfoFields
  | { name: 'hasNextPage', args?: [] | false, alias?: string  } 
  | { name: 'hasPreviousPage', args?: [] | false, alias?: string  } 
  | { name: 'startCursor', args?: [] | false, alias?: string  } 
  | { name: 'endCursor', args?: [] | false, alias?: string  } 

type PageInfoFields =
  | 'hasNextPage'
  | 'hasPreviousPage'
  | 'startCursor'
  | 'endCursor'



  

export interface PageInfoFieldDetails {
  hasNextPage: {
    type: 'Boolean'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  hasPreviousPage: {
    type: 'Boolean'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  startCursor: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: undefined
  }
  endCursor: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: undefined
  }
}
  

// Types for AccountEdge

type AccountEdgeObject =
  | AccountEdgeFields
  | { name: 'node', args?: [] | false, alias?: string  } 
  | { name: 'cursor', args?: [] | false, alias?: string  } 

type AccountEdgeFields =
  | 'node'
  | 'cursor'



  

export interface AccountEdgeFieldDetails {
  node: {
    type: 'Account'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"AccountEdge">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Account> | prisma.Account
  }
  cursor: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
}
  

// Types for AggregateAccount

type AggregateAccountObject =
  | AggregateAccountFields
  | { name: 'count', args?: [] | false, alias?: string  } 

type AggregateAccountFields =
  | 'count'



  

export interface AggregateAccountFieldDetails {
  count: {
    type: 'Int'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
}
  

// Types for JwtRsa

type JwtRsaObject =
  | JwtRsaFields
  | { name: 'id', args?: [] | false, alias?: string  } 
  | { name: 'publicKey', args?: [] | false, alias?: string  } 
  | { name: 'privateKey', args?: [] | false, alias?: string  } 
  | { name: 'updatedAt', args?: [] | false, alias?: string  } 
  | { name: 'createdAt', args?: [] | false, alias?: string  } 

type JwtRsaFields =
  | 'id'
  | 'publicKey'
  | 'privateKey'
  | 'updatedAt'
  | 'createdAt'



  

export interface JwtRsaFieldDetails {
  id: {
    type: 'ID'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  publicKey: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: undefined
  }
  privateKey: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: undefined
  }
  updatedAt: {
    type: 'DateTime'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  createdAt: {
    type: 'DateTime'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
}
  

// Types for JwtRsaConnection

type JwtRsaConnectionObject =
  | JwtRsaConnectionFields
  | { name: 'pageInfo', args?: [] | false, alias?: string  } 
  | { name: 'edges', args?: [] | false, alias?: string  } 
  | { name: 'aggregate', args?: [] | false, alias?: string  } 

type JwtRsaConnectionFields =
  | 'pageInfo'
  | 'edges'
  | 'aggregate'



  

export interface JwtRsaConnectionFieldDetails {
  pageInfo: {
    type: 'PageInfo'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"JwtRsaConnection">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.PageInfo> | prisma.PageInfo
  }
  edges: {
    type: 'JwtRsaEdge'
    args: {}
    description: string
    list: true
    nullable: false
    resolve: (
      root: core.RootValue<"JwtRsaConnection">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.JwtRsaEdge[]> | prisma.JwtRsaEdge[]
  }
  aggregate: {
    type: 'AggregateJwtRsa'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"JwtRsaConnection">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.AggregateJwtRsa> | prisma.AggregateJwtRsa
  }
}
  

// Types for JwtRsaEdge

type JwtRsaEdgeObject =
  | JwtRsaEdgeFields
  | { name: 'node', args?: [] | false, alias?: string  } 
  | { name: 'cursor', args?: [] | false, alias?: string  } 

type JwtRsaEdgeFields =
  | 'node'
  | 'cursor'



  

export interface JwtRsaEdgeFieldDetails {
  node: {
    type: 'JwtRsa'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"JwtRsaEdge">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.JwtRsa> | prisma.JwtRsa
  }
  cursor: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
}
  

// Types for AggregateJwtRsa

type AggregateJwtRsaObject =
  | AggregateJwtRsaFields
  | { name: 'count', args?: [] | false, alias?: string  } 

type AggregateJwtRsaFields =
  | 'count'



  

export interface AggregateJwtRsaFieldDetails {
  count: {
    type: 'Int'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
}
  

// Types for AccessKeyConnection

type AccessKeyConnectionObject =
  | AccessKeyConnectionFields
  | { name: 'pageInfo', args?: [] | false, alias?: string  } 
  | { name: 'edges', args?: [] | false, alias?: string  } 
  | { name: 'aggregate', args?: [] | false, alias?: string  } 

type AccessKeyConnectionFields =
  | 'pageInfo'
  | 'edges'
  | 'aggregate'



  

export interface AccessKeyConnectionFieldDetails {
  pageInfo: {
    type: 'PageInfo'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"AccessKeyConnection">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.PageInfo> | prisma.PageInfo
  }
  edges: {
    type: 'AccessKeyEdge'
    args: {}
    description: string
    list: true
    nullable: false
    resolve: (
      root: core.RootValue<"AccessKeyConnection">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.AccessKeyEdge[]> | prisma.AccessKeyEdge[]
  }
  aggregate: {
    type: 'AggregateAccessKey'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"AccessKeyConnection">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.AggregateAccessKey> | prisma.AggregateAccessKey
  }
}
  

// Types for AccessKeyEdge

type AccessKeyEdgeObject =
  | AccessKeyEdgeFields
  | { name: 'node', args?: [] | false, alias?: string  } 
  | { name: 'cursor', args?: [] | false, alias?: string  } 

type AccessKeyEdgeFields =
  | 'node'
  | 'cursor'



  

export interface AccessKeyEdgeFieldDetails {
  node: {
    type: 'AccessKey'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"AccessKeyEdge">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.AccessKey> | prisma.AccessKey
  }
  cursor: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
}
  

// Types for AggregateAccessKey

type AggregateAccessKeyObject =
  | AggregateAccessKeyFields
  | { name: 'count', args?: [] | false, alias?: string  } 

type AggregateAccessKeyFields =
  | 'count'



  

export interface AggregateAccessKeyFieldDetails {
  count: {
    type: 'Int'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
}
  

// Types for ServiceRole

type ServiceRoleObject =
  | ServiceRoleFields
  | { name: 'tenantIdServiceName', args?: [] | false, alias?: string  } 
  | { name: 'keyAuthSecret', args?: [] | false, alias?: string  } 
  | { name: 'permissions', args?: ServiceRolePermissionsArgs[] | false, alias?: string  } 
  | { name: 'updatedAt', args?: [] | false, alias?: string  } 
  | { name: 'createdAt', args?: [] | false, alias?: string  } 

type ServiceRoleFields =
  | 'tenantIdServiceName'
  | 'keyAuthSecret'
  | 'permissions'
  | 'updatedAt'
  | 'createdAt'


type ServiceRolePermissionsArgs =
  | 'where'
  | 'orderBy'
  | 'skip'
  | 'after'
  | 'before'
  | 'first'
  | 'last'
  

export interface ServiceRoleFieldDetails {
  tenantIdServiceName: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  keyAuthSecret: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  permissions: {
    type: 'Permission'
    args: Record<ServiceRolePermissionsArgs, core.NexusArgDef<string>>
    description: string
    list: true
    nullable: false
    resolve: (
      root: core.RootValue<"ServiceRole">,
      args: { where?: PermissionWhereInput | null, orderBy?: prisma.PermissionOrderByInput | null, skip?: number | null, after?: string | null, before?: string | null, first?: number | null, last?: number | null }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Permission[]> | prisma.Permission[]
  }
  updatedAt: {
    type: 'DateTime'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  createdAt: {
    type: 'DateTime'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
}
  

// Types for ServiceRoleConnection

type ServiceRoleConnectionObject =
  | ServiceRoleConnectionFields
  | { name: 'pageInfo', args?: [] | false, alias?: string  } 
  | { name: 'edges', args?: [] | false, alias?: string  } 
  | { name: 'aggregate', args?: [] | false, alias?: string  } 

type ServiceRoleConnectionFields =
  | 'pageInfo'
  | 'edges'
  | 'aggregate'



  

export interface ServiceRoleConnectionFieldDetails {
  pageInfo: {
    type: 'PageInfo'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"ServiceRoleConnection">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.PageInfo> | prisma.PageInfo
  }
  edges: {
    type: 'ServiceRoleEdge'
    args: {}
    description: string
    list: true
    nullable: false
    resolve: (
      root: core.RootValue<"ServiceRoleConnection">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.ServiceRoleEdge[]> | prisma.ServiceRoleEdge[]
  }
  aggregate: {
    type: 'AggregateServiceRole'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"ServiceRoleConnection">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.AggregateServiceRole> | prisma.AggregateServiceRole
  }
}
  

// Types for ServiceRoleEdge

type ServiceRoleEdgeObject =
  | ServiceRoleEdgeFields
  | { name: 'node', args?: [] | false, alias?: string  } 
  | { name: 'cursor', args?: [] | false, alias?: string  } 

type ServiceRoleEdgeFields =
  | 'node'
  | 'cursor'



  

export interface ServiceRoleEdgeFieldDetails {
  node: {
    type: 'ServiceRole'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"ServiceRoleEdge">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.ServiceRole> | prisma.ServiceRole
  }
  cursor: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
}
  

// Types for AggregateServiceRole

type AggregateServiceRoleObject =
  | AggregateServiceRoleFields
  | { name: 'count', args?: [] | false, alias?: string  } 

type AggregateServiceRoleFields =
  | 'count'



  

export interface AggregateServiceRoleFieldDetails {
  count: {
    type: 'Int'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
}
  

// Types for PermissionConnection

type PermissionConnectionObject =
  | PermissionConnectionFields
  | { name: 'pageInfo', args?: [] | false, alias?: string  } 
  | { name: 'edges', args?: [] | false, alias?: string  } 
  | { name: 'aggregate', args?: [] | false, alias?: string  } 

type PermissionConnectionFields =
  | 'pageInfo'
  | 'edges'
  | 'aggregate'



  

export interface PermissionConnectionFieldDetails {
  pageInfo: {
    type: 'PageInfo'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"PermissionConnection">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.PageInfo> | prisma.PageInfo
  }
  edges: {
    type: 'PermissionEdge'
    args: {}
    description: string
    list: true
    nullable: false
    resolve: (
      root: core.RootValue<"PermissionConnection">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.PermissionEdge[]> | prisma.PermissionEdge[]
  }
  aggregate: {
    type: 'AggregatePermission'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"PermissionConnection">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.AggregatePermission> | prisma.AggregatePermission
  }
}
  

// Types for PermissionEdge

type PermissionEdgeObject =
  | PermissionEdgeFields
  | { name: 'node', args?: [] | false, alias?: string  } 
  | { name: 'cursor', args?: [] | false, alias?: string  } 

type PermissionEdgeFields =
  | 'node'
  | 'cursor'



  

export interface PermissionEdgeFieldDetails {
  node: {
    type: 'Permission'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"PermissionEdge">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Permission> | prisma.Permission
  }
  cursor: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
}
  

// Types for AggregatePermission

type AggregatePermissionObject =
  | AggregatePermissionFields
  | { name: 'count', args?: [] | false, alias?: string  } 

type AggregatePermissionFields =
  | 'count'



  

export interface AggregatePermissionFieldDetails {
  count: {
    type: 'Int'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
}
  

// Types for GroupConnection

type GroupConnectionObject =
  | GroupConnectionFields
  | { name: 'pageInfo', args?: [] | false, alias?: string  } 
  | { name: 'edges', args?: [] | false, alias?: string  } 
  | { name: 'aggregate', args?: [] | false, alias?: string  } 

type GroupConnectionFields =
  | 'pageInfo'
  | 'edges'
  | 'aggregate'



  

export interface GroupConnectionFieldDetails {
  pageInfo: {
    type: 'PageInfo'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"GroupConnection">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.PageInfo> | prisma.PageInfo
  }
  edges: {
    type: 'GroupEdge'
    args: {}
    description: string
    list: true
    nullable: false
    resolve: (
      root: core.RootValue<"GroupConnection">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.GroupEdge[]> | prisma.GroupEdge[]
  }
  aggregate: {
    type: 'AggregateGroup'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"GroupConnection">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.AggregateGroup> | prisma.AggregateGroup
  }
}
  

// Types for GroupEdge

type GroupEdgeObject =
  | GroupEdgeFields
  | { name: 'node', args?: [] | false, alias?: string  } 
  | { name: 'cursor', args?: [] | false, alias?: string  } 

type GroupEdgeFields =
  | 'node'
  | 'cursor'



  

export interface GroupEdgeFieldDetails {
  node: {
    type: 'Group'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"GroupEdge">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Group> | prisma.Group
  }
  cursor: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
}
  

// Types for AggregateGroup

type AggregateGroupObject =
  | AggregateGroupFields
  | { name: 'count', args?: [] | false, alias?: string  } 

type AggregateGroupFields =
  | 'count'



  

export interface AggregateGroupFieldDetails {
  count: {
    type: 'Int'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
}
  

// Types for Mutation

type MutationObject =
  | MutationFields
  | { name: 'createAccount', args?: MutationCreateAccountArgs[] | false, alias?: string  } 
  | { name: 'updateAccount', args?: MutationUpdateAccountArgs[] | false, alias?: string  } 
  | { name: 'updateManyAccounts', args?: MutationUpdateManyAccountsArgs[] | false, alias?: string  } 
  | { name: 'upsertAccount', args?: MutationUpsertAccountArgs[] | false, alias?: string  } 
  | { name: 'deleteAccount', args?: MutationDeleteAccountArgs[] | false, alias?: string  } 
  | { name: 'deleteManyAccounts', args?: MutationDeleteManyAccountsArgs[] | false, alias?: string  } 
  | { name: 'createJwtRsa', args?: MutationCreateJwtRsaArgs[] | false, alias?: string  } 
  | { name: 'updateJwtRsa', args?: MutationUpdateJwtRsaArgs[] | false, alias?: string  } 
  | { name: 'updateManyJwtRsas', args?: MutationUpdateManyJwtRsasArgs[] | false, alias?: string  } 
  | { name: 'upsertJwtRsa', args?: MutationUpsertJwtRsaArgs[] | false, alias?: string  } 
  | { name: 'deleteJwtRsa', args?: MutationDeleteJwtRsaArgs[] | false, alias?: string  } 
  | { name: 'deleteManyJwtRsas', args?: MutationDeleteManyJwtRsasArgs[] | false, alias?: string  } 
  | { name: 'createAccessKey', args?: MutationCreateAccessKeyArgs[] | false, alias?: string  } 
  | { name: 'updateAccessKey', args?: MutationUpdateAccessKeyArgs[] | false, alias?: string  } 
  | { name: 'updateManyAccessKeys', args?: MutationUpdateManyAccessKeysArgs[] | false, alias?: string  } 
  | { name: 'upsertAccessKey', args?: MutationUpsertAccessKeyArgs[] | false, alias?: string  } 
  | { name: 'deleteAccessKey', args?: MutationDeleteAccessKeyArgs[] | false, alias?: string  } 
  | { name: 'deleteManyAccessKeys', args?: MutationDeleteManyAccessKeysArgs[] | false, alias?: string  } 
  | { name: 'createServiceRole', args?: MutationCreateServiceRoleArgs[] | false, alias?: string  } 
  | { name: 'updateServiceRole', args?: MutationUpdateServiceRoleArgs[] | false, alias?: string  } 
  | { name: 'updateManyServiceRoles', args?: MutationUpdateManyServiceRolesArgs[] | false, alias?: string  } 
  | { name: 'upsertServiceRole', args?: MutationUpsertServiceRoleArgs[] | false, alias?: string  } 
  | { name: 'deleteServiceRole', args?: MutationDeleteServiceRoleArgs[] | false, alias?: string  } 
  | { name: 'deleteManyServiceRoles', args?: MutationDeleteManyServiceRolesArgs[] | false, alias?: string  } 
  | { name: 'createPermission', args?: MutationCreatePermissionArgs[] | false, alias?: string  } 
  | { name: 'updatePermission', args?: MutationUpdatePermissionArgs[] | false, alias?: string  } 
  | { name: 'updateManyPermissions', args?: MutationUpdateManyPermissionsArgs[] | false, alias?: string  } 
  | { name: 'upsertPermission', args?: MutationUpsertPermissionArgs[] | false, alias?: string  } 
  | { name: 'deletePermission', args?: MutationDeletePermissionArgs[] | false, alias?: string  } 
  | { name: 'deleteManyPermissions', args?: MutationDeleteManyPermissionsArgs[] | false, alias?: string  } 
  | { name: 'createGroup', args?: MutationCreateGroupArgs[] | false, alias?: string  } 
  | { name: 'updateGroup', args?: MutationUpdateGroupArgs[] | false, alias?: string  } 
  | { name: 'updateManyGroups', args?: MutationUpdateManyGroupsArgs[] | false, alias?: string  } 
  | { name: 'upsertGroup', args?: MutationUpsertGroupArgs[] | false, alias?: string  } 
  | { name: 'deleteGroup', args?: MutationDeleteGroupArgs[] | false, alias?: string  } 
  | { name: 'deleteManyGroups', args?: MutationDeleteManyGroupsArgs[] | false, alias?: string  } 

type MutationFields =
  | 'createAccount'
  | 'updateAccount'
  | 'updateManyAccounts'
  | 'upsertAccount'
  | 'deleteAccount'
  | 'deleteManyAccounts'
  | 'createJwtRsa'
  | 'updateJwtRsa'
  | 'updateManyJwtRsas'
  | 'upsertJwtRsa'
  | 'deleteJwtRsa'
  | 'deleteManyJwtRsas'
  | 'createAccessKey'
  | 'updateAccessKey'
  | 'updateManyAccessKeys'
  | 'upsertAccessKey'
  | 'deleteAccessKey'
  | 'deleteManyAccessKeys'
  | 'createServiceRole'
  | 'updateServiceRole'
  | 'updateManyServiceRoles'
  | 'upsertServiceRole'
  | 'deleteServiceRole'
  | 'deleteManyServiceRoles'
  | 'createPermission'
  | 'updatePermission'
  | 'updateManyPermissions'
  | 'upsertPermission'
  | 'deletePermission'
  | 'deleteManyPermissions'
  | 'createGroup'
  | 'updateGroup'
  | 'updateManyGroups'
  | 'upsertGroup'
  | 'deleteGroup'
  | 'deleteManyGroups'


type MutationCreateAccountArgs =
  | 'data'
type MutationUpdateAccountArgs =
  | 'data'
  | 'where'
type MutationUpdateManyAccountsArgs =
  | 'data'
  | 'where'
type MutationUpsertAccountArgs =
  | 'where'
  | 'create'
  | 'update'
type MutationDeleteAccountArgs =
  | 'where'
type MutationDeleteManyAccountsArgs =
  | 'where'
type MutationCreateJwtRsaArgs =
  | 'data'
type MutationUpdateJwtRsaArgs =
  | 'data'
  | 'where'
type MutationUpdateManyJwtRsasArgs =
  | 'data'
  | 'where'
type MutationUpsertJwtRsaArgs =
  | 'where'
  | 'create'
  | 'update'
type MutationDeleteJwtRsaArgs =
  | 'where'
type MutationDeleteManyJwtRsasArgs =
  | 'where'
type MutationCreateAccessKeyArgs =
  | 'data'
type MutationUpdateAccessKeyArgs =
  | 'data'
  | 'where'
type MutationUpdateManyAccessKeysArgs =
  | 'data'
  | 'where'
type MutationUpsertAccessKeyArgs =
  | 'where'
  | 'create'
  | 'update'
type MutationDeleteAccessKeyArgs =
  | 'where'
type MutationDeleteManyAccessKeysArgs =
  | 'where'
type MutationCreateServiceRoleArgs =
  | 'data'
type MutationUpdateServiceRoleArgs =
  | 'data'
  | 'where'
type MutationUpdateManyServiceRolesArgs =
  | 'data'
  | 'where'
type MutationUpsertServiceRoleArgs =
  | 'where'
  | 'create'
  | 'update'
type MutationDeleteServiceRoleArgs =
  | 'where'
type MutationDeleteManyServiceRolesArgs =
  | 'where'
type MutationCreatePermissionArgs =
  | 'data'
type MutationUpdatePermissionArgs =
  | 'data'
  | 'where'
type MutationUpdateManyPermissionsArgs =
  | 'data'
  | 'where'
type MutationUpsertPermissionArgs =
  | 'where'
  | 'create'
  | 'update'
type MutationDeletePermissionArgs =
  | 'where'
type MutationDeleteManyPermissionsArgs =
  | 'where'
type MutationCreateGroupArgs =
  | 'data'
type MutationUpdateGroupArgs =
  | 'data'
  | 'where'
type MutationUpdateManyGroupsArgs =
  | 'data'
  | 'where'
type MutationUpsertGroupArgs =
  | 'where'
  | 'create'
  | 'update'
type MutationDeleteGroupArgs =
  | 'where'
type MutationDeleteManyGroupsArgs =
  | 'where'
  

export interface MutationFieldDetails {
  createAccount: {
    type: 'Account'
    args: Record<MutationCreateAccountArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { data: AccountCreateInput }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Account> | prisma.Account
  }
  updateAccount: {
    type: 'Account'
    args: Record<MutationUpdateAccountArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { data: AccountUpdateInput, where: AccountWhereUniqueInput }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Account | null> | prisma.Account | null
  }
  updateManyAccounts: {
    type: 'BatchPayload'
    args: Record<MutationUpdateManyAccountsArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { data: AccountUpdateManyMutationInput, where?: AccountWhereInput | null }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.BatchPayload> | prisma.BatchPayload
  }
  upsertAccount: {
    type: 'Account'
    args: Record<MutationUpsertAccountArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { where: AccountWhereUniqueInput, create: AccountCreateInput, update: AccountUpdateInput }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Account> | prisma.Account
  }
  deleteAccount: {
    type: 'Account'
    args: Record<MutationDeleteAccountArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { where: AccountWhereUniqueInput }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Account | null> | prisma.Account | null
  }
  deleteManyAccounts: {
    type: 'BatchPayload'
    args: Record<MutationDeleteManyAccountsArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { where?: AccountWhereInput | null }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.BatchPayload> | prisma.BatchPayload
  }
  createJwtRsa: {
    type: 'JwtRsa'
    args: Record<MutationCreateJwtRsaArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { data: JwtRsaCreateInput }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.JwtRsa> | prisma.JwtRsa
  }
  updateJwtRsa: {
    type: 'JwtRsa'
    args: Record<MutationUpdateJwtRsaArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { data: JwtRsaUpdateInput, where: JwtRsaWhereUniqueInput }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.JwtRsa | null> | prisma.JwtRsa | null
  }
  updateManyJwtRsas: {
    type: 'BatchPayload'
    args: Record<MutationUpdateManyJwtRsasArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { data: JwtRsaUpdateManyMutationInput, where?: JwtRsaWhereInput | null }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.BatchPayload> | prisma.BatchPayload
  }
  upsertJwtRsa: {
    type: 'JwtRsa'
    args: Record<MutationUpsertJwtRsaArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { where: JwtRsaWhereUniqueInput, create: JwtRsaCreateInput, update: JwtRsaUpdateInput }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.JwtRsa> | prisma.JwtRsa
  }
  deleteJwtRsa: {
    type: 'JwtRsa'
    args: Record<MutationDeleteJwtRsaArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { where: JwtRsaWhereUniqueInput }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.JwtRsa | null> | prisma.JwtRsa | null
  }
  deleteManyJwtRsas: {
    type: 'BatchPayload'
    args: Record<MutationDeleteManyJwtRsasArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { where?: JwtRsaWhereInput | null }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.BatchPayload> | prisma.BatchPayload
  }
  createAccessKey: {
    type: 'AccessKey'
    args: Record<MutationCreateAccessKeyArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { data: AccessKeyCreateInput }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.AccessKey> | prisma.AccessKey
  }
  updateAccessKey: {
    type: 'AccessKey'
    args: Record<MutationUpdateAccessKeyArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { data: AccessKeyUpdateInput, where: AccessKeyWhereUniqueInput }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.AccessKey | null> | prisma.AccessKey | null
  }
  updateManyAccessKeys: {
    type: 'BatchPayload'
    args: Record<MutationUpdateManyAccessKeysArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { data: AccessKeyUpdateManyMutationInput, where?: AccessKeyWhereInput | null }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.BatchPayload> | prisma.BatchPayload
  }
  upsertAccessKey: {
    type: 'AccessKey'
    args: Record<MutationUpsertAccessKeyArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { where: AccessKeyWhereUniqueInput, create: AccessKeyCreateInput, update: AccessKeyUpdateInput }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.AccessKey> | prisma.AccessKey
  }
  deleteAccessKey: {
    type: 'AccessKey'
    args: Record<MutationDeleteAccessKeyArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { where: AccessKeyWhereUniqueInput }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.AccessKey | null> | prisma.AccessKey | null
  }
  deleteManyAccessKeys: {
    type: 'BatchPayload'
    args: Record<MutationDeleteManyAccessKeysArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { where?: AccessKeyWhereInput | null }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.BatchPayload> | prisma.BatchPayload
  }
  createServiceRole: {
    type: 'ServiceRole'
    args: Record<MutationCreateServiceRoleArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { data: ServiceRoleCreateInput }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.ServiceRole> | prisma.ServiceRole
  }
  updateServiceRole: {
    type: 'ServiceRole'
    args: Record<MutationUpdateServiceRoleArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { data: ServiceRoleUpdateInput, where: ServiceRoleWhereUniqueInput }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.ServiceRole | null> | prisma.ServiceRole | null
  }
  updateManyServiceRoles: {
    type: 'BatchPayload'
    args: Record<MutationUpdateManyServiceRolesArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { data: ServiceRoleUpdateManyMutationInput, where?: ServiceRoleWhereInput | null }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.BatchPayload> | prisma.BatchPayload
  }
  upsertServiceRole: {
    type: 'ServiceRole'
    args: Record<MutationUpsertServiceRoleArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { where: ServiceRoleWhereUniqueInput, create: ServiceRoleCreateInput, update: ServiceRoleUpdateInput }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.ServiceRole> | prisma.ServiceRole
  }
  deleteServiceRole: {
    type: 'ServiceRole'
    args: Record<MutationDeleteServiceRoleArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { where: ServiceRoleWhereUniqueInput }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.ServiceRole | null> | prisma.ServiceRole | null
  }
  deleteManyServiceRoles: {
    type: 'BatchPayload'
    args: Record<MutationDeleteManyServiceRolesArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { where?: ServiceRoleWhereInput | null }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.BatchPayload> | prisma.BatchPayload
  }
  createPermission: {
    type: 'Permission'
    args: Record<MutationCreatePermissionArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { data: PermissionCreateInput }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Permission> | prisma.Permission
  }
  updatePermission: {
    type: 'Permission'
    args: Record<MutationUpdatePermissionArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { data: PermissionUpdateInput, where: PermissionWhereUniqueInput }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Permission | null> | prisma.Permission | null
  }
  updateManyPermissions: {
    type: 'BatchPayload'
    args: Record<MutationUpdateManyPermissionsArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { data: PermissionUpdateManyMutationInput, where?: PermissionWhereInput | null }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.BatchPayload> | prisma.BatchPayload
  }
  upsertPermission: {
    type: 'Permission'
    args: Record<MutationUpsertPermissionArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { where: PermissionWhereUniqueInput, create: PermissionCreateInput, update: PermissionUpdateInput }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Permission> | prisma.Permission
  }
  deletePermission: {
    type: 'Permission'
    args: Record<MutationDeletePermissionArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { where: PermissionWhereUniqueInput }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Permission | null> | prisma.Permission | null
  }
  deleteManyPermissions: {
    type: 'BatchPayload'
    args: Record<MutationDeleteManyPermissionsArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { where?: PermissionWhereInput | null }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.BatchPayload> | prisma.BatchPayload
  }
  createGroup: {
    type: 'Group'
    args: Record<MutationCreateGroupArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { data: GroupCreateInput }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Group> | prisma.Group
  }
  updateGroup: {
    type: 'Group'
    args: Record<MutationUpdateGroupArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { data: GroupUpdateInput, where: GroupWhereUniqueInput }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Group | null> | prisma.Group | null
  }
  updateManyGroups: {
    type: 'BatchPayload'
    args: Record<MutationUpdateManyGroupsArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { data: GroupUpdateManyMutationInput, where?: GroupWhereInput | null }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.BatchPayload> | prisma.BatchPayload
  }
  upsertGroup: {
    type: 'Group'
    args: Record<MutationUpsertGroupArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { where: GroupWhereUniqueInput, create: GroupCreateInput, update: GroupUpdateInput }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Group> | prisma.Group
  }
  deleteGroup: {
    type: 'Group'
    args: Record<MutationDeleteGroupArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { where: GroupWhereUniqueInput }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Group | null> | prisma.Group | null
  }
  deleteManyGroups: {
    type: 'BatchPayload'
    args: Record<MutationDeleteManyGroupsArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"Mutation">,
      args: { where?: GroupWhereInput | null }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.BatchPayload> | prisma.BatchPayload
  }
}
  

// Types for BatchPayload

type BatchPayloadObject =
  | BatchPayloadFields
  | { name: 'count', args?: [] | false, alias?: string  } 

type BatchPayloadFields =
  | 'count'



  

export interface BatchPayloadFieldDetails {
  count: {
    type: 'Long'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
}
  

// Types for Subscription

type SubscriptionObject =
  | SubscriptionFields
  | { name: 'account', args?: SubscriptionAccountArgs[] | false, alias?: string  } 
  | { name: 'jwtRsa', args?: SubscriptionJwtRsaArgs[] | false, alias?: string  } 
  | { name: 'accessKey', args?: SubscriptionAccessKeyArgs[] | false, alias?: string  } 
  | { name: 'serviceRole', args?: SubscriptionServiceRoleArgs[] | false, alias?: string  } 
  | { name: 'permission', args?: SubscriptionPermissionArgs[] | false, alias?: string  } 
  | { name: 'group', args?: SubscriptionGroupArgs[] | false, alias?: string  } 

type SubscriptionFields =
  | 'account'
  | 'jwtRsa'
  | 'accessKey'
  | 'serviceRole'
  | 'permission'
  | 'group'


type SubscriptionAccountArgs =
  | 'where'
type SubscriptionJwtRsaArgs =
  | 'where'
type SubscriptionAccessKeyArgs =
  | 'where'
type SubscriptionServiceRoleArgs =
  | 'where'
type SubscriptionPermissionArgs =
  | 'where'
type SubscriptionGroupArgs =
  | 'where'
  

export interface SubscriptionFieldDetails {
  account: {
    type: 'AccountSubscriptionPayload'
    args: Record<SubscriptionAccountArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"Subscription">,
      args: { where?: AccountSubscriptionWhereInput | null }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.AccountSubscriptionPayload | null> | prisma.AccountSubscriptionPayload | null
  }
  jwtRsa: {
    type: 'JwtRsaSubscriptionPayload'
    args: Record<SubscriptionJwtRsaArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"Subscription">,
      args: { where?: JwtRsaSubscriptionWhereInput | null }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.JwtRsaSubscriptionPayload | null> | prisma.JwtRsaSubscriptionPayload | null
  }
  accessKey: {
    type: 'AccessKeySubscriptionPayload'
    args: Record<SubscriptionAccessKeyArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"Subscription">,
      args: { where?: AccessKeySubscriptionWhereInput | null }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.AccessKeySubscriptionPayload | null> | prisma.AccessKeySubscriptionPayload | null
  }
  serviceRole: {
    type: 'ServiceRoleSubscriptionPayload'
    args: Record<SubscriptionServiceRoleArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"Subscription">,
      args: { where?: ServiceRoleSubscriptionWhereInput | null }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.ServiceRoleSubscriptionPayload | null> | prisma.ServiceRoleSubscriptionPayload | null
  }
  permission: {
    type: 'PermissionSubscriptionPayload'
    args: Record<SubscriptionPermissionArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"Subscription">,
      args: { where?: PermissionSubscriptionWhereInput | null }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.PermissionSubscriptionPayload | null> | prisma.PermissionSubscriptionPayload | null
  }
  group: {
    type: 'GroupSubscriptionPayload'
    args: Record<SubscriptionGroupArgs, core.NexusArgDef<string>>
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"Subscription">,
      args: { where?: GroupSubscriptionWhereInput | null }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.GroupSubscriptionPayload | null> | prisma.GroupSubscriptionPayload | null
  }
}
  

// Types for AccountSubscriptionPayload

type AccountSubscriptionPayloadObject =
  | AccountSubscriptionPayloadFields
  | { name: 'mutation', args?: [] | false, alias?: string  } 
  | { name: 'node', args?: [] | false, alias?: string  } 
  | { name: 'updatedFields', args?: [] | false, alias?: string  } 
  | { name: 'previousValues', args?: [] | false, alias?: string  } 

type AccountSubscriptionPayloadFields =
  | 'mutation'
  | 'node'
  | 'updatedFields'
  | 'previousValues'



  

export interface AccountSubscriptionPayloadFieldDetails {
  mutation: {
    type: 'MutationType'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"AccountSubscriptionPayload">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.MutationType> | prisma.MutationType
  }
  node: {
    type: 'Account'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"AccountSubscriptionPayload">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Account | null> | prisma.Account | null
  }
  updatedFields: {
    type: 'String'
    args: {}
    description: string
    list: true
    nullable: false
    resolve: undefined
  }
  previousValues: {
    type: 'AccountPreviousValues'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"AccountSubscriptionPayload">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.AccountPreviousValues | null> | prisma.AccountPreviousValues | null
  }
}
  

// Types for AccountPreviousValues

type AccountPreviousValuesObject =
  | AccountPreviousValuesFields
  | { name: 'id', args?: [] | false, alias?: string  } 
  | { name: 'userName', args?: [] | false, alias?: string  } 
  | { name: 'email', args?: [] | false, alias?: string  } 
  | { name: 'mobileNo', args?: [] | false, alias?: string  } 
  | { name: 'idCard', args?: [] | false, alias?: string  } 
  | { name: 'name', args?: [] | false, alias?: string  } 
  | { name: 'headpic', args?: [] | false, alias?: string  } 
  | { name: 'password', args?: [] | false, alias?: string  } 
  | { name: 'resetPasswordNext', args?: [] | false, alias?: string  } 
  | { name: 'enable', args?: [] | false, alias?: string  } 
  | { name: 'lastLoginAt', args?: [] | false, alias?: string  } 
  | { name: 'updatedAt', args?: [] | false, alias?: string  } 
  | { name: 'createdAt', args?: [] | false, alias?: string  } 

type AccountPreviousValuesFields =
  | 'id'
  | 'userName'
  | 'email'
  | 'mobileNo'
  | 'idCard'
  | 'name'
  | 'headpic'
  | 'password'
  | 'resetPasswordNext'
  | 'enable'
  | 'lastLoginAt'
  | 'updatedAt'
  | 'createdAt'



  

export interface AccountPreviousValuesFieldDetails {
  id: {
    type: 'ID'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  userName: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  email: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: undefined
  }
  mobileNo: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: undefined
  }
  idCard: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: undefined
  }
  name: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: undefined
  }
  headpic: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: undefined
  }
  password: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  resetPasswordNext: {
    type: 'Boolean'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  enable: {
    type: 'Boolean'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  lastLoginAt: {
    type: 'DateTime'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: undefined
  }
  updatedAt: {
    type: 'DateTime'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  createdAt: {
    type: 'DateTime'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
}
  

// Types for JwtRsaSubscriptionPayload

type JwtRsaSubscriptionPayloadObject =
  | JwtRsaSubscriptionPayloadFields
  | { name: 'mutation', args?: [] | false, alias?: string  } 
  | { name: 'node', args?: [] | false, alias?: string  } 
  | { name: 'updatedFields', args?: [] | false, alias?: string  } 
  | { name: 'previousValues', args?: [] | false, alias?: string  } 

type JwtRsaSubscriptionPayloadFields =
  | 'mutation'
  | 'node'
  | 'updatedFields'
  | 'previousValues'



  

export interface JwtRsaSubscriptionPayloadFieldDetails {
  mutation: {
    type: 'MutationType'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"JwtRsaSubscriptionPayload">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.MutationType> | prisma.MutationType
  }
  node: {
    type: 'JwtRsa'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"JwtRsaSubscriptionPayload">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.JwtRsa | null> | prisma.JwtRsa | null
  }
  updatedFields: {
    type: 'String'
    args: {}
    description: string
    list: true
    nullable: false
    resolve: undefined
  }
  previousValues: {
    type: 'JwtRsaPreviousValues'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"JwtRsaSubscriptionPayload">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.JwtRsaPreviousValues | null> | prisma.JwtRsaPreviousValues | null
  }
}
  

// Types for JwtRsaPreviousValues

type JwtRsaPreviousValuesObject =
  | JwtRsaPreviousValuesFields
  | { name: 'id', args?: [] | false, alias?: string  } 
  | { name: 'publicKey', args?: [] | false, alias?: string  } 
  | { name: 'privateKey', args?: [] | false, alias?: string  } 
  | { name: 'updatedAt', args?: [] | false, alias?: string  } 
  | { name: 'createdAt', args?: [] | false, alias?: string  } 

type JwtRsaPreviousValuesFields =
  | 'id'
  | 'publicKey'
  | 'privateKey'
  | 'updatedAt'
  | 'createdAt'



  

export interface JwtRsaPreviousValuesFieldDetails {
  id: {
    type: 'ID'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  publicKey: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: undefined
  }
  privateKey: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: undefined
  }
  updatedAt: {
    type: 'DateTime'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  createdAt: {
    type: 'DateTime'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
}
  

// Types for AccessKeySubscriptionPayload

type AccessKeySubscriptionPayloadObject =
  | AccessKeySubscriptionPayloadFields
  | { name: 'mutation', args?: [] | false, alias?: string  } 
  | { name: 'node', args?: [] | false, alias?: string  } 
  | { name: 'updatedFields', args?: [] | false, alias?: string  } 
  | { name: 'previousValues', args?: [] | false, alias?: string  } 

type AccessKeySubscriptionPayloadFields =
  | 'mutation'
  | 'node'
  | 'updatedFields'
  | 'previousValues'



  

export interface AccessKeySubscriptionPayloadFieldDetails {
  mutation: {
    type: 'MutationType'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"AccessKeySubscriptionPayload">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.MutationType> | prisma.MutationType
  }
  node: {
    type: 'AccessKey'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"AccessKeySubscriptionPayload">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.AccessKey | null> | prisma.AccessKey | null
  }
  updatedFields: {
    type: 'String'
    args: {}
    description: string
    list: true
    nullable: false
    resolve: undefined
  }
  previousValues: {
    type: 'AccessKeyPreviousValues'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"AccessKeySubscriptionPayload">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.AccessKeyPreviousValues | null> | prisma.AccessKeyPreviousValues | null
  }
}
  

// Types for AccessKeyPreviousValues

type AccessKeyPreviousValuesObject =
  | AccessKeyPreviousValuesFields
  | { name: 'id', args?: [] | false, alias?: string  } 
  | { name: 'secret', args?: [] | false, alias?: string  } 
  | { name: 'activated', args?: [] | false, alias?: string  } 
  | { name: 'updatedAt', args?: [] | false, alias?: string  } 
  | { name: 'createdAt', args?: [] | false, alias?: string  } 

type AccessKeyPreviousValuesFields =
  | 'id'
  | 'secret'
  | 'activated'
  | 'updatedAt'
  | 'createdAt'



  

export interface AccessKeyPreviousValuesFieldDetails {
  id: {
    type: 'ID'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  secret: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: undefined
  }
  activated: {
    type: 'Boolean'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  updatedAt: {
    type: 'DateTime'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  createdAt: {
    type: 'DateTime'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
}
  

// Types for ServiceRoleSubscriptionPayload

type ServiceRoleSubscriptionPayloadObject =
  | ServiceRoleSubscriptionPayloadFields
  | { name: 'mutation', args?: [] | false, alias?: string  } 
  | { name: 'node', args?: [] | false, alias?: string  } 
  | { name: 'updatedFields', args?: [] | false, alias?: string  } 
  | { name: 'previousValues', args?: [] | false, alias?: string  } 

type ServiceRoleSubscriptionPayloadFields =
  | 'mutation'
  | 'node'
  | 'updatedFields'
  | 'previousValues'



  

export interface ServiceRoleSubscriptionPayloadFieldDetails {
  mutation: {
    type: 'MutationType'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"ServiceRoleSubscriptionPayload">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.MutationType> | prisma.MutationType
  }
  node: {
    type: 'ServiceRole'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"ServiceRoleSubscriptionPayload">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.ServiceRole | null> | prisma.ServiceRole | null
  }
  updatedFields: {
    type: 'String'
    args: {}
    description: string
    list: true
    nullable: false
    resolve: undefined
  }
  previousValues: {
    type: 'ServiceRolePreviousValues'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"ServiceRoleSubscriptionPayload">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.ServiceRolePreviousValues | null> | prisma.ServiceRolePreviousValues | null
  }
}
  

// Types for ServiceRolePreviousValues

type ServiceRolePreviousValuesObject =
  | ServiceRolePreviousValuesFields
  | { name: 'tenantIdServiceName', args?: [] | false, alias?: string  } 
  | { name: 'keyAuthSecret', args?: [] | false, alias?: string  } 
  | { name: 'updatedAt', args?: [] | false, alias?: string  } 
  | { name: 'createdAt', args?: [] | false, alias?: string  } 

type ServiceRolePreviousValuesFields =
  | 'tenantIdServiceName'
  | 'keyAuthSecret'
  | 'updatedAt'
  | 'createdAt'



  

export interface ServiceRolePreviousValuesFieldDetails {
  tenantIdServiceName: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  keyAuthSecret: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  updatedAt: {
    type: 'DateTime'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  createdAt: {
    type: 'DateTime'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
}
  

// Types for PermissionSubscriptionPayload

type PermissionSubscriptionPayloadObject =
  | PermissionSubscriptionPayloadFields
  | { name: 'mutation', args?: [] | false, alias?: string  } 
  | { name: 'node', args?: [] | false, alias?: string  } 
  | { name: 'updatedFields', args?: [] | false, alias?: string  } 
  | { name: 'previousValues', args?: [] | false, alias?: string  } 

type PermissionSubscriptionPayloadFields =
  | 'mutation'
  | 'node'
  | 'updatedFields'
  | 'previousValues'



  

export interface PermissionSubscriptionPayloadFieldDetails {
  mutation: {
    type: 'MutationType'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"PermissionSubscriptionPayload">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.MutationType> | prisma.MutationType
  }
  node: {
    type: 'Permission'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"PermissionSubscriptionPayload">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Permission | null> | prisma.Permission | null
  }
  updatedFields: {
    type: 'String'
    args: {}
    description: string
    list: true
    nullable: false
    resolve: undefined
  }
  previousValues: {
    type: 'PermissionPreviousValues'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"PermissionSubscriptionPayload">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.PermissionPreviousValues | null> | prisma.PermissionPreviousValues | null
  }
}
  

// Types for PermissionPreviousValues

type PermissionPreviousValuesObject =
  | PermissionPreviousValuesFields
  | { name: 'name', args?: [] | false, alias?: string  } 
  | { name: 'remark', args?: [] | false, alias?: string  } 
  | { name: 'type', args?: [] | false, alias?: string  } 
  | { name: 'usedCount', args?: [] | false, alias?: string  } 
  | { name: 'currentVersion', args?: [] | false, alias?: string  } 
  | { name: 'version1Content', args?: [] | false, alias?: string  } 
  | { name: 'version2Content', args?: [] | false, alias?: string  } 
  | { name: 'version3Content', args?: [] | false, alias?: string  } 
  | { name: 'version4Content', args?: [] | false, alias?: string  } 
  | { name: 'version5Content', args?: [] | false, alias?: string  } 
  | { name: 'updatedAt', args?: [] | false, alias?: string  } 
  | { name: 'createdAt', args?: [] | false, alias?: string  } 

type PermissionPreviousValuesFields =
  | 'name'
  | 'remark'
  | 'type'
  | 'usedCount'
  | 'currentVersion'
  | 'version1Content'
  | 'version2Content'
  | 'version3Content'
  | 'version4Content'
  | 'version5Content'
  | 'updatedAt'
  | 'createdAt'



  

export interface PermissionPreviousValuesFieldDetails {
  name: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  remark: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  type: {
    type: 'PermissionType'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"PermissionPreviousValues">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.PermissionType | null> | prisma.PermissionType | null
  }
  usedCount: {
    type: 'Int'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  currentVersion: {
    type: 'Int'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  version1Content: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: undefined
  }
  version2Content: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: undefined
  }
  version3Content: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: undefined
  }
  version4Content: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: undefined
  }
  version5Content: {
    type: 'String'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: undefined
  }
  updatedAt: {
    type: 'DateTime'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  createdAt: {
    type: 'DateTime'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
}
  

// Types for GroupSubscriptionPayload

type GroupSubscriptionPayloadObject =
  | GroupSubscriptionPayloadFields
  | { name: 'mutation', args?: [] | false, alias?: string  } 
  | { name: 'node', args?: [] | false, alias?: string  } 
  | { name: 'updatedFields', args?: [] | false, alias?: string  } 
  | { name: 'previousValues', args?: [] | false, alias?: string  } 

type GroupSubscriptionPayloadFields =
  | 'mutation'
  | 'node'
  | 'updatedFields'
  | 'previousValues'



  

export interface GroupSubscriptionPayloadFieldDetails {
  mutation: {
    type: 'MutationType'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: (
      root: core.RootValue<"GroupSubscriptionPayload">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.MutationType> | prisma.MutationType
  }
  node: {
    type: 'Group'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"GroupSubscriptionPayload">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.Group | null> | prisma.Group | null
  }
  updatedFields: {
    type: 'String'
    args: {}
    description: string
    list: true
    nullable: false
    resolve: undefined
  }
  previousValues: {
    type: 'GroupPreviousValues'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"GroupSubscriptionPayload">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.GroupPreviousValues | null> | prisma.GroupPreviousValues | null
  }
}
  

// Types for GroupPreviousValues

type GroupPreviousValuesObject =
  | GroupPreviousValuesFields
  | { name: 'id', args?: [] | false, alias?: string  } 
  | { name: 'type', args?: [] | false, alias?: string  } 
  | { name: 'updatedAt', args?: [] | false, alias?: string  } 
  | { name: 'createdAt', args?: [] | false, alias?: string  } 

type GroupPreviousValuesFields =
  | 'id'
  | 'type'
  | 'updatedAt'
  | 'createdAt'



  

export interface GroupPreviousValuesFieldDetails {
  id: {
    type: 'ID'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  type: {
    type: 'GroupType'
    args: {}
    description: string
    list: undefined
    nullable: true
    resolve: (
      root: core.RootValue<"GroupPreviousValues">,
      args: {  }  ,
      context: core.GetGen<"context">,
      info?: GraphQLResolveInfo
    ) => Promise<prisma.GroupType | null> | prisma.GroupType | null
  }
  updatedAt: {
    type: 'DateTime'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
  createdAt: {
    type: 'DateTime'
    args: {}
    description: string
    list: undefined
    nullable: false
    resolve: undefined
  }
}
  


export interface AccountWhereUniqueInput {
  id?: string | null
  userName?: string | null
  email?: string | null
  idCard?: string | null
}
export type AccountWhereUniqueInputInputObject =
  | Extract<keyof AccountWhereUniqueInput, string>
  | { name: 'id', alias?: string  } 
  | { name: 'userName', alias?: string  } 
  | { name: 'email', alias?: string  } 
  | { name: 'idCard', alias?: string  } 
  
export interface AccountWhereInput {
  id?: string | null
  id_not?: string | null
  id_in?: string[]
  id_not_in?: string[]
  id_lt?: string | null
  id_lte?: string | null
  id_gt?: string | null
  id_gte?: string | null
  id_contains?: string | null
  id_not_contains?: string | null
  id_starts_with?: string | null
  id_not_starts_with?: string | null
  id_ends_with?: string | null
  id_not_ends_with?: string | null
  userName?: string | null
  userName_not?: string | null
  userName_in?: string[]
  userName_not_in?: string[]
  userName_lt?: string | null
  userName_lte?: string | null
  userName_gt?: string | null
  userName_gte?: string | null
  userName_contains?: string | null
  userName_not_contains?: string | null
  userName_starts_with?: string | null
  userName_not_starts_with?: string | null
  userName_ends_with?: string | null
  userName_not_ends_with?: string | null
  email?: string | null
  email_not?: string | null
  email_in?: string[]
  email_not_in?: string[]
  email_lt?: string | null
  email_lte?: string | null
  email_gt?: string | null
  email_gte?: string | null
  email_contains?: string | null
  email_not_contains?: string | null
  email_starts_with?: string | null
  email_not_starts_with?: string | null
  email_ends_with?: string | null
  email_not_ends_with?: string | null
  mobileNo?: string | null
  mobileNo_not?: string | null
  mobileNo_in?: string[]
  mobileNo_not_in?: string[]
  mobileNo_lt?: string | null
  mobileNo_lte?: string | null
  mobileNo_gt?: string | null
  mobileNo_gte?: string | null
  mobileNo_contains?: string | null
  mobileNo_not_contains?: string | null
  mobileNo_starts_with?: string | null
  mobileNo_not_starts_with?: string | null
  mobileNo_ends_with?: string | null
  mobileNo_not_ends_with?: string | null
  idCard?: string | null
  idCard_not?: string | null
  idCard_in?: string[]
  idCard_not_in?: string[]
  idCard_lt?: string | null
  idCard_lte?: string | null
  idCard_gt?: string | null
  idCard_gte?: string | null
  idCard_contains?: string | null
  idCard_not_contains?: string | null
  idCard_starts_with?: string | null
  idCard_not_starts_with?: string | null
  idCard_ends_with?: string | null
  idCard_not_ends_with?: string | null
  name?: string | null
  name_not?: string | null
  name_in?: string[]
  name_not_in?: string[]
  name_lt?: string | null
  name_lte?: string | null
  name_gt?: string | null
  name_gte?: string | null
  name_contains?: string | null
  name_not_contains?: string | null
  name_starts_with?: string | null
  name_not_starts_with?: string | null
  name_ends_with?: string | null
  name_not_ends_with?: string | null
  headpic?: string | null
  headpic_not?: string | null
  headpic_in?: string[]
  headpic_not_in?: string[]
  headpic_lt?: string | null
  headpic_lte?: string | null
  headpic_gt?: string | null
  headpic_gte?: string | null
  headpic_contains?: string | null
  headpic_not_contains?: string | null
  headpic_starts_with?: string | null
  headpic_not_starts_with?: string | null
  headpic_ends_with?: string | null
  headpic_not_ends_with?: string | null
  password?: string | null
  password_not?: string | null
  password_in?: string[]
  password_not_in?: string[]
  password_lt?: string | null
  password_lte?: string | null
  password_gt?: string | null
  password_gte?: string | null
  password_contains?: string | null
  password_not_contains?: string | null
  password_starts_with?: string | null
  password_not_starts_with?: string | null
  password_ends_with?: string | null
  password_not_ends_with?: string | null
  resetPasswordNext?: boolean | null
  resetPasswordNext_not?: boolean | null
  enable?: boolean | null
  enable_not?: boolean | null
  parentAccount?: AccountWhereInput | null
  subAccount_every?: AccountWhereInput | null
  subAccount_some?: AccountWhereInput | null
  subAccount_none?: AccountWhereInput | null
  accessKeys_every?: AccessKeyWhereInput | null
  accessKeys_some?: AccessKeyWhereInput | null
  accessKeys_none?: AccessKeyWhereInput | null
  groups_every?: GroupWhereInput | null
  groups_some?: GroupWhereInput | null
  groups_none?: GroupWhereInput | null
  permissions_every?: PermissionWhereInput | null
  permissions_some?: PermissionWhereInput | null
  permissions_none?: PermissionWhereInput | null
  lastLoginAt?: string | null
  lastLoginAt_not?: string | null
  lastLoginAt_in?: string[]
  lastLoginAt_not_in?: string[]
  lastLoginAt_lt?: string | null
  lastLoginAt_lte?: string | null
  lastLoginAt_gt?: string | null
  lastLoginAt_gte?: string | null
  updatedAt?: string | null
  updatedAt_not?: string | null
  updatedAt_in?: string[]
  updatedAt_not_in?: string[]
  updatedAt_lt?: string | null
  updatedAt_lte?: string | null
  updatedAt_gt?: string | null
  updatedAt_gte?: string | null
  createdAt?: string | null
  createdAt_not?: string | null
  createdAt_in?: string[]
  createdAt_not_in?: string[]
  createdAt_lt?: string | null
  createdAt_lte?: string | null
  createdAt_gt?: string | null
  createdAt_gte?: string | null
  AND?: AccountWhereInput[]
  OR?: AccountWhereInput[]
  NOT?: AccountWhereInput[]
}
export type AccountWhereInputInputObject =
  | Extract<keyof AccountWhereInput, string>
  | { name: 'id', alias?: string  } 
  | { name: 'id_not', alias?: string  } 
  | { name: 'id_in', alias?: string  } 
  | { name: 'id_not_in', alias?: string  } 
  | { name: 'id_lt', alias?: string  } 
  | { name: 'id_lte', alias?: string  } 
  | { name: 'id_gt', alias?: string  } 
  | { name: 'id_gte', alias?: string  } 
  | { name: 'id_contains', alias?: string  } 
  | { name: 'id_not_contains', alias?: string  } 
  | { name: 'id_starts_with', alias?: string  } 
  | { name: 'id_not_starts_with', alias?: string  } 
  | { name: 'id_ends_with', alias?: string  } 
  | { name: 'id_not_ends_with', alias?: string  } 
  | { name: 'userName', alias?: string  } 
  | { name: 'userName_not', alias?: string  } 
  | { name: 'userName_in', alias?: string  } 
  | { name: 'userName_not_in', alias?: string  } 
  | { name: 'userName_lt', alias?: string  } 
  | { name: 'userName_lte', alias?: string  } 
  | { name: 'userName_gt', alias?: string  } 
  | { name: 'userName_gte', alias?: string  } 
  | { name: 'userName_contains', alias?: string  } 
  | { name: 'userName_not_contains', alias?: string  } 
  | { name: 'userName_starts_with', alias?: string  } 
  | { name: 'userName_not_starts_with', alias?: string  } 
  | { name: 'userName_ends_with', alias?: string  } 
  | { name: 'userName_not_ends_with', alias?: string  } 
  | { name: 'email', alias?: string  } 
  | { name: 'email_not', alias?: string  } 
  | { name: 'email_in', alias?: string  } 
  | { name: 'email_not_in', alias?: string  } 
  | { name: 'email_lt', alias?: string  } 
  | { name: 'email_lte', alias?: string  } 
  | { name: 'email_gt', alias?: string  } 
  | { name: 'email_gte', alias?: string  } 
  | { name: 'email_contains', alias?: string  } 
  | { name: 'email_not_contains', alias?: string  } 
  | { name: 'email_starts_with', alias?: string  } 
  | { name: 'email_not_starts_with', alias?: string  } 
  | { name: 'email_ends_with', alias?: string  } 
  | { name: 'email_not_ends_with', alias?: string  } 
  | { name: 'mobileNo', alias?: string  } 
  | { name: 'mobileNo_not', alias?: string  } 
  | { name: 'mobileNo_in', alias?: string  } 
  | { name: 'mobileNo_not_in', alias?: string  } 
  | { name: 'mobileNo_lt', alias?: string  } 
  | { name: 'mobileNo_lte', alias?: string  } 
  | { name: 'mobileNo_gt', alias?: string  } 
  | { name: 'mobileNo_gte', alias?: string  } 
  | { name: 'mobileNo_contains', alias?: string  } 
  | { name: 'mobileNo_not_contains', alias?: string  } 
  | { name: 'mobileNo_starts_with', alias?: string  } 
  | { name: 'mobileNo_not_starts_with', alias?: string  } 
  | { name: 'mobileNo_ends_with', alias?: string  } 
  | { name: 'mobileNo_not_ends_with', alias?: string  } 
  | { name: 'idCard', alias?: string  } 
  | { name: 'idCard_not', alias?: string  } 
  | { name: 'idCard_in', alias?: string  } 
  | { name: 'idCard_not_in', alias?: string  } 
  | { name: 'idCard_lt', alias?: string  } 
  | { name: 'idCard_lte', alias?: string  } 
  | { name: 'idCard_gt', alias?: string  } 
  | { name: 'idCard_gte', alias?: string  } 
  | { name: 'idCard_contains', alias?: string  } 
  | { name: 'idCard_not_contains', alias?: string  } 
  | { name: 'idCard_starts_with', alias?: string  } 
  | { name: 'idCard_not_starts_with', alias?: string  } 
  | { name: 'idCard_ends_with', alias?: string  } 
  | { name: 'idCard_not_ends_with', alias?: string  } 
  | { name: 'name', alias?: string  } 
  | { name: 'name_not', alias?: string  } 
  | { name: 'name_in', alias?: string  } 
  | { name: 'name_not_in', alias?: string  } 
  | { name: 'name_lt', alias?: string  } 
  | { name: 'name_lte', alias?: string  } 
  | { name: 'name_gt', alias?: string  } 
  | { name: 'name_gte', alias?: string  } 
  | { name: 'name_contains', alias?: string  } 
  | { name: 'name_not_contains', alias?: string  } 
  | { name: 'name_starts_with', alias?: string  } 
  | { name: 'name_not_starts_with', alias?: string  } 
  | { name: 'name_ends_with', alias?: string  } 
  | { name: 'name_not_ends_with', alias?: string  } 
  | { name: 'headpic', alias?: string  } 
  | { name: 'headpic_not', alias?: string  } 
  | { name: 'headpic_in', alias?: string  } 
  | { name: 'headpic_not_in', alias?: string  } 
  | { name: 'headpic_lt', alias?: string  } 
  | { name: 'headpic_lte', alias?: string  } 
  | { name: 'headpic_gt', alias?: string  } 
  | { name: 'headpic_gte', alias?: string  } 
  | { name: 'headpic_contains', alias?: string  } 
  | { name: 'headpic_not_contains', alias?: string  } 
  | { name: 'headpic_starts_with', alias?: string  } 
  | { name: 'headpic_not_starts_with', alias?: string  } 
  | { name: 'headpic_ends_with', alias?: string  } 
  | { name: 'headpic_not_ends_with', alias?: string  } 
  | { name: 'password', alias?: string  } 
  | { name: 'password_not', alias?: string  } 
  | { name: 'password_in', alias?: string  } 
  | { name: 'password_not_in', alias?: string  } 
  | { name: 'password_lt', alias?: string  } 
  | { name: 'password_lte', alias?: string  } 
  | { name: 'password_gt', alias?: string  } 
  | { name: 'password_gte', alias?: string  } 
  | { name: 'password_contains', alias?: string  } 
  | { name: 'password_not_contains', alias?: string  } 
  | { name: 'password_starts_with', alias?: string  } 
  | { name: 'password_not_starts_with', alias?: string  } 
  | { name: 'password_ends_with', alias?: string  } 
  | { name: 'password_not_ends_with', alias?: string  } 
  | { name: 'resetPasswordNext', alias?: string  } 
  | { name: 'resetPasswordNext_not', alias?: string  } 
  | { name: 'enable', alias?: string  } 
  | { name: 'enable_not', alias?: string  } 
  | { name: 'parentAccount', alias?: string  } 
  | { name: 'subAccount_every', alias?: string  } 
  | { name: 'subAccount_some', alias?: string  } 
  | { name: 'subAccount_none', alias?: string  } 
  | { name: 'accessKeys_every', alias?: string  } 
  | { name: 'accessKeys_some', alias?: string  } 
  | { name: 'accessKeys_none', alias?: string  } 
  | { name: 'groups_every', alias?: string  } 
  | { name: 'groups_some', alias?: string  } 
  | { name: 'groups_none', alias?: string  } 
  | { name: 'permissions_every', alias?: string  } 
  | { name: 'permissions_some', alias?: string  } 
  | { name: 'permissions_none', alias?: string  } 
  | { name: 'lastLoginAt', alias?: string  } 
  | { name: 'lastLoginAt_not', alias?: string  } 
  | { name: 'lastLoginAt_in', alias?: string  } 
  | { name: 'lastLoginAt_not_in', alias?: string  } 
  | { name: 'lastLoginAt_lt', alias?: string  } 
  | { name: 'lastLoginAt_lte', alias?: string  } 
  | { name: 'lastLoginAt_gt', alias?: string  } 
  | { name: 'lastLoginAt_gte', alias?: string  } 
  | { name: 'updatedAt', alias?: string  } 
  | { name: 'updatedAt_not', alias?: string  } 
  | { name: 'updatedAt_in', alias?: string  } 
  | { name: 'updatedAt_not_in', alias?: string  } 
  | { name: 'updatedAt_lt', alias?: string  } 
  | { name: 'updatedAt_lte', alias?: string  } 
  | { name: 'updatedAt_gt', alias?: string  } 
  | { name: 'updatedAt_gte', alias?: string  } 
  | { name: 'createdAt', alias?: string  } 
  | { name: 'createdAt_not', alias?: string  } 
  | { name: 'createdAt_in', alias?: string  } 
  | { name: 'createdAt_not_in', alias?: string  } 
  | { name: 'createdAt_lt', alias?: string  } 
  | { name: 'createdAt_lte', alias?: string  } 
  | { name: 'createdAt_gt', alias?: string  } 
  | { name: 'createdAt_gte', alias?: string  } 
  | { name: 'AND', alias?: string  } 
  | { name: 'OR', alias?: string  } 
  | { name: 'NOT', alias?: string  } 
  
export interface AccessKeyWhereInput {
  id?: string | null
  id_not?: string | null
  id_in?: string[]
  id_not_in?: string[]
  id_lt?: string | null
  id_lte?: string | null
  id_gt?: string | null
  id_gte?: string | null
  id_contains?: string | null
  id_not_contains?: string | null
  id_starts_with?: string | null
  id_not_starts_with?: string | null
  id_ends_with?: string | null
  id_not_ends_with?: string | null
  secret?: string | null
  secret_not?: string | null
  secret_in?: string[]
  secret_not_in?: string[]
  secret_lt?: string | null
  secret_lte?: string | null
  secret_gt?: string | null
  secret_gte?: string | null
  secret_contains?: string | null
  secret_not_contains?: string | null
  secret_starts_with?: string | null
  secret_not_starts_with?: string | null
  secret_ends_with?: string | null
  secret_not_ends_with?: string | null
  activated?: boolean | null
  activated_not?: boolean | null
  account?: AccountWhereInput | null
  updatedAt?: string | null
  updatedAt_not?: string | null
  updatedAt_in?: string[]
  updatedAt_not_in?: string[]
  updatedAt_lt?: string | null
  updatedAt_lte?: string | null
  updatedAt_gt?: string | null
  updatedAt_gte?: string | null
  createdAt?: string | null
  createdAt_not?: string | null
  createdAt_in?: string[]
  createdAt_not_in?: string[]
  createdAt_lt?: string | null
  createdAt_lte?: string | null
  createdAt_gt?: string | null
  createdAt_gte?: string | null
  AND?: AccessKeyWhereInput[]
  OR?: AccessKeyWhereInput[]
  NOT?: AccessKeyWhereInput[]
}
export type AccessKeyWhereInputInputObject =
  | Extract<keyof AccessKeyWhereInput, string>
  | { name: 'id', alias?: string  } 
  | { name: 'id_not', alias?: string  } 
  | { name: 'id_in', alias?: string  } 
  | { name: 'id_not_in', alias?: string  } 
  | { name: 'id_lt', alias?: string  } 
  | { name: 'id_lte', alias?: string  } 
  | { name: 'id_gt', alias?: string  } 
  | { name: 'id_gte', alias?: string  } 
  | { name: 'id_contains', alias?: string  } 
  | { name: 'id_not_contains', alias?: string  } 
  | { name: 'id_starts_with', alias?: string  } 
  | { name: 'id_not_starts_with', alias?: string  } 
  | { name: 'id_ends_with', alias?: string  } 
  | { name: 'id_not_ends_with', alias?: string  } 
  | { name: 'secret', alias?: string  } 
  | { name: 'secret_not', alias?: string  } 
  | { name: 'secret_in', alias?: string  } 
  | { name: 'secret_not_in', alias?: string  } 
  | { name: 'secret_lt', alias?: string  } 
  | { name: 'secret_lte', alias?: string  } 
  | { name: 'secret_gt', alias?: string  } 
  | { name: 'secret_gte', alias?: string  } 
  | { name: 'secret_contains', alias?: string  } 
  | { name: 'secret_not_contains', alias?: string  } 
  | { name: 'secret_starts_with', alias?: string  } 
  | { name: 'secret_not_starts_with', alias?: string  } 
  | { name: 'secret_ends_with', alias?: string  } 
  | { name: 'secret_not_ends_with', alias?: string  } 
  | { name: 'activated', alias?: string  } 
  | { name: 'activated_not', alias?: string  } 
  | { name: 'account', alias?: string  } 
  | { name: 'updatedAt', alias?: string  } 
  | { name: 'updatedAt_not', alias?: string  } 
  | { name: 'updatedAt_in', alias?: string  } 
  | { name: 'updatedAt_not_in', alias?: string  } 
  | { name: 'updatedAt_lt', alias?: string  } 
  | { name: 'updatedAt_lte', alias?: string  } 
  | { name: 'updatedAt_gt', alias?: string  } 
  | { name: 'updatedAt_gte', alias?: string  } 
  | { name: 'createdAt', alias?: string  } 
  | { name: 'createdAt_not', alias?: string  } 
  | { name: 'createdAt_in', alias?: string  } 
  | { name: 'createdAt_not_in', alias?: string  } 
  | { name: 'createdAt_lt', alias?: string  } 
  | { name: 'createdAt_lte', alias?: string  } 
  | { name: 'createdAt_gt', alias?: string  } 
  | { name: 'createdAt_gte', alias?: string  } 
  | { name: 'AND', alias?: string  } 
  | { name: 'OR', alias?: string  } 
  | { name: 'NOT', alias?: string  } 
  
export interface GroupWhereInput {
  id?: string | null
  id_not?: string | null
  id_in?: string[]
  id_not_in?: string[]
  id_lt?: string | null
  id_lte?: string | null
  id_gt?: string | null
  id_gte?: string | null
  id_contains?: string | null
  id_not_contains?: string | null
  id_starts_with?: string | null
  id_not_starts_with?: string | null
  id_ends_with?: string | null
  id_not_ends_with?: string | null
  type?: prisma.GroupType | null
  type_not?: prisma.GroupType | null
  type_in?: prisma.GroupType[]
  type_not_in?: prisma.GroupType[]
  accounts_every?: AccountWhereInput | null
  accounts_some?: AccountWhereInput | null
  accounts_none?: AccountWhereInput | null
  permissions_every?: PermissionWhereInput | null
  permissions_some?: PermissionWhereInput | null
  permissions_none?: PermissionWhereInput | null
  updatedAt?: string | null
  updatedAt_not?: string | null
  updatedAt_in?: string[]
  updatedAt_not_in?: string[]
  updatedAt_lt?: string | null
  updatedAt_lte?: string | null
  updatedAt_gt?: string | null
  updatedAt_gte?: string | null
  createdAt?: string | null
  createdAt_not?: string | null
  createdAt_in?: string[]
  createdAt_not_in?: string[]
  createdAt_lt?: string | null
  createdAt_lte?: string | null
  createdAt_gt?: string | null
  createdAt_gte?: string | null
  AND?: GroupWhereInput[]
  OR?: GroupWhereInput[]
  NOT?: GroupWhereInput[]
}
export type GroupWhereInputInputObject =
  | Extract<keyof GroupWhereInput, string>
  | { name: 'id', alias?: string  } 
  | { name: 'id_not', alias?: string  } 
  | { name: 'id_in', alias?: string  } 
  | { name: 'id_not_in', alias?: string  } 
  | { name: 'id_lt', alias?: string  } 
  | { name: 'id_lte', alias?: string  } 
  | { name: 'id_gt', alias?: string  } 
  | { name: 'id_gte', alias?: string  } 
  | { name: 'id_contains', alias?: string  } 
  | { name: 'id_not_contains', alias?: string  } 
  | { name: 'id_starts_with', alias?: string  } 
  | { name: 'id_not_starts_with', alias?: string  } 
  | { name: 'id_ends_with', alias?: string  } 
  | { name: 'id_not_ends_with', alias?: string  } 
  | { name: 'type', alias?: string  } 
  | { name: 'type_not', alias?: string  } 
  | { name: 'type_in', alias?: string  } 
  | { name: 'type_not_in', alias?: string  } 
  | { name: 'accounts_every', alias?: string  } 
  | { name: 'accounts_some', alias?: string  } 
  | { name: 'accounts_none', alias?: string  } 
  | { name: 'permissions_every', alias?: string  } 
  | { name: 'permissions_some', alias?: string  } 
  | { name: 'permissions_none', alias?: string  } 
  | { name: 'updatedAt', alias?: string  } 
  | { name: 'updatedAt_not', alias?: string  } 
  | { name: 'updatedAt_in', alias?: string  } 
  | { name: 'updatedAt_not_in', alias?: string  } 
  | { name: 'updatedAt_lt', alias?: string  } 
  | { name: 'updatedAt_lte', alias?: string  } 
  | { name: 'updatedAt_gt', alias?: string  } 
  | { name: 'updatedAt_gte', alias?: string  } 
  | { name: 'createdAt', alias?: string  } 
  | { name: 'createdAt_not', alias?: string  } 
  | { name: 'createdAt_in', alias?: string  } 
  | { name: 'createdAt_not_in', alias?: string  } 
  | { name: 'createdAt_lt', alias?: string  } 
  | { name: 'createdAt_lte', alias?: string  } 
  | { name: 'createdAt_gt', alias?: string  } 
  | { name: 'createdAt_gte', alias?: string  } 
  | { name: 'AND', alias?: string  } 
  | { name: 'OR', alias?: string  } 
  | { name: 'NOT', alias?: string  } 
  
export interface PermissionWhereInput {
  name?: string | null
  name_not?: string | null
  name_in?: string[]
  name_not_in?: string[]
  name_lt?: string | null
  name_lte?: string | null
  name_gt?: string | null
  name_gte?: string | null
  name_contains?: string | null
  name_not_contains?: string | null
  name_starts_with?: string | null
  name_not_starts_with?: string | null
  name_ends_with?: string | null
  name_not_ends_with?: string | null
  remark?: string | null
  remark_not?: string | null
  remark_in?: string[]
  remark_not_in?: string[]
  remark_lt?: string | null
  remark_lte?: string | null
  remark_gt?: string | null
  remark_gte?: string | null
  remark_contains?: string | null
  remark_not_contains?: string | null
  remark_starts_with?: string | null
  remark_not_starts_with?: string | null
  remark_ends_with?: string | null
  remark_not_ends_with?: string | null
  type?: prisma.PermissionType | null
  type_not?: prisma.PermissionType | null
  type_in?: prisma.PermissionType[]
  type_not_in?: prisma.PermissionType[]
  usedCount?: number | null
  usedCount_not?: number | null
  usedCount_in?: number[]
  usedCount_not_in?: number[]
  usedCount_lt?: number | null
  usedCount_lte?: number | null
  usedCount_gt?: number | null
  usedCount_gte?: number | null
  currentVersion?: number | null
  currentVersion_not?: number | null
  currentVersion_in?: number[]
  currentVersion_not_in?: number[]
  currentVersion_lt?: number | null
  currentVersion_lte?: number | null
  currentVersion_gt?: number | null
  currentVersion_gte?: number | null
  version1Content?: string | null
  version1Content_not?: string | null
  version1Content_in?: string[]
  version1Content_not_in?: string[]
  version1Content_lt?: string | null
  version1Content_lte?: string | null
  version1Content_gt?: string | null
  version1Content_gte?: string | null
  version1Content_contains?: string | null
  version1Content_not_contains?: string | null
  version1Content_starts_with?: string | null
  version1Content_not_starts_with?: string | null
  version1Content_ends_with?: string | null
  version1Content_not_ends_with?: string | null
  version2Content?: string | null
  version2Content_not?: string | null
  version2Content_in?: string[]
  version2Content_not_in?: string[]
  version2Content_lt?: string | null
  version2Content_lte?: string | null
  version2Content_gt?: string | null
  version2Content_gte?: string | null
  version2Content_contains?: string | null
  version2Content_not_contains?: string | null
  version2Content_starts_with?: string | null
  version2Content_not_starts_with?: string | null
  version2Content_ends_with?: string | null
  version2Content_not_ends_with?: string | null
  version3Content?: string | null
  version3Content_not?: string | null
  version3Content_in?: string[]
  version3Content_not_in?: string[]
  version3Content_lt?: string | null
  version3Content_lte?: string | null
  version3Content_gt?: string | null
  version3Content_gte?: string | null
  version3Content_contains?: string | null
  version3Content_not_contains?: string | null
  version3Content_starts_with?: string | null
  version3Content_not_starts_with?: string | null
  version3Content_ends_with?: string | null
  version3Content_not_ends_with?: string | null
  version4Content?: string | null
  version4Content_not?: string | null
  version4Content_in?: string[]
  version4Content_not_in?: string[]
  version4Content_lt?: string | null
  version4Content_lte?: string | null
  version4Content_gt?: string | null
  version4Content_gte?: string | null
  version4Content_contains?: string | null
  version4Content_not_contains?: string | null
  version4Content_starts_with?: string | null
  version4Content_not_starts_with?: string | null
  version4Content_ends_with?: string | null
  version4Content_not_ends_with?: string | null
  version5Content?: string | null
  version5Content_not?: string | null
  version5Content_in?: string[]
  version5Content_not_in?: string[]
  version5Content_lt?: string | null
  version5Content_lte?: string | null
  version5Content_gt?: string | null
  version5Content_gte?: string | null
  version5Content_contains?: string | null
  version5Content_not_contains?: string | null
  version5Content_starts_with?: string | null
  version5Content_not_starts_with?: string | null
  version5Content_ends_with?: string | null
  version5Content_not_ends_with?: string | null
  updatedAt?: string | null
  updatedAt_not?: string | null
  updatedAt_in?: string[]
  updatedAt_not_in?: string[]
  updatedAt_lt?: string | null
  updatedAt_lte?: string | null
  updatedAt_gt?: string | null
  updatedAt_gte?: string | null
  createdAt?: string | null
  createdAt_not?: string | null
  createdAt_in?: string[]
  createdAt_not_in?: string[]
  createdAt_lt?: string | null
  createdAt_lte?: string | null
  createdAt_gt?: string | null
  createdAt_gte?: string | null
  AND?: PermissionWhereInput[]
  OR?: PermissionWhereInput[]
  NOT?: PermissionWhereInput[]
}
export type PermissionWhereInputInputObject =
  | Extract<keyof PermissionWhereInput, string>
  | { name: 'name', alias?: string  } 
  | { name: 'name_not', alias?: string  } 
  | { name: 'name_in', alias?: string  } 
  | { name: 'name_not_in', alias?: string  } 
  | { name: 'name_lt', alias?: string  } 
  | { name: 'name_lte', alias?: string  } 
  | { name: 'name_gt', alias?: string  } 
  | { name: 'name_gte', alias?: string  } 
  | { name: 'name_contains', alias?: string  } 
  | { name: 'name_not_contains', alias?: string  } 
  | { name: 'name_starts_with', alias?: string  } 
  | { name: 'name_not_starts_with', alias?: string  } 
  | { name: 'name_ends_with', alias?: string  } 
  | { name: 'name_not_ends_with', alias?: string  } 
  | { name: 'remark', alias?: string  } 
  | { name: 'remark_not', alias?: string  } 
  | { name: 'remark_in', alias?: string  } 
  | { name: 'remark_not_in', alias?: string  } 
  | { name: 'remark_lt', alias?: string  } 
  | { name: 'remark_lte', alias?: string  } 
  | { name: 'remark_gt', alias?: string  } 
  | { name: 'remark_gte', alias?: string  } 
  | { name: 'remark_contains', alias?: string  } 
  | { name: 'remark_not_contains', alias?: string  } 
  | { name: 'remark_starts_with', alias?: string  } 
  | { name: 'remark_not_starts_with', alias?: string  } 
  | { name: 'remark_ends_with', alias?: string  } 
  | { name: 'remark_not_ends_with', alias?: string  } 
  | { name: 'type', alias?: string  } 
  | { name: 'type_not', alias?: string  } 
  | { name: 'type_in', alias?: string  } 
  | { name: 'type_not_in', alias?: string  } 
  | { name: 'usedCount', alias?: string  } 
  | { name: 'usedCount_not', alias?: string  } 
  | { name: 'usedCount_in', alias?: string  } 
  | { name: 'usedCount_not_in', alias?: string  } 
  | { name: 'usedCount_lt', alias?: string  } 
  | { name: 'usedCount_lte', alias?: string  } 
  | { name: 'usedCount_gt', alias?: string  } 
  | { name: 'usedCount_gte', alias?: string  } 
  | { name: 'currentVersion', alias?: string  } 
  | { name: 'currentVersion_not', alias?: string  } 
  | { name: 'currentVersion_in', alias?: string  } 
  | { name: 'currentVersion_not_in', alias?: string  } 
  | { name: 'currentVersion_lt', alias?: string  } 
  | { name: 'currentVersion_lte', alias?: string  } 
  | { name: 'currentVersion_gt', alias?: string  } 
  | { name: 'currentVersion_gte', alias?: string  } 
  | { name: 'version1Content', alias?: string  } 
  | { name: 'version1Content_not', alias?: string  } 
  | { name: 'version1Content_in', alias?: string  } 
  | { name: 'version1Content_not_in', alias?: string  } 
  | { name: 'version1Content_lt', alias?: string  } 
  | { name: 'version1Content_lte', alias?: string  } 
  | { name: 'version1Content_gt', alias?: string  } 
  | { name: 'version1Content_gte', alias?: string  } 
  | { name: 'version1Content_contains', alias?: string  } 
  | { name: 'version1Content_not_contains', alias?: string  } 
  | { name: 'version1Content_starts_with', alias?: string  } 
  | { name: 'version1Content_not_starts_with', alias?: string  } 
  | { name: 'version1Content_ends_with', alias?: string  } 
  | { name: 'version1Content_not_ends_with', alias?: string  } 
  | { name: 'version2Content', alias?: string  } 
  | { name: 'version2Content_not', alias?: string  } 
  | { name: 'version2Content_in', alias?: string  } 
  | { name: 'version2Content_not_in', alias?: string  } 
  | { name: 'version2Content_lt', alias?: string  } 
  | { name: 'version2Content_lte', alias?: string  } 
  | { name: 'version2Content_gt', alias?: string  } 
  | { name: 'version2Content_gte', alias?: string  } 
  | { name: 'version2Content_contains', alias?: string  } 
  | { name: 'version2Content_not_contains', alias?: string  } 
  | { name: 'version2Content_starts_with', alias?: string  } 
  | { name: 'version2Content_not_starts_with', alias?: string  } 
  | { name: 'version2Content_ends_with', alias?: string  } 
  | { name: 'version2Content_not_ends_with', alias?: string  } 
  | { name: 'version3Content', alias?: string  } 
  | { name: 'version3Content_not', alias?: string  } 
  | { name: 'version3Content_in', alias?: string  } 
  | { name: 'version3Content_not_in', alias?: string  } 
  | { name: 'version3Content_lt', alias?: string  } 
  | { name: 'version3Content_lte', alias?: string  } 
  | { name: 'version3Content_gt', alias?: string  } 
  | { name: 'version3Content_gte', alias?: string  } 
  | { name: 'version3Content_contains', alias?: string  } 
  | { name: 'version3Content_not_contains', alias?: string  } 
  | { name: 'version3Content_starts_with', alias?: string  } 
  | { name: 'version3Content_not_starts_with', alias?: string  } 
  | { name: 'version3Content_ends_with', alias?: string  } 
  | { name: 'version3Content_not_ends_with', alias?: string  } 
  | { name: 'version4Content', alias?: string  } 
  | { name: 'version4Content_not', alias?: string  } 
  | { name: 'version4Content_in', alias?: string  } 
  | { name: 'version4Content_not_in', alias?: string  } 
  | { name: 'version4Content_lt', alias?: string  } 
  | { name: 'version4Content_lte', alias?: string  } 
  | { name: 'version4Content_gt', alias?: string  } 
  | { name: 'version4Content_gte', alias?: string  } 
  | { name: 'version4Content_contains', alias?: string  } 
  | { name: 'version4Content_not_contains', alias?: string  } 
  | { name: 'version4Content_starts_with', alias?: string  } 
  | { name: 'version4Content_not_starts_with', alias?: string  } 
  | { name: 'version4Content_ends_with', alias?: string  } 
  | { name: 'version4Content_not_ends_with', alias?: string  } 
  | { name: 'version5Content', alias?: string  } 
  | { name: 'version5Content_not', alias?: string  } 
  | { name: 'version5Content_in', alias?: string  } 
  | { name: 'version5Content_not_in', alias?: string  } 
  | { name: 'version5Content_lt', alias?: string  } 
  | { name: 'version5Content_lte', alias?: string  } 
  | { name: 'version5Content_gt', alias?: string  } 
  | { name: 'version5Content_gte', alias?: string  } 
  | { name: 'version5Content_contains', alias?: string  } 
  | { name: 'version5Content_not_contains', alias?: string  } 
  | { name: 'version5Content_starts_with', alias?: string  } 
  | { name: 'version5Content_not_starts_with', alias?: string  } 
  | { name: 'version5Content_ends_with', alias?: string  } 
  | { name: 'version5Content_not_ends_with', alias?: string  } 
  | { name: 'updatedAt', alias?: string  } 
  | { name: 'updatedAt_not', alias?: string  } 
  | { name: 'updatedAt_in', alias?: string  } 
  | { name: 'updatedAt_not_in', alias?: string  } 
  | { name: 'updatedAt_lt', alias?: string  } 
  | { name: 'updatedAt_lte', alias?: string  } 
  | { name: 'updatedAt_gt', alias?: string  } 
  | { name: 'updatedAt_gte', alias?: string  } 
  | { name: 'createdAt', alias?: string  } 
  | { name: 'createdAt_not', alias?: string  } 
  | { name: 'createdAt_in', alias?: string  } 
  | { name: 'createdAt_not_in', alias?: string  } 
  | { name: 'createdAt_lt', alias?: string  } 
  | { name: 'createdAt_lte', alias?: string  } 
  | { name: 'createdAt_gt', alias?: string  } 
  | { name: 'createdAt_gte', alias?: string  } 
  | { name: 'AND', alias?: string  } 
  | { name: 'OR', alias?: string  } 
  | { name: 'NOT', alias?: string  } 
  
export interface JwtRsaWhereUniqueInput {
  id?: string | null
}
export type JwtRsaWhereUniqueInputInputObject =
  | Extract<keyof JwtRsaWhereUniqueInput, string>
  | { name: 'id', alias?: string  } 
  
export interface JwtRsaWhereInput {
  id?: string | null
  id_not?: string | null
  id_in?: string[]
  id_not_in?: string[]
  id_lt?: string | null
  id_lte?: string | null
  id_gt?: string | null
  id_gte?: string | null
  id_contains?: string | null
  id_not_contains?: string | null
  id_starts_with?: string | null
  id_not_starts_with?: string | null
  id_ends_with?: string | null
  id_not_ends_with?: string | null
  publicKey?: string | null
  publicKey_not?: string | null
  publicKey_in?: string[]
  publicKey_not_in?: string[]
  publicKey_lt?: string | null
  publicKey_lte?: string | null
  publicKey_gt?: string | null
  publicKey_gte?: string | null
  publicKey_contains?: string | null
  publicKey_not_contains?: string | null
  publicKey_starts_with?: string | null
  publicKey_not_starts_with?: string | null
  publicKey_ends_with?: string | null
  publicKey_not_ends_with?: string | null
  privateKey?: string | null
  privateKey_not?: string | null
  privateKey_in?: string[]
  privateKey_not_in?: string[]
  privateKey_lt?: string | null
  privateKey_lte?: string | null
  privateKey_gt?: string | null
  privateKey_gte?: string | null
  privateKey_contains?: string | null
  privateKey_not_contains?: string | null
  privateKey_starts_with?: string | null
  privateKey_not_starts_with?: string | null
  privateKey_ends_with?: string | null
  privateKey_not_ends_with?: string | null
  updatedAt?: string | null
  updatedAt_not?: string | null
  updatedAt_in?: string[]
  updatedAt_not_in?: string[]
  updatedAt_lt?: string | null
  updatedAt_lte?: string | null
  updatedAt_gt?: string | null
  updatedAt_gte?: string | null
  createdAt?: string | null
  createdAt_not?: string | null
  createdAt_in?: string[]
  createdAt_not_in?: string[]
  createdAt_lt?: string | null
  createdAt_lte?: string | null
  createdAt_gt?: string | null
  createdAt_gte?: string | null
  AND?: JwtRsaWhereInput[]
  OR?: JwtRsaWhereInput[]
  NOT?: JwtRsaWhereInput[]
}
export type JwtRsaWhereInputInputObject =
  | Extract<keyof JwtRsaWhereInput, string>
  | { name: 'id', alias?: string  } 
  | { name: 'id_not', alias?: string  } 
  | { name: 'id_in', alias?: string  } 
  | { name: 'id_not_in', alias?: string  } 
  | { name: 'id_lt', alias?: string  } 
  | { name: 'id_lte', alias?: string  } 
  | { name: 'id_gt', alias?: string  } 
  | { name: 'id_gte', alias?: string  } 
  | { name: 'id_contains', alias?: string  } 
  | { name: 'id_not_contains', alias?: string  } 
  | { name: 'id_starts_with', alias?: string  } 
  | { name: 'id_not_starts_with', alias?: string  } 
  | { name: 'id_ends_with', alias?: string  } 
  | { name: 'id_not_ends_with', alias?: string  } 
  | { name: 'publicKey', alias?: string  } 
  | { name: 'publicKey_not', alias?: string  } 
  | { name: 'publicKey_in', alias?: string  } 
  | { name: 'publicKey_not_in', alias?: string  } 
  | { name: 'publicKey_lt', alias?: string  } 
  | { name: 'publicKey_lte', alias?: string  } 
  | { name: 'publicKey_gt', alias?: string  } 
  | { name: 'publicKey_gte', alias?: string  } 
  | { name: 'publicKey_contains', alias?: string  } 
  | { name: 'publicKey_not_contains', alias?: string  } 
  | { name: 'publicKey_starts_with', alias?: string  } 
  | { name: 'publicKey_not_starts_with', alias?: string  } 
  | { name: 'publicKey_ends_with', alias?: string  } 
  | { name: 'publicKey_not_ends_with', alias?: string  } 
  | { name: 'privateKey', alias?: string  } 
  | { name: 'privateKey_not', alias?: string  } 
  | { name: 'privateKey_in', alias?: string  } 
  | { name: 'privateKey_not_in', alias?: string  } 
  | { name: 'privateKey_lt', alias?: string  } 
  | { name: 'privateKey_lte', alias?: string  } 
  | { name: 'privateKey_gt', alias?: string  } 
  | { name: 'privateKey_gte', alias?: string  } 
  | { name: 'privateKey_contains', alias?: string  } 
  | { name: 'privateKey_not_contains', alias?: string  } 
  | { name: 'privateKey_starts_with', alias?: string  } 
  | { name: 'privateKey_not_starts_with', alias?: string  } 
  | { name: 'privateKey_ends_with', alias?: string  } 
  | { name: 'privateKey_not_ends_with', alias?: string  } 
  | { name: 'updatedAt', alias?: string  } 
  | { name: 'updatedAt_not', alias?: string  } 
  | { name: 'updatedAt_in', alias?: string  } 
  | { name: 'updatedAt_not_in', alias?: string  } 
  | { name: 'updatedAt_lt', alias?: string  } 
  | { name: 'updatedAt_lte', alias?: string  } 
  | { name: 'updatedAt_gt', alias?: string  } 
  | { name: 'updatedAt_gte', alias?: string  } 
  | { name: 'createdAt', alias?: string  } 
  | { name: 'createdAt_not', alias?: string  } 
  | { name: 'createdAt_in', alias?: string  } 
  | { name: 'createdAt_not_in', alias?: string  } 
  | { name: 'createdAt_lt', alias?: string  } 
  | { name: 'createdAt_lte', alias?: string  } 
  | { name: 'createdAt_gt', alias?: string  } 
  | { name: 'createdAt_gte', alias?: string  } 
  | { name: 'AND', alias?: string  } 
  | { name: 'OR', alias?: string  } 
  | { name: 'NOT', alias?: string  } 
  
export interface AccessKeyWhereUniqueInput {
  id?: string | null
  secret?: string | null
}
export type AccessKeyWhereUniqueInputInputObject =
  | Extract<keyof AccessKeyWhereUniqueInput, string>
  | { name: 'id', alias?: string  } 
  | { name: 'secret', alias?: string  } 
  
export interface ServiceRoleWhereUniqueInput {
  tenantIdServiceName?: string | null
  keyAuthSecret?: string | null
}
export type ServiceRoleWhereUniqueInputInputObject =
  | Extract<keyof ServiceRoleWhereUniqueInput, string>
  | { name: 'tenantIdServiceName', alias?: string  } 
  | { name: 'keyAuthSecret', alias?: string  } 
  
export interface ServiceRoleWhereInput {
  tenantIdServiceName?: string | null
  tenantIdServiceName_not?: string | null
  tenantIdServiceName_in?: string[]
  tenantIdServiceName_not_in?: string[]
  tenantIdServiceName_lt?: string | null
  tenantIdServiceName_lte?: string | null
  tenantIdServiceName_gt?: string | null
  tenantIdServiceName_gte?: string | null
  tenantIdServiceName_contains?: string | null
  tenantIdServiceName_not_contains?: string | null
  tenantIdServiceName_starts_with?: string | null
  tenantIdServiceName_not_starts_with?: string | null
  tenantIdServiceName_ends_with?: string | null
  tenantIdServiceName_not_ends_with?: string | null
  keyAuthSecret?: string | null
  keyAuthSecret_not?: string | null
  keyAuthSecret_in?: string[]
  keyAuthSecret_not_in?: string[]
  keyAuthSecret_lt?: string | null
  keyAuthSecret_lte?: string | null
  keyAuthSecret_gt?: string | null
  keyAuthSecret_gte?: string | null
  keyAuthSecret_contains?: string | null
  keyAuthSecret_not_contains?: string | null
  keyAuthSecret_starts_with?: string | null
  keyAuthSecret_not_starts_with?: string | null
  keyAuthSecret_ends_with?: string | null
  keyAuthSecret_not_ends_with?: string | null
  permissions_every?: PermissionWhereInput | null
  permissions_some?: PermissionWhereInput | null
  permissions_none?: PermissionWhereInput | null
  updatedAt?: string | null
  updatedAt_not?: string | null
  updatedAt_in?: string[]
  updatedAt_not_in?: string[]
  updatedAt_lt?: string | null
  updatedAt_lte?: string | null
  updatedAt_gt?: string | null
  updatedAt_gte?: string | null
  createdAt?: string | null
  createdAt_not?: string | null
  createdAt_in?: string[]
  createdAt_not_in?: string[]
  createdAt_lt?: string | null
  createdAt_lte?: string | null
  createdAt_gt?: string | null
  createdAt_gte?: string | null
  AND?: ServiceRoleWhereInput[]
  OR?: ServiceRoleWhereInput[]
  NOT?: ServiceRoleWhereInput[]
}
export type ServiceRoleWhereInputInputObject =
  | Extract<keyof ServiceRoleWhereInput, string>
  | { name: 'tenantIdServiceName', alias?: string  } 
  | { name: 'tenantIdServiceName_not', alias?: string  } 
  | { name: 'tenantIdServiceName_in', alias?: string  } 
  | { name: 'tenantIdServiceName_not_in', alias?: string  } 
  | { name: 'tenantIdServiceName_lt', alias?: string  } 
  | { name: 'tenantIdServiceName_lte', alias?: string  } 
  | { name: 'tenantIdServiceName_gt', alias?: string  } 
  | { name: 'tenantIdServiceName_gte', alias?: string  } 
  | { name: 'tenantIdServiceName_contains', alias?: string  } 
  | { name: 'tenantIdServiceName_not_contains', alias?: string  } 
  | { name: 'tenantIdServiceName_starts_with', alias?: string  } 
  | { name: 'tenantIdServiceName_not_starts_with', alias?: string  } 
  | { name: 'tenantIdServiceName_ends_with', alias?: string  } 
  | { name: 'tenantIdServiceName_not_ends_with', alias?: string  } 
  | { name: 'keyAuthSecret', alias?: string  } 
  | { name: 'keyAuthSecret_not', alias?: string  } 
  | { name: 'keyAuthSecret_in', alias?: string  } 
  | { name: 'keyAuthSecret_not_in', alias?: string  } 
  | { name: 'keyAuthSecret_lt', alias?: string  } 
  | { name: 'keyAuthSecret_lte', alias?: string  } 
  | { name: 'keyAuthSecret_gt', alias?: string  } 
  | { name: 'keyAuthSecret_gte', alias?: string  } 
  | { name: 'keyAuthSecret_contains', alias?: string  } 
  | { name: 'keyAuthSecret_not_contains', alias?: string  } 
  | { name: 'keyAuthSecret_starts_with', alias?: string  } 
  | { name: 'keyAuthSecret_not_starts_with', alias?: string  } 
  | { name: 'keyAuthSecret_ends_with', alias?: string  } 
  | { name: 'keyAuthSecret_not_ends_with', alias?: string  } 
  | { name: 'permissions_every', alias?: string  } 
  | { name: 'permissions_some', alias?: string  } 
  | { name: 'permissions_none', alias?: string  } 
  | { name: 'updatedAt', alias?: string  } 
  | { name: 'updatedAt_not', alias?: string  } 
  | { name: 'updatedAt_in', alias?: string  } 
  | { name: 'updatedAt_not_in', alias?: string  } 
  | { name: 'updatedAt_lt', alias?: string  } 
  | { name: 'updatedAt_lte', alias?: string  } 
  | { name: 'updatedAt_gt', alias?: string  } 
  | { name: 'updatedAt_gte', alias?: string  } 
  | { name: 'createdAt', alias?: string  } 
  | { name: 'createdAt_not', alias?: string  } 
  | { name: 'createdAt_in', alias?: string  } 
  | { name: 'createdAt_not_in', alias?: string  } 
  | { name: 'createdAt_lt', alias?: string  } 
  | { name: 'createdAt_lte', alias?: string  } 
  | { name: 'createdAt_gt', alias?: string  } 
  | { name: 'createdAt_gte', alias?: string  } 
  | { name: 'AND', alias?: string  } 
  | { name: 'OR', alias?: string  } 
  | { name: 'NOT', alias?: string  } 
  
export interface PermissionWhereUniqueInput {
  name?: string | null
}
export type PermissionWhereUniqueInputInputObject =
  | Extract<keyof PermissionWhereUniqueInput, string>
  | { name: 'name', alias?: string  } 
  
export interface GroupWhereUniqueInput {
  id?: string | null
}
export type GroupWhereUniqueInputInputObject =
  | Extract<keyof GroupWhereUniqueInput, string>
  | { name: 'id', alias?: string  } 
  
export interface AccountCreateInput {
  userName?: string
  email?: string | null
  mobileNo?: string | null
  idCard?: string | null
  name?: string | null
  headpic?: string | null
  password?: string
  resetPasswordNext?: boolean | null
  enable?: boolean | null
  parentAccount?: AccountCreateOneWithoutSubAccountInput | null
  subAccount?: AccountCreateManyWithoutParentAccountInput | null
  accessKeys?: AccessKeyCreateManyWithoutAccountInput | null
  groups?: GroupCreateManyWithoutAccountsInput | null
  permissions?: PermissionCreateManyInput | null
  lastLoginAt?: string | null
}
export type AccountCreateInputInputObject =
  | Extract<keyof AccountCreateInput, string>
  | { name: 'userName', alias?: string  } 
  | { name: 'email', alias?: string  } 
  | { name: 'mobileNo', alias?: string  } 
  | { name: 'idCard', alias?: string  } 
  | { name: 'name', alias?: string  } 
  | { name: 'headpic', alias?: string  } 
  | { name: 'password', alias?: string  } 
  | { name: 'resetPasswordNext', alias?: string  } 
  | { name: 'enable', alias?: string  } 
  | { name: 'parentAccount', alias?: string  } 
  | { name: 'subAccount', alias?: string  } 
  | { name: 'accessKeys', alias?: string  } 
  | { name: 'groups', alias?: string  } 
  | { name: 'permissions', alias?: string  } 
  | { name: 'lastLoginAt', alias?: string  } 
  
export interface AccountCreateOneWithoutSubAccountInput {
  create?: AccountCreateWithoutSubAccountInput | null
  connect?: AccountWhereUniqueInput | null
}
export type AccountCreateOneWithoutSubAccountInputInputObject =
  | Extract<keyof AccountCreateOneWithoutSubAccountInput, string>
  | { name: 'create', alias?: string  } 
  | { name: 'connect', alias?: string  } 
  
export interface AccountCreateWithoutSubAccountInput {
  userName?: string
  email?: string | null
  mobileNo?: string | null
  idCard?: string | null
  name?: string | null
  headpic?: string | null
  password?: string
  resetPasswordNext?: boolean | null
  enable?: boolean | null
  parentAccount?: AccountCreateOneWithoutSubAccountInput | null
  accessKeys?: AccessKeyCreateManyWithoutAccountInput | null
  groups?: GroupCreateManyWithoutAccountsInput | null
  permissions?: PermissionCreateManyInput | null
  lastLoginAt?: string | null
}
export type AccountCreateWithoutSubAccountInputInputObject =
  | Extract<keyof AccountCreateWithoutSubAccountInput, string>
  | { name: 'userName', alias?: string  } 
  | { name: 'email', alias?: string  } 
  | { name: 'mobileNo', alias?: string  } 
  | { name: 'idCard', alias?: string  } 
  | { name: 'name', alias?: string  } 
  | { name: 'headpic', alias?: string  } 
  | { name: 'password', alias?: string  } 
  | { name: 'resetPasswordNext', alias?: string  } 
  | { name: 'enable', alias?: string  } 
  | { name: 'parentAccount', alias?: string  } 
  | { name: 'accessKeys', alias?: string  } 
  | { name: 'groups', alias?: string  } 
  | { name: 'permissions', alias?: string  } 
  | { name: 'lastLoginAt', alias?: string  } 
  
export interface AccessKeyCreateManyWithoutAccountInput {
  create?: AccessKeyCreateWithoutAccountInput[]
  connect?: AccessKeyWhereUniqueInput[]
}
export type AccessKeyCreateManyWithoutAccountInputInputObject =
  | Extract<keyof AccessKeyCreateManyWithoutAccountInput, string>
  | { name: 'create', alias?: string  } 
  | { name: 'connect', alias?: string  } 
  
export interface AccessKeyCreateWithoutAccountInput {
  secret?: string | null
  activated?: boolean | null
}
export type AccessKeyCreateWithoutAccountInputInputObject =
  | Extract<keyof AccessKeyCreateWithoutAccountInput, string>
  | { name: 'secret', alias?: string  } 
  | { name: 'activated', alias?: string  } 
  
export interface GroupCreateManyWithoutAccountsInput {
  create?: GroupCreateWithoutAccountsInput[]
  connect?: GroupWhereUniqueInput[]
}
export type GroupCreateManyWithoutAccountsInputInputObject =
  | Extract<keyof GroupCreateManyWithoutAccountsInput, string>
  | { name: 'create', alias?: string  } 
  | { name: 'connect', alias?: string  } 
  
export interface GroupCreateWithoutAccountsInput {
  type?: prisma.GroupType | null
  permissions?: PermissionCreateManyInput | null
}
export type GroupCreateWithoutAccountsInputInputObject =
  | Extract<keyof GroupCreateWithoutAccountsInput, string>
  | { name: 'type', alias?: string  } 
  | { name: 'permissions', alias?: string  } 
  
export interface PermissionCreateManyInput {
  create?: PermissionCreateInput[]
  connect?: PermissionWhereUniqueInput[]
}
export type PermissionCreateManyInputInputObject =
  | Extract<keyof PermissionCreateManyInput, string>
  | { name: 'create', alias?: string  } 
  | { name: 'connect', alias?: string  } 
  
export interface PermissionCreateInput {
  name?: string
  remark?: string
  type?: prisma.PermissionType | null
  usedCount?: number | null
  currentVersion?: number
  version1Content?: string | null
  version2Content?: string | null
  version3Content?: string | null
  version4Content?: string | null
  version5Content?: string | null
}
export type PermissionCreateInputInputObject =
  | Extract<keyof PermissionCreateInput, string>
  | { name: 'name', alias?: string  } 
  | { name: 'remark', alias?: string  } 
  | { name: 'type', alias?: string  } 
  | { name: 'usedCount', alias?: string  } 
  | { name: 'currentVersion', alias?: string  } 
  | { name: 'version1Content', alias?: string  } 
  | { name: 'version2Content', alias?: string  } 
  | { name: 'version3Content', alias?: string  } 
  | { name: 'version4Content', alias?: string  } 
  | { name: 'version5Content', alias?: string  } 
  
export interface AccountCreateManyWithoutParentAccountInput {
  create?: AccountCreateWithoutParentAccountInput[]
  connect?: AccountWhereUniqueInput[]
}
export type AccountCreateManyWithoutParentAccountInputInputObject =
  | Extract<keyof AccountCreateManyWithoutParentAccountInput, string>
  | { name: 'create', alias?: string  } 
  | { name: 'connect', alias?: string  } 
  
export interface AccountCreateWithoutParentAccountInput {
  userName?: string
  email?: string | null
  mobileNo?: string | null
  idCard?: string | null
  name?: string | null
  headpic?: string | null
  password?: string
  resetPasswordNext?: boolean | null
  enable?: boolean | null
  subAccount?: AccountCreateManyWithoutParentAccountInput | null
  accessKeys?: AccessKeyCreateManyWithoutAccountInput | null
  groups?: GroupCreateManyWithoutAccountsInput | null
  permissions?: PermissionCreateManyInput | null
  lastLoginAt?: string | null
}
export type AccountCreateWithoutParentAccountInputInputObject =
  | Extract<keyof AccountCreateWithoutParentAccountInput, string>
  | { name: 'userName', alias?: string  } 
  | { name: 'email', alias?: string  } 
  | { name: 'mobileNo', alias?: string  } 
  | { name: 'idCard', alias?: string  } 
  | { name: 'name', alias?: string  } 
  | { name: 'headpic', alias?: string  } 
  | { name: 'password', alias?: string  } 
  | { name: 'resetPasswordNext', alias?: string  } 
  | { name: 'enable', alias?: string  } 
  | { name: 'subAccount', alias?: string  } 
  | { name: 'accessKeys', alias?: string  } 
  | { name: 'groups', alias?: string  } 
  | { name: 'permissions', alias?: string  } 
  | { name: 'lastLoginAt', alias?: string  } 
  
export interface AccountUpdateInput {
  userName?: string | null
  email?: string | null
  mobileNo?: string | null
  idCard?: string | null
  name?: string | null
  headpic?: string | null
  password?: string | null
  resetPasswordNext?: boolean | null
  enable?: boolean | null
  parentAccount?: AccountUpdateOneWithoutSubAccountInput | null
  subAccount?: AccountUpdateManyWithoutParentAccountInput | null
  accessKeys?: AccessKeyUpdateManyWithoutAccountInput | null
  groups?: GroupUpdateManyWithoutAccountsInput | null
  permissions?: PermissionUpdateManyInput | null
  lastLoginAt?: string | null
}
export type AccountUpdateInputInputObject =
  | Extract<keyof AccountUpdateInput, string>
  | { name: 'userName', alias?: string  } 
  | { name: 'email', alias?: string  } 
  | { name: 'mobileNo', alias?: string  } 
  | { name: 'idCard', alias?: string  } 
  | { name: 'name', alias?: string  } 
  | { name: 'headpic', alias?: string  } 
  | { name: 'password', alias?: string  } 
  | { name: 'resetPasswordNext', alias?: string  } 
  | { name: 'enable', alias?: string  } 
  | { name: 'parentAccount', alias?: string  } 
  | { name: 'subAccount', alias?: string  } 
  | { name: 'accessKeys', alias?: string  } 
  | { name: 'groups', alias?: string  } 
  | { name: 'permissions', alias?: string  } 
  | { name: 'lastLoginAt', alias?: string  } 
  
export interface AccountUpdateOneWithoutSubAccountInput {
  create?: AccountCreateWithoutSubAccountInput | null
  update?: AccountUpdateWithoutSubAccountDataInput | null
  upsert?: AccountUpsertWithoutSubAccountInput | null
  delete?: boolean | null
  disconnect?: boolean | null
  connect?: AccountWhereUniqueInput | null
}
export type AccountUpdateOneWithoutSubAccountInputInputObject =
  | Extract<keyof AccountUpdateOneWithoutSubAccountInput, string>
  | { name: 'create', alias?: string  } 
  | { name: 'update', alias?: string  } 
  | { name: 'upsert', alias?: string  } 
  | { name: 'delete', alias?: string  } 
  | { name: 'disconnect', alias?: string  } 
  | { name: 'connect', alias?: string  } 
  
export interface AccountUpdateWithoutSubAccountDataInput {
  userName?: string | null
  email?: string | null
  mobileNo?: string | null
  idCard?: string | null
  name?: string | null
  headpic?: string | null
  password?: string | null
  resetPasswordNext?: boolean | null
  enable?: boolean | null
  parentAccount?: AccountUpdateOneWithoutSubAccountInput | null
  accessKeys?: AccessKeyUpdateManyWithoutAccountInput | null
  groups?: GroupUpdateManyWithoutAccountsInput | null
  permissions?: PermissionUpdateManyInput | null
  lastLoginAt?: string | null
}
export type AccountUpdateWithoutSubAccountDataInputInputObject =
  | Extract<keyof AccountUpdateWithoutSubAccountDataInput, string>
  | { name: 'userName', alias?: string  } 
  | { name: 'email', alias?: string  } 
  | { name: 'mobileNo', alias?: string  } 
  | { name: 'idCard', alias?: string  } 
  | { name: 'name', alias?: string  } 
  | { name: 'headpic', alias?: string  } 
  | { name: 'password', alias?: string  } 
  | { name: 'resetPasswordNext', alias?: string  } 
  | { name: 'enable', alias?: string  } 
  | { name: 'parentAccount', alias?: string  } 
  | { name: 'accessKeys', alias?: string  } 
  | { name: 'groups', alias?: string  } 
  | { name: 'permissions', alias?: string  } 
  | { name: 'lastLoginAt', alias?: string  } 
  
export interface AccessKeyUpdateManyWithoutAccountInput {
  create?: AccessKeyCreateWithoutAccountInput[]
  delete?: AccessKeyWhereUniqueInput[]
  connect?: AccessKeyWhereUniqueInput[]
  set?: AccessKeyWhereUniqueInput[]
  disconnect?: AccessKeyWhereUniqueInput[]
  update?: AccessKeyUpdateWithWhereUniqueWithoutAccountInput[]
  upsert?: AccessKeyUpsertWithWhereUniqueWithoutAccountInput[]
  deleteMany?: AccessKeyScalarWhereInput[]
  updateMany?: AccessKeyUpdateManyWithWhereNestedInput[]
}
export type AccessKeyUpdateManyWithoutAccountInputInputObject =
  | Extract<keyof AccessKeyUpdateManyWithoutAccountInput, string>
  | { name: 'create', alias?: string  } 
  | { name: 'delete', alias?: string  } 
  | { name: 'connect', alias?: string  } 
  | { name: 'set', alias?: string  } 
  | { name: 'disconnect', alias?: string  } 
  | { name: 'update', alias?: string  } 
  | { name: 'upsert', alias?: string  } 
  | { name: 'deleteMany', alias?: string  } 
  | { name: 'updateMany', alias?: string  } 
  
export interface AccessKeyUpdateWithWhereUniqueWithoutAccountInput {
  where?: AccessKeyWhereUniqueInput
  data?: AccessKeyUpdateWithoutAccountDataInput
}
export type AccessKeyUpdateWithWhereUniqueWithoutAccountInputInputObject =
  | Extract<keyof AccessKeyUpdateWithWhereUniqueWithoutAccountInput, string>
  | { name: 'where', alias?: string  } 
  | { name: 'data', alias?: string  } 
  
export interface AccessKeyUpdateWithoutAccountDataInput {
  secret?: string | null
  activated?: boolean | null
}
export type AccessKeyUpdateWithoutAccountDataInputInputObject =
  | Extract<keyof AccessKeyUpdateWithoutAccountDataInput, string>
  | { name: 'secret', alias?: string  } 
  | { name: 'activated', alias?: string  } 
  
export interface AccessKeyUpsertWithWhereUniqueWithoutAccountInput {
  where?: AccessKeyWhereUniqueInput
  update?: AccessKeyUpdateWithoutAccountDataInput
  create?: AccessKeyCreateWithoutAccountInput
}
export type AccessKeyUpsertWithWhereUniqueWithoutAccountInputInputObject =
  | Extract<keyof AccessKeyUpsertWithWhereUniqueWithoutAccountInput, string>
  | { name: 'where', alias?: string  } 
  | { name: 'update', alias?: string  } 
  | { name: 'create', alias?: string  } 
  
export interface AccessKeyScalarWhereInput {
  id?: string | null
  id_not?: string | null
  id_in?: string[]
  id_not_in?: string[]
  id_lt?: string | null
  id_lte?: string | null
  id_gt?: string | null
  id_gte?: string | null
  id_contains?: string | null
  id_not_contains?: string | null
  id_starts_with?: string | null
  id_not_starts_with?: string | null
  id_ends_with?: string | null
  id_not_ends_with?: string | null
  secret?: string | null
  secret_not?: string | null
  secret_in?: string[]
  secret_not_in?: string[]
  secret_lt?: string | null
  secret_lte?: string | null
  secret_gt?: string | null
  secret_gte?: string | null
  secret_contains?: string | null
  secret_not_contains?: string | null
  secret_starts_with?: string | null
  secret_not_starts_with?: string | null
  secret_ends_with?: string | null
  secret_not_ends_with?: string | null
  activated?: boolean | null
  activated_not?: boolean | null
  updatedAt?: string | null
  updatedAt_not?: string | null
  updatedAt_in?: string[]
  updatedAt_not_in?: string[]
  updatedAt_lt?: string | null
  updatedAt_lte?: string | null
  updatedAt_gt?: string | null
  updatedAt_gte?: string | null
  createdAt?: string | null
  createdAt_not?: string | null
  createdAt_in?: string[]
  createdAt_not_in?: string[]
  createdAt_lt?: string | null
  createdAt_lte?: string | null
  createdAt_gt?: string | null
  createdAt_gte?: string | null
  AND?: AccessKeyScalarWhereInput[]
  OR?: AccessKeyScalarWhereInput[]
  NOT?: AccessKeyScalarWhereInput[]
}
export type AccessKeyScalarWhereInputInputObject =
  | Extract<keyof AccessKeyScalarWhereInput, string>
  | { name: 'id', alias?: string  } 
  | { name: 'id_not', alias?: string  } 
  | { name: 'id_in', alias?: string  } 
  | { name: 'id_not_in', alias?: string  } 
  | { name: 'id_lt', alias?: string  } 
  | { name: 'id_lte', alias?: string  } 
  | { name: 'id_gt', alias?: string  } 
  | { name: 'id_gte', alias?: string  } 
  | { name: 'id_contains', alias?: string  } 
  | { name: 'id_not_contains', alias?: string  } 
  | { name: 'id_starts_with', alias?: string  } 
  | { name: 'id_not_starts_with', alias?: string  } 
  | { name: 'id_ends_with', alias?: string  } 
  | { name: 'id_not_ends_with', alias?: string  } 
  | { name: 'secret', alias?: string  } 
  | { name: 'secret_not', alias?: string  } 
  | { name: 'secret_in', alias?: string  } 
  | { name: 'secret_not_in', alias?: string  } 
  | { name: 'secret_lt', alias?: string  } 
  | { name: 'secret_lte', alias?: string  } 
  | { name: 'secret_gt', alias?: string  } 
  | { name: 'secret_gte', alias?: string  } 
  | { name: 'secret_contains', alias?: string  } 
  | { name: 'secret_not_contains', alias?: string  } 
  | { name: 'secret_starts_with', alias?: string  } 
  | { name: 'secret_not_starts_with', alias?: string  } 
  | { name: 'secret_ends_with', alias?: string  } 
  | { name: 'secret_not_ends_with', alias?: string  } 
  | { name: 'activated', alias?: string  } 
  | { name: 'activated_not', alias?: string  } 
  | { name: 'updatedAt', alias?: string  } 
  | { name: 'updatedAt_not', alias?: string  } 
  | { name: 'updatedAt_in', alias?: string  } 
  | { name: 'updatedAt_not_in', alias?: string  } 
  | { name: 'updatedAt_lt', alias?: string  } 
  | { name: 'updatedAt_lte', alias?: string  } 
  | { name: 'updatedAt_gt', alias?: string  } 
  | { name: 'updatedAt_gte', alias?: string  } 
  | { name: 'createdAt', alias?: string  } 
  | { name: 'createdAt_not', alias?: string  } 
  | { name: 'createdAt_in', alias?: string  } 
  | { name: 'createdAt_not_in', alias?: string  } 
  | { name: 'createdAt_lt', alias?: string  } 
  | { name: 'createdAt_lte', alias?: string  } 
  | { name: 'createdAt_gt', alias?: string  } 
  | { name: 'createdAt_gte', alias?: string  } 
  | { name: 'AND', alias?: string  } 
  | { name: 'OR', alias?: string  } 
  | { name: 'NOT', alias?: string  } 
  
export interface AccessKeyUpdateManyWithWhereNestedInput {
  where?: AccessKeyScalarWhereInput
  data?: AccessKeyUpdateManyDataInput
}
export type AccessKeyUpdateManyWithWhereNestedInputInputObject =
  | Extract<keyof AccessKeyUpdateManyWithWhereNestedInput, string>
  | { name: 'where', alias?: string  } 
  | { name: 'data', alias?: string  } 
  
export interface AccessKeyUpdateManyDataInput {
  secret?: string | null
  activated?: boolean | null
}
export type AccessKeyUpdateManyDataInputInputObject =
  | Extract<keyof AccessKeyUpdateManyDataInput, string>
  | { name: 'secret', alias?: string  } 
  | { name: 'activated', alias?: string  } 
  
export interface GroupUpdateManyWithoutAccountsInput {
  create?: GroupCreateWithoutAccountsInput[]
  delete?: GroupWhereUniqueInput[]
  connect?: GroupWhereUniqueInput[]
  set?: GroupWhereUniqueInput[]
  disconnect?: GroupWhereUniqueInput[]
  update?: GroupUpdateWithWhereUniqueWithoutAccountsInput[]
  upsert?: GroupUpsertWithWhereUniqueWithoutAccountsInput[]
  deleteMany?: GroupScalarWhereInput[]
  updateMany?: GroupUpdateManyWithWhereNestedInput[]
}
export type GroupUpdateManyWithoutAccountsInputInputObject =
  | Extract<keyof GroupUpdateManyWithoutAccountsInput, string>
  | { name: 'create', alias?: string  } 
  | { name: 'delete', alias?: string  } 
  | { name: 'connect', alias?: string  } 
  | { name: 'set', alias?: string  } 
  | { name: 'disconnect', alias?: string  } 
  | { name: 'update', alias?: string  } 
  | { name: 'upsert', alias?: string  } 
  | { name: 'deleteMany', alias?: string  } 
  | { name: 'updateMany', alias?: string  } 
  
export interface GroupUpdateWithWhereUniqueWithoutAccountsInput {
  where?: GroupWhereUniqueInput
  data?: GroupUpdateWithoutAccountsDataInput
}
export type GroupUpdateWithWhereUniqueWithoutAccountsInputInputObject =
  | Extract<keyof GroupUpdateWithWhereUniqueWithoutAccountsInput, string>
  | { name: 'where', alias?: string  } 
  | { name: 'data', alias?: string  } 
  
export interface GroupUpdateWithoutAccountsDataInput {
  type?: prisma.GroupType | null
  permissions?: PermissionUpdateManyInput | null
}
export type GroupUpdateWithoutAccountsDataInputInputObject =
  | Extract<keyof GroupUpdateWithoutAccountsDataInput, string>
  | { name: 'type', alias?: string  } 
  | { name: 'permissions', alias?: string  } 
  
export interface PermissionUpdateManyInput {
  create?: PermissionCreateInput[]
  update?: PermissionUpdateWithWhereUniqueNestedInput[]
  upsert?: PermissionUpsertWithWhereUniqueNestedInput[]
  delete?: PermissionWhereUniqueInput[]
  connect?: PermissionWhereUniqueInput[]
  set?: PermissionWhereUniqueInput[]
  disconnect?: PermissionWhereUniqueInput[]
  deleteMany?: PermissionScalarWhereInput[]
  updateMany?: PermissionUpdateManyWithWhereNestedInput[]
}
export type PermissionUpdateManyInputInputObject =
  | Extract<keyof PermissionUpdateManyInput, string>
  | { name: 'create', alias?: string  } 
  | { name: 'update', alias?: string  } 
  | { name: 'upsert', alias?: string  } 
  | { name: 'delete', alias?: string  } 
  | { name: 'connect', alias?: string  } 
  | { name: 'set', alias?: string  } 
  | { name: 'disconnect', alias?: string  } 
  | { name: 'deleteMany', alias?: string  } 
  | { name: 'updateMany', alias?: string  } 
  
export interface PermissionUpdateWithWhereUniqueNestedInput {
  where?: PermissionWhereUniqueInput
  data?: PermissionUpdateDataInput
}
export type PermissionUpdateWithWhereUniqueNestedInputInputObject =
  | Extract<keyof PermissionUpdateWithWhereUniqueNestedInput, string>
  | { name: 'where', alias?: string  } 
  | { name: 'data', alias?: string  } 
  
export interface PermissionUpdateDataInput {
  name?: string | null
  remark?: string | null
  type?: prisma.PermissionType | null
  usedCount?: number | null
  currentVersion?: number | null
  version1Content?: string | null
  version2Content?: string | null
  version3Content?: string | null
  version4Content?: string | null
  version5Content?: string | null
}
export type PermissionUpdateDataInputInputObject =
  | Extract<keyof PermissionUpdateDataInput, string>
  | { name: 'name', alias?: string  } 
  | { name: 'remark', alias?: string  } 
  | { name: 'type', alias?: string  } 
  | { name: 'usedCount', alias?: string  } 
  | { name: 'currentVersion', alias?: string  } 
  | { name: 'version1Content', alias?: string  } 
  | { name: 'version2Content', alias?: string  } 
  | { name: 'version3Content', alias?: string  } 
  | { name: 'version4Content', alias?: string  } 
  | { name: 'version5Content', alias?: string  } 
  
export interface PermissionUpsertWithWhereUniqueNestedInput {
  where?: PermissionWhereUniqueInput
  update?: PermissionUpdateDataInput
  create?: PermissionCreateInput
}
export type PermissionUpsertWithWhereUniqueNestedInputInputObject =
  | Extract<keyof PermissionUpsertWithWhereUniqueNestedInput, string>
  | { name: 'where', alias?: string  } 
  | { name: 'update', alias?: string  } 
  | { name: 'create', alias?: string  } 
  
export interface PermissionScalarWhereInput {
  name?: string | null
  name_not?: string | null
  name_in?: string[]
  name_not_in?: string[]
  name_lt?: string | null
  name_lte?: string | null
  name_gt?: string | null
  name_gte?: string | null
  name_contains?: string | null
  name_not_contains?: string | null
  name_starts_with?: string | null
  name_not_starts_with?: string | null
  name_ends_with?: string | null
  name_not_ends_with?: string | null
  remark?: string | null
  remark_not?: string | null
  remark_in?: string[]
  remark_not_in?: string[]
  remark_lt?: string | null
  remark_lte?: string | null
  remark_gt?: string | null
  remark_gte?: string | null
  remark_contains?: string | null
  remark_not_contains?: string | null
  remark_starts_with?: string | null
  remark_not_starts_with?: string | null
  remark_ends_with?: string | null
  remark_not_ends_with?: string | null
  type?: prisma.PermissionType | null
  type_not?: prisma.PermissionType | null
  type_in?: prisma.PermissionType[]
  type_not_in?: prisma.PermissionType[]
  usedCount?: number | null
  usedCount_not?: number | null
  usedCount_in?: number[]
  usedCount_not_in?: number[]
  usedCount_lt?: number | null
  usedCount_lte?: number | null
  usedCount_gt?: number | null
  usedCount_gte?: number | null
  currentVersion?: number | null
  currentVersion_not?: number | null
  currentVersion_in?: number[]
  currentVersion_not_in?: number[]
  currentVersion_lt?: number | null
  currentVersion_lte?: number | null
  currentVersion_gt?: number | null
  currentVersion_gte?: number | null
  version1Content?: string | null
  version1Content_not?: string | null
  version1Content_in?: string[]
  version1Content_not_in?: string[]
  version1Content_lt?: string | null
  version1Content_lte?: string | null
  version1Content_gt?: string | null
  version1Content_gte?: string | null
  version1Content_contains?: string | null
  version1Content_not_contains?: string | null
  version1Content_starts_with?: string | null
  version1Content_not_starts_with?: string | null
  version1Content_ends_with?: string | null
  version1Content_not_ends_with?: string | null
  version2Content?: string | null
  version2Content_not?: string | null
  version2Content_in?: string[]
  version2Content_not_in?: string[]
  version2Content_lt?: string | null
  version2Content_lte?: string | null
  version2Content_gt?: string | null
  version2Content_gte?: string | null
  version2Content_contains?: string | null
  version2Content_not_contains?: string | null
  version2Content_starts_with?: string | null
  version2Content_not_starts_with?: string | null
  version2Content_ends_with?: string | null
  version2Content_not_ends_with?: string | null
  version3Content?: string | null
  version3Content_not?: string | null
  version3Content_in?: string[]
  version3Content_not_in?: string[]
  version3Content_lt?: string | null
  version3Content_lte?: string | null
  version3Content_gt?: string | null
  version3Content_gte?: string | null
  version3Content_contains?: string | null
  version3Content_not_contains?: string | null
  version3Content_starts_with?: string | null
  version3Content_not_starts_with?: string | null
  version3Content_ends_with?: string | null
  version3Content_not_ends_with?: string | null
  version4Content?: string | null
  version4Content_not?: string | null
  version4Content_in?: string[]
  version4Content_not_in?: string[]
  version4Content_lt?: string | null
  version4Content_lte?: string | null
  version4Content_gt?: string | null
  version4Content_gte?: string | null
  version4Content_contains?: string | null
  version4Content_not_contains?: string | null
  version4Content_starts_with?: string | null
  version4Content_not_starts_with?: string | null
  version4Content_ends_with?: string | null
  version4Content_not_ends_with?: string | null
  version5Content?: string | null
  version5Content_not?: string | null
  version5Content_in?: string[]
  version5Content_not_in?: string[]
  version5Content_lt?: string | null
  version5Content_lte?: string | null
  version5Content_gt?: string | null
  version5Content_gte?: string | null
  version5Content_contains?: string | null
  version5Content_not_contains?: string | null
  version5Content_starts_with?: string | null
  version5Content_not_starts_with?: string | null
  version5Content_ends_with?: string | null
  version5Content_not_ends_with?: string | null
  updatedAt?: string | null
  updatedAt_not?: string | null
  updatedAt_in?: string[]
  updatedAt_not_in?: string[]
  updatedAt_lt?: string | null
  updatedAt_lte?: string | null
  updatedAt_gt?: string | null
  updatedAt_gte?: string | null
  createdAt?: string | null
  createdAt_not?: string | null
  createdAt_in?: string[]
  createdAt_not_in?: string[]
  createdAt_lt?: string | null
  createdAt_lte?: string | null
  createdAt_gt?: string | null
  createdAt_gte?: string | null
  AND?: PermissionScalarWhereInput[]
  OR?: PermissionScalarWhereInput[]
  NOT?: PermissionScalarWhereInput[]
}
export type PermissionScalarWhereInputInputObject =
  | Extract<keyof PermissionScalarWhereInput, string>
  | { name: 'name', alias?: string  } 
  | { name: 'name_not', alias?: string  } 
  | { name: 'name_in', alias?: string  } 
  | { name: 'name_not_in', alias?: string  } 
  | { name: 'name_lt', alias?: string  } 
  | { name: 'name_lte', alias?: string  } 
  | { name: 'name_gt', alias?: string  } 
  | { name: 'name_gte', alias?: string  } 
  | { name: 'name_contains', alias?: string  } 
  | { name: 'name_not_contains', alias?: string  } 
  | { name: 'name_starts_with', alias?: string  } 
  | { name: 'name_not_starts_with', alias?: string  } 
  | { name: 'name_ends_with', alias?: string  } 
  | { name: 'name_not_ends_with', alias?: string  } 
  | { name: 'remark', alias?: string  } 
  | { name: 'remark_not', alias?: string  } 
  | { name: 'remark_in', alias?: string  } 
  | { name: 'remark_not_in', alias?: string  } 
  | { name: 'remark_lt', alias?: string  } 
  | { name: 'remark_lte', alias?: string  } 
  | { name: 'remark_gt', alias?: string  } 
  | { name: 'remark_gte', alias?: string  } 
  | { name: 'remark_contains', alias?: string  } 
  | { name: 'remark_not_contains', alias?: string  } 
  | { name: 'remark_starts_with', alias?: string  } 
  | { name: 'remark_not_starts_with', alias?: string  } 
  | { name: 'remark_ends_with', alias?: string  } 
  | { name: 'remark_not_ends_with', alias?: string  } 
  | { name: 'type', alias?: string  } 
  | { name: 'type_not', alias?: string  } 
  | { name: 'type_in', alias?: string  } 
  | { name: 'type_not_in', alias?: string  } 
  | { name: 'usedCount', alias?: string  } 
  | { name: 'usedCount_not', alias?: string  } 
  | { name: 'usedCount_in', alias?: string  } 
  | { name: 'usedCount_not_in', alias?: string  } 
  | { name: 'usedCount_lt', alias?: string  } 
  | { name: 'usedCount_lte', alias?: string  } 
  | { name: 'usedCount_gt', alias?: string  } 
  | { name: 'usedCount_gte', alias?: string  } 
  | { name: 'currentVersion', alias?: string  } 
  | { name: 'currentVersion_not', alias?: string  } 
  | { name: 'currentVersion_in', alias?: string  } 
  | { name: 'currentVersion_not_in', alias?: string  } 
  | { name: 'currentVersion_lt', alias?: string  } 
  | { name: 'currentVersion_lte', alias?: string  } 
  | { name: 'currentVersion_gt', alias?: string  } 
  | { name: 'currentVersion_gte', alias?: string  } 
  | { name: 'version1Content', alias?: string  } 
  | { name: 'version1Content_not', alias?: string  } 
  | { name: 'version1Content_in', alias?: string  } 
  | { name: 'version1Content_not_in', alias?: string  } 
  | { name: 'version1Content_lt', alias?: string  } 
  | { name: 'version1Content_lte', alias?: string  } 
  | { name: 'version1Content_gt', alias?: string  } 
  | { name: 'version1Content_gte', alias?: string  } 
  | { name: 'version1Content_contains', alias?: string  } 
  | { name: 'version1Content_not_contains', alias?: string  } 
  | { name: 'version1Content_starts_with', alias?: string  } 
  | { name: 'version1Content_not_starts_with', alias?: string  } 
  | { name: 'version1Content_ends_with', alias?: string  } 
  | { name: 'version1Content_not_ends_with', alias?: string  } 
  | { name: 'version2Content', alias?: string  } 
  | { name: 'version2Content_not', alias?: string  } 
  | { name: 'version2Content_in', alias?: string  } 
  | { name: 'version2Content_not_in', alias?: string  } 
  | { name: 'version2Content_lt', alias?: string  } 
  | { name: 'version2Content_lte', alias?: string  } 
  | { name: 'version2Content_gt', alias?: string  } 
  | { name: 'version2Content_gte', alias?: string  } 
  | { name: 'version2Content_contains', alias?: string  } 
  | { name: 'version2Content_not_contains', alias?: string  } 
  | { name: 'version2Content_starts_with', alias?: string  } 
  | { name: 'version2Content_not_starts_with', alias?: string  } 
  | { name: 'version2Content_ends_with', alias?: string  } 
  | { name: 'version2Content_not_ends_with', alias?: string  } 
  | { name: 'version3Content', alias?: string  } 
  | { name: 'version3Content_not', alias?: string  } 
  | { name: 'version3Content_in', alias?: string  } 
  | { name: 'version3Content_not_in', alias?: string  } 
  | { name: 'version3Content_lt', alias?: string  } 
  | { name: 'version3Content_lte', alias?: string  } 
  | { name: 'version3Content_gt', alias?: string  } 
  | { name: 'version3Content_gte', alias?: string  } 
  | { name: 'version3Content_contains', alias?: string  } 
  | { name: 'version3Content_not_contains', alias?: string  } 
  | { name: 'version3Content_starts_with', alias?: string  } 
  | { name: 'version3Content_not_starts_with', alias?: string  } 
  | { name: 'version3Content_ends_with', alias?: string  } 
  | { name: 'version3Content_not_ends_with', alias?: string  } 
  | { name: 'version4Content', alias?: string  } 
  | { name: 'version4Content_not', alias?: string  } 
  | { name: 'version4Content_in', alias?: string  } 
  | { name: 'version4Content_not_in', alias?: string  } 
  | { name: 'version4Content_lt', alias?: string  } 
  | { name: 'version4Content_lte', alias?: string  } 
  | { name: 'version4Content_gt', alias?: string  } 
  | { name: 'version4Content_gte', alias?: string  } 
  | { name: 'version4Content_contains', alias?: string  } 
  | { name: 'version4Content_not_contains', alias?: string  } 
  | { name: 'version4Content_starts_with', alias?: string  } 
  | { name: 'version4Content_not_starts_with', alias?: string  } 
  | { name: 'version4Content_ends_with', alias?: string  } 
  | { name: 'version4Content_not_ends_with', alias?: string  } 
  | { name: 'version5Content', alias?: string  } 
  | { name: 'version5Content_not', alias?: string  } 
  | { name: 'version5Content_in', alias?: string  } 
  | { name: 'version5Content_not_in', alias?: string  } 
  | { name: 'version5Content_lt', alias?: string  } 
  | { name: 'version5Content_lte', alias?: string  } 
  | { name: 'version5Content_gt', alias?: string  } 
  | { name: 'version5Content_gte', alias?: string  } 
  | { name: 'version5Content_contains', alias?: string  } 
  | { name: 'version5Content_not_contains', alias?: string  } 
  | { name: 'version5Content_starts_with', alias?: string  } 
  | { name: 'version5Content_not_starts_with', alias?: string  } 
  | { name: 'version5Content_ends_with', alias?: string  } 
  | { name: 'version5Content_not_ends_with', alias?: string  } 
  | { name: 'updatedAt', alias?: string  } 
  | { name: 'updatedAt_not', alias?: string  } 
  | { name: 'updatedAt_in', alias?: string  } 
  | { name: 'updatedAt_not_in', alias?: string  } 
  | { name: 'updatedAt_lt', alias?: string  } 
  | { name: 'updatedAt_lte', alias?: string  } 
  | { name: 'updatedAt_gt', alias?: string  } 
  | { name: 'updatedAt_gte', alias?: string  } 
  | { name: 'createdAt', alias?: string  } 
  | { name: 'createdAt_not', alias?: string  } 
  | { name: 'createdAt_in', alias?: string  } 
  | { name: 'createdAt_not_in', alias?: string  } 
  | { name: 'createdAt_lt', alias?: string  } 
  | { name: 'createdAt_lte', alias?: string  } 
  | { name: 'createdAt_gt', alias?: string  } 
  | { name: 'createdAt_gte', alias?: string  } 
  | { name: 'AND', alias?: string  } 
  | { name: 'OR', alias?: string  } 
  | { name: 'NOT', alias?: string  } 
  
export interface PermissionUpdateManyWithWhereNestedInput {
  where?: PermissionScalarWhereInput
  data?: PermissionUpdateManyDataInput
}
export type PermissionUpdateManyWithWhereNestedInputInputObject =
  | Extract<keyof PermissionUpdateManyWithWhereNestedInput, string>
  | { name: 'where', alias?: string  } 
  | { name: 'data', alias?: string  } 
  
export interface PermissionUpdateManyDataInput {
  name?: string | null
  remark?: string | null
  type?: prisma.PermissionType | null
  usedCount?: number | null
  currentVersion?: number | null
  version1Content?: string | null
  version2Content?: string | null
  version3Content?: string | null
  version4Content?: string | null
  version5Content?: string | null
}
export type PermissionUpdateManyDataInputInputObject =
  | Extract<keyof PermissionUpdateManyDataInput, string>
  | { name: 'name', alias?: string  } 
  | { name: 'remark', alias?: string  } 
  | { name: 'type', alias?: string  } 
  | { name: 'usedCount', alias?: string  } 
  | { name: 'currentVersion', alias?: string  } 
  | { name: 'version1Content', alias?: string  } 
  | { name: 'version2Content', alias?: string  } 
  | { name: 'version3Content', alias?: string  } 
  | { name: 'version4Content', alias?: string  } 
  | { name: 'version5Content', alias?: string  } 
  
export interface GroupUpsertWithWhereUniqueWithoutAccountsInput {
  where?: GroupWhereUniqueInput
  update?: GroupUpdateWithoutAccountsDataInput
  create?: GroupCreateWithoutAccountsInput
}
export type GroupUpsertWithWhereUniqueWithoutAccountsInputInputObject =
  | Extract<keyof GroupUpsertWithWhereUniqueWithoutAccountsInput, string>
  | { name: 'where', alias?: string  } 
  | { name: 'update', alias?: string  } 
  | { name: 'create', alias?: string  } 
  
export interface GroupScalarWhereInput {
  id?: string | null
  id_not?: string | null
  id_in?: string[]
  id_not_in?: string[]
  id_lt?: string | null
  id_lte?: string | null
  id_gt?: string | null
  id_gte?: string | null
  id_contains?: string | null
  id_not_contains?: string | null
  id_starts_with?: string | null
  id_not_starts_with?: string | null
  id_ends_with?: string | null
  id_not_ends_with?: string | null
  type?: prisma.GroupType | null
  type_not?: prisma.GroupType | null
  type_in?: prisma.GroupType[]
  type_not_in?: prisma.GroupType[]
  updatedAt?: string | null
  updatedAt_not?: string | null
  updatedAt_in?: string[]
  updatedAt_not_in?: string[]
  updatedAt_lt?: string | null
  updatedAt_lte?: string | null
  updatedAt_gt?: string | null
  updatedAt_gte?: string | null
  createdAt?: string | null
  createdAt_not?: string | null
  createdAt_in?: string[]
  createdAt_not_in?: string[]
  createdAt_lt?: string | null
  createdAt_lte?: string | null
  createdAt_gt?: string | null
  createdAt_gte?: string | null
  AND?: GroupScalarWhereInput[]
  OR?: GroupScalarWhereInput[]
  NOT?: GroupScalarWhereInput[]
}
export type GroupScalarWhereInputInputObject =
  | Extract<keyof GroupScalarWhereInput, string>
  | { name: 'id', alias?: string  } 
  | { name: 'id_not', alias?: string  } 
  | { name: 'id_in', alias?: string  } 
  | { name: 'id_not_in', alias?: string  } 
  | { name: 'id_lt', alias?: string  } 
  | { name: 'id_lte', alias?: string  } 
  | { name: 'id_gt', alias?: string  } 
  | { name: 'id_gte', alias?: string  } 
  | { name: 'id_contains', alias?: string  } 
  | { name: 'id_not_contains', alias?: string  } 
  | { name: 'id_starts_with', alias?: string  } 
  | { name: 'id_not_starts_with', alias?: string  } 
  | { name: 'id_ends_with', alias?: string  } 
  | { name: 'id_not_ends_with', alias?: string  } 
  | { name: 'type', alias?: string  } 
  | { name: 'type_not', alias?: string  } 
  | { name: 'type_in', alias?: string  } 
  | { name: 'type_not_in', alias?: string  } 
  | { name: 'updatedAt', alias?: string  } 
  | { name: 'updatedAt_not', alias?: string  } 
  | { name: 'updatedAt_in', alias?: string  } 
  | { name: 'updatedAt_not_in', alias?: string  } 
  | { name: 'updatedAt_lt', alias?: string  } 
  | { name: 'updatedAt_lte', alias?: string  } 
  | { name: 'updatedAt_gt', alias?: string  } 
  | { name: 'updatedAt_gte', alias?: string  } 
  | { name: 'createdAt', alias?: string  } 
  | { name: 'createdAt_not', alias?: string  } 
  | { name: 'createdAt_in', alias?: string  } 
  | { name: 'createdAt_not_in', alias?: string  } 
  | { name: 'createdAt_lt', alias?: string  } 
  | { name: 'createdAt_lte', alias?: string  } 
  | { name: 'createdAt_gt', alias?: string  } 
  | { name: 'createdAt_gte', alias?: string  } 
  | { name: 'AND', alias?: string  } 
  | { name: 'OR', alias?: string  } 
  | { name: 'NOT', alias?: string  } 
  
export interface GroupUpdateManyWithWhereNestedInput {
  where?: GroupScalarWhereInput
  data?: GroupUpdateManyDataInput
}
export type GroupUpdateManyWithWhereNestedInputInputObject =
  | Extract<keyof GroupUpdateManyWithWhereNestedInput, string>
  | { name: 'where', alias?: string  } 
  | { name: 'data', alias?: string  } 
  
export interface GroupUpdateManyDataInput {
  type?: prisma.GroupType | null
}
export type GroupUpdateManyDataInputInputObject =
  | Extract<keyof GroupUpdateManyDataInput, string>
  | { name: 'type', alias?: string  } 
  
export interface AccountUpsertWithoutSubAccountInput {
  update?: AccountUpdateWithoutSubAccountDataInput
  create?: AccountCreateWithoutSubAccountInput
}
export type AccountUpsertWithoutSubAccountInputInputObject =
  | Extract<keyof AccountUpsertWithoutSubAccountInput, string>
  | { name: 'update', alias?: string  } 
  | { name: 'create', alias?: string  } 
  
export interface AccountUpdateManyWithoutParentAccountInput {
  create?: AccountCreateWithoutParentAccountInput[]
  delete?: AccountWhereUniqueInput[]
  connect?: AccountWhereUniqueInput[]
  set?: AccountWhereUniqueInput[]
  disconnect?: AccountWhereUniqueInput[]
  update?: AccountUpdateWithWhereUniqueWithoutParentAccountInput[]
  upsert?: AccountUpsertWithWhereUniqueWithoutParentAccountInput[]
  deleteMany?: AccountScalarWhereInput[]
  updateMany?: AccountUpdateManyWithWhereNestedInput[]
}
export type AccountUpdateManyWithoutParentAccountInputInputObject =
  | Extract<keyof AccountUpdateManyWithoutParentAccountInput, string>
  | { name: 'create', alias?: string  } 
  | { name: 'delete', alias?: string  } 
  | { name: 'connect', alias?: string  } 
  | { name: 'set', alias?: string  } 
  | { name: 'disconnect', alias?: string  } 
  | { name: 'update', alias?: string  } 
  | { name: 'upsert', alias?: string  } 
  | { name: 'deleteMany', alias?: string  } 
  | { name: 'updateMany', alias?: string  } 
  
export interface AccountUpdateWithWhereUniqueWithoutParentAccountInput {
  where?: AccountWhereUniqueInput
  data?: AccountUpdateWithoutParentAccountDataInput
}
export type AccountUpdateWithWhereUniqueWithoutParentAccountInputInputObject =
  | Extract<keyof AccountUpdateWithWhereUniqueWithoutParentAccountInput, string>
  | { name: 'where', alias?: string  } 
  | { name: 'data', alias?: string  } 
  
export interface AccountUpdateWithoutParentAccountDataInput {
  userName?: string | null
  email?: string | null
  mobileNo?: string | null
  idCard?: string | null
  name?: string | null
  headpic?: string | null
  password?: string | null
  resetPasswordNext?: boolean | null
  enable?: boolean | null
  subAccount?: AccountUpdateManyWithoutParentAccountInput | null
  accessKeys?: AccessKeyUpdateManyWithoutAccountInput | null
  groups?: GroupUpdateManyWithoutAccountsInput | null
  permissions?: PermissionUpdateManyInput | null
  lastLoginAt?: string | null
}
export type AccountUpdateWithoutParentAccountDataInputInputObject =
  | Extract<keyof AccountUpdateWithoutParentAccountDataInput, string>
  | { name: 'userName', alias?: string  } 
  | { name: 'email', alias?: string  } 
  | { name: 'mobileNo', alias?: string  } 
  | { name: 'idCard', alias?: string  } 
  | { name: 'name', alias?: string  } 
  | { name: 'headpic', alias?: string  } 
  | { name: 'password', alias?: string  } 
  | { name: 'resetPasswordNext', alias?: string  } 
  | { name: 'enable', alias?: string  } 
  | { name: 'subAccount', alias?: string  } 
  | { name: 'accessKeys', alias?: string  } 
  | { name: 'groups', alias?: string  } 
  | { name: 'permissions', alias?: string  } 
  | { name: 'lastLoginAt', alias?: string  } 
  
export interface AccountUpsertWithWhereUniqueWithoutParentAccountInput {
  where?: AccountWhereUniqueInput
  update?: AccountUpdateWithoutParentAccountDataInput
  create?: AccountCreateWithoutParentAccountInput
}
export type AccountUpsertWithWhereUniqueWithoutParentAccountInputInputObject =
  | Extract<keyof AccountUpsertWithWhereUniqueWithoutParentAccountInput, string>
  | { name: 'where', alias?: string  } 
  | { name: 'update', alias?: string  } 
  | { name: 'create', alias?: string  } 
  
export interface AccountScalarWhereInput {
  id?: string | null
  id_not?: string | null
  id_in?: string[]
  id_not_in?: string[]
  id_lt?: string | null
  id_lte?: string | null
  id_gt?: string | null
  id_gte?: string | null
  id_contains?: string | null
  id_not_contains?: string | null
  id_starts_with?: string | null
  id_not_starts_with?: string | null
  id_ends_with?: string | null
  id_not_ends_with?: string | null
  userName?: string | null
  userName_not?: string | null
  userName_in?: string[]
  userName_not_in?: string[]
  userName_lt?: string | null
  userName_lte?: string | null
  userName_gt?: string | null
  userName_gte?: string | null
  userName_contains?: string | null
  userName_not_contains?: string | null
  userName_starts_with?: string | null
  userName_not_starts_with?: string | null
  userName_ends_with?: string | null
  userName_not_ends_with?: string | null
  email?: string | null
  email_not?: string | null
  email_in?: string[]
  email_not_in?: string[]
  email_lt?: string | null
  email_lte?: string | null
  email_gt?: string | null
  email_gte?: string | null
  email_contains?: string | null
  email_not_contains?: string | null
  email_starts_with?: string | null
  email_not_starts_with?: string | null
  email_ends_with?: string | null
  email_not_ends_with?: string | null
  mobileNo?: string | null
  mobileNo_not?: string | null
  mobileNo_in?: string[]
  mobileNo_not_in?: string[]
  mobileNo_lt?: string | null
  mobileNo_lte?: string | null
  mobileNo_gt?: string | null
  mobileNo_gte?: string | null
  mobileNo_contains?: string | null
  mobileNo_not_contains?: string | null
  mobileNo_starts_with?: string | null
  mobileNo_not_starts_with?: string | null
  mobileNo_ends_with?: string | null
  mobileNo_not_ends_with?: string | null
  idCard?: string | null
  idCard_not?: string | null
  idCard_in?: string[]
  idCard_not_in?: string[]
  idCard_lt?: string | null
  idCard_lte?: string | null
  idCard_gt?: string | null
  idCard_gte?: string | null
  idCard_contains?: string | null
  idCard_not_contains?: string | null
  idCard_starts_with?: string | null
  idCard_not_starts_with?: string | null
  idCard_ends_with?: string | null
  idCard_not_ends_with?: string | null
  name?: string | null
  name_not?: string | null
  name_in?: string[]
  name_not_in?: string[]
  name_lt?: string | null
  name_lte?: string | null
  name_gt?: string | null
  name_gte?: string | null
  name_contains?: string | null
  name_not_contains?: string | null
  name_starts_with?: string | null
  name_not_starts_with?: string | null
  name_ends_with?: string | null
  name_not_ends_with?: string | null
  headpic?: string | null
  headpic_not?: string | null
  headpic_in?: string[]
  headpic_not_in?: string[]
  headpic_lt?: string | null
  headpic_lte?: string | null
  headpic_gt?: string | null
  headpic_gte?: string | null
  headpic_contains?: string | null
  headpic_not_contains?: string | null
  headpic_starts_with?: string | null
  headpic_not_starts_with?: string | null
  headpic_ends_with?: string | null
  headpic_not_ends_with?: string | null
  password?: string | null
  password_not?: string | null
  password_in?: string[]
  password_not_in?: string[]
  password_lt?: string | null
  password_lte?: string | null
  password_gt?: string | null
  password_gte?: string | null
  password_contains?: string | null
  password_not_contains?: string | null
  password_starts_with?: string | null
  password_not_starts_with?: string | null
  password_ends_with?: string | null
  password_not_ends_with?: string | null
  resetPasswordNext?: boolean | null
  resetPasswordNext_not?: boolean | null
  enable?: boolean | null
  enable_not?: boolean | null
  lastLoginAt?: string | null
  lastLoginAt_not?: string | null
  lastLoginAt_in?: string[]
  lastLoginAt_not_in?: string[]
  lastLoginAt_lt?: string | null
  lastLoginAt_lte?: string | null
  lastLoginAt_gt?: string | null
  lastLoginAt_gte?: string | null
  updatedAt?: string | null
  updatedAt_not?: string | null
  updatedAt_in?: string[]
  updatedAt_not_in?: string[]
  updatedAt_lt?: string | null
  updatedAt_lte?: string | null
  updatedAt_gt?: string | null
  updatedAt_gte?: string | null
  createdAt?: string | null
  createdAt_not?: string | null
  createdAt_in?: string[]
  createdAt_not_in?: string[]
  createdAt_lt?: string | null
  createdAt_lte?: string | null
  createdAt_gt?: string | null
  createdAt_gte?: string | null
  AND?: AccountScalarWhereInput[]
  OR?: AccountScalarWhereInput[]
  NOT?: AccountScalarWhereInput[]
}
export type AccountScalarWhereInputInputObject =
  | Extract<keyof AccountScalarWhereInput, string>
  | { name: 'id', alias?: string  } 
  | { name: 'id_not', alias?: string  } 
  | { name: 'id_in', alias?: string  } 
  | { name: 'id_not_in', alias?: string  } 
  | { name: 'id_lt', alias?: string  } 
  | { name: 'id_lte', alias?: string  } 
  | { name: 'id_gt', alias?: string  } 
  | { name: 'id_gte', alias?: string  } 
  | { name: 'id_contains', alias?: string  } 
  | { name: 'id_not_contains', alias?: string  } 
  | { name: 'id_starts_with', alias?: string  } 
  | { name: 'id_not_starts_with', alias?: string  } 
  | { name: 'id_ends_with', alias?: string  } 
  | { name: 'id_not_ends_with', alias?: string  } 
  | { name: 'userName', alias?: string  } 
  | { name: 'userName_not', alias?: string  } 
  | { name: 'userName_in', alias?: string  } 
  | { name: 'userName_not_in', alias?: string  } 
  | { name: 'userName_lt', alias?: string  } 
  | { name: 'userName_lte', alias?: string  } 
  | { name: 'userName_gt', alias?: string  } 
  | { name: 'userName_gte', alias?: string  } 
  | { name: 'userName_contains', alias?: string  } 
  | { name: 'userName_not_contains', alias?: string  } 
  | { name: 'userName_starts_with', alias?: string  } 
  | { name: 'userName_not_starts_with', alias?: string  } 
  | { name: 'userName_ends_with', alias?: string  } 
  | { name: 'userName_not_ends_with', alias?: string  } 
  | { name: 'email', alias?: string  } 
  | { name: 'email_not', alias?: string  } 
  | { name: 'email_in', alias?: string  } 
  | { name: 'email_not_in', alias?: string  } 
  | { name: 'email_lt', alias?: string  } 
  | { name: 'email_lte', alias?: string  } 
  | { name: 'email_gt', alias?: string  } 
  | { name: 'email_gte', alias?: string  } 
  | { name: 'email_contains', alias?: string  } 
  | { name: 'email_not_contains', alias?: string  } 
  | { name: 'email_starts_with', alias?: string  } 
  | { name: 'email_not_starts_with', alias?: string  } 
  | { name: 'email_ends_with', alias?: string  } 
  | { name: 'email_not_ends_with', alias?: string  } 
  | { name: 'mobileNo', alias?: string  } 
  | { name: 'mobileNo_not', alias?: string  } 
  | { name: 'mobileNo_in', alias?: string  } 
  | { name: 'mobileNo_not_in', alias?: string  } 
  | { name: 'mobileNo_lt', alias?: string  } 
  | { name: 'mobileNo_lte', alias?: string  } 
  | { name: 'mobileNo_gt', alias?: string  } 
  | { name: 'mobileNo_gte', alias?: string  } 
  | { name: 'mobileNo_contains', alias?: string  } 
  | { name: 'mobileNo_not_contains', alias?: string  } 
  | { name: 'mobileNo_starts_with', alias?: string  } 
  | { name: 'mobileNo_not_starts_with', alias?: string  } 
  | { name: 'mobileNo_ends_with', alias?: string  } 
  | { name: 'mobileNo_not_ends_with', alias?: string  } 
  | { name: 'idCard', alias?: string  } 
  | { name: 'idCard_not', alias?: string  } 
  | { name: 'idCard_in', alias?: string  } 
  | { name: 'idCard_not_in', alias?: string  } 
  | { name: 'idCard_lt', alias?: string  } 
  | { name: 'idCard_lte', alias?: string  } 
  | { name: 'idCard_gt', alias?: string  } 
  | { name: 'idCard_gte', alias?: string  } 
  | { name: 'idCard_contains', alias?: string  } 
  | { name: 'idCard_not_contains', alias?: string  } 
  | { name: 'idCard_starts_with', alias?: string  } 
  | { name: 'idCard_not_starts_with', alias?: string  } 
  | { name: 'idCard_ends_with', alias?: string  } 
  | { name: 'idCard_not_ends_with', alias?: string  } 
  | { name: 'name', alias?: string  } 
  | { name: 'name_not', alias?: string  } 
  | { name: 'name_in', alias?: string  } 
  | { name: 'name_not_in', alias?: string  } 
  | { name: 'name_lt', alias?: string  } 
  | { name: 'name_lte', alias?: string  } 
  | { name: 'name_gt', alias?: string  } 
  | { name: 'name_gte', alias?: string  } 
  | { name: 'name_contains', alias?: string  } 
  | { name: 'name_not_contains', alias?: string  } 
  | { name: 'name_starts_with', alias?: string  } 
  | { name: 'name_not_starts_with', alias?: string  } 
  | { name: 'name_ends_with', alias?: string  } 
  | { name: 'name_not_ends_with', alias?: string  } 
  | { name: 'headpic', alias?: string  } 
  | { name: 'headpic_not', alias?: string  } 
  | { name: 'headpic_in', alias?: string  } 
  | { name: 'headpic_not_in', alias?: string  } 
  | { name: 'headpic_lt', alias?: string  } 
  | { name: 'headpic_lte', alias?: string  } 
  | { name: 'headpic_gt', alias?: string  } 
  | { name: 'headpic_gte', alias?: string  } 
  | { name: 'headpic_contains', alias?: string  } 
  | { name: 'headpic_not_contains', alias?: string  } 
  | { name: 'headpic_starts_with', alias?: string  } 
  | { name: 'headpic_not_starts_with', alias?: string  } 
  | { name: 'headpic_ends_with', alias?: string  } 
  | { name: 'headpic_not_ends_with', alias?: string  } 
  | { name: 'password', alias?: string  } 
  | { name: 'password_not', alias?: string  } 
  | { name: 'password_in', alias?: string  } 
  | { name: 'password_not_in', alias?: string  } 
  | { name: 'password_lt', alias?: string  } 
  | { name: 'password_lte', alias?: string  } 
  | { name: 'password_gt', alias?: string  } 
  | { name: 'password_gte', alias?: string  } 
  | { name: 'password_contains', alias?: string  } 
  | { name: 'password_not_contains', alias?: string  } 
  | { name: 'password_starts_with', alias?: string  } 
  | { name: 'password_not_starts_with', alias?: string  } 
  | { name: 'password_ends_with', alias?: string  } 
  | { name: 'password_not_ends_with', alias?: string  } 
  | { name: 'resetPasswordNext', alias?: string  } 
  | { name: 'resetPasswordNext_not', alias?: string  } 
  | { name: 'enable', alias?: string  } 
  | { name: 'enable_not', alias?: string  } 
  | { name: 'lastLoginAt', alias?: string  } 
  | { name: 'lastLoginAt_not', alias?: string  } 
  | { name: 'lastLoginAt_in', alias?: string  } 
  | { name: 'lastLoginAt_not_in', alias?: string  } 
  | { name: 'lastLoginAt_lt', alias?: string  } 
  | { name: 'lastLoginAt_lte', alias?: string  } 
  | { name: 'lastLoginAt_gt', alias?: string  } 
  | { name: 'lastLoginAt_gte', alias?: string  } 
  | { name: 'updatedAt', alias?: string  } 
  | { name: 'updatedAt_not', alias?: string  } 
  | { name: 'updatedAt_in', alias?: string  } 
  | { name: 'updatedAt_not_in', alias?: string  } 
  | { name: 'updatedAt_lt', alias?: string  } 
  | { name: 'updatedAt_lte', alias?: string  } 
  | { name: 'updatedAt_gt', alias?: string  } 
  | { name: 'updatedAt_gte', alias?: string  } 
  | { name: 'createdAt', alias?: string  } 
  | { name: 'createdAt_not', alias?: string  } 
  | { name: 'createdAt_in', alias?: string  } 
  | { name: 'createdAt_not_in', alias?: string  } 
  | { name: 'createdAt_lt', alias?: string  } 
  | { name: 'createdAt_lte', alias?: string  } 
  | { name: 'createdAt_gt', alias?: string  } 
  | { name: 'createdAt_gte', alias?: string  } 
  | { name: 'AND', alias?: string  } 
  | { name: 'OR', alias?: string  } 
  | { name: 'NOT', alias?: string  } 
  
export interface AccountUpdateManyWithWhereNestedInput {
  where?: AccountScalarWhereInput
  data?: AccountUpdateManyDataInput
}
export type AccountUpdateManyWithWhereNestedInputInputObject =
  | Extract<keyof AccountUpdateManyWithWhereNestedInput, string>
  | { name: 'where', alias?: string  } 
  | { name: 'data', alias?: string  } 
  
export interface AccountUpdateManyDataInput {
  userName?: string | null
  email?: string | null
  mobileNo?: string | null
  idCard?: string | null
  name?: string | null
  headpic?: string | null
  password?: string | null
  resetPasswordNext?: boolean | null
  enable?: boolean | null
  lastLoginAt?: string | null
}
export type AccountUpdateManyDataInputInputObject =
  | Extract<keyof AccountUpdateManyDataInput, string>
  | { name: 'userName', alias?: string  } 
  | { name: 'email', alias?: string  } 
  | { name: 'mobileNo', alias?: string  } 
  | { name: 'idCard', alias?: string  } 
  | { name: 'name', alias?: string  } 
  | { name: 'headpic', alias?: string  } 
  | { name: 'password', alias?: string  } 
  | { name: 'resetPasswordNext', alias?: string  } 
  | { name: 'enable', alias?: string  } 
  | { name: 'lastLoginAt', alias?: string  } 
  
export interface AccountUpdateManyMutationInput {
  userName?: string | null
  email?: string | null
  mobileNo?: string | null
  idCard?: string | null
  name?: string | null
  headpic?: string | null
  password?: string | null
  resetPasswordNext?: boolean | null
  enable?: boolean | null
  lastLoginAt?: string | null
}
export type AccountUpdateManyMutationInputInputObject =
  | Extract<keyof AccountUpdateManyMutationInput, string>
  | { name: 'userName', alias?: string  } 
  | { name: 'email', alias?: string  } 
  | { name: 'mobileNo', alias?: string  } 
  | { name: 'idCard', alias?: string  } 
  | { name: 'name', alias?: string  } 
  | { name: 'headpic', alias?: string  } 
  | { name: 'password', alias?: string  } 
  | { name: 'resetPasswordNext', alias?: string  } 
  | { name: 'enable', alias?: string  } 
  | { name: 'lastLoginAt', alias?: string  } 
  
export interface JwtRsaCreateInput {
  publicKey?: string | null
  privateKey?: string | null
}
export type JwtRsaCreateInputInputObject =
  | Extract<keyof JwtRsaCreateInput, string>
  | { name: 'publicKey', alias?: string  } 
  | { name: 'privateKey', alias?: string  } 
  
export interface JwtRsaUpdateInput {
  publicKey?: string | null
  privateKey?: string | null
}
export type JwtRsaUpdateInputInputObject =
  | Extract<keyof JwtRsaUpdateInput, string>
  | { name: 'publicKey', alias?: string  } 
  | { name: 'privateKey', alias?: string  } 
  
export interface JwtRsaUpdateManyMutationInput {
  publicKey?: string | null
  privateKey?: string | null
}
export type JwtRsaUpdateManyMutationInputInputObject =
  | Extract<keyof JwtRsaUpdateManyMutationInput, string>
  | { name: 'publicKey', alias?: string  } 
  | { name: 'privateKey', alias?: string  } 
  
export interface AccessKeyCreateInput {
  secret?: string | null
  activated?: boolean | null
  account?: AccountCreateOneWithoutAccessKeysInput
}
export type AccessKeyCreateInputInputObject =
  | Extract<keyof AccessKeyCreateInput, string>
  | { name: 'secret', alias?: string  } 
  | { name: 'activated', alias?: string  } 
  | { name: 'account', alias?: string  } 
  
export interface AccountCreateOneWithoutAccessKeysInput {
  create?: AccountCreateWithoutAccessKeysInput | null
  connect?: AccountWhereUniqueInput | null
}
export type AccountCreateOneWithoutAccessKeysInputInputObject =
  | Extract<keyof AccountCreateOneWithoutAccessKeysInput, string>
  | { name: 'create', alias?: string  } 
  | { name: 'connect', alias?: string  } 
  
export interface AccountCreateWithoutAccessKeysInput {
  userName?: string
  email?: string | null
  mobileNo?: string | null
  idCard?: string | null
  name?: string | null
  headpic?: string | null
  password?: string
  resetPasswordNext?: boolean | null
  enable?: boolean | null
  parentAccount?: AccountCreateOneWithoutSubAccountInput | null
  subAccount?: AccountCreateManyWithoutParentAccountInput | null
  groups?: GroupCreateManyWithoutAccountsInput | null
  permissions?: PermissionCreateManyInput | null
  lastLoginAt?: string | null
}
export type AccountCreateWithoutAccessKeysInputInputObject =
  | Extract<keyof AccountCreateWithoutAccessKeysInput, string>
  | { name: 'userName', alias?: string  } 
  | { name: 'email', alias?: string  } 
  | { name: 'mobileNo', alias?: string  } 
  | { name: 'idCard', alias?: string  } 
  | { name: 'name', alias?: string  } 
  | { name: 'headpic', alias?: string  } 
  | { name: 'password', alias?: string  } 
  | { name: 'resetPasswordNext', alias?: string  } 
  | { name: 'enable', alias?: string  } 
  | { name: 'parentAccount', alias?: string  } 
  | { name: 'subAccount', alias?: string  } 
  | { name: 'groups', alias?: string  } 
  | { name: 'permissions', alias?: string  } 
  | { name: 'lastLoginAt', alias?: string  } 
  
export interface AccessKeyUpdateInput {
  secret?: string | null
  activated?: boolean | null
  account?: AccountUpdateOneRequiredWithoutAccessKeysInput | null
}
export type AccessKeyUpdateInputInputObject =
  | Extract<keyof AccessKeyUpdateInput, string>
  | { name: 'secret', alias?: string  } 
  | { name: 'activated', alias?: string  } 
  | { name: 'account', alias?: string  } 
  
export interface AccountUpdateOneRequiredWithoutAccessKeysInput {
  create?: AccountCreateWithoutAccessKeysInput | null
  update?: AccountUpdateWithoutAccessKeysDataInput | null
  upsert?: AccountUpsertWithoutAccessKeysInput | null
  connect?: AccountWhereUniqueInput | null
}
export type AccountUpdateOneRequiredWithoutAccessKeysInputInputObject =
  | Extract<keyof AccountUpdateOneRequiredWithoutAccessKeysInput, string>
  | { name: 'create', alias?: string  } 
  | { name: 'update', alias?: string  } 
  | { name: 'upsert', alias?: string  } 
  | { name: 'connect', alias?: string  } 
  
export interface AccountUpdateWithoutAccessKeysDataInput {
  userName?: string | null
  email?: string | null
  mobileNo?: string | null
  idCard?: string | null
  name?: string | null
  headpic?: string | null
  password?: string | null
  resetPasswordNext?: boolean | null
  enable?: boolean | null
  parentAccount?: AccountUpdateOneWithoutSubAccountInput | null
  subAccount?: AccountUpdateManyWithoutParentAccountInput | null
  groups?: GroupUpdateManyWithoutAccountsInput | null
  permissions?: PermissionUpdateManyInput | null
  lastLoginAt?: string | null
}
export type AccountUpdateWithoutAccessKeysDataInputInputObject =
  | Extract<keyof AccountUpdateWithoutAccessKeysDataInput, string>
  | { name: 'userName', alias?: string  } 
  | { name: 'email', alias?: string  } 
  | { name: 'mobileNo', alias?: string  } 
  | { name: 'idCard', alias?: string  } 
  | { name: 'name', alias?: string  } 
  | { name: 'headpic', alias?: string  } 
  | { name: 'password', alias?: string  } 
  | { name: 'resetPasswordNext', alias?: string  } 
  | { name: 'enable', alias?: string  } 
  | { name: 'parentAccount', alias?: string  } 
  | { name: 'subAccount', alias?: string  } 
  | { name: 'groups', alias?: string  } 
  | { name: 'permissions', alias?: string  } 
  | { name: 'lastLoginAt', alias?: string  } 
  
export interface AccountUpsertWithoutAccessKeysInput {
  update?: AccountUpdateWithoutAccessKeysDataInput
  create?: AccountCreateWithoutAccessKeysInput
}
export type AccountUpsertWithoutAccessKeysInputInputObject =
  | Extract<keyof AccountUpsertWithoutAccessKeysInput, string>
  | { name: 'update', alias?: string  } 
  | { name: 'create', alias?: string  } 
  
export interface AccessKeyUpdateManyMutationInput {
  secret?: string | null
  activated?: boolean | null
}
export type AccessKeyUpdateManyMutationInputInputObject =
  | Extract<keyof AccessKeyUpdateManyMutationInput, string>
  | { name: 'secret', alias?: string  } 
  | { name: 'activated', alias?: string  } 
  
export interface ServiceRoleCreateInput {
  tenantIdServiceName?: string
  keyAuthSecret?: string
  permissions?: PermissionCreateManyInput | null
}
export type ServiceRoleCreateInputInputObject =
  | Extract<keyof ServiceRoleCreateInput, string>
  | { name: 'tenantIdServiceName', alias?: string  } 
  | { name: 'keyAuthSecret', alias?: string  } 
  | { name: 'permissions', alias?: string  } 
  
export interface ServiceRoleUpdateInput {
  tenantIdServiceName?: string | null
  keyAuthSecret?: string | null
  permissions?: PermissionUpdateManyInput | null
}
export type ServiceRoleUpdateInputInputObject =
  | Extract<keyof ServiceRoleUpdateInput, string>
  | { name: 'tenantIdServiceName', alias?: string  } 
  | { name: 'keyAuthSecret', alias?: string  } 
  | { name: 'permissions', alias?: string  } 
  
export interface ServiceRoleUpdateManyMutationInput {
  tenantIdServiceName?: string | null
  keyAuthSecret?: string | null
}
export type ServiceRoleUpdateManyMutationInputInputObject =
  | Extract<keyof ServiceRoleUpdateManyMutationInput, string>
  | { name: 'tenantIdServiceName', alias?: string  } 
  | { name: 'keyAuthSecret', alias?: string  } 
  
export interface PermissionUpdateInput {
  name?: string | null
  remark?: string | null
  type?: prisma.PermissionType | null
  usedCount?: number | null
  currentVersion?: number | null
  version1Content?: string | null
  version2Content?: string | null
  version3Content?: string | null
  version4Content?: string | null
  version5Content?: string | null
}
export type PermissionUpdateInputInputObject =
  | Extract<keyof PermissionUpdateInput, string>
  | { name: 'name', alias?: string  } 
  | { name: 'remark', alias?: string  } 
  | { name: 'type', alias?: string  } 
  | { name: 'usedCount', alias?: string  } 
  | { name: 'currentVersion', alias?: string  } 
  | { name: 'version1Content', alias?: string  } 
  | { name: 'version2Content', alias?: string  } 
  | { name: 'version3Content', alias?: string  } 
  | { name: 'version4Content', alias?: string  } 
  | { name: 'version5Content', alias?: string  } 
  
export interface PermissionUpdateManyMutationInput {
  name?: string | null
  remark?: string | null
  type?: prisma.PermissionType | null
  usedCount?: number | null
  currentVersion?: number | null
  version1Content?: string | null
  version2Content?: string | null
  version3Content?: string | null
  version4Content?: string | null
  version5Content?: string | null
}
export type PermissionUpdateManyMutationInputInputObject =
  | Extract<keyof PermissionUpdateManyMutationInput, string>
  | { name: 'name', alias?: string  } 
  | { name: 'remark', alias?: string  } 
  | { name: 'type', alias?: string  } 
  | { name: 'usedCount', alias?: string  } 
  | { name: 'currentVersion', alias?: string  } 
  | { name: 'version1Content', alias?: string  } 
  | { name: 'version2Content', alias?: string  } 
  | { name: 'version3Content', alias?: string  } 
  | { name: 'version4Content', alias?: string  } 
  | { name: 'version5Content', alias?: string  } 
  
export interface GroupCreateInput {
  type?: prisma.GroupType | null
  accounts?: AccountCreateManyWithoutGroupsInput | null
  permissions?: PermissionCreateManyInput | null
}
export type GroupCreateInputInputObject =
  | Extract<keyof GroupCreateInput, string>
  | { name: 'type', alias?: string  } 
  | { name: 'accounts', alias?: string  } 
  | { name: 'permissions', alias?: string  } 
  
export interface AccountCreateManyWithoutGroupsInput {
  create?: AccountCreateWithoutGroupsInput[]
  connect?: AccountWhereUniqueInput[]
}
export type AccountCreateManyWithoutGroupsInputInputObject =
  | Extract<keyof AccountCreateManyWithoutGroupsInput, string>
  | { name: 'create', alias?: string  } 
  | { name: 'connect', alias?: string  } 
  
export interface AccountCreateWithoutGroupsInput {
  userName?: string
  email?: string | null
  mobileNo?: string | null
  idCard?: string | null
  name?: string | null
  headpic?: string | null
  password?: string
  resetPasswordNext?: boolean | null
  enable?: boolean | null
  parentAccount?: AccountCreateOneWithoutSubAccountInput | null
  subAccount?: AccountCreateManyWithoutParentAccountInput | null
  accessKeys?: AccessKeyCreateManyWithoutAccountInput | null
  permissions?: PermissionCreateManyInput | null
  lastLoginAt?: string | null
}
export type AccountCreateWithoutGroupsInputInputObject =
  | Extract<keyof AccountCreateWithoutGroupsInput, string>
  | { name: 'userName', alias?: string  } 
  | { name: 'email', alias?: string  } 
  | { name: 'mobileNo', alias?: string  } 
  | { name: 'idCard', alias?: string  } 
  | { name: 'name', alias?: string  } 
  | { name: 'headpic', alias?: string  } 
  | { name: 'password', alias?: string  } 
  | { name: 'resetPasswordNext', alias?: string  } 
  | { name: 'enable', alias?: string  } 
  | { name: 'parentAccount', alias?: string  } 
  | { name: 'subAccount', alias?: string  } 
  | { name: 'accessKeys', alias?: string  } 
  | { name: 'permissions', alias?: string  } 
  | { name: 'lastLoginAt', alias?: string  } 
  
export interface GroupUpdateInput {
  type?: prisma.GroupType | null
  accounts?: AccountUpdateManyWithoutGroupsInput | null
  permissions?: PermissionUpdateManyInput | null
}
export type GroupUpdateInputInputObject =
  | Extract<keyof GroupUpdateInput, string>
  | { name: 'type', alias?: string  } 
  | { name: 'accounts', alias?: string  } 
  | { name: 'permissions', alias?: string  } 
  
export interface AccountUpdateManyWithoutGroupsInput {
  create?: AccountCreateWithoutGroupsInput[]
  delete?: AccountWhereUniqueInput[]
  connect?: AccountWhereUniqueInput[]
  set?: AccountWhereUniqueInput[]
  disconnect?: AccountWhereUniqueInput[]
  update?: AccountUpdateWithWhereUniqueWithoutGroupsInput[]
  upsert?: AccountUpsertWithWhereUniqueWithoutGroupsInput[]
  deleteMany?: AccountScalarWhereInput[]
  updateMany?: AccountUpdateManyWithWhereNestedInput[]
}
export type AccountUpdateManyWithoutGroupsInputInputObject =
  | Extract<keyof AccountUpdateManyWithoutGroupsInput, string>
  | { name: 'create', alias?: string  } 
  | { name: 'delete', alias?: string  } 
  | { name: 'connect', alias?: string  } 
  | { name: 'set', alias?: string  } 
  | { name: 'disconnect', alias?: string  } 
  | { name: 'update', alias?: string  } 
  | { name: 'upsert', alias?: string  } 
  | { name: 'deleteMany', alias?: string  } 
  | { name: 'updateMany', alias?: string  } 
  
export interface AccountUpdateWithWhereUniqueWithoutGroupsInput {
  where?: AccountWhereUniqueInput
  data?: AccountUpdateWithoutGroupsDataInput
}
export type AccountUpdateWithWhereUniqueWithoutGroupsInputInputObject =
  | Extract<keyof AccountUpdateWithWhereUniqueWithoutGroupsInput, string>
  | { name: 'where', alias?: string  } 
  | { name: 'data', alias?: string  } 
  
export interface AccountUpdateWithoutGroupsDataInput {
  userName?: string | null
  email?: string | null
  mobileNo?: string | null
  idCard?: string | null
  name?: string | null
  headpic?: string | null
  password?: string | null
  resetPasswordNext?: boolean | null
  enable?: boolean | null
  parentAccount?: AccountUpdateOneWithoutSubAccountInput | null
  subAccount?: AccountUpdateManyWithoutParentAccountInput | null
  accessKeys?: AccessKeyUpdateManyWithoutAccountInput | null
  permissions?: PermissionUpdateManyInput | null
  lastLoginAt?: string | null
}
export type AccountUpdateWithoutGroupsDataInputInputObject =
  | Extract<keyof AccountUpdateWithoutGroupsDataInput, string>
  | { name: 'userName', alias?: string  } 
  | { name: 'email', alias?: string  } 
  | { name: 'mobileNo', alias?: string  } 
  | { name: 'idCard', alias?: string  } 
  | { name: 'name', alias?: string  } 
  | { name: 'headpic', alias?: string  } 
  | { name: 'password', alias?: string  } 
  | { name: 'resetPasswordNext', alias?: string  } 
  | { name: 'enable', alias?: string  } 
  | { name: 'parentAccount', alias?: string  } 
  | { name: 'subAccount', alias?: string  } 
  | { name: 'accessKeys', alias?: string  } 
  | { name: 'permissions', alias?: string  } 
  | { name: 'lastLoginAt', alias?: string  } 
  
export interface AccountUpsertWithWhereUniqueWithoutGroupsInput {
  where?: AccountWhereUniqueInput
  update?: AccountUpdateWithoutGroupsDataInput
  create?: AccountCreateWithoutGroupsInput
}
export type AccountUpsertWithWhereUniqueWithoutGroupsInputInputObject =
  | Extract<keyof AccountUpsertWithWhereUniqueWithoutGroupsInput, string>
  | { name: 'where', alias?: string  } 
  | { name: 'update', alias?: string  } 
  | { name: 'create', alias?: string  } 
  
export interface GroupUpdateManyMutationInput {
  type?: prisma.GroupType | null
}
export type GroupUpdateManyMutationInputInputObject =
  | Extract<keyof GroupUpdateManyMutationInput, string>
  | { name: 'type', alias?: string  } 
  
export interface AccountSubscriptionWhereInput {
  mutation_in?: prisma.MutationType[]
  updatedFields_contains?: string | null
  updatedFields_contains_every?: string[]
  updatedFields_contains_some?: string[]
  node?: AccountWhereInput | null
  AND?: AccountSubscriptionWhereInput[]
  OR?: AccountSubscriptionWhereInput[]
  NOT?: AccountSubscriptionWhereInput[]
}
export type AccountSubscriptionWhereInputInputObject =
  | Extract<keyof AccountSubscriptionWhereInput, string>
  | { name: 'mutation_in', alias?: string  } 
  | { name: 'updatedFields_contains', alias?: string  } 
  | { name: 'updatedFields_contains_every', alias?: string  } 
  | { name: 'updatedFields_contains_some', alias?: string  } 
  | { name: 'node', alias?: string  } 
  | { name: 'AND', alias?: string  } 
  | { name: 'OR', alias?: string  } 
  | { name: 'NOT', alias?: string  } 
  
export interface JwtRsaSubscriptionWhereInput {
  mutation_in?: prisma.MutationType[]
  updatedFields_contains?: string | null
  updatedFields_contains_every?: string[]
  updatedFields_contains_some?: string[]
  node?: JwtRsaWhereInput | null
  AND?: JwtRsaSubscriptionWhereInput[]
  OR?: JwtRsaSubscriptionWhereInput[]
  NOT?: JwtRsaSubscriptionWhereInput[]
}
export type JwtRsaSubscriptionWhereInputInputObject =
  | Extract<keyof JwtRsaSubscriptionWhereInput, string>
  | { name: 'mutation_in', alias?: string  } 
  | { name: 'updatedFields_contains', alias?: string  } 
  | { name: 'updatedFields_contains_every', alias?: string  } 
  | { name: 'updatedFields_contains_some', alias?: string  } 
  | { name: 'node', alias?: string  } 
  | { name: 'AND', alias?: string  } 
  | { name: 'OR', alias?: string  } 
  | { name: 'NOT', alias?: string  } 
  
export interface AccessKeySubscriptionWhereInput {
  mutation_in?: prisma.MutationType[]
  updatedFields_contains?: string | null
  updatedFields_contains_every?: string[]
  updatedFields_contains_some?: string[]
  node?: AccessKeyWhereInput | null
  AND?: AccessKeySubscriptionWhereInput[]
  OR?: AccessKeySubscriptionWhereInput[]
  NOT?: AccessKeySubscriptionWhereInput[]
}
export type AccessKeySubscriptionWhereInputInputObject =
  | Extract<keyof AccessKeySubscriptionWhereInput, string>
  | { name: 'mutation_in', alias?: string  } 
  | { name: 'updatedFields_contains', alias?: string  } 
  | { name: 'updatedFields_contains_every', alias?: string  } 
  | { name: 'updatedFields_contains_some', alias?: string  } 
  | { name: 'node', alias?: string  } 
  | { name: 'AND', alias?: string  } 
  | { name: 'OR', alias?: string  } 
  | { name: 'NOT', alias?: string  } 
  
export interface ServiceRoleSubscriptionWhereInput {
  mutation_in?: prisma.MutationType[]
  updatedFields_contains?: string | null
  updatedFields_contains_every?: string[]
  updatedFields_contains_some?: string[]
  node?: ServiceRoleWhereInput | null
  AND?: ServiceRoleSubscriptionWhereInput[]
  OR?: ServiceRoleSubscriptionWhereInput[]
  NOT?: ServiceRoleSubscriptionWhereInput[]
}
export type ServiceRoleSubscriptionWhereInputInputObject =
  | Extract<keyof ServiceRoleSubscriptionWhereInput, string>
  | { name: 'mutation_in', alias?: string  } 
  | { name: 'updatedFields_contains', alias?: string  } 
  | { name: 'updatedFields_contains_every', alias?: string  } 
  | { name: 'updatedFields_contains_some', alias?: string  } 
  | { name: 'node', alias?: string  } 
  | { name: 'AND', alias?: string  } 
  | { name: 'OR', alias?: string  } 
  | { name: 'NOT', alias?: string  } 
  
export interface PermissionSubscriptionWhereInput {
  mutation_in?: prisma.MutationType[]
  updatedFields_contains?: string | null
  updatedFields_contains_every?: string[]
  updatedFields_contains_some?: string[]
  node?: PermissionWhereInput | null
  AND?: PermissionSubscriptionWhereInput[]
  OR?: PermissionSubscriptionWhereInput[]
  NOT?: PermissionSubscriptionWhereInput[]
}
export type PermissionSubscriptionWhereInputInputObject =
  | Extract<keyof PermissionSubscriptionWhereInput, string>
  | { name: 'mutation_in', alias?: string  } 
  | { name: 'updatedFields_contains', alias?: string  } 
  | { name: 'updatedFields_contains_every', alias?: string  } 
  | { name: 'updatedFields_contains_some', alias?: string  } 
  | { name: 'node', alias?: string  } 
  | { name: 'AND', alias?: string  } 
  | { name: 'OR', alias?: string  } 
  | { name: 'NOT', alias?: string  } 
  
export interface GroupSubscriptionWhereInput {
  mutation_in?: prisma.MutationType[]
  updatedFields_contains?: string | null
  updatedFields_contains_every?: string[]
  updatedFields_contains_some?: string[]
  node?: GroupWhereInput | null
  AND?: GroupSubscriptionWhereInput[]
  OR?: GroupSubscriptionWhereInput[]
  NOT?: GroupSubscriptionWhereInput[]
}
export type GroupSubscriptionWhereInputInputObject =
  | Extract<keyof GroupSubscriptionWhereInput, string>
  | { name: 'mutation_in', alias?: string  } 
  | { name: 'updatedFields_contains', alias?: string  } 
  | { name: 'updatedFields_contains_every', alias?: string  } 
  | { name: 'updatedFields_contains_some', alias?: string  } 
  | { name: 'node', alias?: string  } 
  | { name: 'AND', alias?: string  } 
  | { name: 'OR', alias?: string  } 
  | { name: 'NOT', alias?: string  } 
  

export type GroupTypeValues =
  | 'USERGROUP'
  | 'BUSINESSGROUP'
  
export type PermissionTypeValues =
  | 'SYSTEM'
  | 'CUSTOM'
  
export type AccountOrderByInputValues =
  | 'id_ASC'
  | 'id_DESC'
  | 'userName_ASC'
  | 'userName_DESC'
  | 'email_ASC'
  | 'email_DESC'
  | 'mobileNo_ASC'
  | 'mobileNo_DESC'
  | 'idCard_ASC'
  | 'idCard_DESC'
  | 'name_ASC'
  | 'name_DESC'
  | 'headpic_ASC'
  | 'headpic_DESC'
  | 'password_ASC'
  | 'password_DESC'
  | 'resetPasswordNext_ASC'
  | 'resetPasswordNext_DESC'
  | 'enable_ASC'
  | 'enable_DESC'
  | 'lastLoginAt_ASC'
  | 'lastLoginAt_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC'
  | 'createdAt_ASC'
  | 'createdAt_DESC'
  
export type AccessKeyOrderByInputValues =
  | 'id_ASC'
  | 'id_DESC'
  | 'secret_ASC'
  | 'secret_DESC'
  | 'activated_ASC'
  | 'activated_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC'
  | 'createdAt_ASC'
  | 'createdAt_DESC'
  
export type GroupOrderByInputValues =
  | 'id_ASC'
  | 'id_DESC'
  | 'type_ASC'
  | 'type_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC'
  | 'createdAt_ASC'
  | 'createdAt_DESC'
  
export type PermissionOrderByInputValues =
  | 'name_ASC'
  | 'name_DESC'
  | 'remark_ASC'
  | 'remark_DESC'
  | 'type_ASC'
  | 'type_DESC'
  | 'usedCount_ASC'
  | 'usedCount_DESC'
  | 'currentVersion_ASC'
  | 'currentVersion_DESC'
  | 'version1Content_ASC'
  | 'version1Content_DESC'
  | 'version2Content_ASC'
  | 'version2Content_DESC'
  | 'version3Content_ASC'
  | 'version3Content_DESC'
  | 'version4Content_ASC'
  | 'version4Content_DESC'
  | 'version5Content_ASC'
  | 'version5Content_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC'
  | 'createdAt_ASC'
  | 'createdAt_DESC'
  | 'id_ASC'
  | 'id_DESC'
  
export type JwtRsaOrderByInputValues =
  | 'id_ASC'
  | 'id_DESC'
  | 'publicKey_ASC'
  | 'publicKey_DESC'
  | 'privateKey_ASC'
  | 'privateKey_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC'
  | 'createdAt_ASC'
  | 'createdAt_DESC'
  
export type ServiceRoleOrderByInputValues =
  | 'tenantIdServiceName_ASC'
  | 'tenantIdServiceName_DESC'
  | 'keyAuthSecret_ASC'
  | 'keyAuthSecret_DESC'
  | 'updatedAt_ASC'
  | 'updatedAt_DESC'
  | 'createdAt_ASC'
  | 'createdAt_DESC'
  | 'id_ASC'
  | 'id_DESC'
  
export type MutationTypeValues =
  | 'CREATED'
  | 'UPDATED'
  | 'DELETED'
  
  