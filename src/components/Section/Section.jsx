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
    return  <div className="section-container">
                <div className="section-inner-container">
                    <div className="section-content">
                        <div className="flex-1">
                            <h1>{content.title}</h1>
                            <h2>{content.artist}</h2>
                            <h3>{content.date}</h3>
                            <p>{content.bio}</p>
                        </div>
                        <div className="flex-2">
                            <div className="slider-container">
                                <p>Image Slider</p>
                                <ImageSlider slides={slides} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
}

export default Section