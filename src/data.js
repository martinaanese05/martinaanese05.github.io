// Skills Icons
import clangIcon from "./images/skillsIcon/Code.png"
import rosIcon from "./images/skillsIcon/ROS.jpg"
import openCVIcon from "./images/skillsIcon/OpenCV.png"
import RPIIcon from "./images/skillsIcon/CPU.svg"
import SolidworksIcon from "./images/skillsIcon/CAD.svg"
import codeIcon from "./images/skillsIcon/code.svg"
import isaacsIcon from "./images/skillsIcon/isaacsim.png"
import airplaneIcon from "./images/skillsIcon/airplane.svg"

// Social Icon
import githubIcon from "./images/contactIcon/github.svg"
import linkedinIcon from "./images/contactIcon/linkedin.png"
import googleScholarIcon from "./images/contactIcon/gscholar.png"

// School images
import VoltaLogo from "./images/school/Volta_stemma.jpg"
import UnitsLogo from "./images/school/Units_vertical.jpeg"
import StanfordLogo from "./images/school/ThOwl_stemma.webp"
import VoltaVideo from "./images/school/Volta_video.mp4"
import AirLabImg from "./images/nvidia/Nexus.png"
import StanfordImg from "./images/school/ThOwl_img.jpeg"


// Helper function for getting text in current language
export const getText = (textObj, language = 'en') => {
  // If it's already a string, return as-is (backward compatibility)
  if (typeof textObj === 'string') return textObj;
  
  // If it's an object with language keys, return the appropriate language
  if (textObj && typeof textObj === 'object') {
    return textObj[language] || textObj.en || textObj.it || Object.values(textObj)[0] || '';
  }
  
  // Fallback
  return textObj || '';
};

const siteData = {

 
  name: {
    en: "Martina Anese",
    it: "Martina Anese"
  },
 
  headerParagraph: {
    en: "Welcome to my site!",
    it: "Benvenuto nel mio sito!"
  },

  // Navigation labels
  nav: {
    home: { en: "Home", it: "Home", de: "Startseite" },
    work: { en: "Projects", it: "Progetti", de: "Projekte" },
    projects: { en: "Projects", it: "Progetti", de: "Projekte" },
    contact: { en: "Skills", it: "Competenze", de: "Kompetenzen" },
    resume: { en: "Resume", it: "Curriculum", de: "Lebenslauf" }
  },

  // Section titles  
  sections: {
    about: { en: "About", it: "About", de: "Über mich" },
    nvidia: { en: "Active projects", it: "Progetti attivi", de: "Aktive Projekte" },
    publications: { en: "Projects", it: "Progetti", de: "Projekte" },
    education: { en: "Education", it: "Formazione", de: "Ausbildung" },
    internships: { en: "Internships", it: "Tirocini", de: "Praktika" },
    projects: { en: "Projects", it: "Progetti", de: "Projekte" },
    skills: { en: "Skills", it: "Competenze", de: "Kompetenzen" },
    contact: { en: "Contact", it: "Contatta", de: "Kontakt" }
  },

  // Button text translations
  buttons: {
    explore: { en: "Explore", it: "Esplora", de: "Entdecken" },
    readMore: { en: "Read More", it: "Leggi di più", de: "Mehr erfahren" },
    close: { en: "Close", it: "Chiudi", de: "Schließen" }
  },

  contactEmail: "martinaanese05@gmail.com",

  education: [
    {
      title: {
        en: "ITS A. Volta, 2019-2024",
        it: "ITS A. Volta, 2019-2024",
        de: "ITS A. Volta, 2019-2024"
      },
      para: {
        en: "High school diploma in Mechatronic ",
        it: "Diploma di scuola superiore in Meccatronica",
        de: "Fachabitur in Mechatronik"
      },
      imageSrc: VoltaLogo,
      workImg: VoltaVideo,
      url: "https://www.voltatrieste.edu.it/",
      description: [
        {
          en: "Grade: 98/100, specialized in industrial automation, PLC programming of cylindrical and articulated robots, and CAD/CAM design Autodesk and Fusion 360.",
          it: "Voto: 98/100, specializzazione in automazione industriale, programmazione PLC di robot cilindrici e articolati, e progettazione CAD/CAM con Autodesk e Fusion 360.",
          de: "Note: 98/100, Schwerpunkt auf Industrieautomation, SPS-Programmierung von zylindrischen und gelenkigen Robotern sowie CAD/CAM-Design mit Autodesk und Fusion 360."
        },
        {
          en: "Projects: Haas CNC Machining and Lathe Operations, design and production of mechanical components.",
          it: "Progetti: lavorazioni CNC e tornitura Haas, e dimensionamento e produzione di componenti meccanici.",
          de: "Projekte: Haas-CNC-Bearbeitung und Dreharbeiten, Konstruktion und Fertigung mechanischer Bauteile."
        },
        {
          en: "Awards: Peer mathematics tutor (School Program), linear mathematics masterclass.",
          it: "Riconoscimenti: Tutor di matematica tra pari (programma scolastico) e Masterclass di matematica lineare.",
          de: "Auszeichnungen: Mathe-Tutorin für Mitschüler (Schulprogramm), Masterclass in linearer Mathematik."
        }
      ],
    },
    {
      title: {
        en: "University of Trieste, 2024-Present",
        it: "Università degli Studi di Trieste, 2024-Presente",
        de: "Universität Triest, 2024-heute"
      },
      para: {
        en: "Bachelor in Electronics & Internet of Things Engineering (IoT)",
        it: "Laurea Triennale in Ingegneria Elettronica e Internet of Things (IoT)",
        de: "Bachelor in Elektronik- und Internet-of-Things-Technik (IoT)"
      },
      imageSrc: UnitsLogo,
      workImg: AirLabImg,
      url: "https://portale.units.it/it",
      description: [
        {
          en: "Curriculum: Specialized in Circuit Theory, IoT Architecture, and Digital Electronics.",
          it: "Curriculum: specializzazione in Teoria dei Circuiti, Architettura IoT ed Elettronica Digitale.",
          de: "Lehrplan: Schwerpunkt auf Schaltungstheorie, IoT-Architektur und Digitalelektronik."
        },
        {
          en: "Clubs: Founder member and Team Lead of the Nexus Robotics Club.",
          it: "Club: membro fondatore e direttrice tecnica del Nexus Robotics Club.",
          de: "Vereine: Gründungsmitglied und technische Leiterin des Nexus Robotics Club."
        }
      ],
    },
    {
      title: {
        en: "Th Owl",
        it: "Th Owl",
        de: "Th Owl"
      },
      para: {
        en: "I will be studying at Th Owl from September 2026 to March 2027 for an Erasmus+ exchange program",
        it: "Studierò alla Th Owl da settembre 2026 a marzo 2027 nell'ambito del programma di scambio Erasmus+",
        de: "Ich werde von September 2026 bis März 2027 im Rahmen eines Erasmus+-Austauschprogramms an der TH OWL studieren"
      },
      imageSrc: StanfordLogo,
      workImg: StanfordImg,
      url: "https://www.th-owl.de/",
      description: [
        {
          en: "I am currently spending a semester as a full time student at Th Owl in Lemgo, Germany, taking courses both in English and German in the field of Electronic engineering.",
          it: "Studierò come studentessa a tempo pieno alla Th Owl nel prossimo anno accademico, seguendo corsi in inglese e tedesco nel campo dell'ingegneria elettronica.",
          de: "Im kommenden Studienjahr werde ich als Vollzeitstudentin an der TH OWL studieren und Kurse im Bereich Elektrotechnik sowohl auf Englisch als auch auf Deutsch belegen."
        },
      ],
    }
  ],

// About Section --------------
aboutParaOne: {
  en: "I am an Electronic & IoT Engineering student at the University of Trieste, currently in my third year.",
  it: "Sono una studentessa di Ingegneria Elettronica & IoT presso l'Università degli Studi di Trieste, attualmente al mio terzo anno.",
  de: "Ich studiere Elektronik- und IoT-Technik an der Universität Triest, derzeit im dritte Studienjahr."
},
aboutParaTwo: {
  en: "Beyond my studies, robotics is my main passion: I have creating my own projects since I was 16, keep learning new things, and enjoy teaching others. I co-founded Nexus Robotics, a university club where I help other students build their own robots, and I also support the makers at Asperastra, a local association in Trieste.",
  it: "Oltre ai miei studi, gestisco il reparto di Robotica di un'associazione locale chiamata Asperastra, dove mi occupo di diversi progetti robotici e insegno Arduino ai nuovi membri. Ho anche co-fondato un club di robotica universitario per creare uno spazio dedicato allo sviluppo di robot personalizzati insieme ad altri studenti.",
  de: "Neben meinem Studium leite ich die Abteilung Robotik bei einem lokalen Verein namens Asperastra, wo ich mich um verschiedene Robotikprojekte kümmere und den Mitgliedern Arduino beibringe. Außerdem habe ich einen Robotik-Club an der Universität mitgegründet, um Studierenden einen Raum zur Entwicklung eigener Roboter zu bieten."
},
aboutParaThree: {
  en: "I love putting into practice my knowledge: whether that’s going from a 3D model to the real assembly, fixing Arduino code or working out kinematics, I always find it rewarding and fun.",
  it: "Amo mettere in pratica le mie conoscenze: che si tratti di passare dai modelli 3D all'assemblaggio fisico, di fare troubleshooting di codice Arduino o di calcolare la cinematica, trovo che sia sempre un'esperienza gratificante e stimolante.",
  de: "Ich liebe es, mein Wissen in die Praxis umzusetzen: Ob es darum geht, von 3D-Modellen zur physischen Montage überzugehen, Arduino-Code zu debuggen oder Kinematik zu berechnen – ich finde es immer bereichernd und macht mir Spaß."
},


nvidiaExperience: [
  {
    en: "I am a founder and the Team Lead of Nexus, a University technology club.",
    it: "Sto contribuendo alla creazione di un nuovo club tecnologico universitario, Nexus Robotics: costruiamo robot personalizzati e partecipiamo a competizioni di robotica. Insegno anche il corso \"Hello World, Arduino\" al Fablab locale Asperastra. Attualmente sono una studentessa al terzo anno del corso di Laurea Triennale in Ingegneria Elettronica & IoT all'Università di Trieste e sto imparando ROS2 per implementarlo nei miei progetti, come il braccio Dobot e il robot quadrupede che ho progettato.",
    de: "Ich trage zur Gründung eines neuen Technologie-Clubs an der Universität bei, Nexus Robotics: Wir bauen eigene Roboter und nehmen an Robotik-Wettbewerben teil. Außerdem unterrichte ich den Kurs \"Hello World, Arduino\" im lokalen Fablab Asperastra. Aktuell bin ich Bachelorstudentin im dritte Jahr für Elektronik- und IoT-Technik an der Universität Triest und lerne ROS2, um es in meinen Projekten einzusetzen, wie zum Beispiel beim Dobot-Arm und dem von mir entworfenen vierbeinigen Roboter."
  }
],


// NVIDIA Carousel Items
nvidiaCarouselItems: [
  {
    media: "gr1ImitationVideo",
    type: 'image',
    title: {
      en: "I am a founder and the Team Lead of Nexus, a University technology club",
      it: "Sto contribuendo alla creazione di un nuovo club tecnologico universitario, Nexus Robotics",
      de: "Ich trage zur Gründung eines neuen Technologie-Clubs an der Universität bei, Nexus Robotics"
    },
    description: {
      en: "I am a founder and the Team Lead of Nexus, a University technology club.",
      it: "Sto contribuendo alla creazione di un nuovo club tecnologico universitario, Nexus Robotics: costruiamo robot personalizzati e partecipiamo a competizioni di robotica.",
      de: "Ich trage zur Gründung eines neuen Technologie-Clubs an der Universität bei, Nexus Robotics: Wir bauen eigene Roboter und nehmen an Robotik-Wettbewerben teil."
    }
  },
  /*
  {
    media: "h1FlipGif",
    type: 'image',
    title: {
      en: "I am teaching the course \"Hello World, Arduino\" at Asperastra Innovation Lab",
      it: "Insegno il corso \"Hello World, Arduino\" all'Asperastra Innovation Lab",
      de: "Ich unterrichte den Kurs \"Hello World, Arduino\" im Asperastra Innovation Lab"
    },
    description: {
      en: "I am teaching the course \"Hello World, Arduino\" at Asperastra Innovation Lab.",
      it: "Insegno il corso \"Hello World, Arduino\" all'Asperastra Innovation Lab.",
      de: "Ich unterrichte den Kurs \"Hello World, Arduino\" im Asperastra Innovation Lab."
    }
  },
  */
  {
    media: "h1TrainVideo",
    type: 'image',
    title: {
      en: "I am currently a third-year Electronic Engineering & IoT Bachelor student at the University of Trieste",
      it: "Sono attualmente una studentessa al terzo anno di Ingegneria Elettronica & IoT all'Università di Trieste",
      de: "Ich bin derzeit Bachelorstudentin im dritte Jahr für Elektronik- und IoT-Technik an der Universität Triest"
    },
    description: {
      en: "I am currently a third-year Electronic Engineering & IoT Bachelor student at the University of Trieste",
      it: "Sono attualmente una studentessa al terzo anno del corso di Laurea Triennale in Ingegneria Elettronica & IoT all'Università di Trieste.",
      de: "Ich bin derzeit Bachelorstudentin im dritte Studienjahr für Elektronik- und IoT-Technik an der Universität Triest."
    }
  },
  {
    media: "urLousdVideo",
    type: 'image',
    title: {
      en: "I am learning ROS2 and how to implement it in my projects, such as the Dobot arm and the quadruped robot I designed",
      it: "Sto imparando ROS2 e come implementarlo nei miei progetti, come il braccio Dobot e il robot quadrupede che ho progettato",
      de: "Ich lerne ROS2 und wie ich es in meinen Projekten einsetzen kann, wie zum Beispiel beim Dobot-Arm und dem von mir entworfenen vierbeinigen Roboter"
    },
    description: {
      en: "I am learning ROS2 and how to implement it in my projects, such as the Dobot arm and the quadruped robot I designed.",
      it: "Sto imparando ROS2 e come implementarlo nei miei progetti, come il braccio Dobot e il robot quadrupede che ho progettato.",
      de: "Ich lerne ROS2 und wie ich es in meinen Projekten einsetzen kann, wie zum Beispiel beim Dobot-Arm und dem von mir entworfenen vierbeinigen Roboter."
    }
  }
],

  skills: [
    {
      img: clangIcon,
      para:
        "C, C++, Java, Python, MATLAB",
    },
    {
      img: RPIIcon,
      para:
        "Arduino, Raspberry Pi, ESP8266",
    },
    {
      img: SolidworksIcon,
      para:
        "AutoCAD, Fusion360, Inventor",
    },
    {
      img: rosIcon,
      para:
        "ROS2, Gazebo",
    },
    
  ],

  // End Skills Section --------------------------

  //   Contact Section --------------

  contactSubHeading: {
  en: "Let's chat about robots!",
  it: "Parliamo di robot!",
  de: "Lass uns über Roboter sprechen!"
},
  social: [

    { img: githubIcon, 
      url: "https://github.com/martinaanese05"
    },
    {
      img: linkedinIcon,
      url: "https://www.linkedin.com/in/martina-anese/",
    },

  ],

  // End Contact Section ---------------
}

export default siteData;