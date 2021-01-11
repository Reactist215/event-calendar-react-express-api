import React from 'react';
import './index.scss';

const DividerCell = ({ cellHeight }) => {
  return <div className="divider-cell" style={{ height: cellHeight }}></div>;
};

export default DividerCell;
