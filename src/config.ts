import env from '@/utils/env'

const CONFIG = {
  default: {
    chimichangaApiUrl: 'http://localhost:9090/v1',
  },
  production: {
    chimichangaApiUrl: '',
  },
  qa: {},
  staging: {},
  development: {},
}

export default new Proxy(CONFIG.default, {
  get(obj, prop) {
    // @ts-ignore
    return CONFIG[env.current][prop] || obj[prop]
  },
})
