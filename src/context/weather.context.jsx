import { createContext, useState } from "react";
import { DEFAULT_PLACE } from "../utils/utils";

const WeatherContext = createContext();

function WeatherProvider({ children }) {
  const [place, setPlace] = useState(DEFAULT_PLACE);
  const [loading, setLoading] = useState(true);
  return (
    <WeatherContext.Provider value={place}>{children}</WeatherContext.Provider>
  );
}

export { WeatherProvider };
export default WeatherContext;
