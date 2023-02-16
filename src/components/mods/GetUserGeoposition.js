const apikey = "IlRAHY0huRuA8lDzfLPGFOWT9u6rybSX";
export default async function getUserGeoposition(state) {
	if (!navigator.geolocation) {
		console.log("Will fallback to default");
		console.log("Browser doesn't support geolocation");
	} else {
		navigator.geolocation.getCurrentPosition(
			async (pos) => {
				await state(onAllow(pos));
			},
			async () => {
				await state(onDecline());
			}
		);
	}
}

async function onAllow(pos) {
	const coordinates = pos.coords;
	const geoposition = {
		lat: coordinates.latitude,
		long: coordinates.longitude,
	};
	const geoLocationSearch = await fetch(
		`http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${apikey}&q=${geoposition.lat},${geoposition.long}`
	);
	const fetchedData = await geoLocationSearch.json();
	console.log(fetchedData);
	return fetchedData[0];
}

async function onDecline() {
	const defaultLocation = { lat: 40.73061, long: -73.935242 };
	const fetchForDefault = await fetch(
		`http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${apikey}&q=${defaultLocation.lat},${defaultLocation.long}`
	);
	const fetchedData = await fetchForDefault.json();
	console.log(fetchedData);
	return fetchedData[0];
}
