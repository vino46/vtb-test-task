import { ActionTypes } from './action-types';
import { InitialState, RootAction } from './types';

export const setAddress = (address: InitialState['address']): RootAction => ({
    type: ActionTypes.SetAddress,
    payload: {
        address,
    },
});

export const setAddressData = (addressData: InitialState['addressData']): RootAction => ({
    type: ActionTypes.SetAddressData,
    payload: {
        addressData,
    },
});
