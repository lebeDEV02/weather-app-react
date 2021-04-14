import { useDispatch } from "react-redux";
import { set } from "../DOMElements/WeatherElements"

//listener for tab switching
export const tabListener = () => {
	const infoTabs = document.querySelectorAll('.app__weather-top');
	const tabsSection = document.querySelector('.app__weather-tabs');
	const allTabs = document.querySelectorAll('.app__weather-tab');
	tabsSection.addEventListener('click', (e) => {
		if (e.target.classList.contains('app__weather-tab')) {
			allTabs.forEach(item => {
				item.classList.remove('app__weather-tab--active');
			})
			e.target.classList.add('app__weather-tab--active');
			infoTabs.forEach(item => {
				item.classList.remove('app__weather-top--active');
				if (item.classList.contains(`app__weather-${e.target.textContent.toLowerCase()}`)) {
					item.classList.add('app__weather-top--active');
				}
			});
		}
	});
}
// listener for weather period switching
export const weatherSwitchListener = () => {
	const dailyForecast = document.querySelector('.app__weather-daily')
	const hourlyForecast = document.querySelector('.app__weather-hourly');
	const weatherSwitcher = document.querySelector('.weather-checkbox__more');
	weatherSwitcher.addEventListener('click', () => {
		dailyForecast.classList.toggle('app__weather-hide');
		hourlyForecast.classList.toggle('app__weather-hide');
	})
}
export const favouriteCityAddListener = () => {
	const favouriteCity = document.querySelector('.weather__favourite');
	const weatherCity = document.querySelector('.app__weather-city');
	const addedLocations = document.querySelector('.app__locations-list')
	favouriteCity.addEventListener('click', () => {
		if (weatherCity.textContent !== undefined && weatherCity.textContent !== "" && !set.has(weatherCity.textContent)) {
			console.log(weatherCity.textContent)
			localStorage.setItem(`${localStorage.length}`, `${weatherCity.textContent}`);
			set.add(weatherCity.textContent);
			addedLocations.insertAdjacentHTML('beforeend', `<p class="app__favourite-city">${weatherCity.textContent}<svg class="app__favourite-icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z"/></svg>
		 </p>`);
		} else {
			alert('Try again! Something went wrong!')
		}
	})
}
export const favouriteCityDeleteListener = () => {
	const addedLocations = document.querySelector('.app__locations-list')
	addedLocations.addEventListener('click', (e) => {
		if (e.target.parentElement.classList.contains('app__favourite-icon')) {
			for (let i = 0; i < localStorage.length; i++) {
				let key = localStorage.key(i);
				if (localStorage.getItem(key) === e.target.parentElement.parentElement.textContent.trim() && !(key === "inputStorage")) {
					localStorage.removeItem(key);
					e.target.parentElement.parentElement.remove();
				} else {
					continue;
				}
			}
		}
	})
}
export const addedFavouriteCities = () => {
	const addedLocations = document.querySelector('.app__locations-list')
	for (let value of set) {
		addedLocations.insertAdjacentHTML('beforeend', `<p class="app__favourite-city">${value}<svg class="app__favourite-icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z"/></svg>
		 </p>`);
	};
}
export const setFilling = () => {
	for (let key in localStorage) {
		if (!localStorage.hasOwnProperty(key)) {
			continue;
		} else {
			if (key !== "inputStorage") {
				set.add(localStorage.getItem(key))
			}
		}
	}
}
export const requestFromFavourite = () => {
	const addedLocations = document.querySelector('.app__locations-list');
	addedLocations.addEventListener('click', (e) => {
		if (e.target.classList.contains('app__favourite-city')) {
			e.preventDefault();
			localStorage.removeItem('inputStorage');
			localStorage.setItem('inputStorage', e.target.textContent.trim());
			console.log(e.target.textContent.trim())
			// useDispatch(e.target.textConent.trim());
		}
	})
}