import Loading from '../Loading/Loading';
import { useState } from 'react';
import styles from './CategoryCard.module.css';
import PostCard from '../PostCard/PostCard';

const CategoryCard = ({ name, posts }) => {
	const [loading, setLoading] = useState(false);

	return (
		<div className={styles.container}>
			<h3>{name}</h3>
			{loading && <Loading />}
			{!loading && (
				<div className={styles.content}>
					{posts.slice(0, 10).map((post) => (
						<PostCard data={post} key={post.id} />
					))}
				</div>
			)}
			{!loading && !posts.length && <h3>No Post Found</h3>}
		</div>
	);
};

export default CategoryCard;
