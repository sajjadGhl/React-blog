import { useEffect, useState } from 'react';
import { useStateContext } from '../../Contexts/ContextProvider';

// components
import Show from '../../Components/Profile.Show/Show';
import Edit from '../../Components/Profile.Edit/Edit';

// styles
import styles from './Profile.module.css';
import Loading from '../../Components/Loading/Loading';
import axiosClient from '../../../axios-client';
import { getToken } from '../../../helper';

const Profile = () => {
	const [component, setComponent] = useState('show'); // show, edit
	const { logout } = useStateContext();

	const [loading, setLoading] = useState(false);

	return (
		<div className={styles.container}>
			{loading && <Loading />}
			{!loading && (
				<>
					<ul>
						<li
							className='bb_move_up'
							onClick={() => setComponent('show')}>
							نمایش اطلاعات
						</li>
						<li
							className='bb_move_up'
							onClick={() => setComponent('edit')}>
							ویرایش اطلاعات
						</li>
						<li
							className='bb_move_up'
							onClick={() => logout.setIsOpen(true)}>
							خروج
						</li>
					</ul>
					<div>
						{component === 'show' && <Show />}
						{component === 'edit' && <Edit />}
					</div>
				</>
			)}
		</div>
	);
};

export default Profile;
