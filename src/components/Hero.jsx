import React from 'react';
import portrait from '../assets/portrait.png';
import {TypeAnimation} from 'react-type-animation';
import '../index.css';
import { SectionWrapper } from '../hoc';
import { motion } from "framer-motion";
import { slideIn, staggerContainer, textVariant } from '../utils/motion';

const Hero = () => (
  <section id="hero" >
    <motion.div variants={textVariant(1.1)}>
      <div>
        <div className="mt-10 relative">
          <img src={portrait} alt="portrait" className='mt-20 w-full sm:h-[400px] h-[300px] object-cover z-10'/>
        </div>
          <div>
              <h2 className="flex-1 font-poppins font-semibold
              ss:text-[35px] text-[35px] text-black ss:leading-[60px]
              leading-[45px] text-block absolute max-w-3xl">
                Kompetenceudvikling Skaber 
                <br className=""/> {" "}

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
                  style={{ fontSize: '1em', display: 'inline-block' }}
                />
                </span> {" "}
                </h2>
          </div>  
          <div className='mt-40'>
                <h4 className="font-poppins font-semibold leading-[55px] flex-1 ss:text[32px] text-black text-[30px] text-block">
                  Velkommen til Janri ApS</h4>
                <p className='mt-20 font-poppins leading-[22px] flex-1 ss:text[16px] text-black text-[16px] text-block'>
                  Din specialist i bæredygtige og økonomisk fordelagtige løsninger
                  til kompetenceudvikling og efteruddannelse. Med et indgående kendskab til
                  arbejdsmarkedet og beskæftigelsesområdet samt mange års erfaring indenfor HR og
                  ledelses rådgivning, kan vi som din fleksible partner medvirke til vækst og udvikling ved at
                  sætte kompetenceudvikling på den strategiske plan.
                </p>
                
            </div>
          </div>
    
    </motion.div>
  </section>
)


export default SectionWrapper(Hero, "hero")