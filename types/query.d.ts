import type { Model } from "bookshelf";
import type { Entity } from "./entities";

type Exclude<T, U> = T extends U ? never : T;

export type StrapiQueryPopulate = string[];
export type FilterSuffix = "eq" | "ne";
export type RangeSuffix = "lt" | "lte" | "gt" | "gte";
export type ArrayFilterSuffix =
  | "in"
  | "nin"
  | "contains"
  | "ncontains"
  | "containss"
  | "ncontainss";
export type BooleanSuffix = "null";

export type StrapiWhereFieldFilters<T> = Partial<{
  [Key in keyof T]: string | number | boolean;
}> & {
  [Key in `${Exclude<keyof T, symbol>}_${FilterSuffix}`]?:
    | string
    | number
    | boolean;
} & {
  [Key in `${Exclude<keyof T, symbol>}_${FilterSuffix}`]?:
    | string
    | number
    | boolean;
} & {
  [key in `${Exclude<keyof T, symbol>}_${RangeSuffix}`]?: string | number;
} & {
  [key in `${Exclude<keyof T, symbol>}_${ArrayFilterSuffix}`]?:
    | string[]
    | number[]
    | boolean[];
} & {
  [key in `${Exclude<keyof T, symbol>}_${BooleanSuffix}`]?: boolean;
};

export type StrapiQueryFilters<T> = StrapiWhereFieldFilters<T> & {
  _sort?: string;
  _start?: number;
  _publicationState?: "live" | "preview";
  _locale?: string;
  _limit?: number;
  _where?: StrapiWhereFieldFilters<T>;
};

export type StrapiQueryOptions = Record<string, any>;

export interface StrapiQuery<T extends Entity> {
  model: Model<any>;
  find: (
    filters?: StrapiQueryFilters<T>,
    populate?: StrapiQueryPopulate
  ) => Promise<T[]>;
  search: (filters?: StrapiQueryFilters<T>) => Promise<T[]>;
  findOne: (
    filters?: StrapiQueryFilters<T>,
    populate?: StrapiQueryPopulate
  ) => Promise<T | undefined>;
  create: (
    data: Partial<Omit<T, "id">>,
    options?: StrapiQueryOptions
  ) => Promise<T>;
  count: (filters?: StrapiQueryFilters<T>) => Promise<number>;
  countSearch: (filters?: StrapiQueryFilters<T>) => Promise<number>;
  update: (
    filters: StrapiQueryFilters<T>,
    data: Partial<Omit<T, "id">>,
    options?: StrapiQueryOptions
  ) => Promise<T>;
  delete: (filters: StrapiQueryFilters<T>) => Promise<T>;
}
