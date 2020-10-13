import { HTMLAttributes } from 'react';

export interface Props extends HTMLAttributes<HTMLElement> {
    variant: 'h1' | 'h2' | 'h3' | 'p' | 'span' | 'div';
}
