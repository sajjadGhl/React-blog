import { useState } from 'react';

// styles
import styles from './Comments.module.css';
import { useParams } from 'react-router-dom';
import CommentCard from '../CommentCard/CommentCard';
import CommentForm from '../CommentForm/CommentForm';

const Comments = () => {
    const {id} = useParams();
    const [comments, setComments] = useState([
        {
            id: 1,
            name: 'سجاد',
            content: 'باحال بود ایولا',
        },
        {
            id: 2,
            name: 'علیرضا',
            content: 'جالب بود',
        },
        {
            id: 3,
            name: 'حسن',
            content: 'لذت بردم',
        },
        {
            id: 4,
            name: 'Hamid',
            content: 'Awesome',
        },
        {
            id: 5,
            name: 'رضا',
            content: 'mamnoon',
        },
        {
            id: 6,
            name: 'Arya',
            content: 'با تشکر از عوامل زحمت کش و نویسندگان عزیز پست',
        },
        {
            id: 7,
            name: 'سخن گوی اعظم',
            content: 'سلام بنده سخن گوی اعظم هستم و خواستم در این پیام کوتاه از تمامی افراد تشکر کنم حتی شمایی که این کامنت بی معنی و مفهوم رو میخونید و خواستم بگم دستتون درد نکنه بابت پست بی مفهوم و بی معنایی که گذاشتید، وقت بنده رو 5 دقیقه گرفت ولی فدای سرتون اصلا مهم نیستش که این همه وقت تلف میکنیم این 5 دقیقه هم روش مگه چی میشه. خوبیش اینه وقت همه رو گرفته نه فقط من. خواستم بگم بازم از این پست ها بزارید تا بیشتر وقت ما تلف بشه. ممنون',
        },
    ]);
    return <div className={styles.container}>
        <h5 className='title'>کامنت ها</h5>
        <CommentForm />
        {
            comments.map(comment => <CommentCard comment={comment} key={comment.id} />)
        }
    </div>;
}

export default Comments;