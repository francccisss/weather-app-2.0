import "./App.css";
import { NavBar } from "./components/navbar-components/NavBar";
import { MainContents } from "./components/main-contents-component/MainContents";
import { Current } from "./components/current-components/Current";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ROUTES } from "./components/routes";
import { createContext, useContext, useEffect, useState } from "react";

export const LocationKeyContext = createContext();
function App() {
	const [searchQuery, setSearchQuery] = useState("Dubai");
	const [currentLocation, setCurrentLocation] = useState({});
	const [isFetchingKey, setIsFetchingKey] = useState(true);
	const apikey = "%09IlRAHY0huRuA8lDzfLPGFOWT9u6rybSX";
	const [isRetrievingPos, setIsRetrievingPos] = useState(true);
	const [geoposition, setGeoPosition] = useState({});

	async function getSearchQueryLocationKey() {
		setIsFetchingKey(true);
		try {
			const fetchLocationKey = await fetch(
				`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=%09IlRAHY0huRuA8lDzfLPGFOWT9u6rybSX&q=${searchQuery}`
			);
			const locationKey = await fetchLocationKey.json();
			// since accuweather's search api returns an array of city by rank we'll be retreiving only the first element
			return locationKey[0];
		} catch (error) {
			throw error;
		}
	}

	async function getUserGeoposition() {
		if (!navigator.geolocation) {
			console.log("Will fallback to default");
			console.log("Browser doesn't support geolocation");
		} else {
			navigator.geolocation.getCurrentPosition(
				setGeopostion,
				setDefaultGeoposition
			);
		}
	}

	async function setGeopostion(pos) {
		const coordinates = pos.coords;
		const position = {
			lat: coordinates.latitude,
			long: coordinates.longitude,
		};
		console.log(position);
		setGeoPosition(position);
	}

	async function setDefaultGeoposition() {
		const defaultPosition = { lat: 40.73061, long: -73.935242 };
		setGeoPosition(defaultPosition);
	}

	async function fetchGeopositionKey(geo) {
		const fetchGeo = await fetch(
			`http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?q=${geo.lat},${geo.long}&apikey=${apikey}`
		);
		const fetchedData = await fetchGeo.json();
		console.log(fetchedData);
		setCurrentLocation(fetchedData);
		return fetchedData;
	}

	useEffect(() => {
		getUserGeoposition()
			.then(() => {
				console.log("fetching");
			})
			.then(() => {
				console.log("done");
				setIsRetrievingPos(false);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	useEffect(() => {
		if (!isRetrievingPos) {
			console.log(geoposition);
			fetchGeopositionKey(geoposition).then(() => {
				setIsFetchingKey(false);
			});
		}
	}, [geoposition]);

	const DISPLAY_ROUTE = ROUTES.map((route) => {
		return (
			<Route
				key={route.pageName}
				path={route.path}
				element={route.element}
			/>
		);
	});

	return (
		<BrowserRouter>
			<div className="App h-screen flex flex-col ">
				<NavBar handleQuery={setSearchQuery} />
				<MainContents>
					<div
						id="main-container"
						className="gap-x-10 flex flex-1 px-20 h-4/5"
					>
						<LocationKeyContext.Provider
							value={{
								isFetching: isFetchingKey,
								locationObj: currentLocation,
								setIsFetching: setIsFetchingKey,
							}}
						>
							<Current />
							<Routes>{DISPLAY_ROUTE}</Routes>
						</LocationKeyContext.Provider>
					</div>
				</MainContents>
			</div>
		</BrowserRouter>
	);
}

export default App;
