import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    icon,
    type,
    rounded = false,
    disabled = false,
    small = false,
    medium = false,
    large = false,
    tClr,
    brdClr,
    bgClr,
    hClr,
    children,
    leftIcon,
    rightIcon,
    className,
    onClick,
    ...passProps
}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };

    // Remove event listener when button with DISABLED
    if (disabled) {
        Object.keys(props).forEach((property) => {
            if (property.startsWith('on') && typeof props[property] === 'function') delete props[property];
        });
    }

    if (to) {
        Comp = Link;
        props.to = to;
    } else if (href) {
        Comp = 'a';
        props.href = href;
    }

    const classes = cx(
        'wrapper',
        type || 'primary',
        {
            small,
            medium,
            large,
        },
        tClr,
        brdClr,
        bgClr,
        hClr,
        { [className]: className, rounded, disabled },
    );

    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon', 'leftIcon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon', 'rightIcon')}>{rightIcon}</span>}
        </Comp>
    );
}

export default Button;
