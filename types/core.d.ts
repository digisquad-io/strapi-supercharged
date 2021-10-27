import type { Router } from "koa-joi-router";
import type { Server } from "http";
import type { EventEmitter } from "events";
import type Koa from "koa";
import type {
  DefaultContext,
  DefaultState,
  ParameterizedContext,
  Request,
} from "koa";
import type { BaseLogger } from "pino";
import type { UserEntity } from "./entities";
import type { ParsedUrlQuery } from "querystring";

export type StrapiErrors = () => Record<string, (...args: any) => any>;
export type StrapiApp = Koa;
export interface StrapiAppContext
  extends ParameterizedContext<
    DefaultState & {
      user?: UserEntity;
    },
    DefaultContext & Record<string, any>,
    any
  > {
  query: ParsedUrlQuery & Record<string, any>;
  request: Request & { body: any };
}
export type StrapiLogger = BaseLogger;
export type StrapiRouter = Router;
export type StrapiServer = Server;
export type StrapiEventHub = EventEmitter;
export type StrapiUtils = Record<string, (...args: any) => any>;
export type StrapiContentTypes = Record<string, any>;
export type StrapiEntityValidator = Record<string, any>;
export type StrapiEntityService = Record<string, any>;
export interface StrapiFs {
  writeAppFile: (...args: any) => any;
  writePluginFile: (...args: any) => any;
  removeAppFile: (...args: any) => any;
}
export interface StrapiEE {
  licenseInfo: Readonly<string>;
  isEE: Readonly<boolean>;
  features: Readonly<any[]>;
}
export type StrapiTelemetry =
  | undefined
  | {
      destroy(): void;
      send(event: string, payload: any): Promise<any>;
    };
