import React from 'react'
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';
import { services } from '../constants';
import { SectionWrapper } from '../hoc';




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
  return (
    <section id="services">
      <>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>En indgang - dit behov:</p>
          <h2 className={styles.sectionHeadText}>Hvad tilbyder jeg?</h2>
        </motion.div>


        <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-4 text-black text-[17px] max-w-3xl leading-[30px] font-poppins">
        Jeg tilbyder HR support, workshop og inspirationsoplæg med professionel sparring primært til hotel- og
        restaurationsbranchen.
        I samspil sikrer vi din virksomheds udvikling med medarbejdernes rette kompetencer ved bl.a at sætte
        kompetenceudvikling på den strategiske plan.
        Jeg leverer en komplet plan for kompetenceudvikling. Det betyder, at du kan få sparring og assistance fra A-
        Z i hele processen - både hvad angår medarbejder involvering og den konkrete afdækning af kurser og
        efteruddannelses muligheder samt den tidstunge administrative byrde dette ofte medfører.

        Mit udgangspunkt er at sammensætte et skræddersyet opkvalificeringsforløb, som er fuldstændig tilpasset
        din virksomhed eller organisation, hvor omkostningerne til efter- videreuddannelse bliver minimeret mest
        muligt.
        I samspil finder vi løsninger, som sikrer din virksomheds udvikling og økonomiske interesser.
        Du får dermed frigivet tid til at fokusere på dine kerneydelser, da udgangspunktet er din virksomhed og
        dine behov og ønsker. Samtidig betaler du kun for de services, som du har brug for – enkelt og fleksibelt
        uden faste omkostninger.
        </motion.p>

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