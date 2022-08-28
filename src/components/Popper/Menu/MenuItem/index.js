import classNames from 'classnames/bind';

import styles from './MenuItem.module.scss';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {
    const classes = cx('menu-item', { divider: data.divider });

    return (
        <Button
            onClick={onClick}
            className={classes}
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
