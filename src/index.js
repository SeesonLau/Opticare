import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/styles/index.css'

// import App from './page/landing-page';
//ako gi change ang Landing Page for testing
import App from './page/users/clinic/ClinicHomePage';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
