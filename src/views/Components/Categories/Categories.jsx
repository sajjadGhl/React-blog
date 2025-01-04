import { useEffect, useState } from 'react';
import styles from './Categories.module.css';
import axiosClient from '../../../axios-client';
import Loading from '../Loading/Loading';
import CategoryCard from '../CategoryCard/CategoryCard';

const Categories = () => {
	const [categories, setCategories] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		axiosClient
			.get('/categories/')
			.then((res) => setCategories(res.data))
			.catch((err) => console.log(err))
			.finally(() => setLoading(false));
	}, []);

	return (
		<div className={styles.container}>
			{loading && <Loading />}
			{!loading &&
				categories.map((category) => (
					<CategoryCard
						name={category.title}
						posts={category.posts}
						key={category.id}
					/>
				))}
		</div>
	);
};

export default Categories;
