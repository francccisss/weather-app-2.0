import React from "react";
import { HourlyChart } from "./HourlyChart";

export const Hourly = () => {
	// hourly chart needs DateTime and Temperature Value

	return (
		<div id="hourly-container" className="h-[75%]">
			<HourlyChart />
		</div>
	);
};
