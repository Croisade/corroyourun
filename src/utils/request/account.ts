import axios from 'axios';
import config from '@/config';
import {getJWT} from '@/utils/session';

const instance = axios.create();

export default async ({authenticated = true, ...rest}) => {
  const jwt = await getJWT();
  const defaults = {
    method: 'GET',
    baseURL: config.chimichangaApiUrl,
    headers: {
      ...(authenticated && {Authorization: `Bearer ${jwt}`}),
    },
  };

  return instance({...defaults, ...rest});
};
