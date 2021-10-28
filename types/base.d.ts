export interface StrapiBaseMiddleware extends Record<string, any> {
  initialize(): void | Promise<void>;
}
export interface StrapiBaseAPI {
  config: Record<string, any>;
  models: Record<string, any>;
  controllers: Record<string, any>;
  services: Record<string, any>;
}

export interface StrapiBasePlugin {
  config: Record<string, any>;
  controllers: Record<string, any>;
  services: Record<string, any>;
  models: Record<string, any>;
}
