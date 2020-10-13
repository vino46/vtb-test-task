import React, { FC, useState } from 'react';
import {
    Form, FormikProps, Formik,
} from 'formik';

import css from './Form.module.scss';
import { formFields } from './model';

import { Button, Input } from '../UI';
import ExpandButton from './ExpandButton/ExpandButton';
import ExpandFields from './ExpandFields/ExpandFields';

interface Values {
    address: string;
    city: string;
    street: string;
    house: string;
    flat: string;
}

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
            onSubmit={(values, actions) => {
                console.log('values: ', values);
                console.log('actions: ', actions);
                alert(JSON.stringify(values, null, 2));
                actions.setSubmitting(false);
            }}
        >
            {(props: FormikProps<Values>) => (
                <Form className={css['form-wrap']}>
                    <Input
                        type="text"
                        name="address"
                        label="Address"
                        placeholder="Your address"
                    />
                    {expanded
                        ? <ExpandFields onExpandClick={setExpanded} fields={formFields} />
                        : <ExpandButton className={css['expand-button']} onClick={setExpanded}>Fill address parts</ExpandButton>}
                    <Button type="submit" disabled={!props.isValid}>Send</Button>
                </Form>
            )}
        </Formik>
    );
};

export default CustomForm;
