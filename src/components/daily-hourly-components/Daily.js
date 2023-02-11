import React from "react";

export const Daily = ({ children }) => {
	return (
		<div id="daily-container" className="flex h-full gap-x-2 flex-1">
			{children}
		</div>
	);
};
