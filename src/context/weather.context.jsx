import { createContext, useEffect, useState } from "react";
import { DEFAULT_PLACE, UNITS } from "../utils/utils";
import { getWeatherData } from "../api";

const WeatherContext = createContext();

function WeatherProvider({ children }) {
  const [place, setPlace] = useState(DEFAULT_PLACE);
  const [loading, setLoading] = useState(true);
  const [currentWeather, setCurrentWeather] = useState({});
  const [hourlyForecast, setHourlyForecast] = useState([]);
  const [dailyForecast, setDailyForecast] = useState([]);
  const [measurementSystem, setMeasurementSystem] = useState("auto");
  const [units, setUnits] = useState({});

  useEffect(() => {
    async function _getWatherData() {
      setLoading(true);

      const currW = await getWeatherData(
        "current",
        place.place_id,
        measurementSystem
      );
      setCurrentWeather(currW.current);
      setUnits(UNITS[currW.units]);

      const hourlyF = await getWeatherData(
        "hourly",
        place.place_id,
        measurementSystem
      );
      setHourlyForecast(hourlyF.hourly.data.slice(0, 24));

      const dailyF = await getWeatherData(
        "daily",
        place.place_id,
        measurementSystem
      );
      setDailyForecast(dailyF.daily.data);

      setLoading(false);
    }

    _getWatherData();
  }, [place, measurementSystem]);

  return (
    <WeatherContext.Provider
      value={{
        place,
        loading,
        currentWeather,
        hourlyForecast,
        dailyForecast,
        measurementSystem,
        setMeasurementSystem,
        units,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
}

export { WeatherProvider };
export default WeatherContext;
