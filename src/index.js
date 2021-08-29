import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Repairs } from './components/Repairs';
import { CustomerList } from './components/customers/CustomerList';
import { EmployeeList } from './components/employees/EmployeeList';

ReactDOM.render(
  <React.StrictMode>
    <Repairs /> 
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();




