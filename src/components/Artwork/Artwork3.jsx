import "./Artwork3.scss"
import React from 'react'

const artwork = {
	image_url: "https://localhost:3000/DaoistArt/loquat_bird.jpg",
	name: "Loquat and a Mountain Bird",
}

const Artwork3 = () => {
	return  <div className="art3-container">
				<div className="img3-container">
					<p>Test</p>
					<img src={artwork.image_url} alt={artwork.name} />
				</div>
			</div>
}

export default Artwork3