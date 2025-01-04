import { useForm } from 'react-hook-form';

import { authorized } from '../../../helper';
import { Link } from 'react-router-dom';

import axiosClient from '../../../axios-client';
import { toast } from 'react-toastify';

// styles
import styles from './CommentForm.module.css';
import { useStateContext } from '../../Contexts/ContextProvider';

const CommentForm = ({ post_id }) => {
	const { register, handleSubmit, reset } = useForm();

	const { token } = useStateContext();

	const onSubmit = (data) => {
		axiosClient
			.post(
				'/comments/',
				{
					content: data.comment,
					post: post_id,
				},
				{ headers: { Authorization: `Token ${token}` } }
			)
			.then((res) => {
				toast.success('نظر شما با موفقیت ارسال شد.');
				setTimeout(() => window.location.reload(), 1000);
			})
			.catch((err) => {
				console.log('Error: ', err);
			});
		reset();
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className={styles.container}>
			<p>شما نیز نظر خود را بنویسید:</p>
			<textarea {...register('comment')} placeholder='نظر خود را بنویسید ...' />
			<input type='submit' value='ارسال' className='btn transition' />
		</form>
	);
};

export default CommentForm;
