import { Props as ExpandButtonProps } from '../ExpandButton/props';
import { FormField } from '../model';

export interface Props {
    onExpandClick: ExpandButtonProps['onClick'];
    fields: FormField[];
}
