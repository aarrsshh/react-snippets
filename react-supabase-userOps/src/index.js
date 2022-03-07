import React from 'react';
import ReactDOM from 'react-dom';
import { AuthProvider } from './contexts/Auth';
import Routes from './routes';
import './index.css';

ReactDOM.render(
  <AuthProvider>
    <Routes />
  </AuthProvider>,
  document.getElementById('root')
);
