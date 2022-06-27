import {EventEmitter} from 'events';

import storage from '@/utils/storage';

export const ENVIRONMENTS = [
  'staging',
  'production',
  'qa',
  ...(__DEV__ ? ['development'] : []),
];

const DEFAULT_ENV = __DEV__ ? 'development' : 'production';

async function resetStorage(isNotDefault: boolean) {
  await storage.clear();
  if (isNotDefault) {
    await storage.set('changedEnv', 'true');
  }
}

class Env extends EventEmitter {
  env = DEFAULT_ENV;

  get current() {
    return this.env;
  }

  set current(env) {
    if (this.env === env) {
      return;
    }
    this.env = env;
    // @TODO what is this even needed for
    this.emit('change', env);
    resetStorage(!this.isDefault);
  }

  get isDev() {
    return this.env === 'development';
  }

  get isProd() {
    return this.env === 'production';
  }

  get isStaging() {
    return this.env === 'staging';
  }

  get isDefault() {
    return this.env === DEFAULT_ENV;
  }
}

export default new Env();
