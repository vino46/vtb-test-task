import React, { FC, useEffect, useState } from 'react';
import { useFormik } from 'formik';

import css from './Form.module.scss';
import {
    addressField, formSchema, expandFormFields, formInitialValues,
} from './model';
import { checkChanged, composeValues } from './utils';

import { Button, Input } from '../UI';
import ExpandButton from './ExpandButton/ExpandButton';
import ExpandFields from './ExpandFields/ExpandFields';

const CustomForm: FC = () => {
    const [expanded, setExpanded] = useState(true);
    const [actualFormValues, setActualFormValues] = useState(formInitialValues);
    const formik = useFormik({
        initialValues: formInitialValues,
        validationSchema: formSchema,
        onSubmit: (values, actions) => {
            console.log('values: ', values);
            console.log('actions: ', actions);
            console.log('submiting next: ', JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
        },
    });

    useEffect(() => {
        const { values, setValues } = formik;
        if (checkChanged(actualFormValues, values)) {
            const newValues = composeValues(actualFormValues, formik.values);
            setValues(() => newValues, true);
            setActualFormValues(newValues);
        }
    }, [actualFormValues, formik.setValues, formik.values]);

    return (
        <form className={css['form-wrap']} onSubmit={formik.handleSubmit}>
            <Input
                {...addressField}
                placeholder="Your address"
                value={actualFormValues.address}
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
