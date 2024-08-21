import React from 'react';
import './Skeleton.css';

const Skeleton = () => {
  return (
    <div className="skeleton-item">
      <div className="skeleton-image"></div>
      <div className="skeleton-text skeleton-title"></div>
      <div className="skeleton-text skeleton-price"></div>
    </div>
  );
};

export default Skeleton;
