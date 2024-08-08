import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ onDarkModeClick }) => {
  return (
    <header>
      <button onClick={onDarkModeClick}>Toggle Mode</button>
    </header>
  );
};

// Define prop types for validation
Header.propTypes = {
  onDarkModeClick: PropTypes.func
};

export default Header;
