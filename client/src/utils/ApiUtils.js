import axios from 'axios';

const authHeaderKeys = [
  'access-token',
  'token-type',
  'client',
  'expiry',
  'uid',
];

export const setAuthHeaders = (headers) => {
  authHeaderKeys.forEach((key) => {
    headers[key] = localStorage.getItem(key);
  });
};

const callApi = url =>
  axios.get(url)

export default callApi;
