import { useContext } from "react";
import WeatherContext from "../context/weather.context";

export default function DailyForecast(data) {
  const { units } = useContext(WeatherContext);
  return (
    <>
      <div className="row flex-nowrap overflow-x-auto overflow-y-hidden scroll-dark-thin">
        {data.map((day) => (
          <div key={day.day} className="col-2 text-center">
            <div className="border border-secondary border-2 rounded-3 p-2 mb-2">
              <p className="mb-2">
                {new Date(day.day).toLocaleDateString("uk-UA", {
                  weekday: "short",
                  month: "short",
                  day: "numeric",
                })}
              </p>
              <img
                className="img-fluid d-block mx-auto mb-0"
                src={`/dist/weather_icons/set03/big/${day.icon}.png`}
                alt={day.summary}
              />

              <p className="mb-2">
                {Math.round(day.temperature_min)}
                {units.temperature} – {Math.round(day.temperature_max)}
                {units.temperature}
              </p>

              <p className="mb-0">
                {Math.round(day.precipitation.total)} {units.precipitation}{" "}
                <i className="bi bi-droplet"></i>
              </p>
              <div className="mb-0">
                <span>
                  {Math.round(day.wind.speed)} {units.wind_speed}{" "}
                </span>
                <div
                  style={{
                    transform: `rotate(${day.wind.angle}deg)`,
                    display: "inline-block",
                  }}
                >
                  <i className="bi bi-arrow-up"></i>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
