import React from 'react';
import PropTypes from 'prop-types';
export const IconButton = ({ children, ...allyProps }) => (
  <button type="submit" {...allyProps}>
    {children}
  </button>
);

IconButton.defaultProps = {
  onClick: () => null,
  children: null,
};

IconButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  'aria-label': PropTypes.string.isRequired,
};