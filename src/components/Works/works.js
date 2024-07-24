import React from 'react';
import './works.css';
import Portfolio2 from '../../assets/portfolio-2.png';
import Portfolio3 from '../../assets/portfolio-3.png';
import resume from './resume.pdf'; // Adjusted path for resume file

const Works = () => {
    const handlePreviewClick = () => {
        window.open(resume, '_blank');
    };

    const handleDownloadClick = () => {
        const link = document.createElement('a');
        link.href = resume;
        link.download = 'resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section id='works'>
            <h2 className="worksTitle">My Portfolio</h2>
            <p className="worksDesc">Recent projects</p>
            <div className="projectRow">
                <div className="projectBox">
                    <img src={Portfolio2} alt="Portfolio Project 2" className="projectImg" />
                    <p className="projectDesc">
                        An Artificial Intelligence-based facial recognition system leveraging Computer Vision, Deep Learning, and Supervised Machine Learning techniques.
                    </p>
                </div>
                <div className="projectBox">
                    <img src={Portfolio3} alt="Portfolio Project 3" className="projectImg" />
                    <p className="projectDesc">
                        Developed a self-made dataset derived from social media advertisements and employed predictive modeling to anticipate specific advertisement exposure for targeted users.
                    </p>
                </div>
            </div>
            <div className="buttonContainer">
                <button className="workBtn" onClick={handlePreviewClick}>Preview Resume</button>
                <button className="workBtn" onClick={handleDownloadClick}>Download Resume</button>
            </div>
        </section>
    );
}

export default Works;
