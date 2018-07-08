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
// in Router reducer: related to props? => look at reducers
// Router: route: {
//   keys: {},
//   options: {},
//   path: '',
// }
const Router = ({ router, routes }) => {
  const { path } = router.route;
  if (path in routes) {
    const Component = routes[path];

    // Render Dynamic Components
    return <Component />;
  }

  return null;
};

Router.propTypes = propTypes;

export default Router;
