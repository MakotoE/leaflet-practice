import * as React from 'react';
import * as ReactDOM from 'react-dom';

function App(): React.ReactElement {
	return <p>Hello world!</p>
}

ReactDOM.render(
	<App />,
	document.getElementById('root'),
)
