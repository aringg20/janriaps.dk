const styles = {
    boxWidth: "xl:max-w-[1280px] w-full",
  
    heading2: "font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full",
    paragraph: "font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]",
  
    flexCenter: "flex justify-center items-center",
    flexStart: "flex justify-center items-start",
  
    paddingX: "sm:px-16 px-6",
    paddingY: "sm:py-16 py-6",
    padding: "sm:px-16 px-6 sm:py-12 py-4",
  
    marginX: "sm:mx-16 mx-6",
    marginY: "sm:my-16 my-6",

    heroHeadText:
    "font-black text-brown lg:text-[60px] sm:text-[40px] xs:text-[30px] text-[25px] lg:leading-[98px] mt-2",
    heroSubText:
    "text-[#c59c79] font-medium lg:text-[20px] sm:text-[18px] xs:text-[15px] text-[15px] lg:leading-[40px]",

    sectionHeadText:
    "text-brown font-black md:text-[35px] sm:text-[25px] xs:text-[20px] text-[18px] font-poppins",
    sectionSubText:
    "sm:text-[18px] text-[15px] text-black uppercase tracking-wider font-poppins",
  };
  
  export const layout = {
    section: `flex md:flex-row flex-col ${styles.paddingY}`,
    sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,
  
    sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
    sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,
  
    sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
  };
  



  
  export { styles };