import { useContext, useEffect, useState } from "react";
import WeatherContext from "../context/weather.context";
import { findPlaces } from "../api";

export default function Search() {
  const [placeInput, setPlaceInput] = useState("");
  const [placeResults, setPlaceResults] = useState([]);
  const [inputHint, setInputHint] = useState(false);
  const { setPlace } = useContext(WeatherContext);

  async function handleSearch(text) {
    setPlaceInput(text);
    text.length == 0 && setInputHint(false);
    if (text.length < 3) {
      setPlaceResults([]);
      return;
    }
    setInputHint(false);
    const results = await findPlaces(text);
    setPlaceResults(results);
  }

  function handlePlaceSelect(place) {
    setPlace(place);
    setPlaceInput("");
    setPlaceResults([]);
  }

  useEffect(() => {
    if (placeInput.length < 3 && placeInput.length > 0) {
      setPlaceResults([]);
      setInputHint(true);
    } else {
      setInputHint(false);
    }
  }, [placeInput]);

  return (
    <div className="search position-relative">
      <form className="d-flex justify-content-center align-items-center">
        <input
          type="text"
          className="form-control me-2 rounded-pill"
          placeholder="Пошук міста..."
          aria-label="Search"
          data-bs-theme="dark"
          onChange={(e) => handleSearch(e.target.value)}
          value={placeInput}
        />
      </form>
      {inputHint && (
        <div className="search-results position-absolute mt-4 bg-dark text-light rounded-2 scroll-dark-thin">
          <div className="result">Введіть щонайменше 3 символи</div>
        </div>
      )}
      {placeResults?.length > 0 && (
        <div className="search-results position-absolute mt-4 bg-dark text-light rounded-2 scroll-dark-thin">
          {placeResults.map((place) => (
            <div
              className="result"
              key={place.place_id}
              onClick={() => {
                handlePlaceSelect(place);
              }}
            >
              {place.name}, {place.country}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
