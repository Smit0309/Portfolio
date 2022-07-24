import {FaLinkedin} from 'react-icons/fa'
import {IoIosMail} from 'react-icons/io'
import {BsFillTelephoneFill} from 'react-icons/bs'
import './style.css';
export default function Footer(){
    return (
        <div className="Footer">
            <section className='section contact center' id='footer'>
                    <h2 className='section__title'>Contact Me</h2>
                    <div className='footer'>
                        <a href="https://www.linkedin.com/in/smit-katara-775455246/" target={'blank'}><FaLinkedin/>Linkedin </a>
                        <span><BsFillTelephoneFill/>+91 9662099955</span>&nbsp;&nbsp;&nbsp;
                        <span><a href={`mailto:katarasmit102@gmail.com`} target={'blank'}><IoIosMail/>katarasmit102@gmail.com</a></span>
                    </div>
            </section>
        </div>
    );
}