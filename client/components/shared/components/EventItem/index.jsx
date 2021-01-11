import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './index.scss';

const EventItem = ({ event }) => {
  const [style, setStyle] = useState(() => {
    return {
      backgroundColor: event && event.color ? event.color : 'blue',
      borderColor: event && event.color ? event.color : 'blue',
    };
  });
  return (
    <div
      className="event-item"
      style={{ backgroundColor: event.color, borderColor: event.color }}
    ></div>
  );
};

EventItem.propTypes = {
  event: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    duration: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    startTime: PropTypes.shape({
      hour: PropTypes.number.isRequired,
      minute: PropTypes.number.isRequired,
    }),
    venue: PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  }),
};

EventItem.defaultProps = {
  event: {
    _id: 'default id',
    color: 'blue',
    duration: 15,
    name: 'New Event',
    startTime: {
      hour: 8,
      minute: 30,
    },
    venue: {
      _id: 'default venue id',
      name: 'default venue',
    },
  },
};

export default EventItem;
