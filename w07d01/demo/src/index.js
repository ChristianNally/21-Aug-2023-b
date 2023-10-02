import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

import App from './App'; // ties to the default export
// import App, {messsage, andSomethingElse} from './App';

// React.createElement('img', { alt: 'dog logo', src: '' });
// <img alt="dog logo" src="" />

const root = ReactDOM.createRoot(document.getElementById('my-app'));

root.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);

