// URL for involving Api

// const API_HOSTNAME = 'http://localhost:3000';
const API_HOSTNAME = 'http://www.dlzones.com';
export const AUTH_URL = `${API_HOSTNAME}/auth`;
export const CLIENT_ID = '';

const constructUrl = url => `${API_HOSTNAME}${url}${url.indexOf('?') === -1 ? '?' : '&'}client_id=${CLIENT_ID}`;

export const SONG_URL = constructUrl('/tracks/:id');
export const SONGS_URL = constructUrl('/tracks.json');
