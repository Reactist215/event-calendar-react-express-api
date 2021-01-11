import { useState } from 'react';

const useFetch = ({ base_url, config }) => {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(error);

  const baseConfig = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  /**
   * POST
   *
   * @param {string} url Endpoint
   * @param {Object} data Post Data
   * @param {Object} config Configuration
   */
  const post = async (url, data, config = {}) => {
    try {
      setLoading(true);
      setError(null);
      const res = await fetch({
        method: 'POST',

        url: base_url + url,
        ...baseConfig,
        ...config,
        body: JSON.stringify(data),
      }).then((res) => res.json());
      setResponse(res);
    } catch (error) {
    } finally {
    }
  };

  /**
   * GET
   *
   * @param {string} url Endpoint
   * @param {Object} config Configuration
   */
  const get = async (url, config = {}) => {
    try {
      setLoading(true);
      setError(null);
      const res = await fetch(base_url + url).then((res) => res.json());
      setResponse(res);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    response,
    post,
    get,
  };
};

export default useFetch;
