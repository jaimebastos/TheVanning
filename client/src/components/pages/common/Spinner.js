import React from 'react';
import spinner from './spinnergif.gif';

const SpinnerGif = () => {

  return (
    <div>
      <img
        src={spinner}
        style={{ width: '340px', margin: 'auto', display: 'block' }}
        alt="Loading..."
      />
    </div>
  );
};

export default SpinnerGif