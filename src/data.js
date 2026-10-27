// Skills Icons
import clangIcon from "./images/skillsIcon/Code.webp"
import rosIcon from "./images/skillsIcon/ROS.webp"
import openCVIcon from "./images/skillsIcon/OpenCV.png"
import RPIIcon from "./images/skillsIcon/CPU.svg"
import SolidworksIcon from "./images/skillsIcon/CAD.svg"
import codeIcon from "./images/skillsIcon/code.svg"
import isaacsIcon from "./images/skillsIcon/isaacsim.png"
import airplaneIcon from "./images/skillsIcon/airplane.svg"

// Social Icon
import githubIcon from "./images/contactIcon/github.svg"
import linkedinIcon from "./images/contactIcon/linkedin.webp"
import googleScholarIcon from "./images/contactIcon/gscholar.png"

// School images
import VoltaLogo from "./images/school/Volta_stemma.webp"
import UnitsLogo from "./images/school/Units_vertical.webp"
import StanfordLogo from "./images/school/ThOwl_stemma.webp"
import VoltaVideo from "./images/school/Volta_video.mp4"
import AirLabImg from "./images/nvidia/Nexus.webp"
import StanfordImg from "./images/school/ThOwl_img.webp"


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
    it: "Martina Anese",
    de: "Martina Anese"
  },
 
  headerParagraph: {
    en: "Welcome to my site!",
    it: "Benvenuto nel mio sito!",
    de: "Willkommen auf meiner Seite!"
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
          it: "Progetti: lavorazioni CNC e tornitura Haas, progettazione e produzione di componenti meccanici.",
          de: "Projekte: Haas-CNC-Bearbeitung und Dreharbeiten, Konstruktion und Fertigung mechanischer Bauteile."
        },
        {
          en: "Awards: Peer mathematics tutor (School Program), linear mathematics masterclass.",
          it: "Riconoscimenti: tutor di matematica tra pari (programma scolastico), masterclass di matematica lineare.",
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
          it: "Club: membro fondatore e Team Lead del Nexus Robotics Club.",
          de: "Vereine: Gründungsmitglied und Teamleiterin des Nexus Robotics Club."
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
        en: "I am studying at Th Owl from September 2026 to March 2027 for an Erasmus+ exchange program",
        it: "Studio alla Th Owl da settembre 2026 a marzo 2027 nell'ambito del programma di scambio Erasmus+",
        de: "Ich studiere von September 2026 bis März 2027 im Rahmen eines Erasmus+-Austauschprogramms an der TH OWL"
      },
      imageSrc: StanfordLogo,
      workImg: StanfordImg,
      url: "https://www.th-owl.de/",
      description: [
        {
          en: "I am currently spending a semester as a full time student at Th Owl in Lemgo, Germany, taking courses both in English and German in the field of Electronic engineering.",
          it: "Sto trascorrendo un semestre come studentessa a tempo pieno alla Th Owl di Lemgo, in Germania, seguendo corsi sia in inglese che in tedesco nel campo dell'ingegneria elettronica.",
          de: "Ich verbringe derzeit ein Semester als Vollzeitstudentin an der TH OWL in Lemgo, Deutschland, und belege Kurse im Bereich Elektrotechnik sowohl auf Englisch als auch auf Deutsch."
        },
      ],
    }
  ],

// About Section --------------
aboutParaOne: {
  en: "I am an Electronic & IoT Engineering student at the University of Trieste, currently in my third year.",
  it: "Sono una studentessa di Ingegneria Elettronica & IoT presso l'Università degli Studi di Trieste, attualmente al mio terzo anno.",
  de: "Ich studiere Elektronik- und IoT-Technik an der Universität Triest, derzeit im dritten Studienjahr."
},
aboutParaTwo: {
  en: "Beyond my studies, robotics is my main passion: I have been creating my own projects since I was 16, keep learning new things, and enjoy teaching others. I co-founded Nexus Robotics, a university club where I help other students build their own robots, and I also support the makers at Asperastra, a local association in Trieste.",
  it: "Oltre agli studi, la robotica è la mia passione principale: creo progetti miei da quando avevo 16 anni, continuo a imparare cose nuove e mi piace insegnare agli altri. Ho co-fondato Nexus Robotics, un club universitario in cui aiuto altri studenti a costruire i propri robot, e supporto anche i maker di Asperastra, un'associazione locale di Trieste.",
  de: "Neben meinem Studium ist Robotik meine größte Leidenschaft: Seit ich 16 bin, entwickle ich eigene Projekte, lerne ständig Neues dazu und bringe anderen gerne etwas bei. Ich habe Nexus Robotics mitgegründet, einen Uni-Club, in dem ich anderen Studierenden helfe, ihre eigenen Roboter zu bauen, und unterstütze außerdem die Maker bei Asperastra, einem lokalen Verein in Triest."
},
aboutParaThree: {
  en: "I love putting into practice my knowledge: whether that’s going from a 3D model to the real assembly, fixing Arduino code or working out kinematics, I always find it rewarding and fun.",
  it: "Amo mettere in pratica le mie conoscenze: che si tratti di passare da un modello 3D all'assemblaggio reale, di sistemare codice Arduino o di risolvere la cinematica, lo trovo sempre gratificante e divertente.",
  de: "Ich liebe es, mein Wissen in die Praxis umzusetzen: Ob es darum geht, von einem 3D-Modell zur echten Montage zu kommen, Arduino-Code zu reparieren oder Kinematik auszurechnen – es ist für mich immer lohnend und macht Spaß."
},


nvidiaExperience: [
  {
    en: "I am a founder and the Team Lead of Nexus, a University technology club.",
    it: "Sono una delle fondatrici e la Team Lead di Nexus, un club tecnologico universitario.",
    de: "Ich bin Mitgründerin und Teamleiterin von Nexus, einem Technologie-Club an der Universität."
  }
],


// NVIDIA Carousel Items
nvidiaCarouselItems: [
  {
    media: "gr1ImitationVideo",
    type: 'image',
    title: {
      en: "I am a founder and the Team Lead of Nexus, a University technology club",
      it: "Sono una delle fondatrici e la Team Lead di Nexus, un club tecnologico universitario",
      de: "Ich bin Mitgründerin und Teamleiterin von Nexus, einem Technologie-Club an der Universität"
    },
    description: {
      en: "I am a founder and the Team Lead of Nexus, a University technology club.",
      it: "Sono una delle fondatrici e la Team Lead di Nexus, un club tecnologico universitario.",
      de: "Ich bin Mitgründerin und Teamleiterin von Nexus, einem Technologie-Club an der Universität."
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
      de: "Ich bin derzeit Bachelorstudentin im dritten Jahr für Elektronik- und IoT-Technik an der Universität Triest"
    },
    description: {
      en: "I am currently a third-year Electronic Engineering & IoT Bachelor student at the University of Trieste",
      it: "Sono attualmente una studentessa al terzo anno della Laurea Triennale in Ingegneria Elettronica & IoT all'Università di Trieste",
      de: "Ich bin derzeit Bachelorstudentin im dritten Studienjahr für Elektronik- und IoT-Technik an der Universität Triest"
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
        "ROS2, Gazebo (In Progress)",
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