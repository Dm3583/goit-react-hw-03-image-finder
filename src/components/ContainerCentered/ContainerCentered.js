import React from 'react';
import './ContainerCentered.scss';
import PropTypes from 'prop-types';

const ContainerCentered = ({ children }) => {
  return <div className="ContentWrapper">{children}</div>;
};

ContainerCentered.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ContainerCentered;
