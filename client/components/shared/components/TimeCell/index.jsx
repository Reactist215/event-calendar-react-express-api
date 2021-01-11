import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

const TimeCell = ({ time }) => {
  return (
    <div className="time-cell">
      <span>{time}</span>
    </div>
  );
};

TimeCell.propeTypes = {
  time: PropTypes.string.isRequired,
};

TimeCell.defaultTypes = {
  time: '00:00',
};

export default TimeCell;
