import Particles from "react-tsparticles"
import particlesOptions from "./particles.json"


const ParticleBackground = () => {
	return <div className="App">
				<Particles id="tsparticles" height="100vh"
					options={particlesOptions}
				/>
			</div>
}

export default ParticleBackground