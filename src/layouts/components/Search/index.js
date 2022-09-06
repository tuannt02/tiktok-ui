import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';

import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TippyHeadless from '@tippyjs/react/headless';

import * as searchServices from '~/services/searchService';
import { useDebounce } from '~/hooks';
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

    const valueDebounce = useDebounce(searchText, 500);

    const input = useRef();

    useEffect(() => {
        if (!valueDebounce.trim()) {
            setSearchResult([]);
            return;
        }

        const fetchAPI = async () => {
            setIsProcessingAPI(true);

            const result = await searchServices.search(valueDebounce);
            setSearchResult(result);

            setIsProcessingAPI(false);
        };

        fetchAPI();
    }, [valueDebounce]);

    const handleClear = () => {
        setSearchText('');
        setSearchResult([]);
        input.current.focus();
    };

    const handleTypeInput = (e) => {
        const searchValue = e.target.value;

        if (searchValue.startsWith(' ')) return;
        setSearchText(searchValue);
    };

    const handleMouseDownSubmitBtn = (e) => {
        e.preventDefault();
    };

    const handleHideResult = () => {
        setIsShowResult(false);
    };

    return (
        // Using a wrapper <div> or <span> tag around the reference element solves
        // this by creating a new parentNode context.
        <div>
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
                        onChange={handleTypeInput}
                        onFocus={() => setIsShowResult(true)}
                    />
                    {!!searchText && !isProcessingAPI && (
                        <button className={cx('clear')} onClick={handleClear}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}
                    {isProcessingAPI && <Icon className={cx('loading')} icon="loading" />}

                    <button className={cx('search-btn')} onMouseDown={handleMouseDownSubmitBtn}>
                        <Icon icon="search" />
                    </button>
                </div>
            </TippyHeadless>
        </div>
    );
}

export default Search;
