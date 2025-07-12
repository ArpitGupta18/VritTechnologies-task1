export const avatarData = [
	{
		src: "/assets/avatars/image1.png",
		alt: "User 1",
		hover: true,
		showPopup: true,
		popupText: "Amazing ⭐️⭐️⭐️⭐️⭐️",
		animation: {
			initial: { opacity: 1, x: 372, y: 128 },
			animate: { opacity: 1, x: 232, y: 18 },
			transition: {
				type: "spring",
				damping: 11,
				duration: 0.01,
			},
		},
		frozenState: { x: 232, y: -15 },
	},
	{
		src: "/assets/avatars/image2.png",
		alt: "User 2",
		hover: false,
		animation: {
			initial: { opacity: 1, x: 769, y: 218 },
			animate: { opacity: 1, x: 1000, y: 235 },
			transition: {
				type: "spring",
				damping: 11,
				duration: 0.01,
				delay: 0,
			},
		},
		frozenState: { x: 1000, y: 202 },
	},
	{
		src: "/assets/avatars/image3.png",
		alt: "User 3",
		hover: false,
		animation: {
			initial: { opacity: 1, x: 395, y: 356 },
			animate: { opacity: 1, x: 288, y: 430 },
			transition: {
				type: "spring",
				damping: 11,
				duration: 0.01,
				delay: 0,
			},
		},
		frozenState: { x: 288, y: 398 },
	},
	{
		src: "/assets/avatars/image4.png",
		alt: "User 4",
		hover: false,
		animation: {
			initial: { opacity: 1, x: 270, y: 250 },
			animate: { opacity: 1, x: 40, y: 165 },
			transition: {
				type: "spring",
				damping: 11,
				duration: 0.01,
				delay: 0,
			},
		},
		frozenState: { x: 40, y: 198 },
	},
	{
		src: "/assets/avatars/image5.png",
		alt: "User 5",
		hover: false,
		animation: {
			initial: { opacity: 1, x: 620, y: 125 },
			animate: { opacity: 1, x: 765, y: 5 },
			transition: {
				type: "spring",
				damping: 11,
				duration: 0.01,
				delay: 0,
			},
		},
		frozenState: { x: 765, y: 38 },
	},
	{
		src: "/assets/avatars/image6.png",
		alt: "User 6",
		hover: true,
		showPopup: true,
		popupText: "⭐️⭐️⭐️⭐️⭐️",
		animation: {
			initial: { opacity: 1, x: 630, y: 352 },
			animate: { opacity: 1, x: 720, y: 445 },
			transition: {
				type: "spring",
				damping: 11,
				duration: 0.01,
				delay: 0,
			},
		},
		frozenState: { x: 720, y: 478 },
	},
];
