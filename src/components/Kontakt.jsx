import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { slideIn } from "../utils/motion";

const Kontakt = () => {
  
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;


    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'service_ysrw4mg',
        'template_zr0fjhb',
        {
          from_name: form.name,
          to_name: "Janri Aps",
          from_email: form.email,
          to_email: "jannierankringgaard@gmail.com",
          message: form.message,
        },
        'wbf_j1lT_RrF9g_C5'
      )
      .then(
        () => {
          setLoading(false);
         

          setForm({
            firstname: "",
            lastname: "",
            tlfnummer: "",
            email: "",
            virksomhed: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, noget gik galt. Prøv igen.");
        }
        
      );
   
  };

  return (
    <section id="kontakt">
    <div
      className={`${styles.padding} flex flex-col-reverse overflow-hidden bg-slate-50 rounded-2xl min-h-[200px] min-w-[200px] font-poppins`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] rounded-2xl'
      >
        <h3 className={styles.sectionHeadText}>Kontakt</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='flex flex-col gap-8'
        >
          <label className='flex flex-col'>
    
            <span className='text-black font-medium mb-4 font-poppins'>Fornavn</span>
            <input
              type='text'
              name='name'
              value={form.firstname}
              onChange={handleChange}
              placeholder="Fornavn"
              className='bg-gray-200 py-4 px-6 placeholder:text-brown text-black rounded-lg outline-none border-none font-medium font-poppins'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-black font-medium mb-4 font-poppins'>Efternavn</span>
            <input
              type='text'
              name='name'
              value={form.lastname}
              onChange={handleChange}
              placeholder="Efternavn"
              className='bg-gray-200 py-4 px-6 placeholder:text-brown text-black font-poppins rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-black font-medium mb-4 font-poppins'>Telefonnummer</span>
            <input
              type='text'
              name='tlfnummer'
              value={form.tlfnummer}
              onChange={handleChange}
              placeholder="Hvad er dit telefonnummer?"
              className='bg-gray-200 py-4 px-6 placeholder:text-brown text-black rounded-lg outline-none border-none font-medium font-poppins'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-black font-medium mb-4 font-poppins'>E-mail</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="Hvad er din E-mail?"
              className='bg-gray-200 py-4 px-6 placeholder:text-brown text-black rounded-lg font-poppins outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-black font-medium mb-4 font-poppins'>Virksomhed</span>
            <input
              type='text'
              name='virksomhed'
              value={form.virksomhed}
              onChange={handleChange}
              placeholder="Hvilken virksomhed er du tilknyttet?"
              className='font-poppins bg-gray-200 py-4 px-6 placeholder:text-brown text-black rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-black font-medium mb-4 font-poppins'>Din besked</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='Hvad kan jeg hjælpe dig med?'
              className='font-poppins bg-gray-200 py-4 px-6 placeholder:text-brown text-black rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button
            type='submit'
            className='bg-gray-200 py-3 px-8 rounded-xl outline-none w-fit text-brown font-poppins font-bold shadow-md shadow-primary'
          >
            {loading ? "Sender..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto '
      >
      </motion.div>
    </div>
    </section>
  );
};

export default SectionWrapper(Kontakt, "kontakt")