// @flow
import React from 'react';
import { render } from 'react-dom';
import Routes from './router';

const app = document.getElementById('app');

if (app !== null) {
  render(<Routes />, app);
}