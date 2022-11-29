import 'antd/dist/antd.css';
import React from 'react';
import {render} from 'react-dom';
import Page from './page';
import { BrowserRouter } from 'react-router-dom';
render(
  <React.StrictMode>
  <BrowserRouter>
    <Page />
  </BrowserRouter>
</React.StrictMode>,
 document.getElementById('root')
)
