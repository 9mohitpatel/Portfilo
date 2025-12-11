import React, { useState } from "react";
import "./Resume.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Button from "./Button";

import WorkExperience from "./WorkExperience";

const Resume = () => {
    const [tabIndex, setTabIndex] = useState(0);

    return (
        <section className="resume container section" id="resume">
            <h2 className="section__title">Experience & Projects</h2>

            <div className="resume__container">
                <Tabs
                    className="tabs"
                    selectedIndex={tabIndex}
                    onSelect={(index) => setTabIndex(index)}
                    selectedTabClassName={"is-active"}
                    selectedTabPanelClassName={"is-active"}
                >
                    {/* Dynamic WorkExperience Tabs */}
                    <TabList className="tab__list">
                        {WorkExperience.map((experience, index) => {
                            const { id, company } = experience;
                            return (
                                <Tab className="tab" key={`company-${id}`}>
                                    <Button>{company}</Button>
                                </Tab>
                            );
                        })}

                        {/* Education Tab */}
                        <Tab className="tab" key="education">
                            <Button>Education</Button>
                        </Tab>
                    </TabList>

                    {/* Experience Panels */}
                    {WorkExperience.map((experience) => {
                        const { id, company, yearsActive, title, information } = experience;
                        return (
                            <TabPanel className="tab__panel" key={`panel-${id}`}>
                                <h2 className="tab__panel-title">
                                    {title} @ {company}
                                </h2>
                                <p className="tab__panel-subtitle">{yearsActive}</p>
                                <ul className="tab__panel-list">
                                    {information.map((info, index) => {
                                        return <li key={`info-${index}`}>{info}</li>;
                                    })}
                                </ul>
                            </TabPanel>
                        );
                    })}

                    {/* Education Panel */}
                    <TabPanel className="tab__panel" key="education-panel">
                        <h2 className="tab__panel-title">Education</h2>
                        <ul className="tab__panel-list">
                            <li>
                                <strong>B.Tech in Computer Science & Engineering</strong> – Indore Institute of Science and Technology, RGPV University (CGPA: 7.15, Expected 2026)
                            </li>
                            <li>
                                <strong>Higher Secondary (Class 12)</strong> – Shri Saibaba Public School, MP Board (84.8%, 2022)
                            </li>
                            <li>
                                <strong>Secondary (Class 10)</strong> – Shri Saibaba Public School, MP Board (91%, 2020)
                            </li>
                        </ul>
                    </TabPanel>
                </Tabs>
            </div>
        </section>
    );
};

export default Resume;
