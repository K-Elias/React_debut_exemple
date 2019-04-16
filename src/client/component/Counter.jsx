// @flow
import React, { useState } from 'react';
import type { Node } from 'react';

export default (): Node => {
	const [count, setCount] = useState(0);

	const makeIncrementer = (amount: number): void => setCount(count + amount);

	return (
		<div>
			<p>Current count : {count}</p>
			<button className="increment" onClick={() => makeIncrementer(1)}>
				Increment count
			</button>
			<button className="decrement" onClick={() => makeIncrementer(-1)}>
				Decrement count
			</button>
		</div>
	);
};
