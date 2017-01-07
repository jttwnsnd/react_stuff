import axios from 'axios';

//Sign up for a free api key at openweathermap.org
const API_KEY = 'f4e549423f2e6705f04e43427cc36466';

const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?&appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);
  return {
    type: FETCH_WEATHER,
    payload: request
  }

}
