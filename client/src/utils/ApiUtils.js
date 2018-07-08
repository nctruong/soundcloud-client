/* global fetch */
import axios from 'axios';

export const callApi = (url) =>
  axios.get(url)
