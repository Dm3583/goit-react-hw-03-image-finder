import React from 'react';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import './Loader.scss';

const LoaderTailSpin = () => {
  return (
    <div className="LoaderWrapper">
      <Loader type="TailSpin" color="#00BFFF" height={80} width={80} />
    </div>
  );
};

export { LoaderTailSpin };
