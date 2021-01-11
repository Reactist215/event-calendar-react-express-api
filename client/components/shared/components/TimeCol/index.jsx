import React, { useContext, useState } from 'react';
import AppContext from '../../context/AppContext';
import TimeCell from '../TimeCell';
import { genTimeArr } from './../../../../util/time';

import './index.scss';

const TimeCol = () => {
  const ctxVal = useContext(AppContext);
  const [timeArr] = useState(() => {
    return genTimeArr();
  });

  return (
    <div className="col time-col">
      {timeArr.map((time) => (
        <TimeCell key={time} time={time} cellHeight={ctxVal.cellHeight} />
      ))}
    </div>
  );
};

export default TimeCol;
