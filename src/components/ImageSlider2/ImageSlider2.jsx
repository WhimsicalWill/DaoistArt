import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'

const slideImages = [
		{ url: "http://localhost:3000/DaoistArt/dragon_pine1.jpg", caption: 'Slide 1' },
		{ url: "http://localhost:3000/DaoistArt/dragon_pine2.jpg", caption: 'Slide 2' },
		{ url: "http://localhost:3000/DaoistArt/dragon_pine3.jpg", caption: 'Slide 3' },
		{ url: "http://localhost:3000/DaoistArt/dragon_pine4.jpg", caption: 'Slide 4' },
		{ url: "http://localhost:3000/DaoistArt/dragon_pine5.jpg", caption: 'Slide 5' },
		{ url: "http://localhost:3000/DaoistArt/dragon_pine6.jpg", caption: 'Slide 6' },
		{ url: "http://localhost:3000/DaoistArt/dragon_pine7.jpg", caption: 'Slide 7' },
]

const ImageSlider2 = () => {
    return (
      <div className="slide-container">
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div className="each-slide" key={index}>
              <div style={{'backgroundImage': `url(${slideImage.url})`}}>
                <span>{slideImage.caption}</span>
              </div>
            </div>
          ))} 
        </Slide>
      </div>
    )
}

export default ImageSlider2