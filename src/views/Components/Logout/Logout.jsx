import Modal from 'react-modal';
import { useStateContext } from '../../Contexts/ContextProvider';

// styles
import styles from './Logout.module.css';
import axiosClient from '../../../axios-client';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Logout = () => {
	const {
		logout: { isOpen, setIsOpen },
		token,
		setToken,
		setUser,
	} = useStateContext();

	const navigate = useNavigate();

	const logoutHandle = () => {
		axiosClient
			.post('/auth/logout', {}, { headers: { Authorization: `Token ${token}` } })
			.then((response) => {
				console.log('Response: ', response);
				if (response.status === 204) {
					// Successful
					setUser({});
					setToken(undefined);
					toast.success('با موفقیت خارج شدید.');
					navigate('/');
				} else {
					toast.error('خطایی رخ داده است.');
					console.log('Error: ', response);
				}
			})
			.catch((error) => {
				toast.error('خطایی رخ داده است.');
				console.log('Error: ', error);
			})
			.finally(() => setIsOpen(false));
	};

	return (
		<Modal
			isOpen={isOpen}
			onRequestClose={() => setIsOpen(false)}
			className={styles.modal}
			overlayClassName={styles.overlay}
			ariaHideApp={false}>
			<h2>خروج</h2>
			<p>از حساب کاربری خود خارج می‌شوید؟</p>
			<div className={styles.buttons}>
				<button className={`btn`} onClick={() => setIsOpen(false)}>
					لغو
				</button>
				<button className={`btn ${styles.danger}`} onClick={logoutHandle}>
					خروج
				</button>
			</div>
		</Modal>
	);
};

export default Logout;
