// @flow
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Counter from '../Counter';

export default (): React.Node => (
  <BrowserRouter>
    <Route exact path="/" component={Counter} />
  </BrowserRouter>
);
