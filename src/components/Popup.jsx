import React from "react";

const Popup = ({ text }) => {
	return (
		<div className="absolute top-[32px] left-[180px] -translate-x-1/2 z-[9999]">
			<div className="relative bg-white px-2 py-[14px] rounded-md text-[12px] font-light text-gray-800 w-[160px] text-center z-[9999] shadow-[0_4px_12px_rgba(0,0,0,0.15)]">
				{text}

				<div className="absolute top-[18px] left-[0px] -translate-x-1/2 w-3 h-3 bg-white rotate-45 z-[-1] shadow-[-8px_0px_10px_rgba(0,0,0,0.12)]"></div>
			</div>
		</div>
	);
};

export default Popup;
