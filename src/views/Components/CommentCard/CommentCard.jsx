// styles
import styles from './CommentCard.module.css';

const CommentCard = ({ comment: {user, content}}) => {
    return <div className={styles.container}>
        <div className={styles.name}>{user}</div>
        <p>{content}</p>
    </div>;
}

export default CommentCard;