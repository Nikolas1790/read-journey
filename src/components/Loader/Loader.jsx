import React from 'react';
import {RotatingLines } from 'react-loader-spinner';
import { LoaderContainer } from './Loader.styled';

export default function Loader() {
  return (
    <LoaderContainer>
      <RotatingLines
        visible={true}
        height="96"
        width="96"
        color="grey"
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </LoaderContainer>
  );
};