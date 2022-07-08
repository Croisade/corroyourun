import axios from 'axios'
import config from '@/config'
import {getJWT, getRefreshJWT, setJWT, setRefreshJWT} from '@/utils/session'
import merge from 'lodash/merge'

const instance = axios.create()

export default async ({authenticated = true, ...rest}) => {
  const token = await getJWT()
  const defaults = {
    method: 'GET',
    baseURL: config.chimichangaApiUrl,
    headers: {
      ...(authenticated && {Authorization: `Bearer ${token}`}),
    },
  }
  // console.log(merge(defaults, rest))
  try {
    return instance(merge(defaults, rest))
  } catch (error) {
    const refreshToken = await getRefreshJWT()
    const refreshDefaults = {
      method: 'PUT',
      baseURL: config.chimichangaApiUrl,
      url: 'account/token',
      data: {refreshToken},
    }
    const {data} = await instance(refreshDefaults)
    await setJWT(data.token)
    await setRefreshJWT(data.refreshToken)
    try {
      return instance(
        merge(defaults, rest, {
          headers: {
            ...(authenticated && {Authorization: `Bearer ${data.token}`}),
          },
        }),
      )
    } catch (retryError) {
      console.log('error', retryError)
    }
  }
}
