import L from "leaflet";

const iconCustom = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-black.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
  iconSize: [20, 28],
  iconAnchor: [10, 14],
  popupAnchor: [1, -10],
  shadowSize: [20, 20],
  shadowAnchor: [5, 6],
  /* iconUrl: icon,
  iconRetinaUrl: icon,
  iconAnchor: null,
  popupAnchor: [0, 0],
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: new L.Point(20, 25), */
  /* className: "leaflet-div-icon", */
});

export const iconSelected = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-blue.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
  iconSize: [30, 42],
  iconAnchor: [17, 24],
  popupAnchor: [1, -10],
  shadowSize: [30, 30],
  shadowAnchor: [10, 12],
  /* iconUrl: icon,
  iconRetinaUrl: icon,
  iconAnchor: null,
  popupAnchor: [0, 0],
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: new L.Point(20, 25), */
  /* className: "leaflet-div-icon", */
});

export { iconCustom };
