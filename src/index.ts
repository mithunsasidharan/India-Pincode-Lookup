import { PincodeDetail } from 'types';
import pincodeData from './data/pincodes.json';

function isNumeric(value: string | number): boolean {
  if (typeof value === 'string') {
    return !isNaN(Number(value.trim()));
  }
  if (typeof value === 'number') {
    return !isNaN(value);
  }
  return false;
}

const typedPincodeData: PincodeDetail[] = pincodeData as PincodeDetail[];

/**
 * Lookup pincode or office name details from the dataset.
 * @param input - Pincode (number or string) or office name (string).
 * @returns Array of matching PincodeDetail objects.
 */
export function lookup(input: string | number): PincodeDetail[] {
  if (
    input === null ||
    input === undefined ||
    (typeof input !== 'string' && typeof input !== 'number')
  ) {
    return [];
  }

  if (isNumeric(input)) {
    const pincodeNumber =
      typeof input === 'string' ? parseInt(input, 10) : input;
    return typedPincodeData.filter(
      (entry: PincodeDetail) => entry.pincode === pincodeNumber,
    );
  } else {
    const regex = new RegExp(String(input), 'i');
    return typedPincodeData.filter((entry: PincodeDetail) =>
      regex.test(entry.officeName),
    );
  }
}
