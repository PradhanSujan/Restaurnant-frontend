import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
//createRoot() controls the contents of the container node you pass.
//createRoot(domNode, options?) 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <Router>
    <App/>
    </Router>
  </>
  );
