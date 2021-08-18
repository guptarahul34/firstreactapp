import React from 'react';
import ReactDom from 'react-dom';
import App from './App';
import './index.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import {BrowserRouter} from 'react-router-dom';

ReactDom.render(
  <>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </>
  ,document.getElementById("root")
);