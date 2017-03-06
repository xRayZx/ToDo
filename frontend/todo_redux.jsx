import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store.js';

window.store = configureStore();

const App = React.createClass({
	render () {
		return (
			<div>
				Hello from React
			</div>
		)
	}
});

document.addEventListener('DOMContentLoaded', () => {
	const root = document.getElementById('root');
	ReactDOM.render(<App/>, root);
});
