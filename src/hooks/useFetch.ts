import { useEffect, useState } from "react";
import axios from "axios";

export const useFetch = (url: string) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<any>();
  const [error, setError] = useState<any>();

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        const apiData = await response.data;

        setData(apiData);
        setIsLoading(false);
      } catch (apiError: any) {
        setError(apiError);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { isLoading, data, error };
};
