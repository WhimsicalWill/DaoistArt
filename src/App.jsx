import "./App.scss"
import Intro from "./components/Intro/Intro.jsx"
import Description from "./components/Description/Description.jsx";
import Section from "./components/Section/Section.jsx"

const App = () => {
  const content1 = {
    title: "Dragon Pine",
    artist: "Wu Boli",
    date: "late 14th – early 15th century"
  }
  const content2 = {
    title: "Dragon Pine",
    artist: "Wu Boli",
    date: "late 14th – early 15th century"
  }
  const content3 = {
    title: "Dragon Pine",
    artist: "Wu Boli",
    date: "late 14th – early 15th century"
  }
  const images1 = {
    data: "TODO",
  }
  const images2 = {
    data: "TODO",
  }
  const images3 = {
    data: "TODO",
  }

  return (
    <div className="app">
      <Intro className="test" />
      <Description />
      <Section className="section" images={images1} content={content1} />
      <Section className="section" images={images2} content={content2} />
      <Section className="section" images={images3} content={content3} />
    </div>
  );
};

/* <div style={containerStyles}>
        <p>Image Slider</p>
        <ImageSlider slides={slides} />
*/

export default App;
