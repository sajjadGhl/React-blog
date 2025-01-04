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

	Create comment permission (user can't submit comment)
	Delete user from body of request, we send token so get the user via token

	(Admin panel) [download it :)]
    
	pages should be Responsive :
								Menu 							✔
								Home page (under 500px) 		✔
								Post page (under 750px) 		✔
								Single page (under 450px) 		✔
								Contact us (under 700px) 		✔
								Sign up, Login (under 400px) 	✔
								Profile (under 650px)

*/
