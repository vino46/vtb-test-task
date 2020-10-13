export type FormField = {
    label: string;
    name: string;
    type: 'text' | 'number';
};

export const formFields: FormField[] = [
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
