import storage from '@/utils/storage'

export const JWT = 'global::jwt'
export const RefreshJWT = 'global::refreshjwt'

// @TODO reduce complexity by removing this file and calling it directly from /src/api

export const getJWT = () => storage.get(JWT)
export const setJWT = (token: string) => storage.set(JWT, token)
export const clearJWT = () => storage.remove(JWT)

export const getRefreshJWT = () => storage.get(RefreshJWT)
export const setRefreshJWT = (token: string) => storage.set(RefreshJWT, token)
export const clearRefreshJWT = () => storage.remove(RefreshJWT)
