import { createSelector } from 'reselect';

const getSongsData = (songs) => {
  return { songs };
};

const getSongs = createSelector(
  getSongsData,
);

export default getSongs;
