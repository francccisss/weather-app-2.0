import "./App.css";
import { NavBar } from "./components/navbar-components/NavBar";
import { MainContents } from "./components/main-contents-component/MainContents";
import { Current } from "./components/current-components/Current";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ROUTES } from "./components/routes";
import { createContext, useContext, useEffect, useState } from "react";
import usePrevious from "./components/hooks/usePrevious";

export const LocationKeyContext = createContext();
function App() {
	const [searchQuery, setSearchQuery] = useState();
	const [currentLocation, setCurrentLocation] = useState({});
	const [isFetchingKey, setIsFetchingKey] = useState(true);
	const apikey = "%09IlRAHY0huRuA8lDzfLPGFOWT9u6rybSX";
	const [isRetrievingPos, setIsRetrievingPos] = useState(true);
	const [geoposition, setGeoPosition] = useState(null);
	const previousSearchQueryState = usePrevious(searchQuery);
	const [searchQueryErr, setSearchQueryErr] = useState();

	async function getSearchQueryLocationKey() {
		setIsFetchingKey(true);
		try {
			const fetchLocationKey = await fetch(
				`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=%09IlRAHY0huRuA8lDzfLPGFOWT9u6rybSX&q=${searchQuery}`
			);
			console.log(fetchLocationKey);
			const locationKey = await fetchLocationKey.json();
			console.log(locationKey[0]);
			return locationKey[0];
			// return locationKey[0];
		} catch (error) {
			console.log("error");
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
		try {
			const fetchGeo = await fetch(
				`http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?q=${geo.lat},${geo.long}&apikey=${apikey}`
			);
			const fetchedData = await fetchGeo.json();
			if (fetchedData == null) {
				return;
			}
			setCurrentLocation(fetchedData);
			return fetchedData;
		} catch (e) {
			console.error(e);
			console.log("Unable to fetch location key");
		}
	}

	// useEffect(() => {
	// 	getUserGeoposition()
	// 		.then((data) => {
	// 			console.log("fetching");
	// 		})
	// 		.then(() => {
	// 			console.log("done");
	// 			setIsRetrievingPos(false);
	// 		})
	// 		.catch((err) => {
	// 			console.log(err);
	// 		});
	// }, []);

	// do this after retreiving the lat and long of user or default location
	// fetches KEY using geoposition
	useEffect(() => {
		if (!isRetrievingPos) {
			console.log(geoposition);
			fetchGeopositionKey(geoposition).then(() => {
				setIsFetchingKey(false);
			});
		}
	}, [geoposition]);

	// fetches KEY using textSearch
	useEffect(() => {
		if (searchQuery !== previousSearchQueryState) {
			getSearchQueryLocationKey()
				.then((data) => {
					setCurrentLocation(data);
				})
				.then(() => {
					setIsFetchingKey(false);
				});
		}
	}, [searchQuery]);

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
						{currentLocation === undefined ? (
							<h1>Location not found</h1>
						) : (
							<LocationKeyContext.Provider
								value={{
									isFetching: isFetchingKey,
									locationObj: currentLocation,
									setIsFetching: setIsFetchingKey,
									setGeoPosition: setGeoPosition,
									geoposition: geoposition,
								}}
							>
								<Current />
								<Routes>{DISPLAY_ROUTE}</Routes>
							</LocationKeyContext.Provider>
						)}
					</div>
				</MainContents>
			</div>
		</BrowserRouter>
	);
}

export default App;
