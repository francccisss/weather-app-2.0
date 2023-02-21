import React from "react";
import {
	MapContainer,
	TileLayer,
	useMap,
	Popup,
	Marker,
	useMapEvent,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { LocationMarker } from "./LocationMarker";

export const Map = () => {
	return (
		<div className="flex-1 " id="map">
			<MapContainer
				center={[51.505, -0.09]}
				zoom={13}
				scrollWheelZoom={true}
				style={{ height: "100%", width: "100%" }}
			>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				<LocationMarker />
			</MapContainer>
		</div>
	);
};
