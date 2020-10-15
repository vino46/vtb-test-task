import React, {
    Dispatch, FC, useEffect, useState,
} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useFormik } from 'formik';

import css from './Form.module.scss';
import {
    addressField, formSchema, expandFormFields,
} from './model';
import { checkChanged, composeValues, log } from './utils';
import { stateFormValuesSelector } from './selectors';

import { Button, Input } from '../UI';
import ExpandButton from './ExpandButton/ExpandButton';
import ExpandFields from './ExpandFields/ExpandFields';

import { setAddress, setAddressData } from '../../store/root/actions';
import { RootAction } from '../../store/root/types';

const CustomForm: FC = () => {
    const dispatch = useDispatch<Dispatch<RootAction>>();
    const stateFormValues = useSelector(stateFormValuesSelector);
    const [expanded, setExpanded] = useState(false);
    const [actualFormValues, setActualFormValues] = useState(stateFormValues);
    const formik = useFormik({
        initialValues: stateFormValues,
        validationSchema: formSchema,
        onSubmit: ({ address, ...addressData }, actions) => {
            dispatch(setAddress(address));
            dispatch(setAddressData(addressData));
            log(address, addressData);
            actions.setSubmitting(false);
        },
        validateOnMount: true,
    });

    useEffect(() => {
        const { values, setValues } = formik;
        if (checkChanged(actualFormValues, values)) {
            const newValues = composeValues(actualFormValues, formik.values);
            setValues(() => newValues, true);
            setActualFormValues(newValues);
        }
    }, [actualFormValues, formik]);

    return (
        <form className={css['form-wrap']} onSubmit={formik.handleSubmit}>
            <Input
                {...addressField}
                placeholder="Your address"
                value={actualFormValues.address}
                disabled={expanded}
                readOnly={expanded}
                onChange={({ target: { value } }) => setActualFormValues({ ...actualFormValues, address: value })}
            />
            {expanded ? (
                <ExpandFields
                    onExpandClick={setExpanded}
                    fields={expandFormFields}
                    values={actualFormValues}
                    onFieldValueChange={(patch) => setActualFormValues({ ...actualFormValues, ...patch })}
                />
            ) : (
                <ExpandButton
                    className={css['expand-button']}
                    onClick={setExpanded}
                >
                    Fill address parts
                </ExpandButton>
            )}
            <Button type="submit" disabled={!formik.isValid}>Send</Button>
        </form>
    );
};

export default CustomForm;
