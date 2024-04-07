import { isStringContainingObject } from './utils';

describe('utisl.isStringContainingObject', () => {
  it('should return true if string value has object type', () => {
    expect(isStringContainingObject('{testing: "object"}')).toBeTruthy();
  });
  it('should return false if strign value has not object type', () => {
    expect(isStringContainingObject('testing')).toBeFalsy();
  });
});
