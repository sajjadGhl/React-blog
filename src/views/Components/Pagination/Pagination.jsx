// styles
import styles from './Pagination.module.css';

const Pagination = ({ pageCount, current, searchKw, next, previous }) => {
	const numbers = Array.from({ length: 5 }, (value, index) => current - 2 + index).filter(
		(num) => num > 0 && num <= pageCount
	);

	const link = searchKw ? `?search=${searchKw}&page=` : '?page=';

	return (
		<div className={styles.container}>
			{/* {current > 1 && (
				<div>
					<a className='bb_move_up' href={`${link}${current - 1}`}>Prev</a>
				</div>
			)} */}
			{previous !== -1 && (
				<div>
					<a className='bb_move_up' href={`${link}${previous}`}>
						صفحه قبل
					</a>
				</div>
			)}

			{numbers.map((number) => (
				<div key={number}>
					{number === +current ? (
						number
					) : (
						<a className='bb_move_up' href={`${link}${number}`}>
							{number}
						</a>
					)}
				</div>
			))}

			{/* {current !== all && (
				<div>
					<a className='bb_move_up' href={`${link}${current + 1}`}>Next</a>
				</div>
			)} */}
			{next !== -1 && (
				<div>
					<a className='bb_move_up' href={`${link}${next}`}>
						صفحه بعد
					</a>
				</div>
			)}
		</div>
	);
};

export default Pagination;
