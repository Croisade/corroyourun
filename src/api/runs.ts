import chimichanga from '@/utils/request/chimichanga'
import * as accountUtils from '@/utils/account'
import {RegisterResponse} from '@/api/api'
import {AxiosResponse} from 'axios'
import {useSelector} from 'react-redux'

// const accountId = useSelector(state => state.account.accountId)

export const createRun = async ({
  speed,
  time,
  distance,
  lap,
  incline,
}: {
  speed?: number
  time?: string
  distance?: number
  lap?: number
  incline?: number
}) => {
  const accountId = await accountUtils.getAccountId()
  return chimichanga({
    url: '/run/create',
    method: 'POST',
    data: {
      accountId,
      speed,
      time,
      distance,
      lap,
      incline,
    },
  })
}

export const getRun = async () => {
  const accountId = await accountUtils.getAccountId()
  return chimichanga({
    url: '/run',
    method: 'GET',
    data: {},
  })
}

export const fetchRuns = async (accountId?: string) => {
  let id
  if (!accountId) {
    id = await accountUtils.getAccountId()
  } else {
    id = accountId
  }
  return chimichanga({
    url: `/run/fetch/${id}`,
    method: 'GET',
  })
}

export const deleteRun = async () => {
  const accountId = await accountUtils.getAccountId()
  return chimichanga({
    url: '/run/delete',
    method: 'DELETE',
    data: {},
  })
}

export const updateRun = async ({
  speed,
  time,
  distance,
  lap,
  incline,
  runId,
}: {
  speed: number
  time: string
  distance: number
  lap: number
  incline: number
  runId: string
}) => {
  const accountId = await accountUtils.getAccountId()
  return chimichanga({
    url: '/run/update',
    method: 'PUT',
    data: {
      accountId,
      runId,
      ...(speed && {speed}),
      ...(time && {time}),
      ...(distance && {distance}),
      ...(lap && {lap}),
      ...(incline && {incline}),
    },
  })
}
