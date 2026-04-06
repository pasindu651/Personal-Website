import {Particles} from "react-tsparticles";
import ParticlesConfig from "./particles-config.js";
import {loadSlim} from "tsparticles-slim";

export default function ParticleBackground() {
    const particlesInit = async (main) => {
        console.log(main);
        await loadSlim(main);
    };
    const particlesLoaded = (container) => {
        console.log(container);
    };
    return (
        <div className="particles-background">
            <Particles
                options={ParticlesConfig}
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
            />
        </div>
    );
}