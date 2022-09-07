import ICONS from './constant';

function Icon({ icon = 'message', size = ICONS[icon].sizeDefault || '24', type: _type = 'regular', className }) {
    return (
        <svg
            className={className}
            width={size}
            height={size}
            viewBox={ICONS[icon].viewBox[_type]}
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d={_type === 'solid' ? ICONS[icon].type[_type] : ICONS[icon].type['regular']}
            ></path>
        </svg>
    );
}

export default Icon;

// Some particular icon
export const MessageIcon = ({ size = '2.4rem', type = 'regular', className }) => (
    <svg
        className={className}
        width={size}
        height={size}
        viewBox="0 0 48 48"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d={
                type === 'solid'
                    ? 'M45.7321 7.00001C45.3748 6.3812 44.7146 6 44 6H4.00004C3.20826 6 2.49103 6.4671 2.17085 7.19125C1.85068 7.9154 1.98785 8.76026 2.52068 9.34592L12.9607 20.8209C13.5137 21.4288 14.3824 21.6365 15.1506 21.3445L29.65 15.8336C29.8188 15.7694 29.8953 15.796 29.9287 15.8092C29.9872 15.8325 30.0709 15.8928 30.1366 16.0041C30.2023 16.1154 30.2147 16.2179 30.2068 16.2802C30.2023 16.3159 30.1885 16.3958 30.0509 16.5125L18.1464 26.6098C17.5329 27.1301 17.2908 27.9674 17.5321 28.7348L22.0921 43.2398C22.33 43.9967 22.9928 44.5413 23.7815 44.628C24.5701 44.7147 25.3354 44.3271 25.7321 43.64L45.7321 9.00002C46.0894 8.38122 46.0894 7.61882 45.7321 7.00001Z'
                    : 'M2.17877 7.17357C2.50304 6.45894 3.21528 6 4.00003 6H44C44.713 6 45.372 6.37952 45.7299 6.99615C46.0877 7.61278 46.0902 8.37327 45.7365 8.99228L25.7365 43.9923C25.3423 44.6821 24.5772 45.0732 23.7872 44.9886C22.9972 44.9041 22.3321 44.3599 22.0929 43.6023L16.219 25.0017L2.49488 9.31701C1.97811 8.72642 1.85449 7.88819 2.17877 7.17357ZM20.377 24.8856L24.531 38.0397L40.5537 10H8.40757L18.3918 21.4106L30.1002 14.2054C30.5705 13.9159 31.1865 14.0626 31.4759 14.533L32.5241 16.2363C32.8136 16.7066 32.6669 17.3226 32.1966 17.612L20.377 24.8856Z'
            }
        ></path>
    </svg>
);
