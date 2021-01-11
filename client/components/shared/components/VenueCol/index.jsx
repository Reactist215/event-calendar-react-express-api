import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import AppContext from '../../context/AppContext';
import EventItem from '../EventItem';

import './index.scss';

const VenueCol = ({ venueEvents }) => {
  const ctxVal = useContext(AppContext);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    setEvents(venueEvents.events);
  }, [venueEvents]);

  return (
    <div className="col venue-col">
      {events
        ? events.map((_eventItem) => (
            <EventItem key={_eventItem._id} event={_eventItem} cellHeight={ctxVal.cellHeight} />
          ))
        : ''}
    </div>
  );
};

VenueCol.propTypes = {
  venueEvents: PropTypes.object,
};

VenueCol.defaultProps = {
  venueEvents: {},
};

export default VenueCol;
