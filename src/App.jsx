import ImageSlider from "./ImageSlider";
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
    <div>
      <h1>Daoist Art</h1>
      <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>
    </div>
  );
};

export default App;
