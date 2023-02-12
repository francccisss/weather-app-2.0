import React, { useContext, useEffect, useState } from "react";
import { LocationKeyContext } from "../../App";

export const Current = ({ children }) => {
	const { Key } = useContext(LocationKeyContext);
	const [currentWeather, setCurrentWeather] = useState([]);

	async function fetchCurrentWeather() {
		const getWeather = await fetch(
			`http://dataservice.accuweather.com//currentconditions/v1/${Key}?apikey=IlRAHY0huRuA8lDzfLPGFOWT9u6rybSX&details=false`
		);
		const weatherData = await getWeather.json();
		return weatherData;
	}

	useEffect(() => {
		fetchCurrentWeather()
			.then((data) => {
				setCurrentWeather(data);
			})
			.then(() => {
				console.log(currentWeather);
			});
	}, [Key]);

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
