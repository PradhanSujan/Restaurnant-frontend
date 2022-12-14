import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
//createRoot() controls the contents of the container node you pass.
//createRoot(domNode, options?) 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App/>
  </>
  );
