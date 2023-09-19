import { motion } from 'framer-motion';
import '../index.css';
import { styles } from '../styles';
import { footerVariants } from '../utils/motion';
import { logo, linkedin, facebook, instagram } from '../assets';

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.paddingX} py-8 relative`}
  >
    <div className="footer-gradient" />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex items-center justify-between flex-wrap gap-5">
        <h4 className="font-bold md:text-[34px] text-[24px] text-black">
          Janri Aps
        </h4>
        <button type="button" className="flex items-center h-fit py-4 px-6 bg-brown rounded-[32px] gap-[12px]">
          <img
            src={logo}
            alt="logo"
            className="w-[60px] h-[60px] object-contain"
          />
          
          <span className="font-normal text-[16px] text-white">
            janriaps@gmail.com
          </span>
        </button>
        <button type="button" className="flex items-center h-fit py-4 px-6 bg-brown rounded-[32px] gap-[12px]">
          <img
            src={logo}
            alt="logo"
            className="w-[60px] h-[60px] object-contain"
          />
          
          <span className="font-normal text-[16px] text-white">
           +45 30 52 87 41 
          </span>
        </button>
      </div>

      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-black opacity-10" />
  
        <div className="flex items-center justify-between flex-wrap gap-4">
          <h4 className="font-bold text-[18px] text-black">
            Jannie Rank Ringgaard
          </h4>
          <p className="font-normal text-[14px] text-black opacity-50">
            Copyright © 2023 Janri Aps. All rights reserved.
          </p>


          <div className="flex gap-4">
          <a href="https://www.linkedin.com/in/jannierankringgaard/">
              <img 
                src={linkedin}
                className="w-[24px] h-[24px] object-contain cursor-pointer">
              </img>
          </a>

          <a href="https://www.instagram.com/jrringgaard/">
              <img
                src={instagram}
                className="w-[24px] h-[24px] object-contain cursor-pointer">
              </img>
          </a>

          <a href="https://www.facebook.com/jannie.ringgaard">
              <img
                src={facebook}
                className="w-[24px] h-[24px] object-contain cursor-pointer">
              </img>
          </a>

          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
