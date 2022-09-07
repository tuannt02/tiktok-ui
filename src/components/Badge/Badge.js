import classNames from 'classnames/bind';
import styles from './Badge.module.scss';

const cx = classNames.bind(styles);

function Badge({ positioned = false, buttons = false, max: maxNotice = 99, offset = [0, 0], children }) {
    const classes = cx('wrapper', { positioned, buttons });
    const [top, left] = offset;
    const stylingBadge = {
        top: `${top}px`,
        left: `${left}px`,
    };
    const textReplace = maxNotice - Number(children) >= 0 ? undefined : `${maxNotice}+`;

    return (
        <span className={classes} style={stylingBadge}>
            {textReplace || children}
        </span>
    );
}

export default Badge;
