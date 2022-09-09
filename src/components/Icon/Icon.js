import ICONS from './constant';

function Icon({
    icon = 'message',
    size = ICONS[icon].sizeDefault || '24',
    type: _type = 'regular',
    className,
}) {
    const PathIcon =
        _type === 'solid'
            ? ICONS[icon].type[_type]
            : ICONS[icon].type['regular'];

    return (
        <svg
            className={className}
            width={size}
            height={size}
            viewBox={ICONS[icon].viewBox[_type]}
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
        >
            {PathIcon}
        </svg>
    );
}

export default Icon;
