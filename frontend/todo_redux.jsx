import React from 'react';
import ReactDOM from 'react-dom';

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
