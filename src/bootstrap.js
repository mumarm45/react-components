import './assets/style/style';
import * as React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App/app';

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
const initApplication = () => {
 try {
  renderApp();
 } catch (err) {
  console.error('Oops! Something went wrong.', err);
 }
};

initApplication();
function renderApp() {
 root.render(<App />);
}
