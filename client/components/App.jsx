import React, { useEffect } from 'react';
import AppContext, { defaultValue } from './shared/context/AppContext';
import EventView from './EventView';
import Loader from './shared/components/Loader';
import useFetch from './shared/hooks/useFetch';

export default function App() {
  const { loading, response, get } = useFetch({ base_url: 'http://localhost:3000' });

  useEffect(() => {
    const fetchData = async () => {
      await get('/schedules');
    };

    fetchData();
  }, []);

  return (
    <div className="app-component">
      <AppContext.Provider value={defaultValue}>
        <h1>Venue Events</h1>
        {loading || !response ? <Loader /> : <EventView events={response} />}
      </AppContext.Provider>
    </div>
  );
}
