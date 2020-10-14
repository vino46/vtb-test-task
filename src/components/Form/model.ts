import * as yup from 'yup';

import { CustomFormValues, FormField } from './types';

const getValidator = (name: FormField['name']) => {
    switch (name) {
        case 'city':
        case 'street': {
            return yup.string();
        }
        case 'house':
        case 'flat': {
            return yup.number().positive().integer();
        }
        default: {
            return yup.string();
        }
    }
};

const getExpandedFieldsYupShape = (fields: FormField[]): Record<string, ReturnType<typeof getValidator>> =>
    fields.reduce((acc, { name }) => ({
        ...acc,
        [name]: getValidator(name),
    }), {});

export const addressField: FormField = {
    label: 'Address',
    name: 'address',
    type: 'text',
};

export const expandFormFields: FormField[] = [
    {
        label: 'City',
        name: 'city',
        type: 'text',
    },
    {
        label: 'Street',
        name: 'street',
        type: 'text',
    },
    {
        label: 'House',
        name: 'house',
        type: 'number',
    },
    {
        label: 'Flat',
        name: 'flat',
        type: 'number',
    },
];

export const formInitialValues: CustomFormValues = {
    address: '',
    city: '',
    street: '',
    house: '',
    flat: '',
};

export const addressSchema = yup.string().required();

export const formSchema = yup.object().shape({
    address: addressSchema,
    ...getExpandedFieldsYupShape(expandFormFields),
});
