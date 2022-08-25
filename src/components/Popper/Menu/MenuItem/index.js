import classNames from 'classnames/bind';

import styles from './MenuItem.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function MenuItem({ data }) {
    return (
        <Button
            className={cx('menu-item')}
            type="outline"
            leftIcon={data.icon}
            to={data.to}
            tClr="t-text"
            brdClr="brd-white"
        >
            {data.title}
        </Button>
    );
}

export default MenuItem;
