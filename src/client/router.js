import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Counter from './component/Counter'

export default () => (
  <BrowserRouter>
    <Route path="/" component={Counter} />
  </BrowserRouter>
);