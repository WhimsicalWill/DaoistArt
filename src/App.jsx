import "./App.scss"
import Intro from "./components/Intro/Intro.jsx"
import Section from "./components/Section/Section.jsx"
import Artwork1 from "./components/Artwork/Artwork1.jsx"
import Artwork2 from "./components/Artwork/Artwork2.jsx"
import Artwork3 from "./components/Artwork/Artwork3.jsx"

const App = () => {
	const leftContent1 = {
		title: "Dragon Pine",
		artist: "Wu Boli",
		date: "late 14th – early 15th century",
		description: "This collection of paintings from around the early 15th century depicts a twisting pine tree that is reminiscent of a dragon. The artist Wu Boli created this visual rendering of the so called “Dragon Pine” as an artifact associated with June Hao’s description of the entity. June Hao, a chinese hermit from the 10th century described the idea of “a gigantic pine tree, its aged bark overgrown with lichen, its winged scales seeming to ride in the air. Its stature is like that of a coiling dragon trying to reach the Milky Way.” The different paintings by Wu Boli show the pine tree from different perspectives, and in most of them it is present in the foreground of the painting. The minimalistic art style guides the viewer’s eye onto the tree itself as a being that is alive and grasping for the heavens."
	}

	const leftContent2 = {
		title: "Walking on a Mountain Path",
		artist: "Ma Yuan",
		date: "Southern Song Dynasty",
		description: "This work contains a painting with a poem and calligraphy. The painting depicts a man peacefully situated in nature underneath a sprawling tree. The art heavily focuses its detail on the lower left of the painting, leaving out virtually all other details. In the lower left corner are some birds and a smaller kid. The man’s poise evokes the feeling that he is appreciating the beauty of the nature surrounding him, and trying his best to leave it undisturbed. The painter, Ma Yuan, was a court painter for Emperor Ningzong of the Southern Song Dynasty. Included in the artwork is a poem from Ningzong himself. I chose this work because it expresses a common virtue of Daoism – namely that man is part of nature and holds no dominion over it."
	}

	const leftContent3 = {
		title: "Loquats and a Mountain Bird",
		artist: "Anonymous",
		date: "Southern Song Dynasty",
		description: "This work depicts the simple painting of a mountain bird foraging for loquats. The detail of the two subjects, the bird and the plant, is immediately apparent to the viewer, while the background is left out. I left this artwork for the end of the exhibition, because I think it is interesting to first observe the depiction of a man in nature and then a bird in nature. Ultimately, these pieces convey the same thing – the interaction of different parts of world, and the flow of nature itself. I liked this picture in particular because it is at the same time elegant and humbling. The simple depiction expresses the cycle of life in a way reminiscent to the perfectly balanced yin and yang."
	}

	return (
		<div className="app">
			<Intro />
			<Section leftContent={leftContent1} rightContent={<Artwork1 />} />
			<Section leftContent={leftContent2} rightContent={<Artwork2 />} />
			<Section leftContent={leftContent3} rightContent={<Artwork3 />} />
		</div>
	)
}

export default App
