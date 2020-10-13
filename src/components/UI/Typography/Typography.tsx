import React, { FC } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { Props } from './props';

import css from './Typography.module.scss';

const Typography: FC<Props> = ({
    variant, className, children, ...rest
}) => {
    const Component = variant;

    return (
        <Component className={cx(css.typography, className)} {...rest}>
            {children}
        </Component>
    );
};

Typography.propTypes = {
    variant: PropTypes.oneOf<Props['variant']>(['div', 'h1', 'h2', 'h3', 'p', 'span']).isRequired,
    className: PropTypes.string,
};

Typography.defaultProps = {
    className: '',
};

export default Typography;
