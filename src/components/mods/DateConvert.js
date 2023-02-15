import { parseISO } from "date-fns";
export default function convertDate(date, cb) {
	const parsedDate = parseISO(date);
	return cb(parsedDate);
}
