import "./Artwork3.scss"
import React from 'react'
import ImageSlider from "../ImageSlider/ImageSlider.jsx"


const slides = [
	{ url: "http://localhost:3000/DaoistArt/dragon_pine1.jpg", title: "beach" },
	{ url: "http://localhost:3000/DaoistArt/dragon_pine2.jpg", title: "boat" },
	{ url: "http://localhost:3000/DaoistArt/dragon_pine3.jpg", title: "forest" },
	{ url: "http://localhost:3000/DaoistArt/dragon_pine4.jpg", title: "city" },
	{ url: "http://localhost:3000/DaoistArt/dragon_pine5.jpg", title: "italy" },
	{ url: "http://localhost:3000/DaoistArt/dragon_pine6.jpg", title: "city" },
	{ url: "http://localhost:3000/DaoistArt/dragon_pine7.jpg", title: "italy" },
];

const containerStyles = {
	width: "90%",
	height: "70%",
	position: "absolute",
	margin: "auto",
	top: "0", right: "0",
	bottom: "0", left: "0",
};

const Artwork3 = ({content}) => {
	return  <div className="art-container">
				<div className="img-container">
					<div className="containerStyles" style={containerStyles}>
						<ImageSlider slides={slides} />
					</div>
				</div>
				<div className="misc-container">
					<span className="poem">{content.poem}</span>
				</div>
			</div>
}

export default Artwork3