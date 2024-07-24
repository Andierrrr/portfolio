import React, { useRef } from 'react';
import './contact.css';

import githubIcon from '../../assets/github.png';
import linkedinIcon from '../../assets/linkden.png';
import pythonIcon from '../../assets/python.png';
import htmlIcon from '../../assets/html.png';
import phpIcon from '../../assets/php.png';
import reactIcon from '../../assets/react.png';
import sqlIcon from '../../assets/sql.png';

// eslint-disable-next-line
import logo from '../../assets/logo.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_6phm4ar', 'template_zcxds5a', form.current, 'blaHt_5KIJ711DfGH')
            .then((result) => {
                console.log(result.text);
                e.target.reset();
                alert('Email Sent!');
            }, (error) => {
                console.log(error.text);
            });
    };
    
    return (
        <div id='contactPage'>
            <div id="clients">
                <h1 className="contactPageTitle">My Skills</h1>
                <span className="clientDesc">
                    These are the programming languages I am familiar with and have used on projects.
                </span>
                <div className="clientImgs">
                    <img src={pythonIcon} alt="Python" className="clientImg" />
                    <img src={htmlIcon} alt="HTML" className="clientImg" />
                    <img src={sqlIcon} alt="SQL" className="clientImg" />
                    <img src={reactIcon} alt="React" className="clientImg" />
                    <img src={phpIcon} alt="PHP" className="clientImg" />
                </div>
            </div>
            <div id="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="contactDesc">Please fill out the form below.</span>
                <form className="contactForm" ref={form} onSubmit={sendEmail}>
                    <input type="text" className="name" placeholder='Your name' name='from_name' />
                    <input type="text" className="email" placeholder='Your Email' name='from_email' />
                    <textarea name="message" placeholder='Your Message' rows={5} className='msg'></textarea>
                    <button type="submit" value="Send" className='submitBtn'>Submit</button>
                </form>
                <div className="links">
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                        <img src={githubIcon} alt="GitHub" className="link" />
                    </a>
                    <a href="https://www.linkedin.com/in/andy-allaico-79390029b/" target="_blank" rel="noopener noreferrer">
                        <img src={linkedinIcon} alt="LinkedIn" className="link" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Contact;
