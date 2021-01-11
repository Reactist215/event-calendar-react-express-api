import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import DividerCol from '../shared/components/DividerCol';
import TimeCol from '../shared/components/TimeCol';
import VenueCol from '../shared/components/VenueCol';
import './index.scss';
import { getVenueEvents } from '../../util/event';

const EventView = ({ events }) => {
  const [venueEvents, setVenueEvents] = useState([]);
  useEffect(() => {
    setVenueEvents(() => {
      return getVenueEvents(events);
    });
  }, []);
  return (
    <div className="event-view">
      <TimeCol />
      <div className="venues">
        <DividerCol />
        {venueEvents && venueEvents.length > 0 ? (
          <React.Fragment>
            {venueEvents.map((_venueItem) => (
              <VenueCol key={_venueItem.venue._id} venueEvents={_venueItem} />
            ))}
          </React.Fragment>
        ) : (
          'No Events'
        )}
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
