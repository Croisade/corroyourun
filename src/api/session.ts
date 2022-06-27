import chimichanga from '@/utils/request/chimichanga'
import * as utils from '@/utils/session'
import * as accountUtils from '@/utils/account'

export const register = async (email: string, password: string) => {
  return chimichanga({
    url: 'account/create',
    method: 'POST',
    data: {email, password},
    authenticated: false,
  })
}

export const authenticate = async (email: string, password: string) => {
  return chimichanga({
    url: 'account/login',
    method: 'PUT',
    data: {email, password},
    authenticated: false,
  })
}

export const logout = async () => {
  const accountId = await accountUtils.getAccountId()
  return chimichanga({
    url: 'account/login',
    method: 'PUT',
    data: {accountId},
    authenticated: false,
  })
}

export const renewJWT = async () => {
  const refreshToken = await utils.getRefreshJWT()
  return chimichanga({
    url: 'account/token',
    method: 'PUT',
    data: {refreshToken},
  })
}
