import currentWeather from "./current-weather.json";
import dailyForecast from "./daily-forecast.json";
import hourlyForecast from "./hourly-forecast.json";

function getCurrentWeather() {
  return currentWeather.current;
}

function getOtherWeatherData() {
  const curr = currentWeather.current;
  return [
    {
      id: 0,
      icon: "droplet",
      name: "Опади",
      value: Math.round(curr.precipitation.total),
      unit: "мм/год",
    },
    {
      id: 1,
      icon: "wind",
      name: "Швидкість вітру",
      value: Math.round(curr.wind.speed),
      unit: "км/год",
    },
    {
      id: 2,
      icon: "moisture",
      name: "Вологість",
      value: curr.humidity,
      unit: "%",
    },
    {
      id: 3,
      icon: "sunglasses",
      name: "Індекс UV",
      value: Math.round(curr.uv_index),
      unit: "",
    },
    {
      id: 4,
      icon: "clouds-fill",
      name: "Хмарність",
      value: curr.cloud_cover,
      unit: "%",
    },
    {
      id: 5,
      icon: "eye",
      name: "Видимість",
      value: Math.round(curr.visibility),
      unit: "км",
    },
  ];
}

function getDailyForecast() {
  return dailyForecast.daily.data;
}

function getHourlyForecast() {
  return hourlyForecast.hourly.data.slice(0, 24);
}

export {
  getCurrentWeather,
  getOtherWeatherData,
  getDailyForecast,
  getHourlyForecast,
};
