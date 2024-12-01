// styles
import styles from './CommentCard.module.css';

const CommentCard = ({ comment: {name, content}}) => {
    return <div className={styles.container}>
        <div className={styles.name}>{name}</div>
        <p>{content}</p>
    </div>;
}

export default CommentCard;