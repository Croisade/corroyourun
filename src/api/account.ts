import chimichanga from '@/utils/request/chimichanga'
import * as accountUtils from '@/utils/account'

export const getAccount = async (email: string, password: string) => {
  const accountId = await accountUtils.getAccountId()
  return chimichanga({
    url: `account/get/${accountId}`,
    method: 'GET',
    data: {email, password},
  })
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
