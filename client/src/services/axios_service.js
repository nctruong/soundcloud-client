// Another option excluding Redux Token Auth
import axios from 'axios';
import { AUTH_URL } from '../constants/ApiConstants';

export const axiosAsync = async (url, options = {}, callback) => {
  const response = await axios({
    method: options.method || 'POST',
    url,
    data: options.data,
  });
  callback(response);
};

const authHeaderKeys = [
  'access-token',
  'token-type',
  'client',
  'expiry',
  'uid',
];

export const setAuthHeaders = (headers) => {
  authHeaderKeys.forEach((key) => {
    axios.defaults.headers.common[key] = headers[key];
  });
};

const signIn = async (email, password) => {
  const data = { email, password };
  axiosAsync(`${AUTH_URL}/sign_in.json`, { data }, (response) => {
    console.log(JSON.stringify(response.headers));
    setAuthHeaders(response.headers);
  });
};

export default signIn;
