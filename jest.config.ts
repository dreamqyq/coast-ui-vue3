import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  moduleFileExtensions: ['js', 'ts', 'json', 'vue'],
  moduleDirectories: ['node_modules', 'lib'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
    '^.+\\.vue$': 'vue-jest',
  },
  roots: ['<rootDir>'],
};

export default config;
