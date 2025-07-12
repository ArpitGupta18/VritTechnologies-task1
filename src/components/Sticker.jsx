import React from "react";
import { motion } from "motion/react";

const Sticker = ({ src, alt, animation = {}, animateIn }) => {
	console.log(src);
	console.log(1);
	return (
		<motion.div
			initial={animation.initial}
			animate={animateIn ? animation.animate : {}}
			transition={animation.transition}
			className="absolute w-[97px] h-[97px] rounded-4xl z-[-1]"
		>
			<img
				src={src}
				alt={alt}
				className="w-full h-full rounded-4xl object-contain"
				// style={{ backgroundColor: "red" }}
			/>
		</motion.div>
	);
};

export default Sticker;
