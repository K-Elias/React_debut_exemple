// @flow
import React, { Node } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Counter from './component/Counter';

const Router = (): Node => (
	<BrowserRouter>
		<Route path="/" component={Counter} />
	</BrowserRouter>
);

render(<Router />, document.getElementById('app'));
