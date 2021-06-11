import L from "leaflet";
import icon from "./assets/church.svg";

const iconCustom = new L.Icon({
  iconUrl: icon,
  iconRetinaUrl: icon,
  iconAnchor: null,
  popupAnchor: [0, -35],
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: new L.Point(60, 75),
  className: "leaflet-div-icon",
});

export { iconCustom };
