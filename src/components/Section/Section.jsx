import './Section.scss'
import ImageSlider from "../ImageSlider/ImageSlider.jsx";

const Section = ({content, children}) => {

    const sectionStyling = {
        backgroundColor: "#f4f4f4",
        // backgroundColor: `${content.bgcolor}`,
    }

    return  <div className="section-container" style={sectionStyling}>
                <div className="section-flex-1">
                    <div className="section-content">
                        <h1>{content.title}</h1>
                        <h2>{content.artist}</h2>
                        <h3>{content.date}</h3>
                        <p>{content.description}</p>
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