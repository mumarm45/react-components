import '@babel/polyfill';
import LocalStorageMock from './src/__mocks__/mockLocalStorage';

global.localStorage = new LocalStorageMock();
