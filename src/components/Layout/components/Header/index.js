import classNames from 'classnames/bind';
import styles from './Header.module.scss';

// bind cai' object style nay vao roi tra ra function. Roi dung cai nay lam class
// thi khi do giup cac ban viet duoi dang dau gach ngang
const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}></div>
        </header>
    );
}

export default Header;
