import React from "react";

export const ErrorComponent = () => {
	return (
		<div className="text-[5rem] flex justify-center flex-col items-center flex-1">
			<div>
				<div className="text-[10rem]"> :'( </div>
				<h1 className="">Something Went Wrong!</h1>
				<h2 className="text-xl font-bold">Could be:</h2>
				<p className="text-xl">
					•The location you've entered cannot be found, please enter a
					different location.{" "}
				</p>
				<p className="text-xl">
					•We've exceeded the amount of calls (50 a day free tier) from{" "}
					<a
						id="accuweather-link"
						href="https://developer.accuweather.com/apis"
					>
						AccuWeather
					</a>
					.
				</p>
			</div>
		</div>
	);
};
