import * as Joi from 'joi';

export interface EnvironmentVariables {
  SUPABASE_URL: string;
  SUPABASE_KEY: string;
}

export const validationSchemaForEnv = Joi.object<EnvironmentVariables, true>({
  SUPABASE_URL: Joi.string().required(),
  SUPABASE_KEY: Joi.string().required(),
});
