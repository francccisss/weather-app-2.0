import React, { useContext, useEffect, useState } from "react";
import { LocationKeyContext } from "../../App";
import { CurrentContents } from "./CurrentContents";

export const Current = ({ children }) => {
	const { locationObj, setIsFetching, isFetching } =
		useContext(LocationKeyContext);
	const [currentWeather, setCurrentWeather] = useState([]);

	async function fetchCurrentWeather() {
		console.log(locationObj.Key);
		const getWeather = await fetch(
			`http://dataservice.accuweather.com/currentconditions/v1/${locationObj.Key}?apikey=IlRAHY0huRuA8lDzfLPGFOWT9u6rybSX&details=true`
		);
		const weatherData = await getWeather.json();
		return weatherData[0];
	}

	useEffect(() => {
		if (!isFetching) {
			console.log("fetching current weather");
			fetchCurrentWeather().then((data) => {
				setCurrentWeather(data);
				return data;
			});
		}
	}, [isFetching, locationObj.Key]);

	useEffect(() => {
		console.log(isFetching);
	}, [isFetching]);

	return (
		<div
			className="text-[#2e2e2e] flex flex-col items-start w-1/3"
			id="current-container"
		>
			{!isFetching && <CurrentContents locationObj={locationObj} />}
		</div>
	);
};
