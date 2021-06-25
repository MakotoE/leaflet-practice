import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'

function App(): React.ReactElement {
	return <MapContainer center={[47.5843038,-122.1516135]} zoom={14} style={{height: '600px', width: '600px'}}>
		<TileLayer
			attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
			url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			detectRetina ={true}
		/>
		<Marker position={[47.5843038,-122.1516135]}>
			<Popup>
				A pretty CSS3 popup. <br /> Easily customizable.
			</Popup>
		</Marker>
	</MapContainer>;
}

ReactDOM.render(
	<App />,
	document.getElementById('root'),
)
