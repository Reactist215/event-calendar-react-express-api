import React, { useContext, useState } from 'react';
import './index.scss';
import { genTimeArr } from './../../../../util/time';
import DividerCell from '../DividerCell';
import AppContext from '../../context/AppContext';

const DividerCol = () => {
  const ctxVal = useContext(AppContext);
  const [timeArr] = useState(() => {
    return genTimeArr();
  });
  return (
    <div className="col divider-col">
      {timeArr.map((time) => (
        <DividerCell key={time} cellHeight={ctxVal.cellHeight} />
      ))}
    </div>
  );
};

export default DividerCol;
