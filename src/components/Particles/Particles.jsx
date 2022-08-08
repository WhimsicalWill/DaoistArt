import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
// import ParticlesOptions from "./particles.json"

const ParticleBackground = () => {
	const particlesInit = useCallback(async (engine) => {
		await loadFull(engine);
	}, []);

	const particlesLoaded = useCallback(async (container) => {
	}, []);

	return (
		<Particles
			id="tsparticles"
			init={particlesInit}
			loaded={particlesLoaded}
			height="100vh"
			options={{
				fullScreen: {
					enable: false,
					zIndex: 0,
				},
				background: {
					color: {
						value: "#0d4555",
					},
				},
				fpsLimit: 120,
				interactivity: {
					events: {
						resize: true,
					},
				},
				particles: {
					color: {
						value: ["#000", "#fff"],
					},
					links: {
						color: "#000",
						distance: 100,
						enable: true,
						opacity: 1,
						width: 2,
					},
					move: {
						directions: "none",
						enable: true,
						random: false,
						speed: 6,
						straight: false,
					},
					number: {
						density: {
							enable: true,
							area: 800,
						},
						value: 80,
					},
					opacity: {
						value: 1,
					},
					shape: {
						type: "circle",
					},
					size: {
						value: { min: 1, max: 5 },
					},
				},
				detectRetina: true,
			}}
		/>
	);
};

export default ParticleBackground