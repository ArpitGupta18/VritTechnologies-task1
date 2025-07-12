import React from "react";

const TestimonialPopup = ({ name, title, text }) => {
	return (
		<div className="absolute top-[65px] left-[50px] -translate-x-1/2 z-[9999]">
			<div
				className="relative bg-white px-4 py-3 rounded-md shadow-[0_0_20px_6px_rgba(0,0,0,0.15)]
 text-[13px] font-light text-gray-800 w-[280px] text-left z-[9999]"
			>
				<p className="mb-2 text-[10px]">{text}</p>
				<p className="font-semibold text-[10px] text-black text-right ">
					- {name}
				</p>
				<p className="text-[10px] text-gray-500 text-right">{title}</p>

				<div className="absolute top-[-5px] left-[140px] -translate-x-1/2 w-3 h-3 bg-white rotate-45 z-[9998] shadow-[-6px_0px_6px_rgba(0,0,0,0.12)]"></div>
			</div>
		</div>
	);
};

export default TestimonialPopup;
