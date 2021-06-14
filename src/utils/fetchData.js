export const fetchData = async (input) => {
  const response = await fetch(
    `https://api.locationiq.com/v1/autocomplete.php?key=${process.env.REACT_APP_LOCATIONIQ_TOKEN}&q=${input}&limit=5&tag=place:city`
  );
  const data = await response.json();
  return data;
};
