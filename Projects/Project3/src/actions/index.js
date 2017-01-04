//Sign up for a free api key at openweathermap.org
const API_KEY = 

const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?&appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  return {
    type: FETCH_WEATHER
  }

}
