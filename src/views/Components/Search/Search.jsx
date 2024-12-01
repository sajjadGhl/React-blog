import { useForm } from 'react-hook-form';

// styles
import styles from './Search.module.css';
import { useNavigate } from 'react-router-dom';

import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';

const Search = () => {
	const { register, handleSubmit } = useForm();
	const navigate = useNavigate();
	const [searchParams] = useSearchParams();
	const [search, setSearch] = useState(searchParams.get('search') || '');

	const onSubmit = (data) => {
		// console.log(data.search);
		navigate(`?search=${search}`, { state: { search: data.search } });
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className={styles.container}>
			<input
				type='text'
				{...register('search')}
				className={styles.search}
				placeholder='جستجو ...'
				value={search}
				onChange={(e) => setSearch(e.target.value)}
			/>
			<input
				type='submit'
				className={`btn transition ${styles.btn}`}
				value='جستجو'
			/>
		</form>
	);
};

export default Search;
