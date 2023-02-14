import React from "react";
import { DailyCards } from "./DailyCards";

export const Daily = ({ dailyForecast }) => {
	const DISPLAY_DAILY_WEATHER = dailyForecast.DailyForecasts.map((day, i) => {
		return (
			<DailyCards
				key={i}
				date={day.Date}
				day={day.Day}
				temp={day.Temperature}
			/>
		);
	});
	return (
		<div id="daily-container" className="flex h-full gap-x-2 flex-1">
			{DISPLAY_DAILY_WEATHER}
		</div>
	);
};
