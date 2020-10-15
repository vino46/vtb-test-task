import React, { FC } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import css from './ExpandFields.module.scss';
import { Props } from './props';

import { CustomFormValues, FormField } from '../types';

import ExpandButton from '../ExpandButton/ExpandButton';
import { Input } from '../../UI';

const formValues: CustomFormValues = {
    address: '',
    city: '',
    flat: '',
    house: '',
    street: '',
};
const validName = (name: string): name is keyof CustomFormValues => name in formValues;

const ExpandFields: FC<Props> = ({
    onExpandClick, onFieldValueChange, fields, values,
}) => (
    <div className={css.wrap}>
        <ExpandButton onClick={onExpandClick} expanded fullWidth>Address:</ExpandButton>
        <div className={css.fields}>
            {fields.map(({ name, ...rest }, index, array) => (
                <Input
                    name={name}
                    value={validName(name) ? values[name] : ''}
                    onChange={({ target: { value } }) => onFieldValueChange({ [name]: value })}
                    {...rest}
                    className={cx(css['input-wrap'], index >= array.length - 2 && css.shrink)}
                    key={name}
                />
            ))}
        </div>
    </div>
);

ExpandFields.propTypes = {
    onExpandClick: PropTypes.func.isRequired,
    onFieldValueChange: PropTypes.func.isRequired,
    fields: PropTypes.arrayOf<FormField>(PropTypes.exact({
        label: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        type: PropTypes.oneOf<FormField['type']>(['text', 'number']).isRequired,
    }).isRequired).isRequired,
    values: PropTypes.exact({
        address: PropTypes.string.isRequired,
        city: PropTypes.string.isRequired,
        street: PropTypes.string.isRequired,
        house: PropTypes.string.isRequired,
        flat: PropTypes.string.isRequired,
    }).isRequired,
};

export default ExpandFields;
