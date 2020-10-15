import React, { FC, memo } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import css from './Typography.module.scss';
import { Props } from './props';

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

export default memo(Typography);
