import React,{ useContext } from 'react';
import Marquee from "react-fast-marquee";

import './Skills.css'

import { ThemeContext } from '../../contexts/ThemeContext';
import { skillsData } from '../../data/skillsData'
import { skillsImage } from '../../utils/skillsImage'

function Skills() {

    const { theme } = useContext(ThemeContext);

    const skillBoxStyle = {
        backgroundColor: theme.tertiarySkills,
        boxShadow: `0px 0px 30px ${theme.tertiarySkillsHover}`
    }

    return (
        <div className="skills" style={{backgroundColor: theme.secondary}}>
            <div className="skillsHeader">
                <h2 style={{color: theme.primary50}}>Skills</h2>
            </div>
            <div className="skillsContainer">

                        {skillsData.map((skill, id) => (
                            <div className="skill--box" key={id} style={skillBoxStyle}>
                                <img src={skillsImage(skill)} alt={skill} backgroundColor={theme.secondary}/>
                                <h3 style={{color: theme.secondary}}>
                                    {skill}
                                </h3>
                            </div>
                        ))}
            </div>
        </div>
    )
}

export default Skills
