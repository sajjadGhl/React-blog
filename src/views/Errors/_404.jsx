import { Link } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';

const _404 = () => {
	return (
		<>
			<Header />
			<main
				style={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
					gap: '1rem',
                    fontSize: '1.5em',
                    fontWeight: 'bold',
				}}>
				<div style={{fontSize: '2.5em'}}>4 ☹ 4</div>
				<p>صفحه مورد نظر شما پیدا نشد.</p>
				<Link to='/' className='btn transition'>
					بازگشت به صفحه اصلی
				</Link>
			</main>
			<Footer />
		</>
	);
};

export default _404;
