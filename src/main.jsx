import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import router from './router';
import { ContextProvider } from './views/Contexts/ContextProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<ContextProvider>
			<RouterProvider router={router} />
		</ContextProvider>
	</React.StrictMode>
);

/*
TODO ::
	API (Using Loading component) :
									ContactUs ✔
									Search ✔
									Profile (Show ✔, Edit)
									Single Post ✔
									Logout ✔
									Login ✔
									Register ✔
									Logout => logging user out ✔
									Posts (Pagination, limit via api, correct image urls) ✔
									Update User via api, contextProvider update user

	Light mode (on user choice - default: system)

	(Admin panel)
	(API - django, Laravel)
*/
