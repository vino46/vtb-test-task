import { ActionTypes } from './action-types';
import { InitialState, RootReducer } from './types';

export const initialState: InitialState = {
    address: '',
    addressData: {
        city: '',
        street: '',
        house: '',
        flat: '',
    },
};

export const rootReducer: RootReducer = (reducerState, { type, payload }) => {
    const state = reducerState || initialState;

    switch (type) {
        case ActionTypes.SetAddress: {
            // bad stuff. idk how to handle this
            const { address } = payload as { address: InitialState['address'] };
            return { ...state, address };
        }
        case ActionTypes.SetAddressData: {
            // bad stuff. idk how to handle this
            const { addressData } = payload as { addressData: InitialState['addressData'] };
            return { ...state, addressData };
        }
        default: {
            return state;
        }
    }
};
