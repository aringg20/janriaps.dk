import React, { useState } from 'react';
import { SectionWrapper } from '../hoc';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import {fadeIn, textVariant } from '../utils/motion';
import { projects } from "../constants";


const ProjectCard = ({ index,
    name,
    description,
    image}) => {

      const [showCard, setShowCard] = useState(false)
        return (
            <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)} className="bg-slate-50 p-5 rounded-2xl sm:w-[360px] w-full mt-40"
             whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 8px rgb(0, 0, 0)"}}
              layout
              onClick={()=> setShowCard(!showCard)}> 
              {showCard && (
                <motion.p style={{height: "400px"}}
                initial={{opacity: 0}}
                animate={{opacity: 1}}>
                  Enkel og fleksibel løsning for kompetenceudvikling uden faste omkostninger - Med Janri ApS som
                  din passionerede og effektive sparringspartner kan du være sikker på at opnå vækst og udvikling i
                  din virksomhed. Vi tilbyder:

                  
                  Udarbejdelse af kursusplan for opkvalificering og efteruddannelse
                  Praktisk og administrativ hjælp til kursustilmelding og refusionssikring
                </motion.p>
              )}
                  <div className="relative w-full h-[230px]">
                    <img src={image}
                      alt={name}
                      className="w-full h-full object-cover rounded-2xl"/>

                  </div>
                  <div className="mt-5 text-black ">
                    <h3 className="text-black font-bold text-[24px] font-poppins">{name}</h3>
                    <p className="mt-2 text-brown text-[16px] font-poppins">{description}</p>
                  </div>
            </motion.div>
        )
}

const Boxes = () => {
    return (
        <div className="mt-20 flex flex-wrap gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
         
        </div>
    )
}


export default SectionWrapper(Boxes, "boxes")