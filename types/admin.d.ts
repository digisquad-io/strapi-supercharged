export type StrapiAdminDomain = Record<string, (...args: any) => any>;
export type StrapiAdminModels = Record<string, (...args: any) => any>;
export type StrapiAdminUtils = Record<string, (...args: any) => any>;
export type StrapiAdminValidation = Record<string, (...args: any) => any>;
export type StrapiAdminConfig = Record<string, (...args: any) => any>;

export interface StrapiAdminServices {
  permission: Record<string, any> & {
    actionProvider: {
      registerMany: (actions: any[]) => Promise<void>;
    };
  };
}

export interface StrapiAdmin {
  domain: StrapiAdminDomain;
  models: StrapiAdminModels;
  services: StrapiAdminServices;
  utils: StrapiAdminUtils;
  validation: StrapiAdminValidation;
  config: StrapiAdminConfig;
  destroy: () => Promise<void>;
}
