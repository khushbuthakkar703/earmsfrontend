import axios from 'axios';
import { baseURL, storage_items } from '../constants/constantValues';
import requests from '../constants/requestsURL';
import Routes from '../constants/Routes';
import getAccessToken from './helpers/getAccessToken';

const REFERSH_TOKEN = async (refreshToken) => {
  console.log('Refreshing Token');
  const refreshUrl = baseURL + requests['refreshToken']?.path;
  const accessTokenData = await axios(refreshUrl, {
    method: requests['refreshToken']?.method,
    data: { refreshToken },
  });
  return accessTokenData.data?.accessToken;
};

const requestHeader = {
  'content-type': 'application/json',
  Authorization: `Bearer ${getAccessToken}`,
};

const axiosInstance = axios.create({
  baseURL,
  headers: requestHeader,
});

//TODO: Check the validaty of the refresh tokens

axiosInstance.interceptors.request.use(async (config) => {
  const currentToken = localStorage.getItem(storage_items.accessToken);

  if (JSON.parse(atob(currentToken.split('.')[1])).exp * 1000 < Date.now()) {
    const refreshToken = localStorage.getItem(storage_items.refreshToken);

    try {
      const newToken = await REFERSH_TOKEN(refreshToken);
      config.headers.Authorization = `Bearer ${newToken}`;
      localStorage.setItem(storage_items.accessToken, newToken);
    } catch (err) {
      console.log(err);
      await localStorage.clear();
      window.location.replace('/' + Routes.signIn);
    }
    return config;
  } else {
    return config;
  }
});

export default axiosInstance;
