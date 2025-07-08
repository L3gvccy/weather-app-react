import CurrentWeather from "./CurrentWeateher";
import Forecast from "./Forecast";
import Loader from "./Loader";
import { getHourlyForecast, getDailyForecast } from "../api";
import { useContext } from "react";
import WeatherContext from "../context/weather.context";

export default function Main() {
  const hourlyData = getHourlyForecast();
  const dailyData = getDailyForecast();
  const loading = useContext(WeatherContext);

  return (
    <div className="bg-main">
      <div id="main" className="container py-3">
        {loading ? (
          <Loader />
        ) : (
          <>
            <CurrentWeather />
            <Forecast type="hourly" data={hourlyData}>
              Погодинний прогноз
            </Forecast>
            <Forecast type="daily" data={dailyData}>
              Прогноз на 21 день
            </Forecast>
          </>
        )}
      </div>
    </div>
  );
}
