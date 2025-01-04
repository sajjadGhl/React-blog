// styles
import styles from './PostCard.module.css';

// Not found image
import noImage from '../../../assets/images/no-image.jpg';
import { Link } from 'react-router-dom';

const PostCard = ({ data: { id, title, content, image, author, created_at, categories } }) => {
	image = image || noImage;

	return (
		<div
			to={`/posts/${id}`}
			className={`transition transition-top ${styles.container}`}>
			<h3>{title}</h3>
			<img src={image} alt={`Image ${title}`} />
			<p>{content}</p>
			<div className={styles.info}>
				<div className={styles.details}>
					<span>{created_at}</span>
					{/* <span>{author}</span> */}
				</div>
				<Link
					to={`/posts/${id}`}
					className={`btn transition ${styles.read_more}`}>
					ادامه مطلب
				</Link>
			</div>
			<div className={styles.categories}>
				{categories.map((category, index) => (
					<span key={index}>{category}</span>
				))}
				{categories.length === 0 && <span>بدون دسته بندی</span>}
			</div>
		</div>
	);
};

export default PostCard;
