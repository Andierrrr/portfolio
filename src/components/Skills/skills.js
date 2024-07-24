import React from 'react';
import './skills.css';

const Skills = () => {
    return (
        <section id='skills'>
            <span className="skillTitle">About Me</span>
            <span className="skillDesc">
                I am a skilled and passionate web designer with experience in creating visually appealing and user-friendly websites. 
                I have a strong understanding of design and a keen eye for detail. 
                I am proficient in HTML, CSS, and JavaScript, as well as design software such as Adobe Photoshop and Illustrator.
            </span>
            <div className="skillBars">
                <div className="skillBar">
                    <div className="skillBarText">
                        <h2>Education</h2>
                        <p>
                            <strong>Bachelor of Computer Science</strong><br />
                            Kean University, Jan, 2023 - May,2024
                        </p>
                        <p>
                            <strong>MS In Computer Information Systems</strong><br />
                            Kean University, May, 2024 - Present
                        </p>
                    </div>
                </div>
                <div className="skillBar">
                    <div className="skillBarText">
                        <h2>Future Goals</h2>
                        <p>
                        I'm a Computer Science major with a passion for Data Science and Software Engineering, driven by a deep interest in solving complex problems through data and technology.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;
