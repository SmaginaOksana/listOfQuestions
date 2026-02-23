import axios from "axios";

import { useState, useEffect } from "react";

function useAxios(url, params) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);

      try {
        const response = await axios.get(url, {
          params,
        });

        setData(response.data);
      } catch (e) {
        console.log(e);
        setError(e);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [url, params]);

  return [data, loading, error];
}

export default useAxios;
