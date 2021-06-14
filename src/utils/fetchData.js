export const fetchData = async (input) => {
  const response = await fetch(
    `https://api.opentripmap.com/0.1/en/places/geoname?name=${input}&apikey=5ae2e3f221c38a28845f05b6484f463aeb66bd736d2d3ecdb85a6368`
  );
  const data = await response.json();
  return data;
};
