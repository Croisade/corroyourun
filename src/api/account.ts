import chimichanga from '@/utils/request/chimichanga'
import * as accountUtils from '@/utils/account'
import {RegisterResponse} from '@/api/api'
import {AxiosResponse} from 'axios'

export const getAccount = async (email: string) => {
  return chimichanga({
    url: `account/get/${email}`,
    method: 'GET',
  }) as Promise<AxiosResponse<RegisterResponse, any>>
}

export const deleteAccount = async () => {
  const accountId = await accountUtils.getAccountId()
  return chimichanga({
    url: `account/delete/${accountId}`,
    method: 'DELETE',
  })
}

export const updateAccount = async (
  email?: string,
  password?: string,
  firstName?: string,
  lastName?: string,
) => {
  const accountId = await accountUtils.getAccountId()
  return chimichanga({
    url: 'account/update',
    method: 'PUT',
    data: {
      accountId,
      ...(email && {email}),
      ...(password && {password}),
      ...(firstName && {firstName}),
      ...(lastName && {lastName}),
    },
  })
}
