import React from 'react';
import './About.css';
import Image from '../../assets/avatar-2.svg';

import Resume from '../../assets/Mohit Patel 2.0.pdf';


const About = () => {
    const downloadResume = () => {
        window.open(Resume, '_blank');
    }

    return (
        <section className="about container section" id="about">
            <h2 className="section__title">About Me </h2>

            <div className="about__container grid">
                <img src={Image} alt="profile" className='about__img' />

                <div className="about__data grid">
                    <div className="about__info">
                        <p className="about__description">
                            Hello! I'm Mohit Patel, based in Indore, Madhya Pradesh. 
                            I'm pursuing a Bachelor of Technology in Computer Science and Engineering 
                            from Indore Institute of Science and Technology (RGPV University).<br /><br />
                            I am passionate about Java Full Stack Development with hands-on experience 
                            in projects like RideShare (React + Spring Boot + MySQL), 
                            E-Learning Platform (Java, JSP, Servlets), and Event Management System (Spring Boot + Hibernate).<br /><br />
                            My focus is on building scalable applications, strengthening my problem-solving 
                            skills, and growing as a Software Engineer. Here are some technologies I’ve been 
                            working with recently:
                        </p>
                        <ul className="about__list">
                            <li>Java</li>
                            <li>Spring Boot</li>
                            <li>React.js</li>
                            <li>MySQL</li>
                            <li>Hibernate</li>
                            <li>JavaScript (ES6+)</li>
                        </ul>
                        <button className="btn" onClick={downloadResume}>Download CV</button>
                    </div>
                </div>
            </div>

          
        </section>
    )
}

export default About;
