import React, { FC } from 'react';
import {
    useField, Form, FormikProps, Formik,
} from 'formik';
import PropTypes from 'prop-types';

import { Button, Input } from '../UI';

interface Values {
    firstName: string;
    lastName: string;
    email: string;
}

interface MyTextFieldProps {
    label: string;
    name: string;
    type: 'text' | 'email';
    id?: string;
    placeholder?: string;
}

const MyTextField: FC<MyTextFieldProps> = (props) => {
    console.log('props: ', props);
    const [field, meta, helpers] = useField(props);
    console.log('field: ', field);
    console.log('meta: ', meta);
    console.log('helpers: ', helpers);

    return <Input {...props} {...field} />;

    // return (
    //     <Input>
    //         <label htmlFor={htmlId}>
    //             {label}
    //             <input id={htmlId} {...field} {...props} />
    //         </label>
    //         {meta.touched && meta.error ? <div className="error">{meta.error}</div> : null}
    //     </Input>
    // );
};

MyTextField.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.oneOf<MyTextFieldProps['type']>(['email', 'text']).isRequired,
    id: PropTypes.string,
    placeholder: PropTypes.string,
};

MyTextField.defaultProps = {
    id: undefined,
    placeholder: undefined,
};

const CustomForm: FC = () => (
    <div>
        <h1>My Form</h1>
        <Formik
            initialValues={{
                email: '',
                firstName: 'red',
                lastName: '',
            }}
            onSubmit={(values, actions) => {
                console.log('values: ', values);
                console.log('actions: ', actions);
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    actions.setSubmitting(false);
                }, 1000);
            }}
        >
            {(props: FormikProps<Values>) => (
                <Form>
                    <MyTextField name="firstName" type="text" label="First Name" placeholder="Test placeholder" />
                    <MyTextField name="lastName" type="text" label="Last Name" />
                    <MyTextField name="email" type="email" label="Email" />
                    <Button type="submit" disabled={!props.isValid}>Send</Button>
                </Form>
            )}
        </Formik>
    </div>
);

export default CustomForm;
