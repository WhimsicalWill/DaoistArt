import Intro from "./components/intro/Intro"
import "./app.scss"
import ImageSlider from "./ImageSlider.jsx"

function App() {
  const slides = [
    {url: "./images/dragon_pine1.jpg", title: "Dragon Pine 1"},
    {url: "https://localhost:3000/dragon_pine2.jpg", title: "Dragon Pine 2"},
    {url: "https://localhost:3000/dragon_pine3.jpg", title: "Dragon Pine 3"},
    {url: "https://localhost:3000/dragon_pine4.jpg", title: "Dragon Pine 4"},
    {url: "https://localhost:3000/dragon_pine5.jpg", title: "Dragon Pine 5"},
    {url: "https://localhost:3000/dragon_pine6.jpg", title: "Dragon Pine 6"},
    {url: "https://localhost:3000/dragon_pine7.jpg", title: "Dragon Pine 7"},
    {url: "https://localhost:3000/dragon_pine8.jpg", title: "Dragon Pine 8"},
  ]

  const containerStyles = {
    width: '500px',
    height: '280px',
    margin: '0 auto',
  }

  return (
    <div>
        <h1>Daoist Art</h1>
        <div style={containerStyles}>
          <ImageSlider slides={slides} />
        </div>
    </div>
  );
}

export default App;
