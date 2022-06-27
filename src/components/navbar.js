import { useState } from 'react';
import './navbar.css';
import { Link } from 'react-scroll';

const Navbar = () => {
    const [color,setColor] = useState(false)
    const changeColor=()=>{
        if(window.scrollY > 0){
            setColor(true);
        }
        else{
            setColor(false);
        }
    }
    window.addEventListener("scroll",changeColor);
    return (
        
        <div className={color? "header header-bg": "header"}>
            <div className="navbar" id='navbar'>
                <div className="title">RAJ</div>
                <ul className="ul-list">
                <Link className="navitem" to="intro" spy={true} smooth={true} offset={400} duration={1900} > About</Link>
                <Link className="navitem" to="project" spy={true} smooth={true}  duration={1900} > Project</Link>
                <Link className="navitem" to="contact" spy={true} smooth={true}  duration={1900} > Contact</Link>
                    {/*<li ><a href="#intro" className="navitem">About</a></li>
                    <li ><a href="#project" className="navitem">Project</a></li>
    <li ><a href= '#contact' className="navitem">Contact</a></li>*/}
                </ul>
            </div>
        </div>
    );
}
 
export default Navbar;