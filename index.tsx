import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {MapContainer, TileLayer, Polyline, Marker, Popup, Tooltip} from 'react-leaflet';
import * as route from './route.json';
import './style.css';

function App(): React.ReactElement {
	return <>
		<h1>My Favorite Run</h1>
		<MapContainer center={[48.1240730, -123.24]} zoom={13} style={{height: '400px', width: '600px'}}>
			<TileLayer
				attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				detectRetina ={true}
			/>
			<Polyline pathOptions={{color: '#3f4cf8'}} positions={route} />
		</MapContainer>

		<h1>Top 10 Trails and Parks</h1>
		<h2>Hover on marker to see name!</h2>
		<MapContainer center={[47.65, -122.1]} zoom={10} style={{height: '400px', width: '600px'}}>
			<TileLayer
				attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				detectRetina ={true}
			/>
			<Marker position={[47.662599, -122.125861]}>
				<Tooltip>Sammamish River Trail</Tooltip>
			</Marker>
			<Marker position={[47.736249, -122.142128]}>
				<Tooltip>Tolt Pipeline Trail</Tooltip>
			</Marker>
			<Marker position={[47.666830, -122.199623]}>
				<Tooltip>Cross Kirkland Corridor</Tooltip>
			</Marker>
			<Marker position={[47.5255371,-122.1203573]}>
				<Tooltip>Cougar Mountain Regional Wildland Park</Tooltip>
			</Marker>
			<Marker position={[47.4848675,-121.9823836]}>
				<Tooltip>Tiger Mountain State Forest</Tooltip>
			</Marker>
			<Marker position={[47.7834749,-123.6168657]}>
				<Tooltip>Olympic National Park (All of it)</Tooltip>
			</Marker>
			<Marker position={[47.661189, -122.114587]}>
				<Tooltip>Marymoor Park</Tooltip>
			</Marker>
			<Marker position={[47.636896, -122.295203]}>
				<Tooltip>Washington Park Arboretum</Tooltip>
			</Marker>
			<Marker position={[47.637723, -122.238674]}>
				<Tooltip>520 Trail</Tooltip>
			</Marker>
			<Marker position={[47.645721, -122.335157]}>
				<Tooltip>Gas Works Park</Tooltip>
			</Marker>
		</MapContainer>
	</>;
}

ReactDOM.render(
	<App />,
	document.getElementById('root'),
)
