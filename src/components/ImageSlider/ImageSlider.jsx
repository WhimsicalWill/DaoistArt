import { useState } from "react";
import './ImageSlider.scss'

const slideStyles = {
	width: "100%",
	height: "80%",
	borderRadius: "10px",
	backgroundSize: "cover",
	backgroundPosition: "center",
};

const rightArrowStyles = {
	position: "absolute",
	top: "40%",
	transform: "translate(0, -50%)",
	right: "16px",
	fontSize: "45px",
	color: "#000",
	zIndex: 1,
	cursor: "pointer",
};

const leftArrowStyles = {
	position: "absolute",
	top: "40%",
	transform: "translate(0, -50%)",
	left: "16px",
	fontSize: "45px",
	color: "#000",
	zIndex: 1,
	cursor: "pointer",
};

const sliderStyles = {
	position: "relative",
	height: "100%",
};

const dotsContainerStyles = {
	display: "flex",
	justifyContent: "center",
};

const dotStyle = {
	margin: "auto 3px",
	cursor: "pointer",
	fontSize: "20px",
};

const ImageSlider = ({ slides }) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const goToPrevious = () => {
		const isFirstSlide = currentIndex === 0;
		const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
		setCurrentIndex(newIndex);
	};
	const goToNext = () => {
		const isLastSlide = currentIndex === slides.length - 1;
		const newIndex = isLastSlide ? 0 : currentIndex + 1;
		setCurrentIndex(newIndex);
	};
	const goToSlide = (slideIndex) => {
		setCurrentIndex(slideIndex);
	};
	const slideStylesWidthBackground = {
		...slideStyles,
		backgroundImage: `url(${slides[currentIndex].url})`,
		backgroundSize: "contain",
		backgroundRepeat: "no-repeat",
	};

	return (
		<div style={sliderStyles}>
			<div>
				{slides.length > 1 &&
					<>
						<div onClick={goToPrevious} style={leftArrowStyles}>
							❰
						</div>
						<div onClick={goToNext} style={rightArrowStyles}>
							❱
						</div> 
					</>
				}
			</div>
			<div style={slideStylesWidthBackground}></div>
			<div style={dotsContainerStyles}>
				{slides.map((slide, slideIndex) => (
					<div
						style={dotStyle}
						key={slideIndex}
						onClick={() => goToSlide(slideIndex)}
					>
						<span className={"dot " + ((slideIndex == currentIndex) && "active")}>●</span>
					</div>
				))}
			</div>
		</div>
	);
};

export default ImageSlider;