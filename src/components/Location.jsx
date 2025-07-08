import { useContext } from "react";
import WeatherContext from "../context/weather.context";

export default function Location() {
  const { place } = useContext(WeatherContext);

  return (
    <div className="location">
      <p className="mb-0 fs-5">
        <i className="bi bi-geo-fill"></i> <b>{place.name}</b>, {place.country}
      </p>
    </div>
  );
}
