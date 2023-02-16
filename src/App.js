import "./App.css";
import { NavBar } from "./components/navbar-components/NavBar";
import { MainContents } from "./components/main-contents-component/MainContents";
import { Current } from "./components/current-components/Current";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ROUTES } from "./components/routes";
import { createContext, useContext, useEffect, useState } from "react";
import getUserGeoposition from "./components/mods/GetUserGeoposition";

export const LocationKeyContext = createContext();
function App() {
	const [searchQuery, setSearchQuery] = useState("Dubai");
	const [currentLocation, setCurrentLocation] = useState({});
	const [isFetchingKey, setIsFetchingKey] = useState(true);
	const [loc, setloc] = useState();

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

	// useEffect(() => {
	// 	getSearchQueryLocationKey()
	// 		.then((location) => {
	// 			setCurrentLocation(location);
	// 		})
	// 		.then(() => {
	// 			setIsFetchingKey(false);
	// 		});
	// }, [searchQuery]);

	useEffect(() => {
		getUserGeoposition(setCurrentLocation).then((_) => {
			console.log(currentLocation);
		});
	}, []);

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
