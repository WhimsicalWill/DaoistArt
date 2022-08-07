import './Section.scss'
import React from 'react'

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
					{rightContent}
				</div>
			</div>
}

export default Section