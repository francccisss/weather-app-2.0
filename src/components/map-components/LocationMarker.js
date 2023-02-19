import React from "react";
import { Marker } from "react-leaflet";
import { useMapEvents, Popup } from "react-leaflet";
import { useState } from "react";
import { useContext } from "react";
import { LocationKeyContext } from "../../App";

export const LocationMarker = () => {
	const [position, setPosition] = useState(null);
	const { geoposition, setGeoPosition } = useContext(LocationKeyContext);
	const map = useMapEvents({
		click(e) {
			map.locate();
			setPosition(e.latlng);
			const geo = {
				lat: e.latlng.lat,
				long: e.latlng.lng,
			};
			setGeoPosition(geo);
		},
	});

	return position === null ? null : (
		<Marker draggable={true} position={position}>
			<Popup>You are here</Popup>
		</Marker>
	);
};
