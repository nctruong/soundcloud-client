import PropTypes from 'prop-types';
import React from 'react';

const propTypes = {
  router: PropTypes.shape({
    route: PropTypes.shape({
      path: PropTypes.string,
    }),
  }).isRequired,
  routes: PropTypes.shape({}).isRequired,
};

// Router -> Component
const Router = ({ router, routes }) => {
  const { path } = router.route;
  console.log({ path })
  if (path in routes) {
    // routes: {
    //     [INDEX_PATH]: SongsContainer,
    //     [PLAYLIST_PATH]: SongsContainer,
    //     [SONG_PATH]: SongContainer,
    //     [SONGS_PATH]: SongsContainer,
    //     [USER_PATH]: UserContainer,
    // }
    const Component = routes[path];
    return <Component />;
  }

  return null;
};

Router.propTypes = propTypes;

export default Router;
