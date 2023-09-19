import React, { useState, useEffect} from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';
import { Link } from "react-scroll";




const Kurser = () => {
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
  return (
    <div className="mt-10 bg-transparent font-poppins">
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Skræddersyet oplæg:</p>
          <h2 className={styles.sectionHeadText}>Kurser & Workshops</h2>
        </motion.div>
        <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-2 text-black text-[17px] max-w-3xl leading-[25px] font-semibold font-poppins">
          Inspirationsoplæg, workshops og kurser der sætter den danske madkultur på dagsordenen.
        </motion.p>
        <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-10 text-black text-[15px] max-w-3xl leading-[30px] font-poppins">
          I samarbejde med Lone K. Jørgensen tilbyder vi oplæg og kurser indenfor kost og ernæringsområdet, som naturligvis er indviduelt afstemt
          og tilpasset virksomhedens, institutionens eller foreningens konkrete målgruppe. 
        </motion.p>
        <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-4 text-black text-[15px] max-w-3xl leading-[30px] font-poppins">
          Lone er en erfaren og dedikeret underviser, som altid sætter en ære i at formidle med et smil og glimt i øjet uden at kompromis med læring og praksisnær
          udbytte. 
          Lone er uddannet ernæringsassistent og har desuden en administrationsbachelor.
          Derudover har hun en solid og mangeårig erfaring som underviser, og har også arbejdet med kostplanlægning med alle målgrupper.
        </motion.p>
        <div className='nav-item'>
          <Link to="kontakt" spy={true} smooth={true} offset={-100} duration={500}>
        <button type="button" className="mt-10 flex items-center h-fit py-4 px-6 bg-brown rounded-[32px] gap-[12px]">
          <span className="font-semibold text-[16px] text-white">
            Kontakt
          </span>
        </button></Link>
        </div>
    </div>
  )
}

export default SectionWrapper(Kurser, "kurser")