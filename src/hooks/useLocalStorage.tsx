import { useCallback, useState } from 'react';
import { isStringContainingObject } from '../utils/utils';

export const useLocalStorage = ({ key, defaultValue = '' }: LocalStorageProps): LocalStorageResponse => {
  const getValue = (_key: string) => {
    let currentValue = defaultValue;
    try {
      const _value = localStorage.getItem(_key) || defaultValue;
      currentValue = isStringContainingObject(_value) ? JSON.parse(_value) : _value;
    } catch (error) {
      currentValue = defaultValue;
    }
    return currentValue;
  };
  const [localStorageValue, setLocalStorageValue] = useState(() => getValue(key));

  const updateLocalStorage = useCallback(
    (_key: string, _value: unknown) => {
      const _valueString = typeof _value === 'string' ? _value : JSON.stringify(_value);
      window.localStorage.setItem(_key, _valueString);
      setLocalStorageValue(_valueString);
    },
    [setLocalStorageValue],
  );

  return { value: localStorageValue, updateLocalStorage };
};
type LocalStorageProps = {
  key: string;
  defaultValue: string;
};
type LocalStorageResponse = {
  value: string;
  updateLocalStorage: (_key: string, _value: string) => void;
};
