import React from "react";

export const CurrentContents = ({ locationObj, currentWeather }) => {
	return (
		<>
			<div id="current-heading">
				<p className="text-2xl" id="location">
					{locationObj.EnglishName}, {locationObj.Country.LocalizedName}
				</p>
				<h1 className="text-9xl" id="current-temp">
					{Math.floor(currentWeather.Temperature.Metric.Value)}°
					{currentWeather.Temperature.Metric.Unit}
				</h1>
				<div className="flex gap-x-5 text-xl">
					<p>
						{Math.floor(
							currentWeather.TemperatureSummary["Past6HourRange"].Maximum
								.Metric.Value
						)}
						°C
					</p>
					<p>
						{Math.floor(
							currentWeather.TemperatureSummary["Past6HourRange"].Minimum
								.Metric.Value
						)}
						°C
					</p>
				</div>
			</div>
			<div
				className="flex-1 py-12 font-light flex flex-col justify-between text-3xl"
				id="current-description"
			>
				<p>
					Today's current weather conditions and forecast for{" "}
					{locationObj.EnglishName}, {locationObj.Country.ID}.
				</p>
				<p>
					Pressure: {currentWeather.Pressure.Metric.Value}
					{currentWeather.Pressure.Metric.Unit}
				</p>
				<p>
					Wind: {currentWeather.Wind.Speed.Metric.Value}{" "}
					{currentWeather.Wind.Speed.Metric.Unit}
				</p>
				<p>Humidity: {currentWeather.RelativeHumidity}%</p>
			</div>
		</>
	);
};
