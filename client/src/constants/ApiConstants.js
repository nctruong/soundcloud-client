// const API_HOSTNAME = '//api.soundcloud.com';
const API_HOSTNAME = '//localhost:3000';
export const CLIENT_ID = 'f4323c6f7c0cd73d2d786a2b1cdae80c';

const constructUrl = url => `${API_HOSTNAME}${url}${url.indexOf('?') === -1 ? '?' : '&'}client_id=${CLIENT_ID}`;


export const SONG_URL = constructUrl('/tracks/:id');
export const SONGS_URL = constructUrl('/tracks.json');
