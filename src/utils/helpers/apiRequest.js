import axios from 'axios';
import { storage_items, baseURL } from '../../constants/constantValues';
import requests from '../../constants/requestsURL';
import axiosInstance from '../axiosInstance';

const apiRequest = async (path, body, params, extraUrl) => {
  let data, error, status;

  let requestPath = requests[path] ? requests[path].path : path;
  let url = baseURL + requestPath;

  if (extraUrl) {
    requestPath = requestPath + extraUrl;
  }

  let method = requests[path]?.method;

  if (params) {
    requestPath = requestPath + '?' + new URLSearchParams(params).toString();
  }

  try {
    let res;
    console.log(path);
    console.log(requests.login.path);
    if (path !== 'login') {
      res = await axiosInstance.request({
        url: requestPath,
        method,
        data: body,
      });
    } else {
      res = await axios(url, {
        method,
        data: body,
      });
    }

    status = res.status;
    data = res.data;
  } catch (err) {
    console.log('REQ ERR ---> ', err?.m);
    error = err;
  }

  return { data, error, status };
};

export default apiRequest;
