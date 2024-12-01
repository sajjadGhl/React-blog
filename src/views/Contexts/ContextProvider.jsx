import { createContext, useContext, useState } from 'react';

import { setToken as storageSetToken, removeToken } from '../../helper';
import axiosClient from '../../axios-client';

const StateContext = createContext({
	user: null,
	token: null,
	notification: null,
	setUser: () => {},
	setToken: () => {},
});

export const ContextProvider = ({ children }) => {
	const [user, setUser] = useState({});
	const [notification, _setNotification] = useState('');
	const [logoutModalOpen, setLogoutModalOpen] = useState(false);
	const [token, _setToken] = useState(localStorage.getItem('ACCESS_TOKEN'));

	const setToken = (token) => {
		_setToken(token);
		if (token) {
			storageSetToken(token);
		} else {
			removeToken();
		}
	};

	const setNotification = (message) => {
		_setNotification(message);
		setTimeout(() => _setNotification(''), 5000);
	};

	return (
		<StateContext.Provider
			value={{
				user,
				token,
				setUser,
				setToken,
				notification,
				setNotification,
				logout: { isOpen: logoutModalOpen, setIsOpen: setLogoutModalOpen },
			}}>
			{children}
		</StateContext.Provider>
	);
};

export const useStateContext = () => useContext(StateContext);
