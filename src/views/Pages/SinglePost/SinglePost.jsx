import { useState } from 'react';

import { useParams } from 'react-router-dom';

import Comments from '../../Components/Comments/Comments';

// styles
import styles from './SinglePost.module.css';
import { useEffect } from 'react';
import axiosClient from '../../../axios-client';
import Loading from '../../Components/Loading/Loading';
import { useNavigate } from 'react-router-dom';

const SinglePost = () => {
	const imageBaseUrl = import.meta.env.VITE_APP_BASE_URL;
	const { id } = useParams();

	const [post, setPost] = useState({
		title: '',
		content: '',
		author: '',
		created_at: '',
		comments: [],
		categories: [],
	});

	const [loading, setLoading] = useState(false);

	const navigate = useNavigate();

	useEffect(() => {
		setLoading(true);
		axiosClient
			.get(`/posts/${id}/`)
			.then((response) => {
				if (response.status === 404) navigate('/404');
				setPost(response.data);
			})
			.catch((error) => {
				console.log('Error: ', error);
			})
			.finally(() => setLoading(false));
	}, []);

	return (
		<>
			{loading && <Loading />}
			{!loading && (
				<>
					<div className={styles.container}>
						<h2 className='title'>{post.title}</h2>
						<p>
							<img
								src={`${imageBaseUrl}${post.image}`}
								alt={`Image of ${post.title}`}
							/>
							{post.content}
						</p>
						<div className={styles.info}>
							{/* <span>{post.author}</span> */}
							<span>{post.created_at}</span>
						</div>
					</div>
					<Comments comments={post.comments} post_id={post.id} />
				</>
			)}
		</>
	);
};

export default SinglePost;
