import './project.css'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { ImGithub } from "react-icons/im";
import {SiFlutter,SiReact,SiAngular} from "react-icons/si"
const Project = () => {
    
    return ( 
        <div className="q">
        <div className="projects" id='project'>
            
            <p style={{margin:'2%',fontSize:'40px',marginTop:'2%'}}>PROJECTS</p>
            <VerticalTimeline>
                    <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'khaki', color: 'black' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="2021"
                    iconStyle={{ background: 'rgb(20,30,23)', color: 'aqua' }}
                    icon={<SiFlutter />}
                    >
                    <h3 className="vertical-timeline-element-title" >FOOD ORDERING APP</h3>
                    <br/>
                    <p className="vertical-timeline-element-subtitle" style={{margin:'3%' , fontSize:"25px" , letterSpacing:'3px',fontFamily:'monospace'}}>Team of 4 (Team Leader)</p>
                    <p style={{margin:'3%' , fontSize:"20px" , letterSpacing:'2px',fontFamily:'monospace'}}>
                    A mobile application to order food from canteen to shorten waiting time.
                    <br/>
                    <br/>
                    Tools : Flutter,Firebase,Android Studio
                    </p>
                    <a className="gb" href="https://github.com/aravintharaj-s/Food-Order-App-SD-Lab" style={{marginTop:'10%',marginLeft:'40%'}}><ImGithub size={"30px"}/></a>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'lightgreen', color:'black'  }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="2022"
                    iconStyle={{ background: 'rgb(2, 5, 43)', color: '#fff' }}
                    icon={<SiReact />}
                    >
                    <h3 className="vertical-timeline-element-title">BITGUARD</h3>
                    <p className="vertical-timeline-element-subtitle" style={{margin:'3%' , fontSize:"25px" , letterSpacing:'3px',
                    fontFamily:'monospace'}}>Team of 2</p> 
                    <p style={{margin:'3%' , fontSize:"20px" , letterSpacing:'2px',
                    fontFamily:'monospace'}}>
                    BitGuard is an encrypted digital vault with biometric protection that stores credentials and any other 
                    sensitive data.This app encompasses a password generator to create strong, unique passwords.
                    </p>
                    <p style={{margin:'3%' , fontSize:"20px" , letterSpacing:'3px',
                    fontFamily:'monospace'}}
                    >
                    Tools : React Native,Firebase,Visual Studio
                    </p>
                    <a className="gb" href="https://github.com/aravintharaj-s/BitGuard" style={{marginTop:'10%',marginLeft:'40%'}}><ImGithub size={"30px"}/></a>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(156, 194, 255)', color: 'black' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="In Progress"
                    iconStyle={{ background: 'rgb(2, 5, 43)', color: 'white' }}
                    icon={<SiReact />}
                    >
                    <h3 className="vertical-timeline-element-title">PORTFOLIO</h3>
                    <p className="vertical-timeline-element-subtitle" style={{margin:'3%' , fontSize:"25px" , letterSpacing:'3px',
                    fontFamily:'monospace'}}>Personal</p>
                    <p style={{margin:'3%' , fontSize:"20px" , letterSpacing:'2px',
                    fontFamily:'monospace'}}>
                    A website to showcase about me and my works.
                    </p>
                    <p style={{margin:'3%' , fontSize:"20px" , letterSpacing:'3px',
                    fontFamily:'monospace'}}
                    >
                    Tools : React,Visual Studio
                    </p>
                    <a className="gb" href="https://github.com/aravintharaj-s/Portfolio" style={{marginTop:'10%',marginLeft:'40%'}}><ImGithub size={"30px"}/></a>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#FEBF63', color: 'black' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="In Progress" 
                    iconStyle={{ background: 'rgb(0, 10, 154)', color: '#fff' }}
                    icon={<SiAngular />}
                    >
                    <h3 className="vertical-timeline-element-title">SHOPHUB </h3>
                    <p className="vertical-timeline-element-subtitle" style={{margin:'3%' , fontSize:"25px" , letterSpacing:'3px',
                    fontFamily:'monospace'}}>Personal</p>
                    <p style={{margin:'3%' , fontSize:"20px" , letterSpacing:'2px',
                    fontFamily:'monospace'}}>
                    A Single Page Webapp to explore and buy used items.
                    </p>
                    <p style={{margin:'3%' , fontSize:"20px" , letterSpacing:'3px',
                    fontFamily:'monospace'}}
                    >
                    Tools : MongoDB Atlas,Express,AngularJS,NodeJS
                    </p>
                    <a className="gb" href="https://github.com/aravintharaj-s/ShopHub" style={{marginTop:'13%',marginLeft:'40%'}}><ImGithub size={"30px"}/></a>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#F76A8C', color: 'black' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="In Progress" dateClassName='datee'
                    iconStyle={{ background: 'rgb(2, 5, 43)', color: '#fff' }}
                    icon={<SiReact />}
                    >
                    <h3 className="vertical-timeline-element-title">MUSIC+ </h3>
                    <p className="vertical-timeline-element-subtitle" style={{margin:'3%' , fontSize:"25px" , letterSpacing:'3px',
                    fontFamily:'monospace'}}>Team of 2</p>
                    <p style={{margin:'3%' , fontSize:"20px" , letterSpacing:'2px',
                    fontFamily:'monospace'}}>
                    An App with an aim to stream music based on user's emotions.
                    </p>
                    <p style={{margin:'3%' , fontSize:"20px" , letterSpacing:'3px',
                    fontFamily:'monospace'}}
                    >
                    Tools : MongoDB Atlas,Express,React,NodeJS,Visual Studio
                    </p>
                    <a className="gb" href="https://github.com/aravintharaj-s/Music_plus" style={{marginTop:'10%',marginLeft:'40%'}}><ImGithub size={"30px"}/></a>
                    </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
        </div>
     );
}
 
export default Project;