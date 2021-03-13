import React from 'react';
import './Button.scss';

const Button = ({ handleShowMore, children }) => {
  return (
    <div className="ButtonWrapper">
      <button type="button" className="Button" onClick={handleShowMore}>
        {children}
      </button>
    </div>
  );
};

export default Button;
