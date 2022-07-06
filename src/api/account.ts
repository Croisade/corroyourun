import chimichanga from '@/utils/request/chimichanga'
import * as accountUtils from '@/utils/account'
import {RegisterResponse} from '@/api/api'
import {AxiosResponse} from 'axios'

export const getAccount = async (email?: string) => {
  let accountId
  if (!email) {
    accountId = await accountUtils.getAccountId()
  }

  return chimichanga({
    url: 'account/get',
    method: 'GET',
    data: {
      ...(email && {email}),
      ...(accountId && {accountId}),
    },
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
