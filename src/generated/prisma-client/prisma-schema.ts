export const typeDefs = /* GraphQL */ `type AccessKey {
  id: ID!
  secret: String
  activated: Boolean!
  account: Account!
  updatedAt: DateTime!
  createdAt: DateTime!
}

type AccessKeyConnection {
  pageInfo: PageInfo!
  edges: [AccessKeyEdge]!
  aggregate: AggregateAccessKey!
}

input AccessKeyCreateInput {
  secret: String
  activated: Boolean
  account: AccountCreateOneWithoutAccessKeysInput!
}

input AccessKeyCreateManyWithoutAccountInput {
  create: [AccessKeyCreateWithoutAccountInput!]
  connect: [AccessKeyWhereUniqueInput!]
}

input AccessKeyCreateWithoutAccountInput {
  secret: String
  activated: Boolean
}

type AccessKeyEdge {
  node: AccessKey!
  cursor: String!
}

enum AccessKeyOrderByInput {
  id_ASC
  id_DESC
  secret_ASC
  secret_DESC
  activated_ASC
  activated_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type AccessKeyPreviousValues {
  id: ID!
  secret: String
  activated: Boolean!
  updatedAt: DateTime!
  createdAt: DateTime!
}

input AccessKeyScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  secret: String
  secret_not: String
  secret_in: [String!]
  secret_not_in: [String!]
  secret_lt: String
  secret_lte: String
  secret_gt: String
  secret_gte: String
  secret_contains: String
  secret_not_contains: String
  secret_starts_with: String
  secret_not_starts_with: String
  secret_ends_with: String
  secret_not_ends_with: String
  activated: Boolean
  activated_not: Boolean
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  AND: [AccessKeyScalarWhereInput!]
  OR: [AccessKeyScalarWhereInput!]
  NOT: [AccessKeyScalarWhereInput!]
}

type AccessKeySubscriptionPayload {
  mutation: MutationType!
  node: AccessKey
  updatedFields: [String!]
  previousValues: AccessKeyPreviousValues
}

input AccessKeySubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: AccessKeyWhereInput
  AND: [AccessKeySubscriptionWhereInput!]
  OR: [AccessKeySubscriptionWhereInput!]
  NOT: [AccessKeySubscriptionWhereInput!]
}

input AccessKeyUpdateInput {
  secret: String
  activated: Boolean
  account: AccountUpdateOneRequiredWithoutAccessKeysInput
}

input AccessKeyUpdateManyDataInput {
  secret: String
  activated: Boolean
}

input AccessKeyUpdateManyMutationInput {
  secret: String
  activated: Boolean
}

input AccessKeyUpdateManyWithoutAccountInput {
  create: [AccessKeyCreateWithoutAccountInput!]
  delete: [AccessKeyWhereUniqueInput!]
  connect: [AccessKeyWhereUniqueInput!]
  set: [AccessKeyWhereUniqueInput!]
  disconnect: [AccessKeyWhereUniqueInput!]
  update: [AccessKeyUpdateWithWhereUniqueWithoutAccountInput!]
  upsert: [AccessKeyUpsertWithWhereUniqueWithoutAccountInput!]
  deleteMany: [AccessKeyScalarWhereInput!]
  updateMany: [AccessKeyUpdateManyWithWhereNestedInput!]
}

input AccessKeyUpdateManyWithWhereNestedInput {
  where: AccessKeyScalarWhereInput!
  data: AccessKeyUpdateManyDataInput!
}

input AccessKeyUpdateWithoutAccountDataInput {
  secret: String
  activated: Boolean
}

input AccessKeyUpdateWithWhereUniqueWithoutAccountInput {
  where: AccessKeyWhereUniqueInput!
  data: AccessKeyUpdateWithoutAccountDataInput!
}

input AccessKeyUpsertWithWhereUniqueWithoutAccountInput {
  where: AccessKeyWhereUniqueInput!
  update: AccessKeyUpdateWithoutAccountDataInput!
  create: AccessKeyCreateWithoutAccountInput!
}

input AccessKeyWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  secret: String
  secret_not: String
  secret_in: [String!]
  secret_not_in: [String!]
  secret_lt: String
  secret_lte: String
  secret_gt: String
  secret_gte: String
  secret_contains: String
  secret_not_contains: String
  secret_starts_with: String
  secret_not_starts_with: String
  secret_ends_with: String
  secret_not_ends_with: String
  activated: Boolean
  activated_not: Boolean
  account: AccountWhereInput
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  AND: [AccessKeyWhereInput!]
  OR: [AccessKeyWhereInput!]
  NOT: [AccessKeyWhereInput!]
}

input AccessKeyWhereUniqueInput {
  id: ID
  secret: String
}

type Account {
  id: ID!
  userName: String!
  email: String
  mobileNo: String
  idCard: String
  name: String
  headpic: String
  password: String!
  resetPasswordNext: Boolean!
  enable: Boolean!
  parentAccount: Account
  subAccount(where: AccountWhereInput, orderBy: AccountOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Account!]
  accessKeys(where: AccessKeyWhereInput, orderBy: AccessKeyOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [AccessKey!]
  groups(where: GroupWhereInput, orderBy: GroupOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Group!]
  permissions(where: PermissionWhereInput, orderBy: PermissionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Permission!]
  lastLoginAt: DateTime
  updatedAt: DateTime!
  createdAt: DateTime!
}

type AccountConnection {
  pageInfo: PageInfo!
  edges: [AccountEdge]!
  aggregate: AggregateAccount!
}

input AccountCreateInput {
  userName: String!
  email: String
  mobileNo: String
  idCard: String
  name: String
  headpic: String
  password: String!
  resetPasswordNext: Boolean
  enable: Boolean
  parentAccount: AccountCreateOneWithoutSubAccountInput
  subAccount: AccountCreateManyWithoutParentAccountInput
  accessKeys: AccessKeyCreateManyWithoutAccountInput
  groups: GroupCreateManyWithoutAccountsInput
  permissions: PermissionCreateManyInput
  lastLoginAt: DateTime
}

input AccountCreateManyWithoutGroupsInput {
  create: [AccountCreateWithoutGroupsInput!]
  connect: [AccountWhereUniqueInput!]
}

input AccountCreateManyWithoutParentAccountInput {
  create: [AccountCreateWithoutParentAccountInput!]
  connect: [AccountWhereUniqueInput!]
}

input AccountCreateOneWithoutAccessKeysInput {
  create: AccountCreateWithoutAccessKeysInput
  connect: AccountWhereUniqueInput
}

input AccountCreateOneWithoutSubAccountInput {
  create: AccountCreateWithoutSubAccountInput
  connect: AccountWhereUniqueInput
}

input AccountCreateWithoutAccessKeysInput {
  userName: String!
  email: String
  mobileNo: String
  idCard: String
  name: String
  headpic: String
  password: String!
  resetPasswordNext: Boolean
  enable: Boolean
  parentAccount: AccountCreateOneWithoutSubAccountInput
  subAccount: AccountCreateManyWithoutParentAccountInput
  groups: GroupCreateManyWithoutAccountsInput
  permissions: PermissionCreateManyInput
  lastLoginAt: DateTime
}

input AccountCreateWithoutGroupsInput {
  userName: String!
  email: String
  mobileNo: String
  idCard: String
  name: String
  headpic: String
  password: String!
  resetPasswordNext: Boolean
  enable: Boolean
  parentAccount: AccountCreateOneWithoutSubAccountInput
  subAccount: AccountCreateManyWithoutParentAccountInput
  accessKeys: AccessKeyCreateManyWithoutAccountInput
  permissions: PermissionCreateManyInput
  lastLoginAt: DateTime
}

input AccountCreateWithoutParentAccountInput {
  userName: String!
  email: String
  mobileNo: String
  idCard: String
  name: String
  headpic: String
  password: String!
  resetPasswordNext: Boolean
  enable: Boolean
  subAccount: AccountCreateManyWithoutParentAccountInput
  accessKeys: AccessKeyCreateManyWithoutAccountInput
  groups: GroupCreateManyWithoutAccountsInput
  permissions: PermissionCreateManyInput
  lastLoginAt: DateTime
}

input AccountCreateWithoutSubAccountInput {
  userName: String!
  email: String
  mobileNo: String
  idCard: String
  name: String
  headpic: String
  password: String!
  resetPasswordNext: Boolean
  enable: Boolean
  parentAccount: AccountCreateOneWithoutSubAccountInput
  accessKeys: AccessKeyCreateManyWithoutAccountInput
  groups: GroupCreateManyWithoutAccountsInput
  permissions: PermissionCreateManyInput
  lastLoginAt: DateTime
}

type AccountEdge {
  node: Account!
  cursor: String!
}

enum AccountOrderByInput {
  id_ASC
  id_DESC
  userName_ASC
  userName_DESC
  email_ASC
  email_DESC
  mobileNo_ASC
  mobileNo_DESC
  idCard_ASC
  idCard_DESC
  name_ASC
  name_DESC
  headpic_ASC
  headpic_DESC
  password_ASC
  password_DESC
  resetPasswordNext_ASC
  resetPasswordNext_DESC
  enable_ASC
  enable_DESC
  lastLoginAt_ASC
  lastLoginAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type AccountPreviousValues {
  id: ID!
  userName: String!
  email: String
  mobileNo: String
  idCard: String
  name: String
  headpic: String
  password: String!
  resetPasswordNext: Boolean!
  enable: Boolean!
  lastLoginAt: DateTime
  updatedAt: DateTime!
  createdAt: DateTime!
}

input AccountScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  userName: String
  userName_not: String
  userName_in: [String!]
  userName_not_in: [String!]
  userName_lt: String
  userName_lte: String
  userName_gt: String
  userName_gte: String
  userName_contains: String
  userName_not_contains: String
  userName_starts_with: String
  userName_not_starts_with: String
  userName_ends_with: String
  userName_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  mobileNo: String
  mobileNo_not: String
  mobileNo_in: [String!]
  mobileNo_not_in: [String!]
  mobileNo_lt: String
  mobileNo_lte: String
  mobileNo_gt: String
  mobileNo_gte: String
  mobileNo_contains: String
  mobileNo_not_contains: String
  mobileNo_starts_with: String
  mobileNo_not_starts_with: String
  mobileNo_ends_with: String
  mobileNo_not_ends_with: String
  idCard: String
  idCard_not: String
  idCard_in: [String!]
  idCard_not_in: [String!]
  idCard_lt: String
  idCard_lte: String
  idCard_gt: String
  idCard_gte: String
  idCard_contains: String
  idCard_not_contains: String
  idCard_starts_with: String
  idCard_not_starts_with: String
  idCard_ends_with: String
  idCard_not_ends_with: String
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  headpic: String
  headpic_not: String
  headpic_in: [String!]
  headpic_not_in: [String!]
  headpic_lt: String
  headpic_lte: String
  headpic_gt: String
  headpic_gte: String
  headpic_contains: String
  headpic_not_contains: String
  headpic_starts_with: String
  headpic_not_starts_with: String
  headpic_ends_with: String
  headpic_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  resetPasswordNext: Boolean
  resetPasswordNext_not: Boolean
  enable: Boolean
  enable_not: Boolean
  lastLoginAt: DateTime
  lastLoginAt_not: DateTime
  lastLoginAt_in: [DateTime!]
  lastLoginAt_not_in: [DateTime!]
  lastLoginAt_lt: DateTime
  lastLoginAt_lte: DateTime
  lastLoginAt_gt: DateTime
  lastLoginAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  AND: [AccountScalarWhereInput!]
  OR: [AccountScalarWhereInput!]
  NOT: [AccountScalarWhereInput!]
}

type AccountSubscriptionPayload {
  mutation: MutationType!
  node: Account
  updatedFields: [String!]
  previousValues: AccountPreviousValues
}

input AccountSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: AccountWhereInput
  AND: [AccountSubscriptionWhereInput!]
  OR: [AccountSubscriptionWhereInput!]
  NOT: [AccountSubscriptionWhereInput!]
}

input AccountUpdateInput {
  userName: String
  email: String
  mobileNo: String
  idCard: String
  name: String
  headpic: String
  password: String
  resetPasswordNext: Boolean
  enable: Boolean
  parentAccount: AccountUpdateOneWithoutSubAccountInput
  subAccount: AccountUpdateManyWithoutParentAccountInput
  accessKeys: AccessKeyUpdateManyWithoutAccountInput
  groups: GroupUpdateManyWithoutAccountsInput
  permissions: PermissionUpdateManyInput
  lastLoginAt: DateTime
}

input AccountUpdateManyDataInput {
  userName: String
  email: String
  mobileNo: String
  idCard: String
  name: String
  headpic: String
  password: String
  resetPasswordNext: Boolean
  enable: Boolean
  lastLoginAt: DateTime
}

input AccountUpdateManyMutationInput {
  userName: String
  email: String
  mobileNo: String
  idCard: String
  name: String
  headpic: String
  password: String
  resetPasswordNext: Boolean
  enable: Boolean
  lastLoginAt: DateTime
}

input AccountUpdateManyWithoutGroupsInput {
  create: [AccountCreateWithoutGroupsInput!]
  delete: [AccountWhereUniqueInput!]
  connect: [AccountWhereUniqueInput!]
  set: [AccountWhereUniqueInput!]
  disconnect: [AccountWhereUniqueInput!]
  update: [AccountUpdateWithWhereUniqueWithoutGroupsInput!]
  upsert: [AccountUpsertWithWhereUniqueWithoutGroupsInput!]
  deleteMany: [AccountScalarWhereInput!]
  updateMany: [AccountUpdateManyWithWhereNestedInput!]
}

input AccountUpdateManyWithoutParentAccountInput {
  create: [AccountCreateWithoutParentAccountInput!]
  delete: [AccountWhereUniqueInput!]
  connect: [AccountWhereUniqueInput!]
  set: [AccountWhereUniqueInput!]
  disconnect: [AccountWhereUniqueInput!]
  update: [AccountUpdateWithWhereUniqueWithoutParentAccountInput!]
  upsert: [AccountUpsertWithWhereUniqueWithoutParentAccountInput!]
  deleteMany: [AccountScalarWhereInput!]
  updateMany: [AccountUpdateManyWithWhereNestedInput!]
}

input AccountUpdateManyWithWhereNestedInput {
  where: AccountScalarWhereInput!
  data: AccountUpdateManyDataInput!
}

input AccountUpdateOneRequiredWithoutAccessKeysInput {
  create: AccountCreateWithoutAccessKeysInput
  update: AccountUpdateWithoutAccessKeysDataInput
  upsert: AccountUpsertWithoutAccessKeysInput
  connect: AccountWhereUniqueInput
}

input AccountUpdateOneWithoutSubAccountInput {
  create: AccountCreateWithoutSubAccountInput
  update: AccountUpdateWithoutSubAccountDataInput
  upsert: AccountUpsertWithoutSubAccountInput
  delete: Boolean
  disconnect: Boolean
  connect: AccountWhereUniqueInput
}

input AccountUpdateWithoutAccessKeysDataInput {
  userName: String
  email: String
  mobileNo: String
  idCard: String
  name: String
  headpic: String
  password: String
  resetPasswordNext: Boolean
  enable: Boolean
  parentAccount: AccountUpdateOneWithoutSubAccountInput
  subAccount: AccountUpdateManyWithoutParentAccountInput
  groups: GroupUpdateManyWithoutAccountsInput
  permissions: PermissionUpdateManyInput
  lastLoginAt: DateTime
}

input AccountUpdateWithoutGroupsDataInput {
  userName: String
  email: String
  mobileNo: String
  idCard: String
  name: String
  headpic: String
  password: String
  resetPasswordNext: Boolean
  enable: Boolean
  parentAccount: AccountUpdateOneWithoutSubAccountInput
  subAccount: AccountUpdateManyWithoutParentAccountInput
  accessKeys: AccessKeyUpdateManyWithoutAccountInput
  permissions: PermissionUpdateManyInput
  lastLoginAt: DateTime
}

input AccountUpdateWithoutParentAccountDataInput {
  userName: String
  email: String
  mobileNo: String
  idCard: String
  name: String
  headpic: String
  password: String
  resetPasswordNext: Boolean
  enable: Boolean
  subAccount: AccountUpdateManyWithoutParentAccountInput
  accessKeys: AccessKeyUpdateManyWithoutAccountInput
  groups: GroupUpdateManyWithoutAccountsInput
  permissions: PermissionUpdateManyInput
  lastLoginAt: DateTime
}

input AccountUpdateWithoutSubAccountDataInput {
  userName: String
  email: String
  mobileNo: String
  idCard: String
  name: String
  headpic: String
  password: String
  resetPasswordNext: Boolean
  enable: Boolean
  parentAccount: AccountUpdateOneWithoutSubAccountInput
  accessKeys: AccessKeyUpdateManyWithoutAccountInput
  groups: GroupUpdateManyWithoutAccountsInput
  permissions: PermissionUpdateManyInput
  lastLoginAt: DateTime
}

input AccountUpdateWithWhereUniqueWithoutGroupsInput {
  where: AccountWhereUniqueInput!
  data: AccountUpdateWithoutGroupsDataInput!
}

input AccountUpdateWithWhereUniqueWithoutParentAccountInput {
  where: AccountWhereUniqueInput!
  data: AccountUpdateWithoutParentAccountDataInput!
}

input AccountUpsertWithoutAccessKeysInput {
  update: AccountUpdateWithoutAccessKeysDataInput!
  create: AccountCreateWithoutAccessKeysInput!
}

input AccountUpsertWithoutSubAccountInput {
  update: AccountUpdateWithoutSubAccountDataInput!
  create: AccountCreateWithoutSubAccountInput!
}

input AccountUpsertWithWhereUniqueWithoutGroupsInput {
  where: AccountWhereUniqueInput!
  update: AccountUpdateWithoutGroupsDataInput!
  create: AccountCreateWithoutGroupsInput!
}

input AccountUpsertWithWhereUniqueWithoutParentAccountInput {
  where: AccountWhereUniqueInput!
  update: AccountUpdateWithoutParentAccountDataInput!
  create: AccountCreateWithoutParentAccountInput!
}

input AccountWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  userName: String
  userName_not: String
  userName_in: [String!]
  userName_not_in: [String!]
  userName_lt: String
  userName_lte: String
  userName_gt: String
  userName_gte: String
  userName_contains: String
  userName_not_contains: String
  userName_starts_with: String
  userName_not_starts_with: String
  userName_ends_with: String
  userName_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  mobileNo: String
  mobileNo_not: String
  mobileNo_in: [String!]
  mobileNo_not_in: [String!]
  mobileNo_lt: String
  mobileNo_lte: String
  mobileNo_gt: String
  mobileNo_gte: String
  mobileNo_contains: String
  mobileNo_not_contains: String
  mobileNo_starts_with: String
  mobileNo_not_starts_with: String
  mobileNo_ends_with: String
  mobileNo_not_ends_with: String
  idCard: String
  idCard_not: String
  idCard_in: [String!]
  idCard_not_in: [String!]
  idCard_lt: String
  idCard_lte: String
  idCard_gt: String
  idCard_gte: String
  idCard_contains: String
  idCard_not_contains: String
  idCard_starts_with: String
  idCard_not_starts_with: String
  idCard_ends_with: String
  idCard_not_ends_with: String
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  headpic: String
  headpic_not: String
  headpic_in: [String!]
  headpic_not_in: [String!]
  headpic_lt: String
  headpic_lte: String
  headpic_gt: String
  headpic_gte: String
  headpic_contains: String
  headpic_not_contains: String
  headpic_starts_with: String
  headpic_not_starts_with: String
  headpic_ends_with: String
  headpic_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  resetPasswordNext: Boolean
  resetPasswordNext_not: Boolean
  enable: Boolean
  enable_not: Boolean
  parentAccount: AccountWhereInput
  subAccount_every: AccountWhereInput
  subAccount_some: AccountWhereInput
  subAccount_none: AccountWhereInput
  accessKeys_every: AccessKeyWhereInput
  accessKeys_some: AccessKeyWhereInput
  accessKeys_none: AccessKeyWhereInput
  groups_every: GroupWhereInput
  groups_some: GroupWhereInput
  groups_none: GroupWhereInput
  permissions_every: PermissionWhereInput
  permissions_some: PermissionWhereInput
  permissions_none: PermissionWhereInput
  lastLoginAt: DateTime
  lastLoginAt_not: DateTime
  lastLoginAt_in: [DateTime!]
  lastLoginAt_not_in: [DateTime!]
  lastLoginAt_lt: DateTime
  lastLoginAt_lte: DateTime
  lastLoginAt_gt: DateTime
  lastLoginAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  AND: [AccountWhereInput!]
  OR: [AccountWhereInput!]
  NOT: [AccountWhereInput!]
}

input AccountWhereUniqueInput {
  id: ID
  userName: String
  email: String
  idCard: String
}

type AggregateAccessKey {
  count: Int!
}

type AggregateAccount {
  count: Int!
}

type AggregateGroup {
  count: Int!
}

type AggregateJwtRsa {
  count: Int!
}

type AggregatePermission {
  count: Int!
}

type AggregateServiceRole {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar DateTime

type Group {
  id: ID!
  type: GroupType
  accounts(where: AccountWhereInput, orderBy: AccountOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Account!]
  permissions(where: PermissionWhereInput, orderBy: PermissionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Permission!]
  updatedAt: DateTime!
  createdAt: DateTime!
}

type GroupConnection {
  pageInfo: PageInfo!
  edges: [GroupEdge]!
  aggregate: AggregateGroup!
}

input GroupCreateInput {
  type: GroupType
  accounts: AccountCreateManyWithoutGroupsInput
  permissions: PermissionCreateManyInput
}

input GroupCreateManyWithoutAccountsInput {
  create: [GroupCreateWithoutAccountsInput!]
  connect: [GroupWhereUniqueInput!]
}

input GroupCreateWithoutAccountsInput {
  type: GroupType
  permissions: PermissionCreateManyInput
}

type GroupEdge {
  node: Group!
  cursor: String!
}

enum GroupOrderByInput {
  id_ASC
  id_DESC
  type_ASC
  type_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type GroupPreviousValues {
  id: ID!
  type: GroupType
  updatedAt: DateTime!
  createdAt: DateTime!
}

input GroupScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  type: GroupType
  type_not: GroupType
  type_in: [GroupType!]
  type_not_in: [GroupType!]
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  AND: [GroupScalarWhereInput!]
  OR: [GroupScalarWhereInput!]
  NOT: [GroupScalarWhereInput!]
}

type GroupSubscriptionPayload {
  mutation: MutationType!
  node: Group
  updatedFields: [String!]
  previousValues: GroupPreviousValues
}

input GroupSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: GroupWhereInput
  AND: [GroupSubscriptionWhereInput!]
  OR: [GroupSubscriptionWhereInput!]
  NOT: [GroupSubscriptionWhereInput!]
}

enum GroupType {
  USERGROUP
  BUSINESSGROUP
}

input GroupUpdateInput {
  type: GroupType
  accounts: AccountUpdateManyWithoutGroupsInput
  permissions: PermissionUpdateManyInput
}

input GroupUpdateManyDataInput {
  type: GroupType
}

input GroupUpdateManyMutationInput {
  type: GroupType
}

input GroupUpdateManyWithoutAccountsInput {
  create: [GroupCreateWithoutAccountsInput!]
  delete: [GroupWhereUniqueInput!]
  connect: [GroupWhereUniqueInput!]
  set: [GroupWhereUniqueInput!]
  disconnect: [GroupWhereUniqueInput!]
  update: [GroupUpdateWithWhereUniqueWithoutAccountsInput!]
  upsert: [GroupUpsertWithWhereUniqueWithoutAccountsInput!]
  deleteMany: [GroupScalarWhereInput!]
  updateMany: [GroupUpdateManyWithWhereNestedInput!]
}

input GroupUpdateManyWithWhereNestedInput {
  where: GroupScalarWhereInput!
  data: GroupUpdateManyDataInput!
}

input GroupUpdateWithoutAccountsDataInput {
  type: GroupType
  permissions: PermissionUpdateManyInput
}

input GroupUpdateWithWhereUniqueWithoutAccountsInput {
  where: GroupWhereUniqueInput!
  data: GroupUpdateWithoutAccountsDataInput!
}

input GroupUpsertWithWhereUniqueWithoutAccountsInput {
  where: GroupWhereUniqueInput!
  update: GroupUpdateWithoutAccountsDataInput!
  create: GroupCreateWithoutAccountsInput!
}

input GroupWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  type: GroupType
  type_not: GroupType
  type_in: [GroupType!]
  type_not_in: [GroupType!]
  accounts_every: AccountWhereInput
  accounts_some: AccountWhereInput
  accounts_none: AccountWhereInput
  permissions_every: PermissionWhereInput
  permissions_some: PermissionWhereInput
  permissions_none: PermissionWhereInput
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  AND: [GroupWhereInput!]
  OR: [GroupWhereInput!]
  NOT: [GroupWhereInput!]
}

input GroupWhereUniqueInput {
  id: ID
}

type JwtRsa {
  id: ID!
  publicKey: String
  privateKey: String
  updatedAt: DateTime!
  createdAt: DateTime!
}

type JwtRsaConnection {
  pageInfo: PageInfo!
  edges: [JwtRsaEdge]!
  aggregate: AggregateJwtRsa!
}

input JwtRsaCreateInput {
  publicKey: String
  privateKey: String
}

type JwtRsaEdge {
  node: JwtRsa!
  cursor: String!
}

enum JwtRsaOrderByInput {
  id_ASC
  id_DESC
  publicKey_ASC
  publicKey_DESC
  privateKey_ASC
  privateKey_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
}

type JwtRsaPreviousValues {
  id: ID!
  publicKey: String
  privateKey: String
  updatedAt: DateTime!
  createdAt: DateTime!
}

type JwtRsaSubscriptionPayload {
  mutation: MutationType!
  node: JwtRsa
  updatedFields: [String!]
  previousValues: JwtRsaPreviousValues
}

input JwtRsaSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: JwtRsaWhereInput
  AND: [JwtRsaSubscriptionWhereInput!]
  OR: [JwtRsaSubscriptionWhereInput!]
  NOT: [JwtRsaSubscriptionWhereInput!]
}

input JwtRsaUpdateInput {
  publicKey: String
  privateKey: String
}

input JwtRsaUpdateManyMutationInput {
  publicKey: String
  privateKey: String
}

input JwtRsaWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  publicKey: String
  publicKey_not: String
  publicKey_in: [String!]
  publicKey_not_in: [String!]
  publicKey_lt: String
  publicKey_lte: String
  publicKey_gt: String
  publicKey_gte: String
  publicKey_contains: String
  publicKey_not_contains: String
  publicKey_starts_with: String
  publicKey_not_starts_with: String
  publicKey_ends_with: String
  publicKey_not_ends_with: String
  privateKey: String
  privateKey_not: String
  privateKey_in: [String!]
  privateKey_not_in: [String!]
  privateKey_lt: String
  privateKey_lte: String
  privateKey_gt: String
  privateKey_gte: String
  privateKey_contains: String
  privateKey_not_contains: String
  privateKey_starts_with: String
  privateKey_not_starts_with: String
  privateKey_ends_with: String
  privateKey_not_ends_with: String
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  AND: [JwtRsaWhereInput!]
  OR: [JwtRsaWhereInput!]
  NOT: [JwtRsaWhereInput!]
}

input JwtRsaWhereUniqueInput {
  id: ID
}

scalar Long

type Mutation {
  createAccessKey(data: AccessKeyCreateInput!): AccessKey!
  updateAccessKey(data: AccessKeyUpdateInput!, where: AccessKeyWhereUniqueInput!): AccessKey
  updateManyAccessKeys(data: AccessKeyUpdateManyMutationInput!, where: AccessKeyWhereInput): BatchPayload!
  upsertAccessKey(where: AccessKeyWhereUniqueInput!, create: AccessKeyCreateInput!, update: AccessKeyUpdateInput!): AccessKey!
  deleteAccessKey(where: AccessKeyWhereUniqueInput!): AccessKey
  deleteManyAccessKeys(where: AccessKeyWhereInput): BatchPayload!
  createAccount(data: AccountCreateInput!): Account!
  updateAccount(data: AccountUpdateInput!, where: AccountWhereUniqueInput!): Account
  updateManyAccounts(data: AccountUpdateManyMutationInput!, where: AccountWhereInput): BatchPayload!
  upsertAccount(where: AccountWhereUniqueInput!, create: AccountCreateInput!, update: AccountUpdateInput!): Account!
  deleteAccount(where: AccountWhereUniqueInput!): Account
  deleteManyAccounts(where: AccountWhereInput): BatchPayload!
  createGroup(data: GroupCreateInput!): Group!
  updateGroup(data: GroupUpdateInput!, where: GroupWhereUniqueInput!): Group
  updateManyGroups(data: GroupUpdateManyMutationInput!, where: GroupWhereInput): BatchPayload!
  upsertGroup(where: GroupWhereUniqueInput!, create: GroupCreateInput!, update: GroupUpdateInput!): Group!
  deleteGroup(where: GroupWhereUniqueInput!): Group
  deleteManyGroups(where: GroupWhereInput): BatchPayload!
  createJwtRsa(data: JwtRsaCreateInput!): JwtRsa!
  updateJwtRsa(data: JwtRsaUpdateInput!, where: JwtRsaWhereUniqueInput!): JwtRsa
  updateManyJwtRsas(data: JwtRsaUpdateManyMutationInput!, where: JwtRsaWhereInput): BatchPayload!
  upsertJwtRsa(where: JwtRsaWhereUniqueInput!, create: JwtRsaCreateInput!, update: JwtRsaUpdateInput!): JwtRsa!
  deleteJwtRsa(where: JwtRsaWhereUniqueInput!): JwtRsa
  deleteManyJwtRsas(where: JwtRsaWhereInput): BatchPayload!
  createPermission(data: PermissionCreateInput!): Permission!
  updatePermission(data: PermissionUpdateInput!, where: PermissionWhereUniqueInput!): Permission
  updateManyPermissions(data: PermissionUpdateManyMutationInput!, where: PermissionWhereInput): BatchPayload!
  upsertPermission(where: PermissionWhereUniqueInput!, create: PermissionCreateInput!, update: PermissionUpdateInput!): Permission!
  deletePermission(where: PermissionWhereUniqueInput!): Permission
  deleteManyPermissions(where: PermissionWhereInput): BatchPayload!
  createServiceRole(data: ServiceRoleCreateInput!): ServiceRole!
  updateServiceRole(data: ServiceRoleUpdateInput!, where: ServiceRoleWhereUniqueInput!): ServiceRole
  updateManyServiceRoles(data: ServiceRoleUpdateManyMutationInput!, where: ServiceRoleWhereInput): BatchPayload!
  upsertServiceRole(where: ServiceRoleWhereUniqueInput!, create: ServiceRoleCreateInput!, update: ServiceRoleUpdateInput!): ServiceRole!
  deleteServiceRole(where: ServiceRoleWhereUniqueInput!): ServiceRole
  deleteManyServiceRoles(where: ServiceRoleWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Permission {
  name: String!
  remark: String!
  type: PermissionType
  usedCount: Int!
  currentVersion: Int!
  version1Content: String
  version2Content: String
  version3Content: String
  version4Content: String
  version5Content: String
  updatedAt: DateTime!
  createdAt: DateTime!
}

type PermissionConnection {
  pageInfo: PageInfo!
  edges: [PermissionEdge]!
  aggregate: AggregatePermission!
}

input PermissionCreateInput {
  name: String!
  remark: String!
  type: PermissionType
  usedCount: Int
  currentVersion: Int!
  version1Content: String
  version2Content: String
  version3Content: String
  version4Content: String
  version5Content: String
}

input PermissionCreateManyInput {
  create: [PermissionCreateInput!]
  connect: [PermissionWhereUniqueInput!]
}

type PermissionEdge {
  node: Permission!
  cursor: String!
}

enum PermissionOrderByInput {
  name_ASC
  name_DESC
  remark_ASC
  remark_DESC
  type_ASC
  type_DESC
  usedCount_ASC
  usedCount_DESC
  currentVersion_ASC
  currentVersion_DESC
  version1Content_ASC
  version1Content_DESC
  version2Content_ASC
  version2Content_DESC
  version3Content_ASC
  version3Content_DESC
  version4Content_ASC
  version4Content_DESC
  version5Content_ASC
  version5Content_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
  id_ASC
  id_DESC
}

type PermissionPreviousValues {
  name: String!
  remark: String!
  type: PermissionType
  usedCount: Int!
  currentVersion: Int!
  version1Content: String
  version2Content: String
  version3Content: String
  version4Content: String
  version5Content: String
  updatedAt: DateTime!
  createdAt: DateTime!
}

input PermissionScalarWhereInput {
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  remark: String
  remark_not: String
  remark_in: [String!]
  remark_not_in: [String!]
  remark_lt: String
  remark_lte: String
  remark_gt: String
  remark_gte: String
  remark_contains: String
  remark_not_contains: String
  remark_starts_with: String
  remark_not_starts_with: String
  remark_ends_with: String
  remark_not_ends_with: String
  type: PermissionType
  type_not: PermissionType
  type_in: [PermissionType!]
  type_not_in: [PermissionType!]
  usedCount: Int
  usedCount_not: Int
  usedCount_in: [Int!]
  usedCount_not_in: [Int!]
  usedCount_lt: Int
  usedCount_lte: Int
  usedCount_gt: Int
  usedCount_gte: Int
  currentVersion: Int
  currentVersion_not: Int
  currentVersion_in: [Int!]
  currentVersion_not_in: [Int!]
  currentVersion_lt: Int
  currentVersion_lte: Int
  currentVersion_gt: Int
  currentVersion_gte: Int
  version1Content: String
  version1Content_not: String
  version1Content_in: [String!]
  version1Content_not_in: [String!]
  version1Content_lt: String
  version1Content_lte: String
  version1Content_gt: String
  version1Content_gte: String
  version1Content_contains: String
  version1Content_not_contains: String
  version1Content_starts_with: String
  version1Content_not_starts_with: String
  version1Content_ends_with: String
  version1Content_not_ends_with: String
  version2Content: String
  version2Content_not: String
  version2Content_in: [String!]
  version2Content_not_in: [String!]
  version2Content_lt: String
  version2Content_lte: String
  version2Content_gt: String
  version2Content_gte: String
  version2Content_contains: String
  version2Content_not_contains: String
  version2Content_starts_with: String
  version2Content_not_starts_with: String
  version2Content_ends_with: String
  version2Content_not_ends_with: String
  version3Content: String
  version3Content_not: String
  version3Content_in: [String!]
  version3Content_not_in: [String!]
  version3Content_lt: String
  version3Content_lte: String
  version3Content_gt: String
  version3Content_gte: String
  version3Content_contains: String
  version3Content_not_contains: String
  version3Content_starts_with: String
  version3Content_not_starts_with: String
  version3Content_ends_with: String
  version3Content_not_ends_with: String
  version4Content: String
  version4Content_not: String
  version4Content_in: [String!]
  version4Content_not_in: [String!]
  version4Content_lt: String
  version4Content_lte: String
  version4Content_gt: String
  version4Content_gte: String
  version4Content_contains: String
  version4Content_not_contains: String
  version4Content_starts_with: String
  version4Content_not_starts_with: String
  version4Content_ends_with: String
  version4Content_not_ends_with: String
  version5Content: String
  version5Content_not: String
  version5Content_in: [String!]
  version5Content_not_in: [String!]
  version5Content_lt: String
  version5Content_lte: String
  version5Content_gt: String
  version5Content_gte: String
  version5Content_contains: String
  version5Content_not_contains: String
  version5Content_starts_with: String
  version5Content_not_starts_with: String
  version5Content_ends_with: String
  version5Content_not_ends_with: String
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  AND: [PermissionScalarWhereInput!]
  OR: [PermissionScalarWhereInput!]
  NOT: [PermissionScalarWhereInput!]
}

type PermissionSubscriptionPayload {
  mutation: MutationType!
  node: Permission
  updatedFields: [String!]
  previousValues: PermissionPreviousValues
}

input PermissionSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: PermissionWhereInput
  AND: [PermissionSubscriptionWhereInput!]
  OR: [PermissionSubscriptionWhereInput!]
  NOT: [PermissionSubscriptionWhereInput!]
}

enum PermissionType {
  SYSTEM
  CUSTOM
}

input PermissionUpdateDataInput {
  name: String
  remark: String
  type: PermissionType
  usedCount: Int
  currentVersion: Int
  version1Content: String
  version2Content: String
  version3Content: String
  version4Content: String
  version5Content: String
}

input PermissionUpdateInput {
  name: String
  remark: String
  type: PermissionType
  usedCount: Int
  currentVersion: Int
  version1Content: String
  version2Content: String
  version3Content: String
  version4Content: String
  version5Content: String
}

input PermissionUpdateManyDataInput {
  name: String
  remark: String
  type: PermissionType
  usedCount: Int
  currentVersion: Int
  version1Content: String
  version2Content: String
  version3Content: String
  version4Content: String
  version5Content: String
}

input PermissionUpdateManyInput {
  create: [PermissionCreateInput!]
  update: [PermissionUpdateWithWhereUniqueNestedInput!]
  upsert: [PermissionUpsertWithWhereUniqueNestedInput!]
  delete: [PermissionWhereUniqueInput!]
  connect: [PermissionWhereUniqueInput!]
  set: [PermissionWhereUniqueInput!]
  disconnect: [PermissionWhereUniqueInput!]
  deleteMany: [PermissionScalarWhereInput!]
  updateMany: [PermissionUpdateManyWithWhereNestedInput!]
}

input PermissionUpdateManyMutationInput {
  name: String
  remark: String
  type: PermissionType
  usedCount: Int
  currentVersion: Int
  version1Content: String
  version2Content: String
  version3Content: String
  version4Content: String
  version5Content: String
}

input PermissionUpdateManyWithWhereNestedInput {
  where: PermissionScalarWhereInput!
  data: PermissionUpdateManyDataInput!
}

input PermissionUpdateWithWhereUniqueNestedInput {
  where: PermissionWhereUniqueInput!
  data: PermissionUpdateDataInput!
}

input PermissionUpsertWithWhereUniqueNestedInput {
  where: PermissionWhereUniqueInput!
  update: PermissionUpdateDataInput!
  create: PermissionCreateInput!
}

input PermissionWhereInput {
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  remark: String
  remark_not: String
  remark_in: [String!]
  remark_not_in: [String!]
  remark_lt: String
  remark_lte: String
  remark_gt: String
  remark_gte: String
  remark_contains: String
  remark_not_contains: String
  remark_starts_with: String
  remark_not_starts_with: String
  remark_ends_with: String
  remark_not_ends_with: String
  type: PermissionType
  type_not: PermissionType
  type_in: [PermissionType!]
  type_not_in: [PermissionType!]
  usedCount: Int
  usedCount_not: Int
  usedCount_in: [Int!]
  usedCount_not_in: [Int!]
  usedCount_lt: Int
  usedCount_lte: Int
  usedCount_gt: Int
  usedCount_gte: Int
  currentVersion: Int
  currentVersion_not: Int
  currentVersion_in: [Int!]
  currentVersion_not_in: [Int!]
  currentVersion_lt: Int
  currentVersion_lte: Int
  currentVersion_gt: Int
  currentVersion_gte: Int
  version1Content: String
  version1Content_not: String
  version1Content_in: [String!]
  version1Content_not_in: [String!]
  version1Content_lt: String
  version1Content_lte: String
  version1Content_gt: String
  version1Content_gte: String
  version1Content_contains: String
  version1Content_not_contains: String
  version1Content_starts_with: String
  version1Content_not_starts_with: String
  version1Content_ends_with: String
  version1Content_not_ends_with: String
  version2Content: String
  version2Content_not: String
  version2Content_in: [String!]
  version2Content_not_in: [String!]
  version2Content_lt: String
  version2Content_lte: String
  version2Content_gt: String
  version2Content_gte: String
  version2Content_contains: String
  version2Content_not_contains: String
  version2Content_starts_with: String
  version2Content_not_starts_with: String
  version2Content_ends_with: String
  version2Content_not_ends_with: String
  version3Content: String
  version3Content_not: String
  version3Content_in: [String!]
  version3Content_not_in: [String!]
  version3Content_lt: String
  version3Content_lte: String
  version3Content_gt: String
  version3Content_gte: String
  version3Content_contains: String
  version3Content_not_contains: String
  version3Content_starts_with: String
  version3Content_not_starts_with: String
  version3Content_ends_with: String
  version3Content_not_ends_with: String
  version4Content: String
  version4Content_not: String
  version4Content_in: [String!]
  version4Content_not_in: [String!]
  version4Content_lt: String
  version4Content_lte: String
  version4Content_gt: String
  version4Content_gte: String
  version4Content_contains: String
  version4Content_not_contains: String
  version4Content_starts_with: String
  version4Content_not_starts_with: String
  version4Content_ends_with: String
  version4Content_not_ends_with: String
  version5Content: String
  version5Content_not: String
  version5Content_in: [String!]
  version5Content_not_in: [String!]
  version5Content_lt: String
  version5Content_lte: String
  version5Content_gt: String
  version5Content_gte: String
  version5Content_contains: String
  version5Content_not_contains: String
  version5Content_starts_with: String
  version5Content_not_starts_with: String
  version5Content_ends_with: String
  version5Content_not_ends_with: String
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  AND: [PermissionWhereInput!]
  OR: [PermissionWhereInput!]
  NOT: [PermissionWhereInput!]
}

input PermissionWhereUniqueInput {
  name: String
}

type Query {
  accessKey(where: AccessKeyWhereUniqueInput!): AccessKey
  accessKeys(where: AccessKeyWhereInput, orderBy: AccessKeyOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [AccessKey]!
  accessKeysConnection(where: AccessKeyWhereInput, orderBy: AccessKeyOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): AccessKeyConnection!
  account(where: AccountWhereUniqueInput!): Account
  accounts(where: AccountWhereInput, orderBy: AccountOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Account]!
  accountsConnection(where: AccountWhereInput, orderBy: AccountOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): AccountConnection!
  group(where: GroupWhereUniqueInput!): Group
  groups(where: GroupWhereInput, orderBy: GroupOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Group]!
  groupsConnection(where: GroupWhereInput, orderBy: GroupOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): GroupConnection!
  jwtRsa(where: JwtRsaWhereUniqueInput!): JwtRsa
  jwtRsas(where: JwtRsaWhereInput, orderBy: JwtRsaOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [JwtRsa]!
  jwtRsasConnection(where: JwtRsaWhereInput, orderBy: JwtRsaOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): JwtRsaConnection!
  permission(where: PermissionWhereUniqueInput!): Permission
  permissions(where: PermissionWhereInput, orderBy: PermissionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Permission]!
  permissionsConnection(where: PermissionWhereInput, orderBy: PermissionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PermissionConnection!
  serviceRole(where: ServiceRoleWhereUniqueInput!): ServiceRole
  serviceRoles(where: ServiceRoleWhereInput, orderBy: ServiceRoleOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ServiceRole]!
  serviceRolesConnection(where: ServiceRoleWhereInput, orderBy: ServiceRoleOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ServiceRoleConnection!
  node(id: ID!): Node
}

type ServiceRole {
  tenantIdServiceName: String!
  keyAuthSecret: String!
  permissions(where: PermissionWhereInput, orderBy: PermissionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Permission!]
  updatedAt: DateTime!
  createdAt: DateTime!
}

type ServiceRoleConnection {
  pageInfo: PageInfo!
  edges: [ServiceRoleEdge]!
  aggregate: AggregateServiceRole!
}

input ServiceRoleCreateInput {
  tenantIdServiceName: String!
  keyAuthSecret: String!
  permissions: PermissionCreateManyInput
}

type ServiceRoleEdge {
  node: ServiceRole!
  cursor: String!
}

enum ServiceRoleOrderByInput {
  tenantIdServiceName_ASC
  tenantIdServiceName_DESC
  keyAuthSecret_ASC
  keyAuthSecret_DESC
  updatedAt_ASC
  updatedAt_DESC
  createdAt_ASC
  createdAt_DESC
  id_ASC
  id_DESC
}

type ServiceRolePreviousValues {
  tenantIdServiceName: String!
  keyAuthSecret: String!
  updatedAt: DateTime!
  createdAt: DateTime!
}

type ServiceRoleSubscriptionPayload {
  mutation: MutationType!
  node: ServiceRole
  updatedFields: [String!]
  previousValues: ServiceRolePreviousValues
}

input ServiceRoleSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ServiceRoleWhereInput
  AND: [ServiceRoleSubscriptionWhereInput!]
  OR: [ServiceRoleSubscriptionWhereInput!]
  NOT: [ServiceRoleSubscriptionWhereInput!]
}

input ServiceRoleUpdateInput {
  tenantIdServiceName: String
  keyAuthSecret: String
  permissions: PermissionUpdateManyInput
}

input ServiceRoleUpdateManyMutationInput {
  tenantIdServiceName: String
  keyAuthSecret: String
}

input ServiceRoleWhereInput {
  tenantIdServiceName: String
  tenantIdServiceName_not: String
  tenantIdServiceName_in: [String!]
  tenantIdServiceName_not_in: [String!]
  tenantIdServiceName_lt: String
  tenantIdServiceName_lte: String
  tenantIdServiceName_gt: String
  tenantIdServiceName_gte: String
  tenantIdServiceName_contains: String
  tenantIdServiceName_not_contains: String
  tenantIdServiceName_starts_with: String
  tenantIdServiceName_not_starts_with: String
  tenantIdServiceName_ends_with: String
  tenantIdServiceName_not_ends_with: String
  keyAuthSecret: String
  keyAuthSecret_not: String
  keyAuthSecret_in: [String!]
  keyAuthSecret_not_in: [String!]
  keyAuthSecret_lt: String
  keyAuthSecret_lte: String
  keyAuthSecret_gt: String
  keyAuthSecret_gte: String
  keyAuthSecret_contains: String
  keyAuthSecret_not_contains: String
  keyAuthSecret_starts_with: String
  keyAuthSecret_not_starts_with: String
  keyAuthSecret_ends_with: String
  keyAuthSecret_not_ends_with: String
  permissions_every: PermissionWhereInput
  permissions_some: PermissionWhereInput
  permissions_none: PermissionWhereInput
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  AND: [ServiceRoleWhereInput!]
  OR: [ServiceRoleWhereInput!]
  NOT: [ServiceRoleWhereInput!]
}

input ServiceRoleWhereUniqueInput {
  tenantIdServiceName: String
  keyAuthSecret: String
}

type Subscription {
  accessKey(where: AccessKeySubscriptionWhereInput): AccessKeySubscriptionPayload
  account(where: AccountSubscriptionWhereInput): AccountSubscriptionPayload
  group(where: GroupSubscriptionWhereInput): GroupSubscriptionPayload
  jwtRsa(where: JwtRsaSubscriptionWhereInput): JwtRsaSubscriptionPayload
  permission(where: PermissionSubscriptionWhereInput): PermissionSubscriptionPayload
  serviceRole(where: ServiceRoleSubscriptionWhereInput): ServiceRoleSubscriptionPayload
}
`