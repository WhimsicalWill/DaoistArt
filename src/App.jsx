import "./App.scss"
import Intro from "./components/Intro/Intro.jsx"
import Description from "./components/Description/Description.jsx";
import Section from "./components/Section/Section.jsx"

const App = () => {
  const content1 = {
    title: "Dragon Pine",
    artist: "Wu Boli",
    date: "late 14th – early 15th century",
    bgcolor: "#e5989b",
    description: "This collection of paintings dated around the early 15th century depicts a twisting pine tree that is reminiscent of a dragon. The artist Wu Boli created this visual rendering of the so called “Dragon Pine” as an artifact associated with June Hao’s description of the entity. June Hao, a chinese hermit from the 10th century described the idea of “a gigantic pine tree, its aged bark overgrown with lichen, its winged scales seeming to ride in the air. Its stature is like that of a coiling dragon trying to reach the Milky Way.” The different paintings by Wu Boli show the pine tree from different perspectives, and in most of them it is present in the foreground of the image. The presence of a minimalistic background and art style guides the viewer’s focus onto the tree itself as a being that is alive and its majesticly grasping for the heavens.",
  }
  const content2 = {
    title: "Walking on a Mountain Path in Spring",
    artist: "Ma Yuan",
    date: "Southern Song Dynasty",
    bgcolor: "#ffb4a2",
    description: "This work contains a painting with a poem and calligraphy as well. The painting depicts a man peacefully situated in nature underneath a sprawling tree. The art heavily focuses its detail on the lower left of the image, leaving out virtually all other details. In the lower left corner are some birds and a smaller kid. The man’s poise evokes the feeling that this man is appreciating the beauty of the nature surrounding him, and trying his best to leave it undisturbed. The painter, Ma Yuan, was a court painter for Emperor Ningzong of the Southern Song Dynasty. Included in the work is a poem from Ningzong himself. It goes: “The wildflowers dance when brushed by my sleeves. Reclusive birds make no sound as they shun the presence of people.” I chose this work because it expresses common virtues of Daoism – namely that man is part of nature and holds no dominion over it.",
  }
  const content3 = {
    title: "Loquats and a Mountain Bird",
    artist: "Anonymous",
    date: "Southern Song Dynasty",
    bgcolor: "#ffcdb2",
    description: "This work depicts the simple image of a mountain bird foraging for loquats. The detail of the two subjects, the bird and the plant, is immediately apparent to the viewer, while the background is left out. Throughout my search for objects, I have been looking for art pieces that reflect the philosophy and culture of Daoism. I chose this particular image as my final object because I think it is interesting to make the viewer observe the depiction of a man in nature followed by a bird in nature. Ultimately, these pieces convey the same thing – the interaction of different parts of world, and the flow of nature itself. I liked this picture in particular because it is at the same time elegant and humbling. I think being able to appreciate such a simple depiction of an aspect of nature can increase ones appreciation and gratitude.",
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
