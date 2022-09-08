import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { useState } from 'react';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';
import Header from './Header';

const cx = classNames.bind(styles);
const defaultFn = () => {};

function Menu({ offset = [0, 0], children, items = [], onChange = defaultFn }) {
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
                        // To submenu
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children]);
                        }
                        // Handle logic
                        else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };

    const handleBack = () => {
        const comeBackPrevState = [...history];
        comeBackPrevState.pop();
        setHistory(comeBackPrevState);
    };

    const renderResult = (attrs) => (
        <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
            <PopperWrapper
                className={cx('menu-popper', { unpd: history.length > 1 })}
            >
                {history.length > 1 && (
                    <Header title={currentState.title} onBack={handleBack} />
                )}
                <div className={cx('menu-body')}>{renderItem()}</div>
            </PopperWrapper>
        </div>
    );

    const handleReset = () => {
        setHistory((prev) => [prev[0]]);
    };

    return (
        <Tippy
            interactive
            delay={[0, 700]}
            offset={offset}
            placement="bottom-end"
            hideOnClick={false}
            render={renderResult}
            onHide={handleReset}
        >
            {children}
        </Tippy>
    );
}

Menu.propTypes = {
    offset: PropTypes.array.isRequired,
    children: PropTypes.node.isRequired,
    items: PropTypes.array,
    onChange: PropTypes.func,
};

export default Menu;
