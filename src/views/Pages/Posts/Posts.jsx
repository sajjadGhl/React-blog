import { useSearchParams } from 'react-router-dom';
import Pagination from '../../Components/Pagination/Pagination';
import PostsComponent from '../../Components/Posts/Posts';
import Search from '../../Components/Search/Search';

// styles
import styles from './Posts.module.css';

const Posts = () => {
	const [searchParams] = useSearchParams();

	return (
		<div className={styles.container}>
			<h2 className='title'>پست ها</h2>
			<Search />
			<PostsComponent
				count={10}
				kw={searchParams.get('search')}
				page={searchParams.get('page')}
				pagination={true}
			/>
		</div>
	);
};

export default Posts;
