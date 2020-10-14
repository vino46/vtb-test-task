export type FormField = {
    label: string;
    name: string;
    type: 'text' | 'number';
};

export type CustomFormValues = {
    address: string;
    city: string;
    street: string;
    house: string;
    flat: string;
}

export type ExpandedFormValues = Omit<CustomFormValues, 'address'>;
export type AddressFormValues = Pick<CustomFormValues, 'address'>;
