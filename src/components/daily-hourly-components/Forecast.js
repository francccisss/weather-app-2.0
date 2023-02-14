import React, { useContext, useEffect, useState } from "react";
import { Daily } from "./Daily";
import { DailyCards } from "./DailyCards";
import { Hourly } from "./Hourly";
import { LocationKeyContext } from "../../App";

export const Forecast = () => {
	const { locationObj, isFetching } = useContext(LocationKeyContext);
	const forecastURL = [
		`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationObj.Key}?apikey=IlRAHY0huRuA8lDzfLPGFOWT9u6rybSX `,
		`http://dataservice.accuweather.com/forecasts/v1/hourly/12hour/${locationObj.Key}?apikey=IlRAHY0huRuA8lDzfLPGFOWT9u6rybSX `,
	];

	const [dailyForecast, setDailyForecast] = useState();
	const [hourlyForecast, setHourlyForecast] = useState();
	// IlRAHY0huRuA8lDzfLPGFOWT9u6rybSX api key
	async function fetchForecast() {
		return Promise.all(
			forecastURL.map(async (url) => {
				const fetchData = await fetch(url);
				const data = await fetchData.json();
				return data;
			})
		);
	}

	useEffect(() => {
		if (!isFetching) {
			fetchForecast().then((data) => {
				console.log(data);
			});
		}
	}, [isFetching]);

	return (
		<div className="flex bg-white border-2 px-5 py-2 gap-y-5 border-black flex-col flex-1">
			<Hourly />
			<Daily></Daily>
		</div>
	);
};
