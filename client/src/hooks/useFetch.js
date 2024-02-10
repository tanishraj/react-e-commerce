import { useEffect, useState } from "react";
import { fetchDataFromApi } from "../utils/api";

export const useFetch = (endpoint) => {
  const [data, setData] = useState();

  const makeApiCall = async (endpoint) => {
    const response = await fetchDataFromApi(endpoint);
    setData(response);
  };

  useEffect(() => {
    makeApiCall(endpoint);
  }, [endpoint]);

  return { data };
};
