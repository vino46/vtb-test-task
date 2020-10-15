import { CustomFormValues, ExpandedFormValues } from './types';

export const getSplittedAddress = (address: string): string[] => address.split(', ');

const prefixMap = new Map([
    [2, 'h.'],
    [3, 'app.'],
]);

const getExpandedValues = (address: string): ExpandedFormValues => {
    const [city = '', street = '', house = '', flat = ''] = getSplittedAddress(address);

    return {
        city,
        street,
        house: house.replace(/h\.\s*/g, ''),
        flat: flat.replace(/app\.\s*/g, ''),
    };
};

const getAddressValue = (expandedValues: ExpandedFormValues): string => {
    const {
        city, street, house, flat,
    } = expandedValues;

    return [city, street, house, flat].reduce((acc, cv, index) => {
        const prefix = prefixMap.get(index) || '';
        if (cv.length > 0) {
            return `${acc}, ${prefix}${cv}`;
        }

        return acc;
    });
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
