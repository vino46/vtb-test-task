import React, { FC, useState } from 'react';
import {
    Form, FormikProps, Formik, Field, FieldProps,
} from 'formik';

import css from './Form.module.scss';
import {
    addressField, formSchema, expandFormFields,
} from './model';
import { CustomFormValues } from './types';

import { Button, Input } from '../UI';
import ExpandButton from './ExpandButton/ExpandButton';
import ExpandFields from './ExpandFields/ExpandFields';

const handleFormOnChange = (props: FormikProps<CustomFormValues>) => {
    console.log('onChange() ===> props: ', props);
};

const CustomForm: FC = () => {
    const [expanded, setExpanded] = useState(true);

    return (
        <Formik
            initialValues={{
                address: '',
                city: '',
                street: '',
                house: '',
                flat: '',
            }}
            validationSchema={formSchema}
            onSubmit={(values, actions) => {
                console.log('values: ', values);
                console.log('actions: ', actions);
                console.log('submiting next: ', JSON.stringify(values, null, 2));
                actions.setSubmitting(false);
            }}
        >
            {(props: FormikProps<CustomFormValues>) => (
                <Form className={css['form-wrap']} onChange={() => handleFormOnChange(props)}>
                    <Field name="address">
                        {(fieldProps: FieldProps) => (
                            <Input
                                {...addressField}
                                placeholder="Your address"
                                onChange={fieldProps.field.onChange}
                            />
                        )}
                    </Field>
                    {expanded
                        ? <ExpandFields onExpandClick={setExpanded} fields={expandFormFields} />
                        : <ExpandButton className={css['expand-button']} onClick={setExpanded}>Fill address parts</ExpandButton>}
                    <Button type="submit" disabled={!props.isValid}>Send</Button>
                </Form>
            )}
        </Formik>
    );
};

export default CustomForm;
