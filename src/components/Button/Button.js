import React from 'react';
import './Button.scss';
import PropTypes from 'prop-types';

const Button = ({ handleShowMore, label }) => {
  return (
    <button type="button" className="Button" onClick={handleShowMore}>
      {label}
    </button>
  );
};

Button.propTypes = {
  handleShowMore: PropTypes.func.isRequired,
  label: PropTypes.string,
};

Button.defaultProps = {
  label: 'Button Text',
};

export default Button;
