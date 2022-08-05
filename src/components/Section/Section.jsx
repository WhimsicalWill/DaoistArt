import './Section.scss'
import ImageSlider from "../ImageSlider/ImageSlider.jsx";

 const slides = [
    { url: "http://localhost:3000/DaoistArt/image-1.jpg", title: "beach" },
    { url: "http://localhost:3000/DaoistArt/image_2.jpg", title: "boat" },
    { url: "http://localhost:3000/DaoistArt/image_3.jpg", title: "forest" },
    { url: "http://localhost:3000/DaoistArt/image_4.jpg", title: "city" },
    { url: "http://localhost:3000/DaoistArt/image_5.jpg", title: "italy" },
];

const Section = ({images, content}) => {

    const sectionStyling = {
        backgroundColor: `${content.bgcolor}`,
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
                <div className="slider-container">
                    <ImageSlider slides={slides} />
                </div>
            </div>
        </div>
}

export default Section