import React, { useState } from 'react';
import TimeCell from '../TimeCell';
import { genTimeArr } from './../../../../util/time';

import './index.scss';

const TimeCol = () => {
  const [timeArr] = useState(() => {
    return genTimeArr();
  });

  return (
    <div className="col time-col">
      {timeArr.map((time) => (
        <TimeCell key={time} time={time} />
      ))}
    </div>
  );
};

export default TimeCol;
