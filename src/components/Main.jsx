import CurrentWeather from "./CurrentWeateher";
import Forecast from "./Forecast";
import Loader from "./Loader";
import { useContext } from "react";
import WeatherContext from "../context/weather.context";

export default function Main() {
  const { loading, currentWeather, hourlyForecast, dailyForecast } =
    useContext(WeatherContext);

  return (
    <div className="bg-main">
      <div id="main" className="container py-3">
        {loading ? (
          <Loader />
        ) : (
          <>
            <CurrentWeather data={currentWeather} />
            <Forecast type="hourly" data={hourlyForecast}>
              Погодинний прогноз
            </Forecast>
            <Forecast type="daily" data={dailyForecast}>
              Прогноз на 21 день
            </Forecast>
          </>
        )}
      </div>
    </div>
  );
}
