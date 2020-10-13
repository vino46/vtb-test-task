import React, { FC } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import css from './ExpandFields.module.scss';
import { Props } from './props';

import { FormField } from '../model';

import { Input } from '../../UI';
import ExpandButton from '../ExpandButton/ExpandButton';

const ExpandFields: FC<Props> = ({ onExpandClick, fields }) => {
    console.log();

    return (
        <div className={css.wrap}>
            <ExpandButton onClick={onExpandClick} expanded fullWidth>Address:</ExpandButton>
            <div className={css.fields}>
                {fields.map(({ name, ...rest }, index, array) => (
                    <Input
                        key={name}
                        name={name}
                        className={cx(css['input-wrap'], index >= array.length - 2 && css.shrink)}
                        {...rest}
                    />
                ))}
            </div>
        </div>
    );
};

ExpandFields.propTypes = {
    onExpandClick: PropTypes.func.isRequired,
    fields: PropTypes.arrayOf<FormField>(PropTypes.exact({
        label: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        type: PropTypes.oneOf<FormField['type']>(['text', 'number']).isRequired,
    }).isRequired).isRequired,
};

export default ExpandFields;
