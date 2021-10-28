import { CollectionEntity, RelationWith } from "./entities";

export type CreatorsFields = {
  created_by: RelationWith<UserEntity>;
  updated_by: RelationWith<UserEntity>;
};

export interface UserEntity extends CollectionEntity {
  username: string;
  email: string;
  provider: string;
  password: string;
  resetPasswordToken: string;
  confirmationToken: string;
  confirmed: boolean;
  blocked: boolean;
  role: RelationWith<RoleEntity>;
}

export interface RoleEntity extends CollectionEntity {
  name: string;
  description: string;
  type: string;
  permissions: RelationWith<PermissionEntity>[];
  users: RelationWith<UserEntity>[];
}

export interface PermissionEntity extends CollectionEntity {
  type: string;
  controller: string;
  action: string;
  enabled: boolean;
  policy: string;
  role: RelationWith<RoleEntity>;
}
