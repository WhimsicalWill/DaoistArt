import "./Artwork2.scss"
import React from 'react'
import ImageSlider from '../ImageSlider/ImageSlider.jsx'

const artwork = {
	image_url: "https://localhost:3000/DaoistArt/image-2.jpg",
	poem: "The wild flowers dance when brushed by my sleeves. Reclusive birds make no sound as they shun the presence of people (觸袖野花多自舞，避人幽鳥不成啼).",
	name: "Walking on a Mountain Path",
}

const slides = [
	{ url: "http://localhost:3000/DaoistArt/mountain_path.webp", title: "mountain path" },
];

const container2Styles = {
	width: "90%",
	height: "70%",
	position: "absolute",
	margin: "auto",
	top: "0", right: "0",
	bottom: "0", left: "0",
};

const Artwork2 = () => {
	return  <div className="art2-container">
					<div className="img2-container">
						<div style={container2Styles}>
							<ImageSlider slides={slides} />
						</div>
					</div>
				<div className="misc2-container">
					<span className="poem2">{artwork.poem}</span>
				</div>
			</div>
}

export default Artwork2