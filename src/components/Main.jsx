import CurrentWeather from "./CurrentWeateher";
import Forecast from "./Forecast";
import { getHourlyForecast, getDailyForecast } from "../api";

export default function Main() {
  const hourlyData = getHourlyForecast();
  const dailyData = getDailyForecast();

  return (
    <div className="bg-main">
      <div id="main" className="container py-3">
        <CurrentWeather />
        <Forecast type="hourly" data={hourlyData}>
          Погодинний прогноз
        </Forecast>
        <Forecast type="daily" data={dailyData}>
          Прогноз на 21 день
        </Forecast>
      </div>
    </div>
  );
}
