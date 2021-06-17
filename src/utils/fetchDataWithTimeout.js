import { fetchData } from "./fetchData";

export const fetchDataWithTimeout = async (url) => {
  await new Promise((resolve) => setTimeout(resolve, 250));
  const response = await fetchData(url);
  return await response;
};
