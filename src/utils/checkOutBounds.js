export const checkOutBounds = (bounds, broadenBounds) => {
  const {
    _northEast: { lat: mxLat, lng: mxLon },
    _southWest: { lat: miLat, lng: miLon },
  } = bounds;
  const {
    _northEast: { lat: bMxLat, lng: bMxLon },
    _southWest: { lat: bMiLat, lng: bMiLon },
  } = broadenBounds;

  let minLon = parseFloat(miLon);
  let maxLon = parseFloat(mxLon);
  let minLat = parseFloat(miLat);
  let maxLat = parseFloat(mxLat);

  let broadenMinLon = parseFloat(bMiLon);
  let broadenMaxLon = parseFloat(bMxLon);
  let broadenMinLat = parseFloat(bMiLat);
  let broadenMaxLat = parseFloat(bMxLat);

  if (
    minLat <= broadenMinLat ||
    maxLat >= broadenMaxLat ||
    minLon <= broadenMinLon ||
    maxLon >= broadenMaxLon
  ) {
    return true;
  } else {
    return false;
  }
};
