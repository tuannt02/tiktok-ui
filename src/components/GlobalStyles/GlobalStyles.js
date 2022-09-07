import PropTypes from 'prop-types';
import './GlobalStyles.scss';

function GlobalStyles({ children }) {
    return children;
}

GlobalStyles.propTypes = {
    // React.Children.only(children);
    children: PropTypes.node.isRequired,
};

export default GlobalStyles;
