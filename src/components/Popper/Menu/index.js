import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { useState } from 'react';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';
import Header from './Header';

const cx = classNames.bind(styles);
const defaultFn = () => {};

function Menu({ offset = [0, 0], className, children, items = [], onChange = defaultFn }) {
    const [history, setHistory] = useState([{ data: items }]);
    const currentState = history[history.length - 1];

    const renderItem = () => {
        return currentState.data.map((item, index) => {
            const isParent = !!item.children;

            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };

    return (
        <Tippy
            interactive
            delay={[0, 700]}
            offset={offset}
            placement="bottom-end"
            hideOnClick={false}
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-popper', { unpd: history.length > 1 })}>
                        {history.length > 1 && (
                            <Header
                                title={currentState.title}
                                onBack={() => {
                                    const comeBackPrevState = [...history];
                                    comeBackPrevState.pop();
                                    setHistory(comeBackPrevState);
                                }}
                            />
                        )}
                        <div className={cx('menu-body')}>{renderItem()}</div>
                    </PopperWrapper>
                </div>
            )}
            onHide={() => {
                setHistory((prev) => [prev[0]]);
            }}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
