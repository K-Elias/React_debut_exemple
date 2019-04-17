// @flow
import React from 'react';
import type { Node } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Counter from './component/Counter';

export default (): Node => (
	<BrowserRouter>
		<Route path="/" component={Counter} />
	</BrowserRouter>
);
