import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
// import { api } from "./saesam/api"; api받으면 여기에 이렇게 임포트하고
import { ApiProvider } from "@reduxjs/toolkit/query/react";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <ApiProvider api={api}> */}
    <App />
    {/* </ApiProvider> */}
  </React.StrictMode>
);

