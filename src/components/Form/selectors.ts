import { createSelector } from 'reselect';
import { InitialState } from '../../store/root/types';
import { CustomFormValues } from './types';

export const stateFormValuesSelector = createSelector<InitialState, Pick<InitialState, 'address' | 'addressData'>, CustomFormValues>(
    ({ address, addressData }) => ({
        address,
        addressData,
    }),
    ({ address, addressData }) => ({
        address,
        ...addressData,
    }),
);
