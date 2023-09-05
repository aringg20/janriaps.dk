import React from 'react'
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';

const Kurser = () => {
  return (
    <div className="mt-12 bg-transparent font-poppins">
        <motion.div variants={textVariant()}>
          <h2 className={styles.sectionHeadText}>Kurser & Workshops</h2>
        </motion.div>

        <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-4 text-black text-[17px] max-w-3xl leading-[30px] font-poppins">
        Inspirationsoplæg og kurser som sætter den danske madkultur på dagsordenen
        I samarbejde med Lone K Jørgensen tilbyder jeg oplæg og kurser indenfor kost og
        ernæringsområdet, som naturligvis er individuelt afstemt og tilpasset virksomhedens,
        institutionens eller foreningens konkrete målgruppe.

        </motion.p>
    </div>
  )
}

export default SectionWrapper(Kurser, "kurser")