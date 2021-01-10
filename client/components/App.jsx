import React, { useEffect } from 'react';
import Loader from './shared/components/Loader/index.jsx';
import useFetch from './shared/hooks/useFetch';

export default function App() {
  const { loading, response, get } = useFetch({ base_url: 'http://localhost:3000' });

  useEffect(() => {
    get('/schedules');
  }, []);

  return <div className="app-component">{loading ? <Loader /> : 'Here'}</div>;
}
