import storage from '@/utils/storage'

export const JWT = 'global::jwt'

export const getJWT = () => storage.get(JWT)
export const setJWT = (token: string) => storage.set(JWT, token)
export const clearJWT = () => storage.remove(JWT)
