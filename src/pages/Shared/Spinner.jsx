import React from 'react';

const Spinner = () => {
  return (
    <div className="h-40 flex items-center justify-center">
        <span className="loading loading-ball loading-xl"></span>
        <span className="loading loading-ball loading-xl"></span>
        <span className="loading loading-ball loading-xl"></span>
      </div>
  );
};

export default Spinner;