import React, { useState, useEffect} from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';
import { services } from '../constants';
import { SectionWrapper } from '../hoc';
import { Link } from "react-scroll";




const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 *
        index, 0.75)}
        className="w-full text-brown p-[1px] rounded-[20px] font-poppins"
        >
          <div options={{
            max: 45,
            scale: 1,
            speed: 450,
          }} className="bg-slate-50 rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col font-poppins">
            <img src={icon} alt={title}
            className="w-16 h-16 object-contain" />
            <h3 className="text-brown text-[20px] font-bold text-center font-poppins">{title}</h3>
          </div>
      </motion.div>
    </Tilt>
  )
}


const Services = () => {

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
    <section id="services">
      <>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>En indgang - dit behov:</p>
          <h2 className={styles.sectionHeadText}>Hvad tilbyder jeg?</h2>
        </motion.div>


        <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-4 text-black text-[15px] max-w-3xl leading-[30px] font-poppins">
        Udgangspunktet er altid din virksomhed og dine behov og ønsker.
        Vi leverer en komplet plan for kompetenceudvikling, hvor vi tager hånd om alt det
        tidstunge administrative arbejde og sammensætter et skræddersyet opkvalificeringsforløb,
        som er fuldstændig tilpasset din virksomhed eller organisation. I samspil finder vi
        løsninger, som sikrer din virksomheds udvikling og økonomiske interesser, hvor
        ”omkostningerne” til efter- videreuddannelse bliver mindst muligt
        Vi mener, at kompetenceudvikling er afgørende for at skabe vækst og udvikling i
        samfundet og dermed din virksomhed. Udvikling af medarbejdere øger fastholdelse af
        medarbejdere og giver et positivt image, som gør rekruttering lettere. Økonomisk er
        efteruddannelse ofte fordelagtigt - retning og forståelse for kompetenceløft gør gode
        medarbejdere bedre.
        Vores rådgivning er kendetegnet ved handlekraft, integritet og oprigtig nysgerrighed, og vi
        hylder det enkle og fleksible. Vi er yderst professionelle og tænker på bundlinjeeffekt. Med
        Janri ApS som din passionerede og effektive sparringspartner kan du være sikker på at
        opnå vækst og udvikling i din virksomhed.
        Kontakt os i dag, så vi kan tage en uforpligtende snak om dine behov og ønsker.
        </motion.p>
        
        <div className='nav-item'>
          <Link to="kontakt" spy={true} smooth={true} offset={-100} duration={500}>
        <button type="button" className="mt-10 flex items-center h-fit py-4 px-6 bg-brown rounded-[32px] gap-[12px]">
          <span className="font-semibold text-[16px] text-white">
            Kontakt
          </span>
        </button></Link>
        </div>

        <div className="mt-20 flex flex-wrap gap-10">
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service}/>
          ))}
        </div>

      </>
    </section>
  )
}

export default SectionWrapper(Services, "services")