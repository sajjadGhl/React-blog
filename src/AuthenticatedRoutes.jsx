import { useNavigate } from 'react-router-dom';
import { authorized } from './helper';
import { useEffect } from 'react';

const NotAuthenticatedRoutes = ({ children }) => {
	const navigate = useNavigate();
	useEffect(() => {
		const check = async () => {
			if (!(await authorized())) navigate('/');
		};
		check();
	}, []);
	return <>{children}</>;
};

export default NotAuthenticatedRoutes;
