import { useState } from 'react';

/**
 * useFetch
 * @description Custom Hook For Async Fetch
 *
 * @param {string} base_url Base Url for Request
 * @param {Object} config Configuration for Request
 */
const useFetch = ({ base_url, config }) => {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(error);

  /**
   * Base Configuration For Request
   */
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
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  /**
   * GET
   *
   * @param {string} url Endpoint
   * @param {Object} config Configuration
   */
  const get = async (url) => {
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
