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


