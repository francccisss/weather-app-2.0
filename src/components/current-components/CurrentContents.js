import React from "react";

export const CurrentContents = ({ locationObj }) => {
	const minMax = [30, 32];

	const DISPLAY_MINMAX_TEMP = (
		<div className="flex gap-x-5 text-xl">
			{minMax.map((temp, i) => {
				return (
					<p key={i} className="current-min-max">
						{temp}°C
					</p>
				);
			})}
		</div>
	);

	return (
		<>
			<div id="current-heading">
				<p className="text-2xl" id="location">
					{locationObj.EnglishName},{locationObj.Country.LocalizedName}
				</p>
				<h1 className="text-9xl" id="current-temp">
					32°C
				</h1>
				{DISPLAY_MINMAX_TEMP}
			</div>
			<div
				className="flex-1 py-12 font-light flex flex-col justify-between text-3xl"
				id="current-description"
			>
				<p>Today's weather conditions and forecast for Charlotte, NC.</p>
				<p>Percipitation: 0%</p>
				<p>Wind: 15mph</p>
				<p>Humidity: 54%</p>
			</div>
		</>
	);
};
