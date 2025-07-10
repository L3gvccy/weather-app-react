export const DEFAULT_PLACE = {
  name: "Kyiv",
  place_id: "kyiv",
  adm_area1: "Kyiv City",
  adm_area2: null,
  country: "Ukraine",
  lat: "50.45466N",
  lon: "30.5238E",
  timezone: "Europe/Kiev",
  type: "settlement",
};

export const MEASUREMENT_SYSTEMS = {
  AUTO: "auto",
  METRIC: "metric",
  UK: "uk",
  US: "us",
  CA: "ca",
};

export const UNITS = {
  metric: {
    temperature: "°C",
    precipitation: "мм/год",
    wind_speed: "м/с",
    visibility: "км",
    humidity: "%",
    uv_index: "",
    cloud_cover: "%",
  },
  us: {
    temperature: "°F",
    precipitation: "дюйм/год",
    wind_speed: "миль/год",
    visibility: "миль",
    humidity: "%",
    uv_index: "",
    cloud_cover: "%",
  },
  uk: {
    temperature: "°C",
    precipitation: "мм/год",
    wind_speed: "миль/год",
    visibility: "миль",
    humidity: "%",
    uv_index: "",
    cloud_cover: "%",
  },
  ca: {
    temperature: "°C",
    precipitation: "мм/год",
    wind_speed: "км/год",
    visibility: "км",
    humidity: "%",
    uv_index: "",
    cloud_cover: "%",
  },
};
