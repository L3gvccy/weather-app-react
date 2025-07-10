import { useContext, useState } from "react";
import { MEASUREMENT_SYSTEMS } from "../utils/utils";
import "../style.css";
import WeatherContext from "../context/weather.context";

export default function Settings() {
  const [openSettings, setOpenSettings] = useState(false);
  const { measurementSystem, setMeasurementSystem } =
    useContext(WeatherContext);
  return (
    <div className="settings position-relative">
      <div
        className="settings-btn"
        onClick={() => {
          setOpenSettings((prev) => !prev);
        }}
      >
        <p className="mb-0 fs-5">
          <i className={`bi bi-gear${openSettings ? "-fill" : ""}`}></i>
        </p>
      </div>

      <div
        className={`bg-dark position-absolute border-dark px-3 py-2 mt-4 rounded-2 settings-menu ${
          openSettings ? "open" : ""
        }`}
      >
        <p className="mb-0">Системи виміру:</p>
        <select
          value={measurementSystem}
          className="form-select"
          data-bs-theme="dark"
          onChange={(e) => setMeasurementSystem(e.target.value)}
        >
          {Object.values(MEASUREMENT_SYSTEMS).map((system) => (
            <option value={system} key={system}>
              {system}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
