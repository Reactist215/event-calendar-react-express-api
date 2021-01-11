import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

const TimeCell = ({ time, cellHeight }) => {
  return (
    <div className="time-cell" style={{ height: cellHeight }}>
      <span>{time}</span>
    </div>
  );
};

TimeCell.propeTypes = {
  time: PropTypes.string.isRequired,
  cellHeight: PropTypes.number,
};

TimeCell.defaultTypes = {
  time: '00:00',
  cellHeight: 60,
};

export default TimeCell;
