import { IS_OPEN } from './types';

export const toggleMenu = (bool) => {
	return {
		type: IS_OPEN,
		payload: bool
	};
};
