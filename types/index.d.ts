export interface PincodeDetail {
  officeName: string;
  pincode: number;
  taluk: string;
  districtName: string;
  stateName: string;
}

export function lookup(pincode: string | number): PincodeDetail[];
