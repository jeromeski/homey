import { combineReducers, createStore } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { IS_OPEN } from '../actions/types';

const INIT_STATE = null;

const menuToggleReducer = (state = INIT_STATE, action) => {
	switch (action.type) {
		case IS_OPEN:
			return action.payload;
		default:
			return state;
	}
};

export const init = () => {
	const rootReducer = combineReducers({ isOpen: menuToggleReducer, form: formReducer });

	const store = createStore(rootReducer);
	return store;
};
