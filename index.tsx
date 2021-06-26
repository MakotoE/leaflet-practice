import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {MapContainer, TileLayer, Polyline, Marker, Tooltip} from 'react-leaflet';
import './style.css';
import highways from './highways.json';
import L from 'leaflet';
import {useState} from 'react';

ReactDOM.render(
	<App />,
	document.getElementById('root'),
)

function App(): React.ReactElement {

	return <>
		<h1>Top 10 Trails and Parks</h1>
		<h2>Hover over marker to see name!</h2>
		<Trails />

		<h1>Interstate Highways That Go Through Seattle</h1>
		<Highways />
	</>;
}

function Trails(): React.ReactElement {
	return <MapContainer center={[47.653234, -122.9]} zoom={8} style={{height: '400px', width: '600px'}}>
		<TileLayer
			attribution='<a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
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
	</MapContainer>;
}

function Highways(): React.ReactElement {
	const defaultSize = [40, 40];
	const largeSize = [60, 60];
	const [i5Size, setI5Size] = useState(defaultSize);
	const [i90Size, setI90Size] = useState(defaultSize);
	const [i405Size, setI405Size] = useState(defaultSize);

	return <MapContainer center={[47.5574326,-122.1912965]} zoom={9} style={{height: '400px', width: '600px'}}>
		<TileLayer
			attribution='Wikipedia and <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
			url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			detectRetina ={true}
		/>
		<Marker
			position={[47.75211, -122.32996]}
			icon={L.icon({iconUrl: './icons/I-5.svg', iconSize: i5Size})}
			eventHandlers={{
				'mouseover': () => setI5Size(largeSize),
				'mouseout': () => setI5Size(defaultSize),
			}}
		/>
		<Polyline pathOptions={{color: '#3f4cf8'}} positions={highways.i5}>
			<Tooltip>I-5</Tooltip>
		</Polyline>

		<Marker
			position={[47.59552, -122.32786]}
			icon={L.icon({iconUrl: './icons/I-90.svg', iconSize: i90Size})}
			eventHandlers={{
				'mouseover': () => setI90Size(largeSize),
				'mouseout': () => setI90Size(defaultSize),
			}}
		/>
		<Polyline pathOptions={{color: '#3f4cf8'}} positions={highways.i90} />

		<Marker
			position={[47.46222302295848, -122.2646296355187]}
			icon={L.icon({iconUrl: './icons/I-405.svg', iconSize: i405Size})}
			eventHandlers={{
				'mouseover': () => setI405Size(largeSize),
				'mouseout': () => setI405Size(defaultSize),
			}}
		/>
		<Polyline pathOptions={{color: '#3f4cf8'}} positions={highways.i405} />
	</MapContainer>;
}
