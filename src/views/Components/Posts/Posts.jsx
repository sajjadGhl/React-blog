import { useEffect, useState } from 'react';

// styles
import styles from './Posts.module.css';

// components
import PostCard from '../PostCard/PostCard';
import Pagination from '../Pagination/Pagination';

import axiosClient from '../../../axios-client';
import Loading from '../Loading/Loading';

const Posts = ({ count, kw, page, pagination }) => {
	count = count || 6;
	pagination = pagination || false;
	page = page || 1;

	const [posts, setPosts] = useState([]);

	const [paginationData, setPaginationData] = useState({
		total: 0,
		next: -1,
		previous: -1,
		page_size: 0,
	});

	const [loading, setLoading] = useState(false);

	const params = new URLSearchParams({ page });
	kw && params.set('search', kw);

	useEffect(() => {
		setLoading(true);
		axiosClient
			.get(`/posts/${(page || kw) && `?${params.toString()}`}`)
			.then((response) => {
				setPaginationData({
					total: response.data.total,
					next: response.data.links.next,
					previous: response.data.links.previous,
					page_size: response.data.page_size,
				});
				setPosts(response.data.results);
			})
			.catch((error) => {
				console.error(error);
			})
			.finally(() => setLoading(false));
	}, [kw]);

	return (
		<>
			<div className={styles.content}>
				{loading && <Loading />}
				{!loading &&
					posts
						.slice(0, count)
						.map((post) => (
							<PostCard data={post} key={post.id} />
						))}
				{!loading && !posts.length && <h3>No Post Found</h3>}
			</div>
			{pagination &&
				(paginationData.next !== -1 || paginationData.previous !== -1) && (
					<Pagination
						pageCount={Math.ceil(
							paginationData.total /
								paginationData.page_size
						)}
						current={page}
						searchKw={kw}
						previous={paginationData.previous}
						next={paginationData.next}
					/>
				)}
		</>
	);
};

export default Posts;
