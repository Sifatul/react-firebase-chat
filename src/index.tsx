import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ClientView from './FirebaseModule/client';

ReactDOM.render(
  <React.StrictMode>
   <>
   <ClientView/>
   </>
  </React.StrictMode>,
  document.getElementById('root')
);