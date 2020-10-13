export type FormField = {
    label: string;
    name: string;
    type: 'text' | 'number';
};

export interface CustomFormValues {
    address: string;
    city: string;
    street: string;
    house: string;
    flat: string;
}
