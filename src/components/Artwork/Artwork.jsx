import "./Artwork.scss"
import React from 'react'
import ImageSlider2 from "../ImageSlider2/ImageSlider2.jsx"
import ImageSlider from "../ImageSlider/ImageSlider.jsx"


const slides = [
	{ url: "http://localhost:3000/DaoistArt/dragon_pine1.jpg", title: "beach" },
	{ url: "http://localhost:3000/DaoistArt/dragon_pine2.jpg", title: "boat" },
	{ url: "http://localhost:3000/DaoistArt/dragon_pine3.jpg", title: "forest" },
	{ url: "http://localhost:3000/DaoistArt/dragon_pine4.jpg", title: "city" },
	{ url: "http://localhost:3000/DaoistArt/dragon_pine5.jpg", title: "italy" },
];

const containerStyles = {
	width: "500px",
	height: "280px",
	position: "absolute",
	margin: "auto",
	top: "0", right: "0",
	bottom: "0", left: "0",

			// 	margin: auto;
			// position: absolute;
			// margin-top: auto;
			// top: 0; right: 0;
			// bottom: 0; left: 0;
};

const Artwork = ({content}) => {
	return  <div className="art-container">
				{/* <img className="image" src={content.src} alt="" /> */}
				{/* <ImageSlider2 /> */}
				<div className="img-container">
					{/* <img src="http://localhost:3000/DaoistArt/dragon_pine1.jpg" alt="" />
					<img src="http://localhost:3000/DaoistArt/dragon_pine2.jpg" alt="" />
					<img src="http://localhost:3000/DaoistArt/dragon_pine3.jpg" alt="" />
					<img src="http://localhost:3000/DaoistArt/dragon_pine4.jpg" alt="" />
					<img src="http://localhost:3000/DaoistArt/dragon_pine5.jpg" alt="" />
					<img src="http://localhost:3000/DaoistArt/dragon_pine6.jpg" alt="" />
					<img src="http://localhost:3000/DaoistArt/dragon_pine7.jpg" alt="" /> */}
					<div className="containerStyles" style={containerStyles}>
						<ImageSlider slides={slides} />
					</div>
				</div>
				<div className="misc-container">
					<span className="poem">{content.poem}</span>
				</div>
			</div>
}

// TODO: add conditional logic for poem

export default Artwork