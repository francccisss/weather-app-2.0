import React, { useContext, useEffect, useState } from "react";
import { LocationKeyContext } from "../../App";
import { CurrentContents } from "./CurrentContents";

export const Current = ({ children }) => {
	const { locationObj, setIsFetching, isFetching } =
		useContext(LocationKeyContext);
	const [currentWeather, setCurrentWeather] = useState([]);

	async function fetchCurrentWeather() {
		try {
			console.log(locationObj.Key);
			const getWeather = await fetch(
				`http://dataservice.accuweather.com/currentconditions/v1/${locationObj.Key}?apikey=IlRAHY0huRuA8lDzfLPGFOWT9u6rybSX&details=true`
			);
			const weatherData = await getWeather.json();
			return weatherData[0];
		} catch (er) {
			console.log("Unable to fetch data");
		}
	}

	useEffect(() => {
		if (!isFetching) {
			console.log("fetching current weather");
			fetchCurrentWeather()
				.then((data) => {
					setCurrentWeather(data);
					return data;
				})
				.catch((err) => {
					console.log("Unable to fetch data");
				});
		}
	}, [isFetching, locationObj.Key]);

	useEffect(() => {
		console.log(currentWeather);
	}, [currentWeather]);

	return (
		<div
			className="text-[#2e2e2e] flex flex-col items-start w-1/3"
			id="current-container"
		>
			{locationObj.Key === null ? (
				<p>Unable to Fetch Location Key</p>
			) : (
				currentWeather.length !== 0 && (
					<CurrentContents
						locationObj={locationObj}
						currentWeather={currentWeather}
					/>
				)
			)}
		</div>
	);
};
