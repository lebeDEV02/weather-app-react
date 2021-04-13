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
export const favouriteCityListener = () => {
	const favouriteCity = document.querySelector('.weather__favourite');

	favouriteCity.addEventListener('click', () => {
		alert(1);
	})
}
// favouriteCity.addEventListener('click', () => {
// 	if (value !== undefined && value !== "") {
// 		console.log(value)
// 		localStorage.setItem(`${localStorage.length}`, `${weatherCityFavourite.textContent}`);
// 		set.add(weatherCityFavourite.textContent);
// 		addedLocations.insertAdjacentHTML('beforeend', `<p class="app__favourite-city">${weatherCityFavourite.textContent}<svg class="app__favourite-icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z"/></svg>
// 		 </p>`);
// 	} else {
// 		alert('Try again! Something went wrong!')
// 	}
// });