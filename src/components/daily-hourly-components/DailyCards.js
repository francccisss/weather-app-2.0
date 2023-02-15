import React, { useEffect, useState } from "react";
import "./dailyCards.css";
import format from "date-fns/format";
import { parseISO } from "date-fns";
import usePrevious from "../hooks/usePrevious";
export const DailyCards = ({ Fdate, day, temp }) => {
	const [date, setDate] = useState(Fdate);
	const previousDate = usePrevious(date);

	function convertDate(date, cb) {
		const parsedDate = parseISO(date);
		return cb(parsedDate);
	}

	useEffect(() => {
		if (previousDate !== date) {
			convertDate(date, (parsedDate) => {
				setDate((prev) => format(parsedDate, "E"));
			});
		}
	}, [Fdate]);

	return (
		<div className="daily-cards flex flex-1 bg-[#c4d1eb] border-2 border-black justify-center items-center">
			<div className=" text-center">
				<h1 className="text-3xl text-bold uppercase">{date}</h1>
				<div id="min-max-daily" className="">
					<p className=" inline text-xl">{temp.Minimum.Value}°C</p> |{" "}
					<p className=" inline text-xl">{temp.Maximum.Value}°C</p>
				</div>
				{/* icon phrase day */}
				<p className="text-xl">{day.IconPhrase}</p>
			</div>
		</div>
	);
};
