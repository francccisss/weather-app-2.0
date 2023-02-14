import React, { useEffect, useState } from "react";
import "./dailyCards.css";
import format from "date-fns/format";
import { parseISO } from "date-fns";
import usePrevious from "../hooks/usePrevious";
export const DailyCards = ({ Fdate, temp, day }) => {
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
		<div className="daily-cards flex-1 flex bg-[#c4d1eb] border-2 border-black justify-center items-center">
			<div className="flex-1 text-center">
				<h1 className="text-3xl text-bold uppercase">{date}</h1>
				<div id="min-max-daily" className="">
					<p className=" inline text-xl">{temp.Maximum.Value}°C</p> /
					<p className=" inline text-xl">{temp.Minimum.Value}°C</p>
				</div>
			</div>
		</div>
	);
};
