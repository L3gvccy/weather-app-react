import axios from "axios";

export async function getWeatherData(endpoint, place_id, measurementSystem) {
  const options = {
    method: "GET",
    url: `https://ai-weather-by-meteosource.p.rapidapi.com/${endpoint}`,
    params: {
      place_id: `${place_id}`,
      language: "en",
      units: measurementSystem,
    },
    headers: {
      "x-rapidapi-key": "74e0d52589mshb9c62fd0bc2ec4cp175a53jsn84083e109d8a",
      "x-rapidapi-host": "ai-weather-by-meteosource.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
