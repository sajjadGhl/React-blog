// styles
import { useStateContext } from '../../Contexts/ContextProvider';
import styles from './Show.module.css';

const Show = () => {
	const {
		user: { first_name, last_name, username, email },
	} = useStateContext();

	return (
		<div className={styles.container}>
			<div>
				<span>نام:</span> {first_name || 'تعیین نشده'}
			</div>
			<div>
				<span>نام خانوادگی:</span> {last_name || 'تعیین نشده'}
			</div>
			<div>
				<span>نام کاربری:</span> {username || 'تعیین نشده'}
			</div>
			<div>
				<span>آدرس ایمیل:</span> {email || 'تعیین نشده'}
			</div>
		</div>
	);
};

export default Show;
