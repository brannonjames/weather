import DateService from "./DateService";

describe('DateService methods', () => {

  it('returns a AM or PM hour based on a string format', () => {
    const testStr1 = '2022-02-02 11:11';
    const result1 = DateService.convertDateStringtoAMPM(testStr1);
    expect(result1).toEqual('11AM');

    const testStr2 = '2022-02-02 23:00';
    const result2 = DateService.convertDateStringtoAMPM(testStr2);
    expect(result2).toEqual('11PM');

  });

});