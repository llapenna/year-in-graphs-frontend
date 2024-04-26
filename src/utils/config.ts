import { info } from './logger';

/**
 * @description Checks if an environment variable exists
 * @param identifier Name of the environment variable
 * @returns Value of the environment variable if it exists, otherwise throws an error
 */
function checkVariable(identifier: string) {
  const variable = process.env[identifier];

  if (process.env.NODE_ENV !== 'production')
    info(`Checking:\t${identifier} = '${variable}'`);
  if (typeof variable === 'undefined') {
    throw new Error(`Environment variable "${identifier}" is not defined.`);
  } else return variable;
}

/**
 * Secret used to verify the JWT token
 */
export const JWT_SECRET = checkVariable('JWT_SECRET');
