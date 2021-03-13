import React, { Component } from 'react';
import './Modal.scss';

class Modal extends Component {
  render() {
    const { url, title } = this.props;
    return (
      <div className="Overlay">
        <div className="Modal">
          <img src={url} alt={title} />
        </div>
      </div>
    );
  }
}

export default Modal;
