
import ParticlesComponent from "../particles";
import './landing.css'

const Landing = () => {
    return (
        <div className="wrapper">
            <ParticlesComponent id='particles'/>
            <h1 className="text">Hello World!</h1>
        </div>
    )
}

export default Landing;
