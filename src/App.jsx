import { styles } from './styles';
import { Navbar, Hero, Boxes, Footer, Kontakt, Om, Services, Kurser } from './components';
import React from 'react';
import { Link } from "react-scroll";



const App = () =>  {

  return (
  
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-white ${styles.flexStart}`}>
      <div>
        <Hero />
      </div>
    </div>
    
    <div className={`bg-white ${styles.flexStart}`}>
      <div>
        <Boxes />
      </div>
    </div>

    <div className={`bg-white ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Services />
      </div>
    </div>

    <div className={`bg-white ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Kurser />
      </div>
    </div>



    <div className={`bg-white ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Om />
      </div>
    </div>
        
    <div className={`bg-white ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Kontakt/>
      </div>
    </div>

    <div className={`bg-white ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Footer />
      </div>
    </div>
  <section id="hero"></section>
  <section id="kontakt"></section>
  <section id="services"></section>
  <section id="om"></section>


  </div>
  )
}


export default App
