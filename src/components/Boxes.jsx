import React, { useState, useEffect} from 'react';
import { SectionWrapper } from '../hoc';
import { motion } from 'framer-motion';
import { Link } from "react-scroll";
import {fadeIn, textVariant } from '../utils/motion';
import { projects } from "../constants";
import "../index.css";


const ProjectCard = ({ index,
      name,
      description,
      image}) => {

        const [prevScrollPos, setPrevScrollPos] = useState(0);
        const [visible, setVisible] = useState(true)
        const handleScroll = () => {
          const currentScrollPos = window.scrollY
      
          if(currentScrollPos > prevScrollPos){
              setVisible(false)
          }else{
              setVisible(true)
          }
      
          setPrevScrollPos(currentScrollPos)
      }
      
      useEffect( () => {
          window.addEventListener('scroll', handleScroll);
      
          return () => window.removeEventListener('scroll', handleScroll)
      })
        const [showCard, setShowCard] = useState(false)
          return (
            <div className='nav-item'>
            <Link to="kontakt" spy={true} smooth={true} offset={-100} duration={500}>
              <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}  className="bg-slate-50 p-5 rounded-2xl sm:w-[360px] w-full mt-10"
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 8px rgb(0, 0, 0)"}}
                layout
                 > 

                    <div className="relative w-full h-[200px]">
                      <img src={image}
                        alt={name}
                        className="w-full h-full object-cover rounded-2xl"/>
  
                    </div>
                    <div className="mt-5 text-black ">
                      <h3 className="text-black font-bold text-[20px] font-poppins">{name}</h3>
                      <p className="mt-2 text-brown text-[16px] font-poppins">{description}</p>
                    </div>
              </motion.div></Link>
        </div>

          )
  }

  const Boxes = () => {
      return (
        <section id="boxes">
        
        <div class="positioned">
        <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-60 text-black text-[25px] max-w-3xl leading-[5px] font-poppins ">
          Lad mig være din partner i...
          </motion.p>
          </div>
          <div className="flex flex-wrap gap-5">
          {projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
          
          </div>
          
         
      </section>
      )
  }


  export default SectionWrapper(Boxes, "boxes") 