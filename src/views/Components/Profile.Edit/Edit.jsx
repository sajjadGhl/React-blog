// styles
import { useEffect, useState } from 'react';
import { useStateContext } from '../../Contexts/ContextProvider';
import styles from './Edit.module.css';
import axiosClient from '../../../axios-client';
import { toast } from 'react-toastify';

const Edit = () => {
	// const { name, family, email } = {
	// 	name: 'سجاد',
	// 	family: 'قنبرلو',
	// 	email: 'sajjadghan1382@gmail.com',
	// };
	const [user, setUser] = useState({
		first_name: '',
		last_name: '',
		username: '',
		email: '',
	});

	const contextData = useStateContext();

	useEffect(() => {
		setUser(contextData['user']);
	}, []);

	const submitHandler = (e) => {
		e.preventDefault();
		// contextData.setUser(user);
		axiosClient
			.patch('/auth/user', user, {
				headers: { Authorization: `Token ${contextData['token']}` },
			})
			.then((response) => {
				if (response.status === 200) {
					delete response.data.role;
					contextData.setUser(response.data);
					toast.info('اطلاعات با موفقیت ویرایش شد.');
				} else {
					console.log('Error: ', response);
					toast.error('خطا در هنگام بروزرسانی پروفایل');
				}
			})
			.catch((error) => console.log(error));
	};

	const changeHandler = (e) => {
		setUser({ ...user, [e.target.name]: e.target.value });
	};

	return (
		<form className={styles.container} onSubmit={submitHandler}>
			<div>
				<span>نام:</span>
				<input
					name='first_name'
					type='text'
					value={user.first_name || ''}
					placeholder='تعیین نشده'
					onChange={changeHandler}
				/>
			</div>
			<div>
				<span>نام خانوادگی:</span>
				<input
					name='last_name'
					type='text'
					value={user.last_name || ''}
					placeholder='تعیین نشده'
					onChange={changeHandler}
				/>
			</div>
			<div>
				<span>نام کاربری:</span>
				<input
					name='username'
					type='text'
					value={user.username || ''}
					placeholder='تعیین نشده'
					onChange={changeHandler}
				/>
			</div>
			<div>
				<span>آدرس ایمیل:</span>
				<input
					name='email'
					type='email'
					value={user.email || ''}
					placeholder='تعیین نشده'
					onChange={changeHandler}
				/>
			</div>
			<button className='button'>ویرایش</button>
		</form>
	);
};

export default Edit;
