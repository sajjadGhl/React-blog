import { useState } from 'react';
import Loading from '../../Components/Loading/Loading';

// styles
import styles from './ContactUs.module.css';
import axiosClient from '../../../axios-client';
import { toast } from 'react-toastify';
import { useEffect } from 'react';

const ContactUs = () => {
	const initialDataValues = {
		name: '',
		email: '',
		message: '',
	};
	const initialStatusValues = {
		error: false,
		errorMsg: {
			general: '',
			name: '',
			email: '',
			message: '',
		},
		success: false,
		successMsg: '',
	};

	const [data, setData] = useState(initialDataValues);
	const [loading, setLoading] = useState(false);
	const [status, setStatus] = useState(initialStatusValues);

	const changeHandler = (e) => {
		setData({ ...data, [e.target.name]: e.target.value });
	};

	const submitHandler = (e) => {
		e.preventDefault();
		setLoading(true);
		axiosClient
			.post('/contactUs', data)
			.then((response) => {
				if (response.status !== 201) {
					setStatus({
						...initialStatusValues,
						error: true,
						errorMsg: {
							general: response.message,
							name:
								response.response.data.name?.[0] ||
								'',
							email:
								response.response.data.email?.[0] ||
								'',
							message:
								response.response.data
									.message?.[0] || '',
						},
					});
				} else {
					setStatus({
						...initialStatusValues,
						success: true,
						successMsg: 'پیام شما با موفقیت ارسال شد.',
					});
					setData({ ...initialDataValues });
				}
			})
			.finally(() => {
				setLoading(false);
			});
	};

	useEffect(() => {
		status.error && toast.error(status.errorMsg.general);
		status.success && toast.success(status.successMsg);
	}, [status]);

	return (
		<div className={styles.container}>
			{loading && <Loading />}

			{!loading && (
				<form
					className={styles.message}
					method='post'
					onSubmit={submitHandler}>
					<h2 className='title'>ارسال پیام</h2>
					<div>
						<input
							name='name'
							type='text'
							placeholder='نام شما'
							value={data.name}
							onChange={changeHandler}
						/>
						{status.errorMsg.name && (
							<p className='error'>
								{status.errorMsg.name}
							</p>
						)}
					</div>
					<div>
						<input
							name='email'
							type='email'
							placeholder='ایمیل'
							value={data.email}
							onChange={changeHandler}
						/>
						{status.errorMsg.email && (
							<p className='error'>
								{status.errorMsg.email}
							</p>
						)}
					</div>
					<div>
						<textarea
							name='message'
							placeholder='پیام شما'
							value={data.message}
							onChange={changeHandler}
						/>
						{status.errorMsg.message && (
							<p className='error'>
								{status.errorMsg.message}
							</p>
						)}
					</div>
					<input
						type='submit'
						value='ارسال'
						className='btn transition'
					/>
				</form>
			)}
			<div className={styles.info}>
				<h2 className='title'>اطلاعات ما</h2>
				<div className={styles.card}>
					<h4 className='title'>آدرس ما</h4>
					<p>ایران، اراک</p>
				</div>
				<div className={styles.card}>
					<h4 className='title'>شماره ما</h4>
					<a href='tel:086-32211666'>086-32211666</a>
				</div>
				<div className={styles.card}>
					<h4 className='title'>ایمیل ما</h4>
					<a href='mailto:test@example.com'>test@example.com</a>
				</div>
			</div>
		</div>
	);
};

export default ContactUs;
