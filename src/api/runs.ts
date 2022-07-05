import chimichanga from '@/utils/request/chimichanga'
import * as accountUtils from '@/utils/account'
import {RegisterResponse} from '@/api/api'
import {AxiosResponse} from 'axios'

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

export const fetchRuns = async () => {
  const accountId = await accountUtils.getAccountId()
  return chimichanga({
    url: `/run/fetch/${accountId}`,
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
}: {
  speed: number
  time: string
  distance: number
  lap: number
  incline: number
}) => {
  const accountId = await accountUtils.getAccountId()
  return chimichanga({
    url: '/run/update',
    method: 'PUT',
    data: {
      accountId,
      ...(speed && {speed}),
      ...(time && {time}),
      ...(distance && {distance}),
      ...(lap && {lap}),
      ...(incline && {incline}),
    },
  })
}
