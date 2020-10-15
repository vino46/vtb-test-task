import { Reducer, Action } from 'redux';
import { ActionTypes } from './action-types';

type AddressData = {
    city: string;
    street: string;
    house: string;
    flat: string;
};

export interface InitialState {
    address: string;
    addressData: AddressData;
}

interface SetAddressAction extends Action {
    type: ActionTypes.SetAddress;
    payload: {
        address: InitialState['address']
    };
}

interface SetAddressDataAction extends Action {
    type: ActionTypes.SetAddressData;
    payload: {
        addressData: InitialState['addressData'];
    }
}

export type RootAction = SetAddressAction | SetAddressDataAction;

export type RootReducer = Reducer<InitialState, RootAction>;
