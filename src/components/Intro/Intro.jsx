import './Intro.scss'

const descriptionPart1 = "Daoism has its roots in 500 B.C. when the philosopher Lao Tzu wrote the Tao Te Ching in ancient China. Daoism emphasizes that humans and animals should live in harmony with the Tao (or Dao), which is effectively the flow of the universe itself. In many ways Daoism overlaps with the traditions of Buddhism and Hinduism, but there are still works that can be considered uniquely Daoist."
const descriptionPart2 = "In many Daoist works of art, one can see clearly the themes of cosmic balance, otherworldly realms, natural harmony, and man being a part of nature rather than merely in it."
const daoism_url = "http://localhost:3000/DaoistArt/daoism.svg" 

const Intro = () => {
	return  <div className="intro-container">
				<div className="intro-inner-container">
					<div className="intro-container">
						<div className="intro-content">
							<h1 className="intro-title">Daoist Art</h1>
							<span className="intro-subtitle">A collection of art from the ancient Chinese philosophy/religion</span>
							<img src={daoism_url} alt="" />
						</div>
					</div>
					<div className="description-container">
						<div className="description-content">
							<p>{descriptionPart1}</p>
							<p>{descriptionPart2}</p>
						</div>
					</div>
				</div>
			</div>
}

export default Intro