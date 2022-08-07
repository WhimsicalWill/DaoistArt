import "./Artwork.scss"
import React from 'react'
import ImageSlider2 from "../ImageSlider2/ImageSlider2.jsx"
import 'react-slideshow-image/dist/styles.css'

const Artwork = ({content}) => {
	return  <div className="art-container">
				{/* <img className="image" src={content.src} alt="" /> */}
				<ImageSlider2 className="slider" />
				{/* <span className="poem">{content.poem}</span> */}
			</div>
}

// TODO: add conditional logic for poem

export default Artwork