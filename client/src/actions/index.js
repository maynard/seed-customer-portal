import axios from 'axios';
import { FETCH_USER } from './types';


export const fetchUser = () => async dispatch => {
	const res = await axios.get('https://murmuring-plateau-75228.herokuapp.com/current_user');

	dispatch({ type: FETCH_USER, payload: res.data });
};