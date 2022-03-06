import React from 'react';
import ReactDOM from 'react-dom';
import { AuthProvider } from './contexts/Auth';
import Form from './components/Signup/Form';
import './index.css';

ReactDOM.render(
  <AuthProvider>
    <Form />
  </AuthProvider>,
  document.getElementById('root')
);
