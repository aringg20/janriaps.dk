import React from 'react'
import { Tilt } from 'react-tilt';
import { SectionWrapper } from '../hoc';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import {fadeIn, textVariant } from '../utils/motion';
import { projects } from "../constants";

const ProjectCard = ({ index,
    name,
    description,
    tags,
    image,
    source_code_link}) => {
        return (
            <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
                test
            </motion.div>
        )
}

const FeedbackCard = () => {
    return (
        <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
         
        </div>
    )
}


export default SectionWrapper(FeedbackCard, "feedback")