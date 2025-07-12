import React, { useState } from "react";
import { motion } from "motion/react";
import AvatarCard from "./components/AvatarCard";
import { avatarData } from "./data/avatarData";
import { stickerData } from "./data/stickerData";
import Sticker from "./components/Sticker";

const App = () => {
	const [isHovered, setIsHovered] = useState(false);
	const [isFrozen, setIsFrozen] = useState(false);

	return (
		<div className="bg-dual-glow flex justify-center items-center font-">
			<div
				className="relative w-300 h-150 z-10"
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => {
					setIsHovered(false);
					setIsFrozen(false);
				}}
				onClick={() => setIsFrozen(true)}
			>
				{avatarData.map((avatar, index) => (
					<AvatarCard
						key={index}
						src={avatar.src}
						alt={avatar.alt}
						hover={avatar.hover}
						animation={avatar.animation}
						animateIn={isHovered}
						isFrozen={isFrozen}
						frozenState={avatar.frozenState}
					/>
				))}

				{stickerData.map((sticker, index) => (
					<Sticker
						key={index}
						src={sticker.src}
						alt={sticker.alt}
						animation={sticker.animation}
						animateIn={isHovered}
					/>
				))}

				<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-3">
					<div className="capitalize text-[1.3rem] -mb-1 text-gray-700 tracking-wide">
						Hear how they level up their game!
					</div>
					<div className="capitalize text-[1.85rem] font-bold mb-1">
						skill <span className="masters">masters</span> unite! 🤝
					</div>
					<div className="text-[1.05rem] font-semibold">
						View all Testimonial &nbsp; ➜{" "}
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;
