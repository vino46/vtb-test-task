import { Props as ExpandButtonProps } from '../ExpandButton/props';
import { FormField } from '../types';

export interface Props {
    onExpandClick: ExpandButtonProps['onClick'];
    fields: FormField[];
}
