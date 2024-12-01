import { createBrowserRouter } from 'react-router-dom';

// components
import DefaultLayout from './views/Layouts/DefaultLayout';
import _404 from './views/Errors/_404';
import Home from './views/Pages/Home/Home';
import Register from './views/Pages/Register/Register';
import Login from './views/Pages/Login/Login';
import NotAuthenticatedRoutes from './NotAuthenticatedRoutes';
import AuthenticatedRoutes from './AuthenticatedRoutes';
import Posts from './views/Pages/Posts/Posts';
import ContactUs from './views/Pages/ContactUs/ContactUs';
import SinglePost from './views/Pages/SinglePost/SinglePost';
import Profile from './views/Pages/Profile/Profile';

const router = createBrowserRouter([
	{
		path: '/',
		element: <DefaultLayout />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: '/posts/:id',
				element: <SinglePost />,
			},
			{
				path: '/posts',
				element: <Posts />,
			},
			{
				path: '/login',
				element: (
					<NotAuthenticatedRoutes>
						<Login />
					</NotAuthenticatedRoutes>
				),
			},
			{
				path: '/register',
				element: (
					<NotAuthenticatedRoutes>
						<Register />
					</NotAuthenticatedRoutes>
				),
			},
			{
				path: '/contact-us',
				element: <ContactUs />,
			},
			{
				path: '/profile',
				element: (
					<AuthenticatedRoutes>
						<Profile />
					</AuthenticatedRoutes>
				),
			},
			// {
			// 	path: '/logout',
			// 	element: <p>Logout</p>,
			// },
		],
	},
	{
		path: '*',
		element: <_404 />,
	},
]);

export default router;
