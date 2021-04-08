import { testDispatch } from "../store/reducer"

export const fetchCity = (requestCity) => {
	return dispatch => {
		fetch('http://api.openweathermap.org/data/2.5/weather?q=' + requestCity + '&appid=f660a2fb1e4bad108d6160b7f58c555f')
			.then(response => response.json())
			.then(data => dispatch(testDispatch(data)))
	}
}