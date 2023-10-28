import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { createGlobalStyle } from 'styled-components';
const Global = createGlobalStyle`
* {
       margin:0;
       padding:0;
       box-sizing:border-box;
       }`;

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Global />
    <App />
  </>
);
