import React, { FC } from 'react';
import PropTypes from 'prop-types';

import { Props } from './props';

import { Typography } from '..';

import css from './Input.module.scss';

const Input: FC<Props> = ({
    type, name, id, label, ...rest
}) => {
    const htmlId = id || `ui-input__${name}`;

    return (
        <label htmlFor={htmlId} className={css['input-wrap']}>
            <Typography variant="p" className={css.text}>{label}</Typography>
            <input className={css.input} name={name} id={htmlId} type={type} {...rest} />
        </label>
    );
};

Input.propTypes = {
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    id: PropTypes.string,
};

Input.defaultProps = {
    id: undefined,
};

export default Input;
