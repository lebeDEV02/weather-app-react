import { initialState } from "./initialState";


const TEST = "TEST"

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case TEST:
			return {
				...state,
				value: action.payload.name,
				weather: action.payload.weather[0].main,
				temp: Math.floor(action.payload.main.temp - 273),
				feels_like: Math.floor(action.payload.main.feels_like - 273),
				sunrise: action.payload.sys.sunrise,
			}
		default: return state
	}
}

export const testDispatch = (payload) => ({ type: TEST, payload })