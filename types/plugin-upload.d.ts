import { Entity, TimestampFields, JSONField, RelationWith } from "./entities";

export interface FileEntity extends Entity, TimestampFields {
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  formats: JSONField;
  hash: string;
  ext: string;
  mime: string;
  url: string;
  previewUrl: string;
  provider: string;
  provider_metadata: JSONField;
  related: RelationWith<any>[];
}
