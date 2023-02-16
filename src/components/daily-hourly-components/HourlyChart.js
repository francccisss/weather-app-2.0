import React, { useEffect } from "react";
import Chart from "chart.js/auto";

export const HourlyChart = ({ hours, temps }) => {
	function createChart() {
		const myChart = new Chart(document.getElementById("hourly-chart"), {
			type: "bar",
			data: {
				labels: hours,
				datasets: [
					{
						label: "Hourly Temprature",
						data: temps,
						backgroundColor: "#7cc4bf",
						borderColor: "#00000",
						borderWidth: 2,
					},
				],
			},
			options: {
				responsive: true,
				maintainAspectRatio: false,
				plugins: {
					legend: {
						// display: false,
					},
				},
			},
		});
	}

	useEffect(() => {
		createChart();
	}, []);

	return (
		<div className="w-full h-full relative">
			<canvas id="hourly-chart"></canvas>
		</div>
	);
};
