import { useForm } from 'react-hook-form';

// styles
import styles from './Register.module.css';
import axiosClient from '../../../axios-client';
import { useStateContext } from '../../Contexts/ContextProvider';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Register = () => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm({
		defaultValues: {},
	});

	const navigate = useNavigate();

	const { setToken, setUser } = useStateContext();

	const onSubmit = (data) => {
		console.log(data);
		axiosClient
			.post('/auth/register', data)
			.then((response) => {
				if (response.status === 200) {
					// Successful
					setToken(response.data.token);
					setUser(response.data.user);
					toast.success('ثبت نام موفقیت آمیز بود.');
					navigate('/');
				} else {
					toast.error('خطایی رخ داده است.');
					console.log('Error: ', response);
				}
			})
			.catch((error) => {
				toast.error('خطایی رخ داده است.');
				console.log('Error: ', error);
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
				{...register('first_name', { required: 'نام اجباری است' })}
				placeholder='نام'
			/>
			{showError('first_name')}

			<input
				{...register('last_name', { required: 'نام خانوادگی اجباری است' })}
				placeholder='نام خانوادگی'
			/>
			{showError('last_name')}

			<input
				{...register('username', { required: 'نام کاربری اجباری است' })}
				placeholder='نام کاربری'
				className={styles.ltr}
			/>
			{showError('username')}

			<input
				type='email'
				{...register('email', { required: 'ایمیل اجباری است' })}
				aria-invalid={errors.mail ? 'true' : 'false'}
				placeholder='ایمیل'
			/>
			{showError('email')}

			<input
				type='password'
				{...register('password', {
					required: 'رمز عبور اجباری است',
					minLength: {
						value: 8,
						message: 'رمز عبور باید بیشتر از 8 کاراکتر باشد.',
					},
				})}
				placeholder='رمز عبور'
			/>
			{showError('password')}

			<input
				type='password'
				{...register('passwordConfirmation', {
					required: 'تایید رمز عبور اجباری است',
					validate: (val) => {
						if (watch('password') != val)
							return 'رمز عبور و تایید رمز عبور یکسان نیستند';
					},
				})}
				placeholder='تکرار رمز عبور'
			/>
			{showError('passwordConfirmation')}

			<div className={styles.rules}>
				<input
					type='checkbox'
					id='accept-rules'
					{...register('acceptRules', {
						required: 'باید با قوانین موافق باشید',
					})}
				/>
				<label htmlFor='accept-rules'>با قوانین و مقررات موافق هستم.</label>
			</div>
			{showError('acceptRules')}

			<input type='submit' value='ثبت نام' className='btn transition' />
		</form>
	);
};

export default Register;
