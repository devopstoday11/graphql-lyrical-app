import { default as flattenMe } from './flatten.js';

describe('flatten js util method', () => {


  it('should flatten an array of arrays of size n', () => {
    const arr = [
        [
          [
          "a" , "b"
        ]
      ],
      "c"
    ]
    const expected = ["a", "b", "c"];
    expect(flattenMe(arr)).toEqual(expected);
  })

  it('should flatten an array with different compositions', () => {
    const arr = [
      [
          "a" , "b"
      ],
      ["c"]
    ]
    const expected = ["a", "b", "c"];
    expect(flattenMe(arr)).toEqual(expected);
  })
  it('should flatten an array [[a,b], [c,d]]', () => {
    const arr = [
      [
          "a" , "b"
      ],
      ["c", "d"]
    ]
    const expected = ["a", "b", "c", "d"];
    expect(flattenMe(arr)).toEqual(expected);
  })
})