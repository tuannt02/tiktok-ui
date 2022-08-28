import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCoins,
    faGear,
    faArrowRightFromBracket,
    faCircleXmark,
    faSpinner,
    faMagnifyingGlass,
    faPlus,
    faEllipsisVertical,
    faEarthAsia,
} from '@fortawesome/free-solid-svg-icons';
import { faUser, faKeyboard, faCircleQuestion } from '@fortawesome/free-regular-svg-icons';
import classNames from 'classnames/bind';
import TippyHeadless from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import Menu from '~/components/Popper/Menu';
import Button from '~/components/Button';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Header.module.scss';
import images from '~/assets/images';
import AccountItem from '~/components/AccountItem';

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
    const [searchResult, setSearchResult] = useState([]);
    const currentUser = true;

    // Handle logic here
    const handleMenuChange = (menuItem) => {
        console.log(menuItem);
    };

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    }, []);

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img src={images.logo} alt="Tiktok" />
                <TippyHeadless
                    interactive
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div className={cx('search-results')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>Accounts</h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input className={cx('input')} placeholder="Search accounts and videos" spellCheck={false} />
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </TippyHeadless>

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
                                    <img src={images.message_regular} alt="message btn" />
                                </button>
                            </Tippy>
                            <Tippy content="Inbox" offset={[0, 6]}>
                                <button className={cx('action_btn', 'inbox_btn')}>
                                    <img src={images.inbox_regular} alt="inbox btn" />
                                </button>
                            </Tippy>
                            <Menu items={USER_MENU_ITEMS} onChange={handleMenuChange} offset={[13, 12]}>
                                <img
                                    className={cx('user_btn')}
                                    src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/09be93014681f7361b2d266025e4c201.jpeg?x-expires=1661763600&x-signature=Kn2PIRgxFP6eUKdGxIqPWIW8eSw%3D"
                                    alt="userimage"
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
