import chimichanga from '@/utils/request/chimichanga'
import * as utils from '@/utils/session'
import * as accountUtils from '@/utils/account'
import {AxiosResponse} from 'axios'

type RegisterResponsee = {
  accountId: string
  email: string
  password: string
  firstName: string
  lastName: string
  refreshToken: string
  createdAt: string
  updatedAt: string
}

export const register = async (email: string, password: string) => {
  return chimichanga({
    url: '/account/create',
    method: 'POST',
    data: {email, password},
    authenticated: false,
  }) as Promise<AxiosResponse<RegisterResponsee, any>>
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
    url: 'account/logout',
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
