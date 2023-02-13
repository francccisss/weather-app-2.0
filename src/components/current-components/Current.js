import React, { useContext, useEffect, useState } from "react";
import { LocationKeyContext } from "../../App";

export const Current = ({ children }) => {
	const { locationObj, isFetching } = useContext(LocationKeyContext);
	const [currentWeather, setCurrentWeather] = useState([]);

	async function fetchCurrentWeather() {
		const getWeather = await fetch(
			`http://dataservice.accuweather.com/currentconditions/v1/${locationObj.Key}?apikey=IlRAHY0huRuA8lDzfLPGFOWT9u6rybSX&details=false`
		);
		const weatherData = await getWeather.json();
		return weatherData;
	}

	useEffect(() => {
		if (!isFetching) {
			console.log("done");
		}
		// fetchCurrentWeather().then((data) => {
		// 	setCurrentWeather(data);
		// 	return data;
		// });
	}, [isFetching]);

	const displayData =
		currentWeather.length !== 0
			? console.log(currentWeather[0])
			: console.log("fetching data");

	return (
		<div
			className="text-[#2e2e2e] flex flex-col items-start w-1/3"
			id="current-container"
		>
			{children}
			<div
				className="flex-1 py-12 font-light flex flex-col justify-between text-3xl"
				id="current-description"
			>
				<p>Today's weather conditions and forecast for Charlotte, NC.</p>
				<p>Percipitation: 0%</p>
				<p>Wind: 15mph</p>
				<p>Humidity: 54%</p>
			</div>
		</div>
	);
};
