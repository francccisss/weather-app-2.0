import React, { useEffect, useState } from "react";
import "./dailyCards.css";
import format from "date-fns/format";
import { parseISO } from "date-fns";

export const DailyCards = ({ Fdate, temp, day }) => {
	let formattedDate;

	function convertDate(date, cb) {
		const parsedDate = parseISO(date);
		return cb(parsedDate);
	}

	useEffect(() => {
		convertDate(Fdate, (parsedDate) => {
			formattedDate = format(parsedDate, "E");
		});
	}, [Fdate]);

	return (
		<div className="daily-cards flex-1 flex gy-10 bg-[#c4d1eb] border-2 border-black justify-center items-center">
			<h1>{formattedDate}</h1>
			{temp.Maximum.Value}°C
		</div>
	);
};
