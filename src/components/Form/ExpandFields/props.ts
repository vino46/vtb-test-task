import { Props as ExpandButtonProps } from '../ExpandButton/props';
import { CustomFormValues, FormField } from '../types';

export interface Props {
    onExpandClick: ExpandButtonProps['onClick'];
    onFieldValueChange: (changedField: Record<string, string>) => void;
    fields: FormField[];
    values: CustomFormValues;
}
