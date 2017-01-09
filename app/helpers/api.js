import axios from 'axios';

const BaseUrl = 'http://api.openweathermap.org/data/2.5/';
const ApiKey = '31c817fcb02c5a0b447e11df5143fd1e';

function prepRouteParams (queryStringData) {
  const queryStrings = Object.keys(queryStringData).map(key => {
    return key + '=' + encodeURIComponent(queryStringData[key]);
  });

  return queryStrings.join('&');
}

function prepUrl (type, queryStringData) {
  return BaseUrl + type + '?' + prepRouteParams(queryStringData);
}

function getQueryStringData (city) {
  return {
    q: city,
    type: 'accurate',
    APPID: ApiKey,
    cnt: 5
  };
}

function getCurrentWeather (city) {
  const queryStringData = getQueryStringData(city);
  const url = prepUrl('weather', queryStringData);

  return axios.get(url).then(getDataFromWeatherData);
}

function getDataFromWeatherData(weatherData) {
  return weatherData.data;
}

function getForecast (city) {
  const queryStringData = getQueryStringData(city);
  const url = prepUrl('forecast/daily', queryStringData);

  return axios.get(url).then(getDataFromWeatherData);
}

export { getCurrentWeather, getForecast };
