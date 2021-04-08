
import { inputValue, weatherCityForecast, weatherFeelsLike, weatherCityDetails, weatherInformation, weatherCity, weather, weatherSunrise, weatherSunset, weatherDigitsValue, weatherIcon, dailyForecast, hourlyForecast } from '../DOMElements/WeatherElements';
export const mainInfo = (requestTarget, weatherCity) => {
	if (requestTarget) {
		fetch('http://api.openweathermap.org/data/2.5/weather?q=' + requestTarget + '&appid=f660a2fb1e4bad108d6160b7f58c555f')
			.then(response => response.json())
			.then(data => {
				const { name, weather: { 0: { main: description } }, main: { temp, feels_like }, sys: { sunrise, sunset }, coord: { lon, lat }
				} = data;
				// weatherDigitsValue.textContent = returnTemperature(temp);
				// weatherIcon.src = `images/${description}.svg`;
				weatherCity.textContent = name;
				// weatherCityDetails.textContent = name;
				// weatherCityForecast.textContent = name;
				// weatherInformation.textContent = `Temperature: ${returnTemperature(temp)}`;
				// weatherFeelsLike.textContent = `Feels like: ${returnTemperature(feels_like)}`;
				// weather.textContent = `Weather: ${description}`;
				// weatherSunrise.textContent = `Sunrise: ${returnSunInfo(sunrise)}`;
				// weatherSunset.textContent = `Sunset: ${returnSunInfo(sunset)}`;
				// showAdditionalInfo(lon, lat);
			})
	}
}
const returnSunInfo = (s) => {
	return `${Math.floor((s / (60 * 60)) % 24)}:${Math.floor((s / (60)) % 60)}`;
}