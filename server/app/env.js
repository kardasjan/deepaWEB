export const EnvTest = 'test';
export const EnvProd = 'prod';

export function getEnv (): string {
  if (process.env.npm_config_argv) {
    const npm_config_argv = JSON.parse(process.env.npm_config_argv);
    if (npm_config_argv.original[1] === 'test' ||
      npm_config_argv.original[1] === 'tests' ||
      npm_config_argv.original[1] === 'run' ||
      (npm_config_argv.original[1] !== undefined && npm_config_argv.original[1].search('__tests__') >= 1)) {
      return EnvTest;
    }
  }
  return EnvProd;
}
