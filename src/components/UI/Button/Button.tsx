import React, { FC } from 'react';

import css from './Button.module.scss';
import { Props } from './props';

const Button: FC<Props> = ({ children, ...rest }) => (
    // because we already defined type as ButtonHTMLAttributes<HTMLButtonElement>['type'] in Props we can do next
    // eslint-disable-next-line react/button-has-type
    <button className={css.button} {...rest}>
        {children}
    </button>
);

export default Button;
