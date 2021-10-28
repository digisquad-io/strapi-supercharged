import type { Model } from "bookshelf";
import type { Entity } from "./entities";
import type { StrapiAdmin } from "./admin";

import type { StrapiQuery } from "./query";
import type {
  StrapiDBManager,
  StrapiConnections,
  StrapiCoreStore,
} from "./database";

import type { StrapiWebhookRunner, StrapiWebhookStore } from "./webhooks";

import type {
  StrapiApp,
  StrapiLogger,
  StrapiContentTypes,
  StrapiEE,
  StrapiEntityValidator,
  StrapiEntityService,
  StrapiErrors,
  StrapiEventHub,
  StrapiFs,
  StrapiRouter,
  StrapiServer,
  StrapiUtils,
  StrapiTelemetry,
} from "./core";

import {
  StrapiConfigAPI,
  StrapiConfigBaseHookSettings,
  StrapiConfigBaseMiddlewareSettings,
  StrapiConfigDatabase,
  StrapiConfigHooks,
  StrapiConfigMiddlewares,
  StrapiConfigServer,
} from "./config";

// Custom API: extends them in your app or plugins

/**
 * Extends the Strapi API `strapi.api` object with interface augmentation.
 *
 * Simply redeclare the interface with the new methods you want to add.
 *
 * @example
 * ```ts
 * // register strapi.api.myApi
 * interface StrapiApi {
 *   myApi: Record<string, any>;
 * }
 * ```
 */
export interface StrapiApi extends Record<string, any> {}

/**
 * Extends the Strapi Components `strapi.components` object with interface augmentation.
 *
 * Simply redeclare the interface with the new methods you want to add.
 *
 * @example
 * ```ts
 * // register strapi.components['meta.metadata']
 * interface StrapiComponents {
 *   'meta.metadata': any;
 * }
 * ```
 */
export interface StrapiComponents extends Record<string, any> {}

/**
 * Extends the Strapi Controllers `strapi.controller` object with interface augmentation.
 *
 * Simply redeclare the interface with the new methods you want to add.
 *
 * @example
 * ```ts
 * // register strapi.controller.myController
 * interface StrapiControllers {
 *   myController: (ctx: any) => any;
 * }
 * ```
 */
export interface StrapiControllers extends Record<string, any> {}

/**
 * Extends the Strapi Hooks `strapi.hook` object with interface augmentation.
 *
 * Simply redeclare the interface with the new methods you want to add.
 *
 * @example
 * ```ts
 * // register strapi.hook.myHook
 * interface StrapiHook {
 *   myHook: any;
 * }
 * ```
 */
export interface StrapiHook extends Record<string, any> {}

/**
 * Extends the Strapi Middleware `strapi.middleware` object with interface augmentation.
 *
 * Simply redeclare the interface with the new methods you want to add.
 *
 * @example
 * ```ts
 * // register strapi.myMiddleware.myMiddleware
 * interface StrapiMiddleware {
 *   myMiddleware: any;
 * }
 * ```
 */
export interface StrapiMiddleware extends Record<string, any> {}

/**
 * Extends the Strapi Models `strapi.models` object with interface augmentation.
 *
 * Simply redeclare the interface with the new methods you want to add.
 *
 * @example
 * ```ts
 * // register strapi.models.myModel
 * interface StrapiModels {
 *   myModel: any;
 * }
 * ```
 */
export interface StrapiModels extends Record<string, any> {}

/**
 * Extends the Strapi Services `strapi.services` object with interface augmentation.
 *
 * Simply redeclare the interface with the new methods you want to add.
 *
 * @example
 * ```ts
 * // register strapi.services.myService
 * interface StrapiServices {
 *   myService: any;
 * }
 * ```
 */
export interface StrapiServices extends Record<string, any> {}

/**
 * Extends the Strapi Plugins `strapi.plugins` object with interface augmentation.
 *
 * Simply redeclare the interface with the new methods you want to add.
 *
 * @example
 * ```ts
 * // register strapi.plugins.myPlugin
 * interface StrapiPlugins {
 *   myPlugin: any;
 * }
 * ```
 */
export interface StrapiPlugins extends Record<string, any> {}

/**
 * Extends the Strapi Hook configuration `strapi.config.hook.settings` object with interface augmentation.
 * This will have also effect in `./config/hooks.js` file
 *
 * Simply redeclare the interface with the new methods you want to add.
 *
 * @example
 * ```ts
 * // register strapi.config.hook.settings.myHook
 * interface StrapiConfigHookSettings {
 *   myHook: {
 *     enabled: boolean;
 *     requiredSetting: string;
 *     optionalSetting?: nuber;
 *   };
 * }
 * ```
 */
export interface StrapiConfigHookSettings
  extends StrapiConfigBaseHookSettings {}

/**
 * Extends the Strapi Middlewares configuration `strapi.config.middleware.settings` object with interface augmentation.
 * This will have also effect in `./config/middlewares.js` file
 *
 * Simply redeclare the interface with the new methods you want to add.
 *
 * @example
 * ```ts
 * // register strapi.config.middlewares.settings.myMiddleware
 * interface StrapiConfigMiddlewareSettings {
 *   myMiddleware: {
 *     enabled: boolean;
 *     requiredSetting: string;
 *     optionalSetting?: nuber;
 *   };
 * }
 * ```
 */
export interface StrapiConfigMiddlewareSettings
  extends StrapiConfigBaseMiddlewareSettings {}

export interface StrapiConfigPluginSettings extends Record<string, any> {}

export interface StrapiConfig extends Record<string, any> {
  host: string;
  port: number;
  uuid: string;
  environment: string;
  appPath: string;
  lauchedAt: number;
  autoReload: boolean;
  serveAdminPanel: boolean;
  installedPlugins: string[];
  installedMiddlewares: string[];
  installedHooks: string[];
  installedProviders: string[];
  paths: Record<string, any>;
  packageSonStrapi: Record<string, any>;
  info: Record<string, any>;
  routes: Record<string, any>[];
  admin: Record<string, any>;
  functions: Record<string, any>;
  policies: Record<string, any>;
  database: StrapiConfigDatabase;
  api: StrapiConfigAPI;
  server: StrapiConfigServer;
  // plugins?: StrapiConfigPlugins;
  hook: StrapiConfigHooks;
  middlewares: StrapiConfigMiddlewares;
  get<T>(key: string, orElse?: T): T;
  has(key: string): boolean;
  set(key: string, value?: any): void;
}

export interface Strapi {
  /**
   * This object contains APIs contained in the ./api folder.
   *
   * And by using `strapi.api[:name]` you can access the `controllers`, `services`,
   * the `model` definition and also the `configurations` of the `./api/:name` folder
   */
  api: StrapiApi;
  components: StrapiComponents;
  /**
   * Returns an object that represents the configurations of the project.
   *
   * Every JavaScript or JSON file located in the `./config` folder will be parsed into the strapi.config object
   */
  config: StrapiConfig;
  /**
   * Returns an object of the controllers which is available in the project.
   *
   * Every JavaScript file located in the `./api/**\/controllers` folder will
   * be parsed into the `strapi.controllers` object.
   * Thanks to this object, you can access every controller's actions everywhere in the project.
   *
   * Note: This object doesn't include the admin's controllers and plugin's controllers.
   */
  controllers: StrapiControllers;
  /**
   * Returns an object of the hooks available in the project.
   *
   * Every folder that follows this pattern strapi-* and located in the `./node_modules`
   * or `/hooks` folder will be mounted into the strapi.hook object.
   */
  hook: StrapiHook;
  /**
   * Returns an object of the middlewares available in the project.
   *
   * Every folder in the `./middlewares` folder will be also mounted into the `strapi.middleware` object.
   */
  middleware: StrapiMiddleware;
  /**
   * Returns an object of models available in the project.
   *
   * Every JavaScript or JSON file located in the `./api/**\/models` folders will
   * be parsed into the `strapi.models` object. Also every `strapi.models.**` object is
   * merged with the model's instance returned by the ORM (Mongoose, Bookshelf).
   *
   * It allows to call the ORM methods through the `strapi.models.**` object
   *
   * @example
   * ```js
   * strapi.models.users.find()
   * ```
   */
  models: StrapiModels;
  /**
   * Returns an object of services available in the project.
   *
   * Every JavaScript file located in the `./api/**\/services` folders
   * will be parsed into the `strapi.services` object.
   */
  services: StrapiServices;
  /**
   * Returns an object of plugins available within the project.
   *
   * Each plugin object contains the associated `controllers`, `models`, `services` and `configurations`
   */
  plugins: StrapiPlugins;

  /**
   * Returns the `Koa` instance
   */
  app: StrapiApp;
  /**
   * Returns the Logger `Pino` instance
   */
  log: StrapiLogger;
  /**
   * This utility function allows to bind models with query functions
   * specific to each ORM (e.g: mongoose or bookshelf).
   *
   * @see https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#queries
   */
  query: <T extends Entity>(model: string, plugin?: string) => StrapiQuery<T>;
  getModel: (modelKey: string, plugin?: string) => Model<any>;

  /**
   * This object contains the `controllers`, `models`, `services` and `configurations` contained in the `strapi-admin` package
   */
  admin: StrapiAdmin;
  connections: StrapiConnections;
  contentTypes: StrapiContentTypes;
  db: StrapiDBManager<Strapi>;
  dir: Readonly<string>;
  entityValidator: StrapiEntityValidator;
  entityService: StrapiEntityService;
  eventHub: StrapiEventHub;
  fs: StrapiFs;
  isLoaded: Readonly<boolean>;
  /**
   * Returns the Router `Joi router` instance
   */
  router: StrapiRouter;
  /**
   * Returns the `http.Server`.
   */
  server: StrapiServer;
  telemetry: StrapiTelemetry;
  utils: StrapiUtils;
  webhookStore: StrapiWebhookStore; // StrapiQuery<StrapiWebhookEntity>;
  webhookRunner: StrapiWebhookRunner;

  // internal methods
  get EE(): false | StrapiEE;
  destroy: () => Promise<void>;
  errors: StrapiErrors;
  initServer: () => void;
  /**
   * Returns a function that parses the `configurations`, `hooks`, `middlewares` and APIs of your app.
   *
   * It also loads the `middlewares` and `hooks` with the previously loaded configurations.
   * This method could be useful to update references available through the strapi global variable
   * without having to restart the server.
   *
   * However, without restarting the server, the new configurations will not be taken in account.
   */
  load: () => Promise<Strapi>;
  logFirstStartupMessage: () => void;
  listen: (callback?: (...args: any) => any) => void;
  logStats: () => void;
  /**
   * Returns a function that reloads the entire app (with downtime)
   */
  reload: () => void;
  logStartupMessage: () => void;
  requireProjectBootstrap: () => void;
  /**
   * Returns a function that loads the `configurations`, `middlewares` and `hooks`.
   * Then, it executes the `bootstrap` file, freezes the global variable and listens the configured port.
   */
  start: (callback: (...args: any) => any) => void;
  startWebhooks: (callback: (...args: any) => any) => void;

  /**
   * Returns a function that shuts down the server and destroys the current connections
   */
  stop: (exitCode: number) => never;
  stopWithError: (error: Error, message?: string) => never;
  store: (source: any) => StrapiCoreStore;
}
