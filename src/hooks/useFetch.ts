import { useEffect, useState } from "react";
import api from "api/api";

const useFetch = (query: string) => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("idle");
  const [data, setData] = useState<any>([]);
  const [error, setError] = useState();
  useEffect(() => {
    if (!query) return;

    const fetchData = async () => {
      setStatus("fetching");
      setLoading(true);
      try {
        const response = await api.get(query);
        setData(response.data);
        setStatus("fetched");
        setLoading(false);
      } catch (e: any) {
        setError(e);
        setStatus("error");
      }
    };

    fetchData();
  }, [query]);

  return { loading, data, error, status };
};

export default useFetch;
