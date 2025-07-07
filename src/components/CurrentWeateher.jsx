import { getCurrentWeather, getOtherWeatherData } from "../api";

export default function CurrentWeather() {
  const data = getCurrentWeather();

  const { feels_like, icon_num, summary, temperature } = data;

  const otherData = getOtherWeatherData();

  return (
    <>
      <h2 className="text-center mb-3">Поточна погода</h2>
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
              <h2 className="text-center">{temperature} °C</h2>
              <h5 className="text-center">Відчувається як: {feels_like} °C</h5>
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
    </>
  );
}
