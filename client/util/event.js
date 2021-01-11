/**
 * getVenueEvents
 * Get sorted {Venue, Events} array
 *
 * @param {Array} events Events array from REST API
 */
export const getVenueEvents = (events) => {
  const venueEvents = [];
  events.forEach((event) => {
    const venueIndex = venueEvents.findIndex((_evItem) => _evItem.venue._id === event.venue._id);
    if (venueIndex > -1) {
      venueEvents[venueIndex].events.push(event);
    } else {
      venueEvents.push({
        venue: event.venue,
        events: [event],
      });
    }
  });
  return venueEvents;
};
