import { DateTimeField } from "./entities";

export interface LocalizationFields {
  locale: string;
  localizations: {
    id: number | string;
    locale: string;
    publishaed_at: DateTimeField;
  }[];
}
