import React, { useEffect, useState } from "react";
import convertDate from "../mods/DateConvert";
import { HourlyChart } from "./HourlyChart";
import format from "date-fns/format";

export const Hourly = ({ hourlyForecast }) => {
	// hourly chart needs DateTime and Temperature Value
	const [convertedDate, setConvertedDate] = useState([]);
	const [hourlyTemp, setHourlyTemp] = useState([]);

	function getData(obj) {
		return hourlyForecast.map((hour) => {
			return hour[obj];
		});
	}

	useEffect(() => {
		const newDate = getData("DateTime").map((date) => {
			return convertDate(date, (Ndate) => {
				const formatDate = format(Ndate, "p");
				setConvertedDate((prev) => [...prev, formatDate]);
			});
		});

		const storeTemp = getData("Temperature").forEach((temp) => {
			setHourlyTemp((prev) => [...prev, temp.Value]);
		});
	}, [hourlyForecast]);

	return (
		<div id="hourly-container" className="h-[75%]">
			{convertedDate.length !== 0 && (
				<HourlyChart hours={convertedDate} temps={hourlyTemp} />
			)}
		</div>
	);
};
