import React from 'react';

const Banner = ({ children, tittle, subtittle }) => {
  return (
    <div className="banner">
      <h1>{tittle}</h1>
      <div />
      <p>{subtittle}</p>
      {children}
    </div>
  );
};

export default Banner;
