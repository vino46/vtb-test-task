import React, { FC } from 'react';
import PropTypes from 'prop-types';

import css from './Button.module.scss';
import { Props } from './props';

const Button: FC<Props> = ({
    children, onClick, disabled, ...rest
}) => {
    const handleClick = (ev: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        if (!disabled && typeof onClick === 'function') {
            onClick(ev);
        }
    };

    return (
        // because we already defined type as ButtonHTMLAttributes<HTMLButtonElement>['type'] in Props we can do next
        // eslint-disable-next-line react/button-has-type
        <button className={css.button} onClick={handleClick} disabled={disabled} {...rest}>
            {children}
        </button>
    );
};

Button.propTypes = {
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
};

Button.defaultProps = {
    disabled: undefined,
    onClick: undefined,
};

export default Button;
