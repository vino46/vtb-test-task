import React, { FC } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import css from './Input.module.scss';
import { Props } from './props';

import { Typography } from '..';

const Input: FC<Props> = ({
    type, name, id, label, className, ...rest
}) => {
    const htmlId = id || `ui-input__${name}`;
    const inputProps = {
        name,
        type,
        className: css.input,
        id: htmlId,
        ...rest,
    };

    return (
        <label htmlFor={htmlId} className={cx(css['input-wrap'], className)}>
            <Typography variant="p" className={css.text}>{label}</Typography>
            <input {...inputProps} />
        </label>
    );
};

Input.propTypes = {
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    id: PropTypes.string,
    className: PropTypes.string,
};

Input.defaultProps = {
    id: undefined,
    className: '',
};

export default Input;
