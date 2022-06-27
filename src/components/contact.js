
import { ImLinkedin,ImWhatsapp,ImGithub,ImTelegram } from "react-icons/im";
import {SiGmail} from "react-icons/si";
import './contact.css'
const Contact = () => {
    return ( 
        <div className="contact" id="contact">
            <div className="item">
                <a className="gm" href="https://mail.google.com/mail/u/0/?fs=1&to=aravioct@gmail.com&tf=cm"><SiGmail size={"30px"}/></a>
                <a className="li" href="https://www.linkedin.com/in/aravintharaj-s-55147a20a/"><ImLinkedin size={"30px"}/></a>
                <a className="wp" href="https://api.whatsapp.com/send/?phone=917305104764&text&app_absent=0"><ImWhatsapp size={"30px"}/></a>
                <a className="gb" href="https://github.com/aravintharaj-s"><ImGithub size={"30px"}/></a>
                <a className="tl" href="https://t.me/Aravintharajs"><ImTelegram size={"30px"}/></a>
            </div>

          <p style={{margin:'2%'}}>  COPYRIGHT © 2022 aravintharaj s </p>
        </div>
     );
}
 
export default Contact;