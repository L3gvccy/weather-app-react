import { useContext } from "react";
import WeatherContext from "../context/weather.context";

export default function CurrentWeather({ data }) {
  const { feels_like, icon_num, summary, temperature } = data;

  const { units } = useContext(WeatherContext);

  const otherData = [
    {
      id: 0,
      icon: "droplet",
      name: "Опади",
      value: Math.round(data.precipitation.total),
      unit: units.precipitation,
    },
    {
      id: 1,
      icon: "wind",
      name: "Швидкість вітру",
      value: Math.round(data.wind.speed),
      unit: units.wind_speed,
    },
    {
      id: 2,
      icon: "moisture",
      name: "Вологість",
      value: data.humidity,
      unit: units.humidity,
    },
    {
      id: 3,
      icon: "sunglasses",
      name: "Індекс UV",
      value: Math.round(data.uv_index),
      unit: units.uv_index,
    },
    {
      id: 4,
      icon: "clouds-fill",
      name: "Хмарність",
      value: data.cloud_cover,
      unit: units.cloud_cover,
    },
    {
      id: 5,
      icon: "eye",
      name: "Видимість",
      value: Math.round(data.visibility),
      unit: units.visibility,
    },
  ];

  return (
    <div className="container mb-3">
      <h3 className="text-center mb-3">Поточна погода</h3>
      <div className="row align-items-stretch">
        <div className="col-4 d-flex">
          <div className="border border-secondary border-2 rounded p-2 w-100 d-flex flex-column justify-content-center align-items-center">
            <div>
              <img
                className="img-fluid d-block mx-auto"
                src={`/dist/weather_icons/set03/big/${icon_num}.png`}
                alt={summary}
              />
            </div>
            <div>
              <h2 className="text-center">
                {Math.round(temperature)} {units.temperature}
              </h2>
              <h5 className="text-center">
                Відчувається як: {Math.round(feels_like)} {units.temperature}
              </h5>
              <p className="mb-0 text-center text-secondary">{summary}</p>
            </div>
          </div>
        </div>

        <div className="col-8 d-flex">
          <div className="border border-secondary border-2 rounded p-2 px-3 w-100">
            {otherData.map((item) => (
              <div
                key={item.id}
                className="d-flex justify-content-between align-items-center mb-2"
              >
                <div className="d-flex align-items-center">
                  <i className={`bi bi-${item.icon} me-2`}></i>
                  <span>{item.name}</span>
                </div>
                <span>
                  {item.value} {item.unit}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
