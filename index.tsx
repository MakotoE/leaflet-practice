import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {MapContainer, TileLayer, Polyline} from 'react-leaflet';
import * as route from './route.json';
import './style.css';

function App(): React.ReactElement {
	return <>
		<h1>My favorite run</h1>
		<MapContainer center={[48.1240730, -123.24]} zoom={13} style={{height: '400px', width: '600px'}}>
			<TileLayer
				attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				detectRetina ={true}
			/>
			<Polyline pathOptions={{color: '#3f4cf8'}} positions={route} />
		</MapContainer>
	</>;
}

ReactDOM.render(
	<App />,
	document.getElementById('root'),
)
