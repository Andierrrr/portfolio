import React, { useState, useEffect } from 'react';
import './intro.css';
        // eslint-disable-next-line
        // eslint-disable-next-line
import { Link } from 'react-scroll';

const Intro = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const phrases = [
        "Graduate Student",
        "Future Software Engineer",
        "Future Web Developer"
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        }, 3000); // Change text every 3 seconds

        return () => clearInterval(interval); // Cleanup on unmount
        // eslint-disable-next-line
    }, []);

    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">I'm Andy</span>
                <span className="introRole">{phrases[currentIndex]}</span>
                <p className="introPara">welcome to my website<br /></p>
            </div>
            
        </section>
    );
}

export default Intro;
