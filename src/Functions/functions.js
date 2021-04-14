import { hourlyForecast } from "../DOMElements/WeatherElements"
export const returnSunInfo = (s) => {
	return `${Math.floor((s / (60 * 60)) % 24)}:${Math.floor((s / (60)) % 60)}`;
}
export const returnTemperature = (temp) => {
	return `${Math.round(temp - 273)}°`
}
export const setInputStorage = (inputValue) => {
	if (inputValue) {
		localStorage.setItem('inputStorage', inputValue);
	}
}