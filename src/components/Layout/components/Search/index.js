import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';

import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TippyHeadless from '@tippyjs/react/headless';

import AccountItem from '~/components/AccountItem';
import Icon from '~/components/Icon';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Search.module.scss';

const cx = classNames.bind(styles);

function Search() {
    const [searchResult, setSearchResult] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [isShowResult, setIsShowResult] = useState(true);
    const [isProcessingAPI, setIsProcessingAPI] = useState(false);

    const input = useRef();

    useEffect(() => {
        if (!searchText.trim()) {
            setSearchResult([]);
            return;
        }

        setIsProcessingAPI(true);

        fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(searchText)}&type=less`)
            .then((res) => res.json())
            .then((res) => {
                setSearchResult(res.data);
                setIsProcessingAPI(false);
            })
            .catch(() => {
                setIsProcessingAPI(false);
            });
    }, [searchText]);

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
                        {searchResult.map((data) => (
                            <AccountItem key={data.id} data={data} />
                        ))}
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
                {!!searchText && !isProcessingAPI && (
                    <button className={cx('clear')} onClick={handleClear}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}
                {isProcessingAPI && <Icon className={cx('loading')} icon="loading" />}

                <button className={cx('search-btn')}>
                    <Icon icon="search" />
                </button>
            </div>
        </TippyHeadless>
    );
}

export default Search;