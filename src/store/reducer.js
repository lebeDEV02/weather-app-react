import { initialState } from "./initialState";


const TEST = "TEST"


export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case TEST:
			return { ...state, value: action.payload.name }
		default: return state
	}
}

export const testDispatch = (payload) => ({ type: TEST, payload })