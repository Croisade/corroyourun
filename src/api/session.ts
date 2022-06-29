import chimichanga from '@/utils/request/chimichanga'
import * as utils from '@/utils/session'
import * as accountUtils from '@/utils/account'
import {RegisterResponse} from '@/api/api'
import {AxiosResponse} from 'axios'

type LoginResponse = {
  token: string
  refreshToken: string
}

export const register = async (email: string, password: string) => {
  return chimichanga({
    url: '/account/create',
    method: 'POST',
    data: {email, password},
    authenticated: false,
  }) as Promise<AxiosResponse<RegisterResponse, any>>
}

export const login = async (email: string, password: string) => {
  return chimichanga({
    url: 'account/login',
    method: 'PUT',
    data: {email, password},
    authenticated: false,
  }) as Promise<AxiosResponse<LoginResponse, any>>
}

export const logout = async () => {
  const accountId = await accountUtils.getAccountId()
  return chimichanga({
    url: 'account/logout',
    method: 'PUT',
    data: {accountId},
  })
}

export const renewJWT = async () => {
  const refreshToken = await utils.getRefreshJWT()
  return chimichanga({
    url: 'account/token',
    method: 'PUT',
    data: {refreshToken},
  }) as Promise<AxiosResponse<LoginResponse, any>>
}
