import "./App.scss"
import ImageSlider from "./components/ImageSlider/ImageSlider";
import Intro from "./components/Intro/Intro.jsx"
import Description from "./components/Description/Description.jsx";
import Section from "./components/Section/Section.jsx"

const App = () => {
  const slides = [
    { url: "http://localhost:3000/DaoistArt/dragon_pine1.jpg", title: "beach" },
    { url: "http://localhost:3000/DaoistArt/dragon_pine2.jpg", title: "boat" },
    { url: "http://localhost:3000/DaoistArt/dragon_pine3.jpg", title: "forest" },
    { url: "http://localhost:3000/DaoistArt/dragon_pine4.jpg", title: "city" },
    { url: "http://localhost:3000/DaoistArt/dragon_pine5.jpg", title: "italy" },
  ];
  const containerStyles = {
    width: "500px",
    height: "280px",
    margin: "0 auto",
    borderStyle: "dashed",
  };
  return (
    <div className="app">
      <Intro />
      <Description />
      <Section images={images1} content={content1} />
      <Section images={images2} content={content2} />
      <Section images={images3} content={content3} />
      {/* <div style={containerStyles}>
        <p>Image Slider</p>
        <ImageSlider slides={slides} />
      </div> */}
    </div>
  );
};

export default App;
