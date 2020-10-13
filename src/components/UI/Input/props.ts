import { InputHTMLAttributes } from 'react';

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    name: string;
    id?: string;
}
