import "./Artwork2.scss"
import React from 'react'
import ImageSlider from "../ImageSlider/ImageSlider.jsx"

const artwork = {
	image_url: "https://localhost:3000/DaoistArt/dragon_pine7.jpg",
	poem: "The wild flowers dance when brushed by my sleeves. Reclusive birds make no sound as they shun the presence of people (觸袖野花多自舞，避人幽鳥不成啼).",
	name: "Walking on a Mountain Path",
}

const Artwork2 = () => {
	return  <div className="art2-container">
				<div className="img2-container">
					<img src="https://localhost:3000/DaoistArt/image-3.jpg" alt="" />
				</div>
				<div className="misc2-container">
					<span className="poem2">{artwork.poem}</span>
				</div>
			</div>
}

export default Artwork2