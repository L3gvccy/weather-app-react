export default function HourlyForecast(data) {
  return (
    <>
      <div className="row flex-nowrap overflow-x-auto overflow-y-hidden scroll-dark-thin">
        {data.map((hour) => (
          <div key={hour.date} className="col-2 text-center">
            <div className="border border-secondary border-2 rounded-3 p-2 mb-2">
              <p className="mb-0">
                {new Date(hour.date).toLocaleDateString("uk-UA", {
                  weekday: "short",
                  month: "short",
                  day: "numeric",
                })}
              </p>
              <p className="mb-2">
                {new Date(hour.date).toLocaleTimeString("uk-UA", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
              <img
                className="img-fluid d-block mx-auto mb-0"
                src={`/dist/weather_icons/set03/big/${hour.icon}.png`}
                alt={hour.summary}
              />
              <p className="mb-2 fw-bold">{Math.round(hour.temperature)} °C</p>
              <p className="mb-0">
                {Math.round(hour.precipitation.total)} мм/год{" "}
                <i className="bi bi-droplet"></i>
              </p>
              <div className="mb-0">
                <span>{Math.round(hour.wind.speed)} км/год </span>
                <div
                  style={{
                    transform: `rotate(${hour.wind.angle}deg)`,
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
