import { useForm } from 'react-hook-form';

// styles
import styles from './Login.module.css';
import axiosClient from '../../../axios-client';
import { useStateContext } from '../../Contexts/ContextProvider';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Login = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const { setUser, setToken } = useStateContext();

	const navigate = useNavigate();

	const onSubmit = (data) => {
		axiosClient
			.post('/auth/login', data)
			.then((response) => {
				console.log(response);
				if (response.status === 200) {
					setToken(response.data.token);
					setUser(response.data.user);
					toast.success('با موفقیت وارد شدید.');
					navigate('/');
				} else {
					toast.error('خطایی رخ داده است.');
					console.log('Error: ', response.message);
				}
			})
			.catch((error) => {
				console.log('Error: ', error);
				toast.error('خطایی رخ داده است.');
			});
	};

	const showError = (name) =>
		errors[name] ? (
			<span className={styles.error}>
				{errors[name]?.message || 'مقدار نامعتبر'}
			</span>
		) : (
			<></>
		);

	return (
		<form onSubmit={handleSubmit(onSubmit)} className={styles.container}>
			<input
				type='text'
				{...register('username', { required: 'نام کاربری الزامی است' })}
				placeholder='نام کاربری'
			/>
			{showError('username')}
			<input
				type='password'
				{...register('password', { required: 'رمز عبور الزامی است' })}
				placeholder='رمز عبور'
			/>
			{showError('password')}

			<input type='submit' value='ورود' className='btn transition' />
		</form>
	);
};

export default Login;
