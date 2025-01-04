import { useEffect, useState } from 'react';

// styles
import styles from './Comments.module.css';
import { Link, useParams } from 'react-router-dom';
import CommentCard from '../CommentCard/CommentCard';
import CommentForm from '../CommentForm/CommentForm';
import { authorized } from '../../../helper';
import { useStateContext } from '../../Contexts/ContextProvider';

const Comments = ({ post_id, comments }) => {
	const [isLoggedIn, setIsLoggedIn] = useState(undefined);

	const { token } = useStateContext();

	useEffect(() => {
		const check = async () => {
			setIsLoggedIn(await authorized());
		};
		check();
	}, [token]);

	return (
		<div className={styles.container}>
			<h5 className='title'>کامنت ها</h5>
			{isLoggedIn ? (
				<CommentForm post_id={post_id} />
			) : (
				<div>
					برای ثبت نظر <Link to='/register'>ثبت نام</Link> کنید یا
					<Link to='/login'> وارد </Link> شوید.
				</div>
			)}
			{!comments.length ? (
				<p>هیچ کامنتی برای این پست درج نشده است.</p>
			) : (
				comments.map((comment) => (
					<CommentCard comment={comment} key={comment.id} />
				))
			)}
		</div>
	);
};

export default Comments;
