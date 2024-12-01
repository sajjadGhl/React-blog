import axios from 'axios';
import { getToken, removeToken } from './helper';

const axiosClient = axios.create({
	baseURL: `${import.meta.env.VITE_APP_BASE_URL}/api`,
});

axiosClient.interceptors.request.use((config) => {
	config.headers['Content-Type'] = 'application/json';
	return config;
});

axiosClient.interceptors.response.use(
	(response) => {
		return response;
	},
	(error) => {
		if (error.status === 401) {
			removeToken();
		}
		return error;
	}
);

export default axiosClient;
