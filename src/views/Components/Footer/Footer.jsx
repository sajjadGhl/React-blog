// styles
import styles from './Footer.module.css';

const Footer = () => {
    return <div className={styles.container}>
        &copy;
        طراحی و توسعه توسط
        <a href='http://github.com/sajjadghl' target='_blank'>محمدسجاد قنبرلو</a>
    </div>;
}

export default Footer;