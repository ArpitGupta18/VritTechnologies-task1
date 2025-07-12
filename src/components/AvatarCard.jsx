import React from "react";
import { motion } from "motion/react";
const AvatarCard = ({
	src,
	alt,
	hover = true,
	animation = {},
	animateIn,
	isFrozen,
	frozenState = {},
}) => {
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
		>
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
