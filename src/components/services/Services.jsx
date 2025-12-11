import React from 'react';
import './Services.css';
import { FaLaptopCode, FaReact, FaDatabase } from "react-icons/fa";

const data = [
    {
        id: 1,
        icon: <FaLaptopCode size={50} />,
        title: "Full Stack Development",
        description:
            "Building scalable and responsive full-stack web applications using React, Spring Boot, and MySQL.",
    },
    {
        id: 2,
        icon: <FaReact size={50} color="#61DBFB" />,
        title: "Frontend Development",
        description:
            "Creating interactive and user-friendly UIs with React.js, JavaScript (ES6+), HTML, and CSS.",
    },
    {
        id: 3,
        icon: <FaDatabase size={50} color="#4CAF50" />,
        title: "Backend Development",
        description:
            "Developing secure and efficient backend systems using Java, Spring Boot, Hibernate, and REST APIs.",
    },
];

const Services = () => {
    return (
        <section className="services container section" id="services">
            <h2 className="section__title">Services</h2>

            <div className="services__container grid">
                {data.map(({ id, icon, title, description }) => {
                    return (
                        <div className="services__card" key={id}>
                            <div className="services__icon">{icon}</div>
                            <h3 className="services__title">{title}</h3>
                            <p className="services__description">{description}</p>
                        </div>
                    )
                })}
            </div>
        </section>
    );
}

export default Services;
