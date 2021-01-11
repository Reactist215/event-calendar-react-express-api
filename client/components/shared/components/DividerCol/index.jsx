import React, { useState } from 'react';
import './index.scss';
import { genTimeArr } from './../../../../util/time';
import DividerCell from '../DividerCell';

const DividerCol = () => {
  const [timeArr] = useState(() => {
    return genTimeArr();
  });
  return (
    <div className="cell divider-cell">
      {timeArr.map((time) => (
        <DividerCell key={time} />
      ))}
    </div>
  );
};

export default DividerCol;
