import * as Joi from 'joi';

export const validateEnv = {
  TASKS_SERVER_PORT: Joi.number().port().default(3000),
  AUTH_SERVER_PORT: Joi.number().port().default(3001),
  DATABASE_URL: Joi.string().required(),
};
