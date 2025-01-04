import { Link } from 'react-router-dom';
import logo from '../../../assets/images/logo.png';
import { authorized } from '../../../helper';
import { useStateContext } from '../../Contexts/ContextProvider';
import menuIcon from './menuIcon.png';
import xIcon from './x.png';

// styles
import styles from './Header.module.css';

// components
import Logout from '../Logout/Logout';
import { useEffect, useState, useRef } from 'react';

const Header = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(undefined);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const { logout, token } = useStateContext();

	const menuRef = useRef(null);

	useEffect(() => {
		const check = async () => {
			setIsLoggedIn(await authorized());
		};
		check();
	}, [token]);

	const mobileMenuHandler = (e) => {
		if (e.target.tagName === 'IMG') e.target = e.target.parentElement;
		if (!isMobileMenuOpen) {
			e.target.children[0].src = xIcon;
			menuRef.current.style.display = 'flex';
			setIsMobileMenuOpen(true);
		} else {
			e.target.children[0].src = menuIcon;
			menuRef.current.style.display = 'none';
			setIsMobileMenuOpen(false);
		}
	};

	return (
		<div className={styles.container}>
			<button className={styles.mobileMenu} onClick={mobileMenuHandler}>
				<img src={menuIcon} alt='Menu Icon' />
			</button>
			<ul className={styles.menu} ref={menuRef}>
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
