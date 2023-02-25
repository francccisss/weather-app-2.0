import React from "react";
import { Marker } from "react-leaflet";
import { useMapEvents, Popup } from "react-leaflet";
import { useState } from "react";
import { useContext } from "react";
import { LocationKeyContext } from "../../App";
import L from "leaflet";

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
	const mark = L.icon({
		iconUrl: require("../../assets/img/marker/marker2.png"),
		iconSize: [35, 50],
	});

	return position === null ? null : (
		<Marker icon={mark} position={position}>
			<Popup>You are here</Popup>
		</Marker>
	);
};
