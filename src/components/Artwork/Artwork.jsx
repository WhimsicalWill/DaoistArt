import "./Artwork.scss"

const Artwork = ({content}) => {
	return  <div className="art-container">
				<img className="image" src={content.src} alt="" />
				<span className="poem">{content.poem}</span>
			</div>
}

// TODO: add conditional logic for poem

export default Artwork