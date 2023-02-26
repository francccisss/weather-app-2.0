import React, { useContext, useEffect, useState } from "react";
import { Daily } from "./Daily";
import { DailyCards } from "./DailyCards";
import { Hourly } from "./Hourly";
import { LocationKeyContext } from "../../App";

export const Forecast = () => {
	const { locationObj, isFetching, setIsError } =
		useContext(LocationKeyContext);
	const [loadingData, setLoadingData] = useState(true);
	const forecastURL = [
		`https://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationObj.Key}?metric=true&apikey=IlRAHY0huRuA8lDzfLPGFOWT9u6rybSX `,
		`https://dataservice.accuweather.com/forecasts/v1/hourly/12hour/${locationObj.Key}?metric=true&apikey=IlRAHY0huRuA8lDzfLPGFOWT9u6rybSX `,
	];

	const [dailyForecast, setDailyForecast] = useState();
	const [hourlyForecast, setHourlyForecast] = useState();
	// IlRAHY0huRuA8lDzfLPGFOWT9u6rybSX api key
	async function fetchForecast() {
		setLoadingData(true);
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
			fetchForecast()
				.then((data) => {
					setDailyForecast(data[0]);
					setHourlyForecast(data[1]);
				})
				.then(() => setLoadingData(false))
				.catch((e) => {
					setIsError(true);
				});
		}
	}, [isFetching]);
	return (
		<div className="flex bg-white border-2 px-5 py-2 gap-y-5 border-black flex-col w-[70%] ">
			{!loadingData && (
				<>
					<Hourly hourlyForecast={hourlyForecast} />
					<Daily dailyForecast={dailyForecast} />
				</>
			)}
		</div>
	);
};
