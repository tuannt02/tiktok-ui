import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Image from '~/components/Image';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <Image
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/557695794d1cb0b4a32322da33aac45d~c5_300x300.webp?x-expires=1661385600&x-signature=bgGfVdUdeXWfn0ELF4Ex8dEFDR0%3D"
                alt="lebong95"
            />
            <div className={cx('info')}>
                <h4 className={cx('username')}>
                    <span>lebong95</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <p className={cx('name')}>Lê Thị Khánh Huyền</p>
            </div>
        </div>
    );
}

export default AccountItem;
