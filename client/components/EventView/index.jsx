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
      <div className="events-header">
        <div className="time-col__header">
          <span>Time</span>
        </div>
        <div className="venue-cols__header">
          {venueEvents && venueEvents.length > 0
            ? venueEvents.map((_venueItem) => (
                <div className="venue-col__header" key={_venueItem.venue._id}>
                  {_venueItem.venue.name}
                </div>
              ))
            : ''}
        </div>
      </div>
      <div className="events-cols">
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
