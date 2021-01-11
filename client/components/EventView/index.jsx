import React from 'react';
import PropTypes from 'prop-types';
import DividerCol from '../shared/components/DividerCol';
import TimeCol from '../shared/components/TimeCol';
import './index.scss';

const EventView = ({ events }) => {
  return (
    <div className="event-view">
      <TimeCol />
      <div className="venues">
        <DividerCol />
      </div>
    </div>
  );
};

EventView.propTypes = {
  events: PropTypes.array.isRequired,
};

EventView.defaultProps = {
  events: [],
};

export default EventView;
