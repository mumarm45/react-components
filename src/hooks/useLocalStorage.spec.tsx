import { renderHook } from '@testing-library/react';
import { useLocalStorage } from './useLocalStorage';

describe('useLocalStorage', () => {
  it('should return the default value if localstorage is not defined', async () => {
    const { result } = renderHook(() => useLocalStorage({ key: 'testing', defaultValue: 'defaultValue' }));
    const { value } = result.current;

    expect(value).toBe('defaultValue');
  });
});
describe('useLocalStorage', () => {
  beforeEach(() => {
    localStorage.setItem('testing', 'dark');
  });
  it('should return the value from localstorage', async () => {
    const { result } = renderHook(() => useLocalStorage({ key: 'testing', defaultValue: 'defaultValue' }));
    const { value } = result.current;

    expect(value).toBe('dark');
  });

  it('should update the localstorage value', async () => {
    const { result } = renderHook(() => useLocalStorage({ key: 'testing', defaultValue: 'defaultValue' }));
    const { value, updateLocalStorage } = result.current;
    expect(value).toBe('dark');
    updateLocalStorage('theme', 'light');
    expect(localStorage.getItem('theme')).toBe('light');
  });
});
