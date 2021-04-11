import { hourlyForecast } from "../DOMElements/WeatherElements"
export const returnSunInfo = (s) => {
	return `${Math.floor((s / (60 * 60)) % 24)}:${Math.floor((s / (60)) % 60)}`;
}
export const returnTemperature = (temp) => {
	return `${Math.round(temp - 273)}°`
}
// export const showWeatherHourly = (arr) => {
// 	arr.forEach(item => {
// 		const { dt, feels_like, weather: { 0: { main } }, temp } = item;
// 		let hourlyForecastDiv = document.createElement('div');
// 		let hourlyForecastDivTop = document.createElement('div');
// 		let hourlyDate = document.createElement('p');
// 		let hourlyTime = document.createElement('p');
// 		let hourlyForecastDivBottom = document.createElement('div');
// 		let hourlyForecastDigits = document.createElement('div');
// 		let hourlyForecastInformation = document.createElement('div');
// 		let hourlyForecastTemperature = document.createElement('p');
// 		let hourlyForecastFeelsLike = document.createElement('p');
// 		let hourlyForecastTypeOfWeather = document.createElement('p');
// 		let hourlyForecastImg = document.createElement('img');
// 		hourlyForecastDiv.classList.add('weather-hour')
// 		hourlyForecastDivTop.classList.add('weather-hour__top')
// 		hourlyForecastDivBottom.classList.add('weather-hour__bottom')
// 		hourlyForecastInformation.classList.add('weather-hour__information')
// 		hourlyForecastImg.src = `images/${main}.svg`;
// 		hourlyDate.textContent = `${new Date(dt * 1000).getDate()} ${new Date(dt * 1000).toLocaleString('default', { month: 'long' })}`;
// 		hourlyTime.textContent = `${new Date(dt * 1000).getHours()}:00`;
// 		hourlyForecastTemperature.textContent = `Temperature: ` + returnTemperature(temp);
// 		hourlyForecastFeelsLike.textContent = `Feels Like: ` + returnTemperature(feels_like);
// 		hourlyForecastTypeOfWeather.textContent = main;
// 		hourlyForecast.append(hourlyForecastDiv);
// 		hourlyForecastDiv.appendChild(hourlyForecastDivTop);
// 		hourlyForecastDiv.appendChild(hourlyForecastDivBottom);
// 		hourlyForecastDivTop.appendChild(hourlyDate);
// 		hourlyForecastDivTop.appendChild(hourlyTime);
// 		hourlyForecastDivBottom.appendChild(hourlyForecastDigits);
// 		hourlyForecastDivBottom.appendChild(hourlyForecastInformation);
// 		hourlyForecastDigits.appendChild(hourlyForecastTemperature);
// 		hourlyForecastDigits.appendChild(hourlyForecastFeelsLike);
// 		hourlyForecastInformation.appendChild(hourlyForecastTypeOfWeather);
// 		hourlyForecastInformation.appendChild(hourlyForecastImg);
// 	})
// }