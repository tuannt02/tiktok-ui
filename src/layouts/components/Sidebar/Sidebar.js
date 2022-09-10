import classNames from 'classnames/bind';
import config from '~/config';
import styles from './Sidebar.module.scss';
import Menu, { MenuItem } from './Menu';
import Icon from '~/components/Icon';
import SuggestedAccounts from '~/components/SuggestedAccounts';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu className={cx('mode-actions')}>
                <MenuItem
                    title="For You"
                    to={config.routes.home}
                    icon={<Icon icon="home" />}
                />
                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    icon={<Icon icon="userGroup" />}
                />
                <MenuItem
                    title="LIVE"
                    to={config.routes.live}
                    icon={<Icon icon="live" />}
                />
            </Menu>
            <SuggestedAccounts
                lable="Suggested accounts"
                textMoreBtn="See all"
                type="SuggestAccounts"
            />
            <SuggestedAccounts
                lable="Following accounts"
                textMoreBtn="See more"
                type="FollowingAccounts"
            />
        </aside>
    );
}

export default Sidebar;
