import React from 'react'
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';



const Om = () => {
  return (
    <section id="om">
      <>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Introduktion:</p>
          <h2 className={styles.sectionHeadText}>Hvem er jeg?</h2>
        </motion.div>


        <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-4 text-black text-[15px] max-w-3xl leading-[30px] font-poppins">
          Jeg er en erfaren rådgiver med HR og ledelseskompetencer, og har desuden et indgående kendskab til
          arbejdsmarkedet og beskæftigelsesområdet samt kompetenceudvikling. De seneste år har jeg arbejdet
          med salgs- og forretningsudvikling herunder opkvalificeringsforløb målrettet hotel- og
          restaurationsbranchen.
          Med en udpræget handlekraft, integritet og oprigtig nysgerrighed vil jeg som din passionerede og effektive
          sparringspartner medvirke til vækst og udvikling.
        </motion.p>
        <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-4 textcursive text-black text-[15px] max-w-3xl leading-[30px] font-poppins">
          Med Janri ApS som din passionerede og effektive sparringspartner kan du være sikker på at
          opnå vækst og udvikling i din virksomhed.
          Kontakt os i dag, så vi kan tage en uforpligtende snak om dine behov og ønsker.
        </motion.p>

      </>
    </section>
  )
}

export default SectionWrapper(Om, "om")