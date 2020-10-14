import { CustomFormValues, ExpandedFormValues } from './types';

const getExpandedValues = (address: string): ExpandedFormValues => {
    const [city, street, house, flat] = address.trim().split(', ');
    return {
        city,
        street,
        house,
        flat,
    };
};

const getAddressValue = (expandedValues: ExpandedFormValues): string => {
    const {
        city, street, house, flat,
    } = expandedValues;
    return `${city}, ${street}, ${house}, ${flat}`;
};

export const composeValues = (newValues: CustomFormValues, prevValues: CustomFormValues): CustomFormValues => {
    const { address, ...expandedValues } = newValues;

    if (newValues.address === prevValues.address) {
        return {
            address: getAddressValue(expandedValues),
            ...expandedValues,
        };
    }

    return {
        address,
        ...getExpandedValues(address),
    };
};

export const checkChanged = <T extends Record<string, string>>(newObj: T, prevObj: T): boolean =>
    Object.entries(newObj).some(([key, value]) => key in prevObj && prevObj[key] !== value);
