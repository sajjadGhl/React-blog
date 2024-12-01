import { Outlet } from 'react-router-dom';
import Header from '../Components/Header/Header';
import { useStateContext } from '../Contexts/ContextProvider';
import Footer from '../Components/Footer/Footer';
import Logout from '../Components/Logout/Logout';
import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axiosClient from '../../axios-client';

const DefaultLayout = () => {
	const { setUser, setToken, token, logout } = useStateContext();

	useEffect(() => {
		axiosClient
			.get('/auth/user', {
				headers: { Authorization: `Token ${token}` },
			})
			.then((response) => {
				if (response.status === 200) setUser(response.data);
				else if (response.status === 401) {
					// Unauthorized
					setUser({});
					setToken(undefined);
				} else {
					console.log('Error: ', response);
				}
			})
			.catch((error) => {
				console.log('Error: ', error);
			});
	}, []);

	return (
		<>
			<Header />
			<main>
				<Outlet />
			</main>
			<ToastContainer
				position='bottom-right'
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme='dark'
				transition:Bounce
			/>
			<Footer />
			<Logout logout={logout} />
		</>
	);
};

export default DefaultLayout;
