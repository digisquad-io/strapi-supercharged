export interface Entity {
  id: number;
}
export type CollectionEntity = Entity;
export type SingleTypeEntity = Entity;
export interface Component extends Entity {
  __component?: string;
}
export type RelationWith<T extends Entity> = T | number | null;

export type ComponentField<T extends Component> = Partial<T>;

export type DateTimeField = string;
export type TimeField = string;
export type UIDField = string;
export type JSONField = any;

export type TimestampFields = {
  created_at: DateTimeField;
  updated_at: DateTimeField;
};
export type DraftAndPublishFields = {
  published_at: DateTimeField | null;
};
