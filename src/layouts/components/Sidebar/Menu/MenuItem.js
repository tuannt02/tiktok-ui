import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styles from './Menu.module.scss';
import Icon from '~/components/Icon';

const cx = classNames.bind(styles);

function MenuItem({ title, to, icon }) {
    const nameIcon = icon.props.icon;
    const regularIcon = (
        <>
            <Icon icon={nameIcon} type="regular" />
            <span className={cx('title')}>{title}</span>
        </>
    );
    const solidIcon = (
        <>
            <Icon icon={nameIcon} type="solid" />
            <span className={cx('title')}>{title}</span>
        </>
    );

    return (
        <NavLink
            className={({ isActive }) => cx('menu-item', { active: isActive })}
            to={to}
        >
            {({ isActive }) => (isActive ? solidIcon : regularIcon)}
        </NavLink>
    );
}

MenuItem.propTypes = {
    title: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
};

export default MenuItem;
