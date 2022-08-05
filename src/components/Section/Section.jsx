import './Section.scss'
import ImageSlider from "../ImageSlider/ImageSlider.jsx";

const Section = ({content, children}) => {

	const sectionStyling = {
		backgroundColor: "#f4f4f4",
		// backgroundColor: `${content.bgcolor}`,
	}

	return  <div className="section-container" style={sectionStyling}>
				<div className="section-flex-1">
						<div className="card">
							<h3 className="title" >{content.title}</h3>
							<span className="artist">{content.artist}</span>
							<span className="date">{content.date}</span>
							<span className="desc">{content.description}</span>
						</div>
				</div>
				<div className="section-flex-2">
					{/* <div className="slider-container">
						<ImageSlider slides={image_list} />
					</div> */}
					<p> test </p>
					{children}
				</div>
			</div>
}

export default Section