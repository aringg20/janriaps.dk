import { workshop, academic, chat, efteruddannelse, hr, kurser, facebook, instagram, linkedin, twitter, send, star  } from "../assets";

export const navLinks = [
  {
    id: "hero",
    title: "Hjem",
  },
  {
    id:"services",
    title: "Ydelser",
  },
  {
    id: "kontakt",
    title: "Kontakt",
  },
  {
    id: "om",
    title: "Om",
  },
  {
    id: "kurser",
    title: "Kurser",
  },
];

export const features = [
  {
    id: "feature-1",
    title: "Rewards",
    content:
      "The best credit cards offer some tantalizing combinations of promotions and prizes",
  },
  {
    id: "feature-2",
    title: "100% Secured",
    content:
      "We take proactive steps make sure your information and transactions are secure.",
  },
  {
    id: "feature-3",
    title: "Balance Transfer",
    content:
      "A balance transfer credit card can save you a lot of money in interest charges.",
  },
];

export const feedback = [
  {
    id: "feedback-1",
    content:
      "Jeg tilbyder HR support, workshop og inspirationsoplæg med professionel sparring primært til hotel- og restaurationsbranchen.", 
    //name: "Services",
    title: "Skræddersyet løsninger til netop jer",
    //img: goldline
  },
  {
    id: "feedback-2",
    content:
      "Jeg står klar til at hjælpe netop dig og din virksomhed, henvend dig allerede i dag. Kom i kontakt med mig hurtigst muligt.",
    //name: "Kontakt",
    title: "Tryk her, for at komme i kontakt med mig i dag",
    //img: goldline
  },
  {
    id: "feedback-3",
    content:
      "Jeg understøtter forretningsudvikling og trivsel. Jeg indgyder til tillid og samspil. Jeg ser muligheder og løsninger. Jeg hylder det enkle og fleksible. Jeg skaber overblik og struktur. Jeg er effektiv og oprigtig nysgerrig. Jeg er yderst professionel og tænker bundlinje effekt",
    //name: "Hvem er jeg?",
    title: "Jannie Rank Ringgaard",
    //img: goldline
  },
];

export const socials = [
  {
    name: 'twitter',
    icon: twitter,
  },
  {
    name: 'linkedin',
    icon: linkedin,
  },
  {
    name: 'instagram',
    icon: instagram,
  },
  {
    name: 'facebook',
    icon: facebook,
  },
];



export const services = [
  {
    title: "Efteruddannelse",
    icon: academic,
  },
  {
    title: "HR-Support",
    icon: chat,
  },
  {
    title: "Kurser & Workshops",
    icon: workshop,
  },
];

export const projects = [
  {
    
    name: "Kompetenceløft & Udvikling",
    description:
     "Vi leverer en komplet plan for kompetenceudvikling, hvor vi tager hånd om alt det tidstunge administrative arbejde og sammensætter et skræddersyet opkvalificeringsforløb, som er fuldstændig tilpasset din virksomhed eller organisation. I samspil finder vi løsninger, som sikrer din virksomheds udvikling og økonomiske interesser, hvor ”omkostningerne” til efter- videreuddannelse bliver mindst muligt.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: efteruddannelse,
  },
  {
    name: "Sparring & Support",
    points: [
      "Skræddersyet og fleksibel serviceløsning til HR-assistance",
      "Sparring og hjælp til kompetenceafklaring, medarbejdertrivsel og MUS samtaler",
      "Rådgivning til rekruttering af medarbejdere",
      "Support til on- og offboarding",
    ],
    description:
    "Vi mener, at kompetenceudvikling er afgørende for at skabe vækst og udvikling i samfundet og dermed din virksomhed. Udvikling af medarbejdere øger fastholdelse af medarbejdere og giver et positivt image, som gør rekruttering lettere. Økonomisk er efteruddannelse ofte fordelagtigt - retning og forståelse for kompetenceløft gør gode medarbejdere bedre.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: hr,
  },
  {
    name: "Samspil & Læring",
    description:
      "Inspirationsoplæg, workshops og kurser der sætter den danske madkultur på dagsordenen. I samarbejde med Lone K. Jørgensen tilbyder vi oplæg og kurser indenfor kost og ernæringsområdet, som naturligvis er individuelt afstemt og tilpasset virksomhedens, institutionens eller foreningens konkrete målgruppe.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: kurser,
  },
];
