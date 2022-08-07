import "./App.scss"
import Intro from "./components/Intro/Intro.jsx"
import Description from "./components/Description/Description.jsx"
import Section from "./components/Section/Section.jsx"
import Artwork1 from "./components/Artwork/Artwork1.jsx"
import Artwork2 from "./components/Artwork/Artwork2.jsx"
import Artwork3 from "./components/Artwork/Artwork3.jsx"

const App = () => {
	const leftContent1 = {
		title: "Dragon Pine",
		artist: "Wu Boli",
		date: "late 14th – early 15th century",
		description: "This collection of paintings dated around the early 15th century depicts a twisting pine tree that is reminiscent of a dragon. The artist Wu Boli created this visual rendering of the so called “Dragon Pine” as an artifact associated with June Hao’s description of the entity. June Hao, a chinese hermit from the 10th century described the idea of “a gigantic pine tree, its aged bark overgrown with lichen, its winged scales seeming to ride in the air. Its stature is like that of a coiling dragon trying to reach the Milky Way.” The different paintings by Wu Boli show the pine tree from different perspectives, and in most of them it is present in the foreground of the image. The presence of a minimalistic background and art style guides the viewer’s focus onto the tree itself as a being that is alive and its majesticly grasping for the heavens.",
	}

	const leftContent2 = {
		title: "Walking on a Mountain Path",
		artist: "Ma Yuan",
		date: "Southern Song Dynasty",
		description: "This work contains a painting with a poem and calligraphy as well. The painting depicts a man peacefully situated in nature underneath a sprawling tree. The art heavily focuses its detail on the lower left of the image, leaving out virtually all other details. In the lower left corner are some birds and a smaller kid. The man’s poise evokes the feeling that this man is appreciating the beauty of the nature surrounding him, and trying his best to leave it undisturbed. The painter, Ma Yuan, was a court painter for Emperor Ningzong of the Southern Song Dynasty. Included in the artwork is a poem from Ningzong himself. I chose this work because it expresses common virtues of Daoism – namely that man is part of nature and holds no dominion over it.",
	}

	const leftContent3 = {
		title: "Loquats and a Mountain Bird",
		artist: "Anonymous",
		date: "Southern Song Dynasty",
		description: "This work depicts the simple image of a mountain bird foraging for loquats. The detail of the two subjects, the bird and the plant, is immediately apparent to the viewer, while the background is left out. Throughout my search for objects, I have been looking for art pieces that reflect the philosophy and culture of Daoism. I chose this particular image as my final object because I think it is interesting to make the viewer observe the depiction of a man in nature followed by a bird in nature. Ultimately, these pieces convey the same thing – the interaction of different parts of world, and the flow of nature itself. I liked this picture in particular because it is at the same time elegant and humbling. I think being able to appreciate such a simple depiction of an aspect of nature can increase ones appreciation and gratitude.",
	}

	const images1 = [
		{ url: "http://localhost:3000/DaoistArt/dragon_pine1.jpg" },
		{ url: "http://localhost:3000/DaoistArt/dragon_pine2.jpg" },
		{ url: "http://localhost:3000/DaoistArt/dragon_pine3.jpg" },
		{ url: "http://localhost:3000/DaoistArt/dragon_pine4.jpg" },
		{ url: "http://localhost:3000/DaoistArt/dragon_pine5.jpg" },
		{ url: "http://localhost:3000/DaoistArt/dragon_pine6.jpg" },
		{ url: "http://localhost:3000/DaoistArt/dragon_pine7.jpg" },
	]

	const images2 = [
		{ url: "http://localhost:3000/DaoistArt/mountain_path.webp" },
	]

	const images3 = [
		{ url: "http://localhost:3000/DaoistArt/loquat_bird.jpg" },
	]

	const rightContent1 = {
		src: "http://localhost:3000/DaoistArt/mountain_path.webp",
		poem: "The wild flowers dance when brushed by my sleeves. Reclusive birds make no sound as they shun the presence of people (觸袖野花多自舞，避人幽鳥不成啼)."
	}

	const rightContent2 = {
		src: "http://localhost:3000/DaoistArt/mountain_path.webp",
		poem: "The wild flowers dance when brushed by my sleeves. Reclusive birds make no sound as they shun the presence of people (觸袖野花多自舞，避人幽鳥不成啼)."
	}

	const rightContent3 = {
		src: "http://localhost:3000/DaoistArt/mountain_path.webp",
		poem: "The wild flowers dance when brushed by my sleeves. Reclusive birds make no sound as they shun the presence of people (觸袖野花多自舞，避人幽鳥不成啼)."
	}

	return (
		<div className="app">
			<Intro className="test" />
			<Description />
			<Section leftContent={leftContent1} rightContent={<Artwork1 content={rightContent1} />} />
			<Section leftContent={leftContent2} rightContent={<Artwork2 content={rightContent2} />} />
			<Section leftContent={leftContent3} rightContent={<Artwork3 content={rightContent3} />} />
		</div>
	)
}

export default App
