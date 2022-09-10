import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import AccountItem from './AccountItem';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function SuggestedAccounts({ lable, textMoreBtn, type }) {
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        const url =
            type === 'SuggestAccounts'
                ? 'https://tiktok.fullstack.edu.vn/api/users/search?q=c&type=less'
                : 'https://tiktok.fullstack.edu.vn/api/users/search?q=a&type=more';

        fetch(url)
            .then((res) => res.json())
            .then((res) => setSearchResult(res.data));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchResult]);

    return (
        <div className={cx('wrapper')}>
            <p className={cx('lable')}>{lable}</p>
            {searchResult.map((data) => (
                <AccountItem key={data.id} data={data} />
            ))}
            <p className={cx('more-btn')}>{textMoreBtn}</p>
        </div>
    );
}

SuggestedAccounts.propTypes = {
    lable: PropTypes.string.isRequired,
    textMoreBtn: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
};

export default SuggestedAccounts;
