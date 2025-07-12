import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import Popup from "./Popup";
import TestimonialPopup from "./TestimonialPopup";
import { testimonialList } from "../data/testimonialList";
const AvatarCard = ({
	src,
	alt,
	hover = true,
	animation = {},
	animateIn,
	isFrozen,
	frozenState = {},
	showPopup = false,
	popupText = "",
}) => {
	const [showTestimonial, setShowTestimonial] = useState(false);
	const [show, setShow] = useState(false);

	useEffect(() => {
		if (!showPopup) return;

		const interval = setInterval(() => {
			setShow((prev) => !prev);
		}, 3000);

		return () => clearInterval(interval);
	}, [showPopup]);

	return (
		<motion.div
			initial={animation.initial}
			animate={
				isFrozen
					? { ...animation.animate, ...frozenState }
					: animateIn
					? animation.animate
					: {}
			}
			transition={animation.transition}
			className={`absolute w-[101px] h-[101px] rounded-4xl p-[2px] ${
				hover ? "glow-hover" : ""
			}`}
			whileHover={() => setShowTestimonial(true)}
			onHoverEnd={() => setShowTestimonial(false)}
		>
			{alt === "User 1" && showTestimonial && (
				<TestimonialPopup
					name={testimonialList[0].name}
					title={testimonialList[0].title}
					text={testimonialList[0].testimonial}
				/>
			)}
			<div className="z-[110]">
				{show && showPopup && <Popup text={popupText} />}
			</div>
			<div className="w-full h-full rounded-4xl overflow-hidden">
				<img
					src={src}
					alt={alt}
					className={`w-full h-full object-cover ${
						alt == "User 1" ? "scale-125" : "scale-100"
					}`}
				/>
			</div>
			{/* <img
				src={src}
				alt={alt}
				className="w-[97px] h-[97px] rounded-4xl object-cover"
			/> */}
		</motion.div>
	);
};

export default AvatarCard;
