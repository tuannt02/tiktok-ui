import { faCircleQuestion, faKeyboard, faUser } from '@fortawesome/free-regular-svg-icons';
import {
    faArrowRightFromBracket,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faPlus,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react';
import classNames from 'classnames/bind';
import 'tippy.js/dist/tippy.css';
import { Link } from 'react-router-dom';

import images from '~/assets/images';
import Badge from '~/components/Badge';
import Button from '~/components/Button';
import Icon from '~/components/Icon';
import Image from '~/components/Image';
import Menu from '~/components/Popper/Menu';
import styles from './Header.module.scss';
import Search from '../Search';

// bind cai' object style nay vao roi tra ra function. Roi dung cai nay lam class
// thi khi do giup cac ban viet duoi dang dau gach ngang
const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Tiếng việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feed back and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];

const USER_MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'View profile',
        to: '/@tuannt02',
    },
    {
        icon: <FontAwesomeIcon icon={faCoins} />,
        title: 'Get coins',
        to: '/coin',
    },
    {
        icon: <FontAwesomeIcon icon={faGear} />,
        title: 'Settings',
        to: '/setting',
    },
    ...MENU_ITEMS,
    {
        icon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
        title: 'Log out',
        to: '/logout',
        divider: true,
    },
];

function Header() {
    const currentUser = true;

    // Handle logic here
    const handleMenuChange = (menuItem) => {
        console.log(menuItem);
    };

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to="/" className={cx('logo')}>
                    <img src={images.logo} alt="Tiktok" />
                </Link>

                <Search />

                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Button
                                className={cx('action_btn')}
                                type="outline"
                                leftIcon={<FontAwesomeIcon icon={faPlus} />}
                                tClr="t-text"
                                brdClr="brd-gray"
                                hClr="h-gray"
                            >
                                Upload
                            </Button>
                            <Tippy content="Messages" delay={[0, 200]} offset={[0, 6]}>
                                <button className={cx('action_btn', 'message_btn')}>
                                    <Icon icon="message" />
                                    <Badge offset={[-4, 18]} max={99}>
                                        1001
                                    </Badge>
                                </button>
                            </Tippy>
                            <Tippy content="Inbox" offset={[0, 6]}>
                                <button className={cx('action_btn', 'inbox_btn')}>
                                    <Icon icon="inbox" />
                                    <Badge offset={[-4, 18]} max={99}>
                                        5
                                    </Badge>
                                </button>
                            </Tippy>
                            <Menu items={USER_MENU_ITEMS} onChange={handleMenuChange} offset={[13, 12]}>
                                <Image
                                    className={cx('user_btn')}
                                    src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/09be93014681f7361b2d266025e4c201.jpeg?x-expires=1661763600&x-signature=Kn2PIRgxFP6eUKdGxIqPWIW8eSw%3D"
                                    alt="userimage"
                                    fallback="https://fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png"
                                />
                            </Menu>
                        </>
                    ) : (
                        <>
                            <Button
                                type="outline"
                                leftIcon={<FontAwesomeIcon icon={faPlus} />}
                                tClr="t-text"
                                brdClr="brd-gray"
                                hClr="h-gray"
                            >
                                Upload
                            </Button>
                            <Button type="primary">Log In</Button>

                            <Menu items={MENU_ITEMS} onChange={handleMenuChange} offset={[16, 3]}>
                                <button className={cx('more-btn')}>
                                    <FontAwesomeIcon icon={faEllipsisVertical} />
                                </button>
                            </Menu>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Header;
