import "./Artwork3.scss"
import React from 'react'
import ImageSlider from '../ImageSlider/ImageSlider.jsx'

const artwork = {
	image_url: "https://localhost:3000/DaoistArt/image-2.jpg",
	poem: "The wild flowers dance when brushed by my sleeves. Reclusive birds make no sound as they shun the presence of people (觸袖野花多自舞，避人幽鳥不成啼).",
	name: "Walking on a Mountain Path",
}

const slides = [
	{ url: "http://localhost:3000/DaoistArt/loquat_bird.jpg", title: "loquat bird" },
];

const container3Styles = {
	width: "90%",
	height: "70%",
	position: "absolute",
	margin: "auto",
	top: "0", right: "0",
	bottom: "0", left: "0",
};

const Artwork3 = () => {
	return  <div className="art3-container">
					<div className="img3-container">
						<div style={container3Styles}>
							<ImageSlider slides={slides} />
						</div>
					</div>
			</div>
}

export default Artwork3