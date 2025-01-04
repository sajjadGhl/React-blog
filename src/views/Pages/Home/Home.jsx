import { Link } from 'react-router-dom';
import Posts from '../../Components/Posts/Posts';
import { useStateContext } from '../../Contexts/ContextProvider';

// styles
import styles from './Home.module.css';
import Categories from '../../Components/Categories/Categories';

const Home = () => {
	console.log(useStateContext());

	return (
		<>
			{/* <h2 className='title'>آخرین پست ها</h2> */}
			{/* <Posts /> */}
			<Categories />
			<div className={styles.morePosts}>
				<Link to='/posts' className={'btn transition'}>
					مشاهده همه پست ها
				</Link>
			</div>
		</>
	);
};

export default Home;
