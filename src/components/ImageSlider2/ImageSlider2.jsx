import AwesomeSlider from 'react-awesome-slider';
import AwesomeSliderStyles from 'react-awesome-slider/src/styles'

const ImageSlider2 = (
  <AwesomeSlider cssModule={AwesomeSliderStyles}>
    <div data-src="http://localhost:3000/DaoistArt/dragon_pine1.jpg" />
    <div data-src="http://localhost:3000/DaoistArt/dragon_pine2.jpg" />
    <div data-src="http://localhost:3000/DaoistArt/dragon_pine3.jpg" />
  </AwesomeSlider>
);

export default ImageSlider2