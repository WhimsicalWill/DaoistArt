import "./Artwork1.scss"
import React from 'react'
import ImageSlider from "../ImageSlider/ImageSlider.jsx"

const slides = [
	{ url: "./images/dragon_pine5.jpg", title: "dragon_pine1" },
	{ url: "./images/dragon_pine2.jpg", title: "dragon_pine2" },
	{ url: "./images/dragon_pine3.jpg", title: "dragon_pine3" },
	{ url: "./images/dragon_pine4.jpg", title: "dragon_pine4" },
	{ url: "./images/dragon_pine1.jpg", title: "dragon_pine5" },
	{ url: "./images/dragon_pine6.jpg", title: "dragon_pine6" },
	{ url: "./images/dragon_pine7.jpg", title: "dragon_pine7" },
];

const containerStyles = {
	width: "90%",
	height: "70%",
	position: "absolute",
	margin: "auto",
	top: "0", right: "0",
	bottom: "0", left: "0",
};

const Artwork1 = ({content}) => {
	return  <div className="art1-container">
				<div className="img1-container">
					<div className="containerStyles" style={containerStyles}>
						<ImageSlider slides={slides} />
					</div>
				</div>
			</div>
}

export default Artwork1