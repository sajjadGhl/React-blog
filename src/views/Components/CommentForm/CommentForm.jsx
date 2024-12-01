import { useForm } from 'react-hook-form';

import {authorized} from '../../../helper';
import { Link } from 'react-router-dom';

// styles
import styles from './CommentForm.module.css';

const CommentForm = () => {
	const { register, handleSubmit } = useForm();

	const onSubmit = (data) => console.log(data);

	const loggedIn = authorized();

	return (
		<>
			{loggedIn && (
				<form
					onSubmit={handleSubmit(onSubmit)}
					className={styles.container}>
					<p>شما نیز نظر خود را بنویسید:</p>
					<textarea
						{...register('comment')}
						placeholder='نظر خود را بنویسید ...'
					/>
					<input
						type='submit'
						value='ارسال'
						className='btn transition'
					/>
				</form>
			)}
            {
                !loggedIn &&
                <div>برای ارسال نظر ابتدا 
                    <Link to='/login'> وارد </Link>
                     شوید و یا 
                     <Link to='/register'> ثبت نام </Link>
                      کنید. </div>
            }
		</>
	);
};

export default CommentForm;
