import { lookup } from "@app/index";

describe('lookup function', () => {
  it('should return correct details for a valid pincode', () => {
    const result = lookup(682028);
    expect(result).toEqual([
      {
        officeName: 'Vennala S.O',
        pincode: 682028,
        taluk: 'Ernakulam',
        districtName: 'Ernakulam',
        stateName: 'KERALA',
      },
    ]);
  });

  it('should return correct details for a valid pincode as a string', () => {
    const result = lookup('682028');
    expect(result).toEqual([
      {
        officeName: 'Vennala S.O',
        pincode: 682028,
        taluk: 'Ernakulam',
        districtName: 'Ernakulam',
        stateName: 'KERALA',
      },
    ]);
  });

  it('should return correct details for a valid office name', () => {
    const result = lookup('Vennala S.O');
    expect(result).toEqual([
      {
        officeName: 'Vennala S.O',
        pincode: 682028,
        taluk: 'Ernakulam',
        districtName: 'Ernakulam',
        stateName: 'KERALA',
      },
    ]);
  });

  it('should return an empty array for an invalid pincode', () => {
    const result = lookup(123456);
    expect(result).toEqual([]);
  });

  it('should return an empty array for an invalid office name', () => {
    const result = lookup('Invalid Office Name');
    expect(result).toEqual([]);
  });

  it('should be case-insensitive for office names', () => {
    const result = lookup('vennala s.o');
    expect(result).toEqual([
      {
        officeName: 'Vennala S.O',
        pincode: 682028,
        taluk: 'Ernakulam',
        districtName: 'Ernakulam',
        stateName: 'KERALA',
      },
    ]);
  });

  it('should match partial office names', () => {
    const result = lookup('Vennala');
    expect(result).toEqual(
      expect.arrayContaining([
        {
          officeName: 'Vennala S.O',
          pincode: 682028,
          taluk: 'Ernakulam',
          districtName: 'Ernakulam',
          stateName: 'KERALA',
        },
      ]),
    );
  });

  it('should handle numeric strings correctly', () => {
    const result = lookup('411057');
    expect(result).toEqual(
      expect.arrayContaining([
        {
          officeName: 'Infotech  Park (Hinjawadi) S.O',
          pincode: 411057,
          taluk: 'Haveli',
          districtName: 'Pune',
          stateName: 'MAHARASHTRA',
        },
        {
          officeName: 'Wakad B.O',
          pincode: 411057,
          taluk: 'Pune City',
          districtName: 'Pune',
          stateName: 'MAHARASHTRA',
        },
        {
          officeName: 'Marunji B.O',
          pincode: 411057,
          taluk: 'Mulashi',
          districtName: 'Pune',
          stateName: 'MAHARASHTRA',
        },
      ]),
    );
  });

  it('should return multiple matches for a generic query', () => {
    const result = lookup('S.O');
    expect(result.length).toBeGreaterThan(1);
    expect(result.some((entry) => entry.officeName.includes('S.O'))).toBe(true);
  });

  it('should return an empty array when given an empty string', () => {
    const result = lookup('');
    expect(result).toEqual([]);
  });

  it('should return an empty array when given an empty numeric value', () => {
    const result = lookup(0);
    expect(result).toEqual([]);
  });

  it('should return an empty array for null input', () => {
    const result = lookup(null as unknown as string);
    expect(result).toEqual([]);
  });

  it('should return an empty array for undefined input', () => {
    const result = lookup(undefined as unknown as string);
    expect(result).toEqual([]);
  });

  it('should return an empty array for non-string/number input', () => {
    const result = lookup({} as unknown as string);
    expect(result).toEqual([]);
  });
});
