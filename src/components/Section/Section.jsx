import './Section.scss'
import ImageSlider from "../ImageSlider/ImageSlider.jsx";

const Section = ({leftContent, rightContent}) => {

	const sectionStyling = {
		backgroundColor: "#f4f4f4",
	}

	return  <div className="section-container" style={sectionStyling}>
				<div className="section-flex-1">
						<div className="card">
							<h3 className="title" >{leftContent.title}</h3>
							<span className="artist">{leftContent.artist}</span>
							<span className="date">{leftContent.date}</span>
							<span className="desc">{leftContent.description}</span>
						</div>
				</div>
				<div className="section-flex-2">
					<span>test</span>
				</div>
			</div>
}

// for section-flex-2, I could send props to another React component
// to hide some complexity, but the app is not even that complex,
// so I think it is fine to include everything in this file.
// Nevermind, the logic is not consistent so I should have a react compnent
// for each one, and create this in the App.jsx code.
// Then, this file should just display the content created in App.

export default Section