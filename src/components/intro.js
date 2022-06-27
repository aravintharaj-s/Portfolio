import './intro.css';
import Typewriter from 'typewriter-effect';
const Intro = () => {
    return (
        <div className="cont" id='intro'> 
            <div className="intro">
                <div className="name">ARAVINTHARAJ </div>
                <div className="titles">KPCV '19 | SSN '23</div>
                <div className="one">
                <Typewriter 
                onInit={(typewriter)=>{
                    typewriter
                    .typeString("BUDDING PROGRAMMER")
                    .pauseFor(2000)
                    .deleteAll()
                    .typeString("COMPETITIVE CODER")
                    .pauseFor(2000)
                    .deleteAll()
                    .typeString("APPLICATION DEVELOPER ( LOADING )")
                    .pauseFor(2000)
                    .deleteAll()
                    .typeString("WEB DEVELOPER ( IN PROGRESS )")
                    .pauseFor(2000)
                    .deleteAll()
                    .start();
                }}
                options={{
                    autoStart: true,
                    loop: true,
                  }}
                />
                </div>
                <p className="resume" >
                   <a href='https://drive.google.com/file/d/1y_OM7r7KHvvDc1TFGp0pfgsVCPjOsBkt/view?usp=sharing'> Resume</a>
                </p>
            </div>
            <div className="ima">
            </div>
        </div>
     );
}
 
export default Intro;