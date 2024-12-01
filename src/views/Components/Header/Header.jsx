import { Link } from 'react-router-dom';
import logo from '../../../assets/images/logo.png';
import { authorized } from '../../../helper';
import { useStateContext } from '../../Contexts/ContextProvider';

// styles
import styles from './Header.module.css';

// components
import Logout from '../Logout/Logout';
import { useEffect, useState } from 'react';

const Header = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(undefined);

	const { logout, token } = useStateContext();

	useEffect(() => {
		const check = async () => {
			setIsLoggedIn(await authorized());
		};
		check();
	}, [token]);

	return (
		<div className={styles.container}>
			<ul className={styles.menu}>
				<li>
					<Link to='/'>صفحه اصلی</Link>
				</li>
				{!isLoggedIn && (
					<>
						<li>
							<Link to='/register'>ثبت نام</Link>
						</li>
						<li>
							<Link to='/login'>ورود</Link>
						</li>
					</>
				)}
				<li>
					<Link to='/posts'>پست ها</Link>
				</li>
				<li>
					<Link to='/contact-us'>تماس با ما</Link>
				</li>
				{isLoggedIn && (
					<>
						<li>
							<Link to='/profile'>پروفایل</Link>
						</li>
						<li>
							<button
								className={styles.logout}
								onClick={() =>
									logout.setIsOpen(true)
								}>
								خروج
							</button>
						</li>
					</>
				)}
			</ul>
			<Link to='/' className={styles.logo}>
				<img src={logo} alt='Blog website' />
			</Link>
		</div>
	);
};

export default Header;
