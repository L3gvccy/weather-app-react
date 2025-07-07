import HourlyForecast from "./HourlyForecast";
import DailyForecast from "./DailyForecast";

export default function Forecast({ children, type, data }) {
  return (
    <div className="container mb-3">
      <h3 className="text-center mb-3">{children}</h3>
      {type === "hourly" ? HourlyForecast(data) : DailyForecast(data)}
    </div>
  );
}
