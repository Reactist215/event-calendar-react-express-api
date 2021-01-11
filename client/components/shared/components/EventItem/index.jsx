import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import './index.scss';

const EventItem = ({ event, cellHeight }) => {
  const [style, setStyle] = useState();
  const [timeStr, setTimeStr] = useState();

  useEffect(() => {
    const {
      startTime: { hour, minute },
      duration,
    } = event;

    setStyle(() => {
      const top = Math.floor(cellHeight * (hour + minute / 60));
      const height = Math.floor((cellHeight * duration) / 60);

      const display = duration < 31 ? 'flex' : 'block';

      return {
        display,
        top,
        height,
        width: '100%',
        backgroundColor: event && event.color ? event.color : 'rgb(3, 155, 229)',
        borderColor: event && event.color ? event.color : 'rgb(3, 155, 229)',
      };
    });

    setTimeStr(() => {
      const startHourStr = hour > 9 ? hour : '0' + hour;
      const startMinStr = minute > 9 ? minute : '0' + minute;

      const startTimeStr = `${startHourStr}:${startMinStr}`;

      const durHrs = Math.floor((event.duration + event.startTime.minute) / 60);
      const hh = parseInt(event.startTime.hour) + durHrs;
      const mm = (event.duration + event.startTime.minute) % 60;

      const hhStr = hh > 9 ? hh : '0' + hh;
      const mmStr = mm > 9 ? mm : '0' + mm;

      const endTimeStr = `${hhStr}:${mmStr}`;

      if (duration > 30) {
        return `${startTimeStr} - ${endTimeStr}`;
      } else {
        return `${startTimeStr}`;
      }
    });
  }, [cellHeight, event]);

  return (
    <div className="event-item" style={style}>
      <div className="event-item__name">{event.name}</div>
      <div className="event-item__time">{timeStr}</div>
    </div>
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
  cellHeight: PropTypes.number,
};

EventItem.defaultProps = {
  event: {
    _id: 'default id',
    color: 'rgb(3, 155, 229)',
    duration: 135,
    name: 'New Event',
    startTime: {
      hour: 8,
      minute: 45,
    },
    venue: {
      _id: 'default venue id',
      name: 'default venue',
    },
  },
  cellHeight: 60,
};

export default EventItem;
