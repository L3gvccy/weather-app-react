export default function DailyForecast(data) {
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
                {Math.round(day.temperature_min)}°C –{" "}
                {Math.round(day.temperature_max)}°C
              </p>

              <p className="mb-0">
                {Math.round(day.precipitation.total)} мм/год{" "}
                <i className="bi bi-droplet"></i>
              </p>
              <div className="mb-0">
                <span>{Math.round(day.wind.speed)} км/год </span>
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
