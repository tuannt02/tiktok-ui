import { useEffect, useState, useRef } from 'react';
import classNames from 'classnames/bind';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import TippyHeadless from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import Icon from '~/components/Icon';
import styles from './Search.module.scss';

const cx = classNames.bind(styles);

function Search() {
    const [searchResult, setSearchResult] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [isShowResult, setIsShowResult] = useState(true);

    const input = useRef();

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1]);
        }, 0);
    }, []);

    const handleClear = () => {
        setSearchText('');
        setSearchResult([]);
        input.current.focus();
    };

    const handleHideResult = () => {
        setIsShowResult(false);
    };

    return (
        <TippyHeadless
            interactive
            visible={isShowResult && searchResult.length > 0}
            render={(attrs) => (
                <div className={cx('search-results')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('search-title')}>Accounts</h4>
                        <AccountItem />
                        <AccountItem />
                        <AccountItem />
                        <AccountItem />
                        <div className={cx('search-more')}>{`View all results for "${searchText}"`}</div>
                    </PopperWrapper>
                </div>
            )}
            onClickOutside={handleHideResult}
        >
            <div className={cx('search')}>
                <input
                    className={cx('input')}
                    placeholder="Search accounts and videos"
                    spellCheck={false}
                    ref={input}
                    value={searchText}
                    onChange={(e) => {
                        setSearchText(e.target.value);
                    }}
                    onFocus={() => setIsShowResult(true)}
                />
                {!!searchText && (
                    <button className={cx('clear')} onClick={handleClear}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}
                {/* <FontAwesomeIcon className={cx('loading')} icon={faSpinner} /> */}

                <button className={cx('search-btn')}>
                    <Icon icon="search" />
                </button>
            </div>
        </TippyHeadless>
    );
}

export default Search;
