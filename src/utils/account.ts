import storage from '@/utils/storage'

const ACCOUNT_ID = 'global::accountId'

export const getAccountId = () => storage.get(ACCOUNT_ID)
export const setAccountId = (accountId: string) =>
  storage.set(ACCOUNT_ID, accountId)
export const clearAccountId = () => storage.remove(ACCOUNT_ID)
