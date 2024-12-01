import axiosClient from './axios-client';

const key = import.meta.env.VITE_TOKEN_KEY_NAME;

export const getToken = () => {
	return localStorage.getItem(key);
};

export const setToken = (token) => {
	localStorage.setItem(key, token);
};

export const removeToken = () => {
	localStorage.removeItem(key);
};

export const authorized = async () => {
	return await axiosClient
		.get('/auth/user', { headers: { Authorization: `Token ${getToken()}` } })
		.then((response) => response.status === 200);
};
