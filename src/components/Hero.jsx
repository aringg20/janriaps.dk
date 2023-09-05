import React from 'react';
import { styles } from '../styles';
import portrait from '../assets/portrait.png';
import {TypeAnimation} from 'react-type-animation';
import '../index.css';
import { SectionWrapper } from '../hoc';
import { motion } from "framer-motion";
import { slideIn, staggerContainer, textVariant } from '../utils/motion';

const Hero = () => (
  <section id="home" >
    <motion.div variants={textVariant(1.1)}>
      <div>
        <div className="mt-20 relative">
          <img src={portrait} alt="portrait" className='w-full sm:h-[500px] h-[350px] object-cover z-10'/>
        </div>
          <div>
              <h2 className="flex-1 font-poppins font-semibold
              ss:text-[52px] text-[42px] text-black ss:leading-[80px]
              leading-[55px] text-block absolute">
                Kompetenceudvikling Skaber 
                <br className="sm:block hidden"/> {" "}

                <span className="text-brown">
                <TypeAnimation
                  sequence={[
                    'Vækst.', 
                    1500, // Waits 1s
                    'Værdi.', 
                    1500, // Waits 2s
                    'Resultater.', 
                    2000, // Waits 2s
                  ]}
                  wrapper="span"
                  cursor={true}
                  repeat={Infinity}
                  style={{ fontSize: '1em', paddingLeft: '5px', display: 'inline-block' }}
                />
                </span> {" "}
                </h2>
          </div>  
          <div className="mt-20">
                <h4 className="font-poppins font-semibold leading-[55px] flex-1 relative ss:text[32px] text-black text-[30px] text-block mt-40">
                  Velkommen til Janri ApS.</h4>
                
            </div>
          </div>
    
    </motion.div>
  </section>
)


export default SectionWrapper(Hero, "hero")