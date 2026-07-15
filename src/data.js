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


// Company icon
import TeslaIcon from "./images/company/Tesla.webp"
import NVIDIAIcon from "./images/company/NVIDIA.webp"
import EcobeeIcon from "./images/company/ecobee.webp"
import UwaterlooIcon from "./images/company/Uwaterloo.webp"
import KhazanahIcon from "./images/company/Khazanah.webp"
import FordIcon from "./images/company/Ford.webp"

// company image
import TeslaImg from "./images/workPhotos/TeslaWork_v2.mp4"
import IsaacSim from "./images/workPhotos/isaac_quadruped.mp4"
import Khazanah from "./images/workPhotos/khazanah.mp4"
import uwaterloo from "./images/workPhotos/uwaterlootaImg.webp"
import ford from "./images/workPhotos/Ford.webp"
import ecobee from "./images/workPhotos/ecobeeProduct.webp"

// School images
import VoltaLogo from "./images/school/Volta_stemma.jpg"
import UnitsLogo from "./images/school/Units_stemma.jpg"
import StanfordLogo from "./images/school/ThOwl_stemma.webp"
import VoltaVideo from "./images/school/Volta_video.mp4"
import AirLabImg from "./images/nvidia/Nexus.png"
import StanfordImg from "./images/school/ThOwl_img.png"


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
    home: { en: "Home", it: "Home" },
    work: { en: "Projects", it: "Progetti" },
    projects: { en: "Projects", it: "Progetti" },
    contact: { en: "Skills", it: "Competenze" },
    resume: { en: "Resume", it: "Curriculum" }
  },

  // Section titles  
  sections: {
    about: { en: "About", it: "About" },
    nvidia: { en: "Active projects", it: "Progetti attivi" },
    publications: { en: "Projects", it: "Progetti" },
    education: { en: "Education", it: "Formazione" },
    internships: { en: "Internships", it: "Tirocini" },
    projects: { en: "Projects", it: "Progetti" },
    skills: { en: "Skills", it: "Competenze" },
    contact: { en: "Contact", it: "Contatta" }
  },

  // Button text translations
  buttons: {
    explore: { en: "Explore", it: "Esplora" },
    readMore: { en: "Read More", it: "Leggi di più" },
    close: { en: "Close", it: "Chiudi" }
  },

  contactEmail: "martinaanese05@gmail.com",

  education: [
    {
      title: {
        en: "ITS A. Volta, 2019-2024",
        it: "ITS A. Volta, 2019-2024"
      },
      para: {
        en: "High school diploma in Mechatronic ",
        it: "Diploma di scuola superiore in Meccatronica"
      },
      imageSrc: VoltaLogo,
      workImg: VoltaVideo,
      url: "https://www.voltatrieste.edu.it/",
      description: [
        {
          en: "Grade: 98/100, specialized in industrial automation, PLC programming of cylindrical and articulated robots, and CAD/CAM design Autodesk and Fusion 360.",
          it: "Voto: 98/100, specializzazione in automazione industriale, programmazione PLC di robot cilindrici e articolati, e progettazione CAD/CAM con Autodesk e Fusion 360."
        },
        {
          en: "Projects: Haas CNC Machining and Lathe Operations, design and production of mechanical components.",
          it: "Progetti: lavorazioni CNC e tornitura Haas, e dimensionamento e produzione di componenti meccanici."
        },
        {
          en: "Awards: Peer mathematics tutor (School Program), linear mathematics masterclass.",
          it: "Riconoscimenti: Tutor di matematica tra pari (programma scolastico) e Masterclass di matematica lineare."
        }
      ],
    },
    {
      title: {
        en: "University of Trieste, 2024-Present",
        it: "Università degli Studi di Trieste, 2024-Presente"
      },
      para: {
        en: "Bachelor in Electronics & Internet of Things Engineering (IoT)",
        it: "Laurea Triennale in Ingegneria Elettronica e Internet of Things (IoT)"
      },
      imageSrc: UnitsLogo,
      workImg: AirLabImg,
      url: "https://portale.units.it/it",
      description: [
        {
          en: "Curriculum: Specialized in Circuit Theory, IoT Architecture, and Digital Electronics.",
          it: "Curriculum: specializzazione in Teoria dei Circuiti, Architettura IoT ed Elettronica Digitale."
        },
        {
          en: "Clubs: Founder member and technical director of the Nexus Robotics Club.",
          it: "Club: membro fondatore e direttrice tecnica del Nexus Robotics Club."
        }
      ],
    },
    {
      title: {
        en: "Th Owl",
        it: "Th Owl"
      },
      para: {
        en: "I will be studying at Th Owl from September 2026 to March 2027 for an Erasmus+ exchange program",
        it: "Studierò alla Th Owl da settembre 2026 a marzo 2027 nell'ambito del programma di scambio Erasmus+"
      },
      imageSrc: StanfordLogo,
      workImg: StanfordImg,
      url: "https://www.th-owl.de/",
      description: [
        {
          en: "I will be studying as a full time student at Th Owl in the upcoming academic year, taking courses both in English and German in the field of Electronic engineering.",
          it: "Studierò come studentessa a tempo pieno alla Th Owl nel prossimo anno accademico, seguendo corsi in inglese e tedesco nel campo dell'ingegneria elettronica."
        },
      ],
    }
  ],

  projects: [
    {
      title: {
        en: "Tesla",
        it: "Tesla"
      }, 
      position: {
        en: "Body Controls Developer - Tesla",
        it: "Sviluppatrice di Controlli Carrozzeria - Tesla"
      },
      para: {
        en: "Developed lighting apps for new Model S/X and Tesla Semi, including Tesla Light Test.",
        it: "Sviluppato applicazioni di illuminazione per i nuovi Model S/X e Tesla Semi, incluso Tesla Light Test."
      },      
      imageSrc:
        TeslaIcon,
      
      url: "/work/tesla/",

      date: "05/2022 - 08/2022 ",

      description: [
        {
          en: 'Designed "Semi LightTest" feature for controlling 19 unique light groups across 4 controllers in C, displayed at the Tesla Semi Delivery Event by Elon Musk',
          it: 'Progettata la funzionalità "Semi Light Test" in C per controllare 19 gruppi luminosi univoci su 4 controller, presentata da Elon Musk all\'evento di consegna del Tesla Semi'
        },
        {
          en: 'Set up simulations for the Semi Truck lighting controllers in Python and created Software In a Loop tests using Python, drafted "Semi Light Test" specs on Polarion',
          it: 'Configurate simulazioni per i controller di illuminazione del Semi Truck in Python e creati test Software in the Loop, redatte le specifiche di "Semi Light Test" su Polarion'
        },
        {
          en: 'Brought up lighting fault detection and lighting alerts for Tesla Semi headlamps, rear lights, and trailer lights using C via CAN network',
          it: 'Implementato il rilevamento guasti di illuminazione e gli avvisi per fari anteriori, luci posteriori e luci del rimorchio del Tesla Semi in C tramite rete CAN'
        },
        {
          en: 'Created self-tests for checking Semi\'s mirror, latch, steering wheel, and horn and fixed various firmware bugs for Model S/X lighting in C',
          it: 'Creati auto-test per verificare specchi, serrature, volante e clacson del Semi, e corretti vari bug firmware per l\'illuminazione di Model S/X in C'
        }
      ],

      workImg:
        TeslaImg,
    },
    {
      title: {
        en: "NVIDIA",
        it: "NVIDIA"
      }, 
      position: {
        en: "Robotics Simulation Engineer - NVIDIA",
        it: "Ingegnere di Simulazione Robotica - NVIDIA"
      },
      para: {
        en: "Built realistic sensors and simulated quadruped robots in NVIDIA Isaac Sim's robotics platform.",
        it: "Costruito sensori realistici e simulato robot quadrupedi sulla piattaforma robotica NVIDIA Isaac Sim."
      },
      imageSrc:
        NVIDIAIcon,
   
      url: "/work/nvidia/",
      
      date: "01/2022 - 04/2022 ",

      description: [
        {
          en: "Developed Quadruped extension for unitree A1 robots on Isaac Sim using Python, connected quadruped gait controlers to the quadruped model, and created ROS, ROS2, and Visual Inertial Odometry examples for Isaac Sim.",
          it: "Sviluppata l'estensione Quadruped per i robot Unitree A1 su Isaac Sim in Python, collegati i controller di andatura quadrupede al modello, e creati esempi ROS, ROS2 e Visual Inertial Odometry per Isaac Sim."
        },
        {
          en: "Created Isaac Sensor extension for simulating physic based sensors such as the contact sensor and IMU sensors using C++ and Python, written USD schema for the sensors, enabling visualization and modification of sensor parameters during runtime from the GUI",
          it: "Creata l'estensione Isaac Sensor per simulare sensori fisici come sensori di contatto e IMU in C++ e Python, scritto schema USD per i sensori per consentire visualizzazione e modifica dei parametri in tempo reale dalla GUI"
        },
        {
          en: "Drafted user manual and extension documentations using Sphinx, and created unit tests for the quadruped and Isaac sensor extension.",
          it: "Redatto manuale utente e documentazione delle estensioni con Sphinx, e creati unit test per l'estensione quadrupede e Isaac Sensor."
        }
      ],
      
      workImg:
        IsaacSim,
    },

    {
      title: {
        en: "ecobee",
        it: "ecobee"
      }, 
      position: {
        en: "Embedded Systems Developer - ecobee",
        it: "Sviluppatrice di Sistemi Embedded - ecobee"
      },
      para: {
        en: "Built production test fixtures and CV/ML algorithms for smart thermostat display testing.",
        it: "Costruito fixture di test di produzione e algoritmi di computer vision/ML per il collaudo dei display dei termostati intelligenti."
      },
      
      imageSrc:
        EcobeeIcon  ,    
     
      url: "/work/ecobee/",

      date: "05/2021 - 08/2021 ",

      description: [
        {
          en: "Built display testing pipeline using C++ OpenCV to detect discoloration, misalignment, dead pixels, and poor connections, capable of detecting alignment offsets of 0.5mm and dead pixels under 0.2mm",
          it: "Costruita pipeline di test del display con C++ OpenCV per rilevare scolorimenti, disallineamenti, pixel difettosi e connessioni difettose, in grado di rilevare offset di allineamento di 0,5 mm e pixel sotto 0,2 mm"
        },
        {
          en: "Prototyped LCD tests using Convolutional Neural Network and TensorFlow with 98% accuracy, won Best Internal Impact Award",
          it: "Prototipati test LCD con rete neurale convoluzionale e TensorFlow con accuratezza del 98%, vincitrice del premio Best Internal Impact Award"
        },
        {
          en: "Gathered requirements, designed, and developed customer firmware flash and label printer software for the smart thermostats using C++/CLI and .NET framework, logging results using MongoDB, printing labels using ZPL",
          it: "Raccolti requisiti, progettato e sviluppato software di flashing firmware e stampa etichette per i termostati intelligenti in C++/CLI e .NET framework, registrazione risultati con MongoDB e stampa etichette con ZPL"
        },
        {
          en: "Drafted documentation and deployed customer firmware flash and label printer software at Wistron factory for Design Validation Test, projected to flash 80000+ units per month in full production",
          it: "Redatta la documentazione e distribuito il software di flashing firmware e stampa etichette presso lo stabilimento Wistron per il Design Validation Test, con proiezione di 80.000+ unità al mese in produzione piena"
        }
      ],
   
      workImg:
        ecobee,
    },
    {
      title: {
        en: "University of Waterloo, Faculty of Electrical and Computer Engineering",
        it: "Università di Waterloo, Facoltà di Ingegneria Elettrica e Informatica"
      }, 
      position: {
        en: "Teaching Assistant - University of Waterloo",
        it: "Assistente Didattica - Università di Waterloo"
      },
      para: {
        en: "TA for intro C++ course; led tutorials, graded, designed exams.",
        it: "Assistente per il corso introduttivo di C++; condotto esercitazioni, valutazioni ed esami."
      },
      
      imageSrc:
        UwaterlooIcon,
      
      url: "/work/uwaterloo/",

      date: "09/2020 - 12/2020 ",

      description: [
        {
          en: "Designed questions on quizzes, midterm, and final and created automated testing using C++ and python to grade 300+ submissions per assessment and provide instantaneous feedback using Python expect library and regular expression based on the SOLID design principle",
          it: "Progettate domande per quiz, esame intermedio e finale, e creato un sistema di test automatizzato in C++ e Python per valutare 300+ consegne per ogni prova e fornire feedback istantaneo basato sul principio SOLID"
        },
        {
          en: "Lead lab and help sessions for 300+ students assisted with teaching concepts in C++, such as dynamic memory allocation, Object-Oriented Programming, pointers, and linked lists, leads to a significant increase in student grades",
          it: "Condotto sessioni di laboratorio e tutoraggio per 300+ studenti, assistendo nell'insegnamento di concetti C++ come allocazione dinamica della memoria, programmazione orientata agli oggetti, puntatori e liste collegate, con un significativo miglioramento dei voti"
        }
      ],
      
      
      workImg:
        uwaterloo,
    },
    {
      title: {
        en: "Khazanah National Americas",
        it: "Khazanah National Americas"
      }, 
      position: {
        en: "Innovation Developer - Khazanah",
        it: "Sviluppatrice Innovazione - Khazanah"
      },
      para: {
        en: "Explored drone, CV, and AR/VR tech to support investor understanding and decision-making.",
        it: "Esplorato tecnologie di droni, computer vision e AR/VR per supportare la comprensione e il processo decisionale degli investitori."
      },
      
      imageSrc:
        KhazanahIcon,
      
      url: "/work/khazanah/",

      date: "01/2020 - 04/2020 ",

      description: [
        {
          en: "Created a VR game based on Atari's Asteroids for Oculus Go platform, designed game logic, collision physics, and cloud leaderboard using C#, Unity, and Oculus developer toolkit, created asteroid models with blender",
          it: "Creato un gioco VR ispirato ad Asteroids di Atari per la piattaforma Oculus Go, progettata la logica di gioco, la fisica delle collisioni e la classifica cloud in C#, Unity e toolkit Oculus, creati modelli di asteroidi con Blender"
        },
        {
          en: "Developed novel computer vision-based control for drones using Python OpenCV library, capable of tracking and following an Aruco marker in different lighting conditions up to 10 meters away, and autonomous take-off and land.",
          it: "Sviluppato un innovativo controllo per droni basato su computer vision con Python OpenCV, in grado di tracciare e seguire un marker Aruco in diverse condizioni di luce fino a 10 metri di distanza, con decollo e atterraggio autonomi."
        },
        {
          en: "Design open-sourced smart germicidal device with UV-C bulbs to sterilize personal devices; won Editor's Choice Award on Instructable",
          it: "Progettato e reso open-source un dispositivo germicida intelligente con lampade UV-C per sterilizzare dispositivi personali; vincitrice dell'Editor's Choice Award su Instructable"
        }
      ],
    
      workImg:
        Khazanah,
    
    },
    {
      title: {
        en: "Ford Motor Company",
        it: "Ford Motor Company"
      }, 
      position: {
        en: "Manufacturing Software Developer - Ford",
        it: "Sviluppatrice Software di Produzione - Ford"
      },
      para: {
        en: "Supported F150 Lightning development and testing using Jenkins, TestStand, C#, Python.",
        it: "Supportato lo sviluppo e il collaudo dell'F150 Lightning con Jenkins, TestStand, C# e Python."
      },      
      imageSrc:
        FordIcon,
     
      url: "/work/ford/",

      date: "05/2019 - 08/2019 ",

      description: [
        {
          en: "Developed automation pipeline to flash and systematically test devices routinely on the Jenkins platform for over 100 daily tests",
          it: "Sviluppata una pipeline di automazione per flashare e testare sistematicamente i dispositivi sulla piattaforma Jenkins per oltre 100 test giornalieri"
        },
        {
          en: "Prototyped utility in C# to flash multiple chips simultaneously on TestStand using C#, increasing efficiency by over 2 times",
          it: "Prototipata un'utility in C# per flashare più chip contemporaneamente su TestStand, aumentando l'efficienza di oltre 2 volte"
        },
        {
          en: "Debugged audio issues for infotainment chips with TestStand and .Net Framework by recreating issues in controlled settings",
          it: "Risolto problemi audio sui chip infotainment con TestStand e .NET Framework ricreando i problemi in ambienti controllati"
        }
      ],
      
      workImg:
      ford,
    
    },


  ],

// About Section --------------
aboutParaOne: {
  en: "I am an Electronic & IoT Engineering student at the University of Trieste, currently in my second year.",
  it: "Sono una studentessa di Ingegneria Elettronica & IoT presso l'Università degli Studi di Trieste, attualmente al mio secondo anno."
},
aboutParaTwo: {
  en: "Beyond my studies, I manage the department of Robotics at a local association called Asperastra, where I take care of the different robotics projects and teach Arduino to the members. I also co-founded a university robotics club to build a space for peers to develop custom robots.",
  it: "Oltre ai miei studi, gestisco il reparto di Robotica di un'associazione locale chiamata Asperastra, dove mi occupo di diversi progetti robotici e insegno Arduino ai nuovi membri. Ho anche co-fondato un club di robotica universitario per creare uno spazio dedicato allo sviluppo di robot personalizzati insieme ad altri studenti."
},
aboutParaThree: {
  en: "I love putting into practice my knowledge: whether that's moving from 3D models to physical assembly, troubleshooting Arduino code or calculating kinematics, I always find it rewarding and enjoyable.",
  it: "Amo mettere in pratica le mie conoscenze: che si tratti di passare dai modelli 3D all'assemblaggio fisico, di fare troubleshooting di codice Arduino o di calcolare la cinematica, trovo che sia sempre un'esperienza gratificante e stimolante."
},


nvidiaTime: {
  en: "Date not needed",
  it: "Dal 2023 a oggi"
},



nvidiaExperience: [
  {
    en: "I am contributing to the creation of a new University technology club, Nexus Robotics: we build custom robots and participate in robotics competitions. I am also teaching the course \"Hello World, Arduino\" at the local Fablab, Asperastra. Currently, I am a second-year Electronic Engineering & IoT Bachelor student at the University of Trieste and I am learning ROS2 to implement it in my projects, such as the Dobot arm and the quadruped robot I designed.",
    it: "Sto contribuendo alla creazione di un nuovo club tecnologico universitario, Nexus Robotics: costruiamo robot personalizzati e partecipiamo a competizioni di robotica. Insegno anche il corso \"Hello World, Arduino\" al Fablab locale Asperastra. Attualmente sono una studentessa al secondo anno del corso di Laurea Triennale in Ingegneria Elettronica & IoT all'Università di Trieste e sto imparando ROS2 per implementarlo nei miei progetti, come il braccio Dobot e il robot quadrupede che ho progettato."
  }
],


// NVIDIA Carousel Items
nvidiaCarouselItems: [
  {
    media: "gr1ImitationVideo",
    type: 'image',
    title: {
      en: "I am contributing to the creation of a new University technology club, Nexus Robotics",
      it: "Sto contribuendo alla creazione di un nuovo club tecnologico universitario, Nexus Robotics"
    },
    description: {
      en: "I am contributing to the creation of a new University technology club, Nexus Robotics: we build custom robots and participate in robotics competitions",
      it: "Sto contribuendo alla creazione di un nuovo club tecnologico universitario, Nexus Robotics: costruiamo robot personalizzati e partecipiamo a competizioni di robotica."
    }
  },
  {
    media: "h1FlipGif",
    type: 'image',
    title: {
      en: "I am teaching the course \"Hello World, Arduino\" at Asperastra Innovation Lab",
      it: "Insegno il corso \"Hello World, Arduino\" all'Asperastra Innovation Lab"
    },
    description: {
      en: "H1 attempted a backflip, but it didn't go as planned.",
      it: "Insegno il corso \"Hello World, Arduino\" all'Asperastra Innovation Lab."
    }
  },
  {
    media: "h1TrainVideo",
    type: 'image',
    title: {
      en: "I am currently a second-year Electronic Engineering & IoT Bachelor student at the University of Trieste",
      it: "Sono attualmente una studentessa al secondo anno di Ingegneria Elettronica & IoT all'Università di Trieste"
    },
    description: {
      en: "I am currently a second-year Electronic Engineering & IoT Bachelor student at the University of Trieste",
      it: "Sono attualmente una studentessa al secondo anno del corso di Laurea Triennale in Ingegneria Elettronica & IoT all'Università di Trieste."
    }
  },
  {
    media: "urLousdVideo",
    type: 'image',
    title: {
      en: "I am learning ROS2 and how to implement it in my projects, such as the Dobot arm and the quadruped robot I designed",
      it: "Sto imparando ROS2 e come implementarlo nei miei progetti, come il braccio Dobot e il robot quadrupede che ho progettato"
    },
    description: {
      en: "Demonstrating OpenUSD integration with Isaac Sim for robotics applications and digital twin workflows.",
      it: "Sto imparando ROS2 e come implementarlo nei miei progetti, come il braccio Dobot e il robot quadrupede che ho progettato."
    }
  }
  /*
  {
    media: "siggraphTalk",
    type: 'image',
    title: {
      en: "5",
      it: "Presentazione sulla robotica all'evento universitario"
    },
    description: {
      en: "Presenting research on humanoid robot control at SIGGRAPH 2025.",
      it: "Presentazione della ricerca sul controllo di robot umanoidi alla conferenza SIGGRAPH 2025."
    }
  }
    */
],

// Projects Carousel Items
projectsCarouselItems: [
  {
    media: "airplaneImage",
    type: 'image',
    title: {
      en: "Airplane Project (2020)",
      it: "Progetto Aereo (2020)"
    },
    subtitle: {
      en: "The sky is calling!",
      it: "Il cielo chiama!"
    },
    description: {
      en: "In this project, I built a remote controlled airplane from scratch using raspberry pi and esp8266 modules, and designed software and mechanical architectures from scratch in a team of two.",
      it: "In questo progetto, ho costruito da zero un aereo radiocomandato usando moduli Raspberry Pi ed ESP8266, progettando l'architettura software e meccanica da zero in un team di due persone."
    },
    buttons: [
      {
        text: { en: "Read More", it: "Leggi di più" },
        url: "https://github.com/The-Airplane-Project/Remote-Controlled-Airplane"
      }
    ]
  },
  {
    media: "watoImage",
    type: 'image',
    title: {
      en: "Watonomous",
      it: "Watonomous"
    },
    subtitle: {
      en: "Bolty!",
      it: "Bolty!"
    },
    description: {
      en: "Watonomous is a University of Waterloo design team that turns a chevy bolt to a level 4 autonomous vehicle. At Watonomous, I worked on local planning for the vehicle, particularly with the MPC controller and gained valuable experience with ROS.",
      it: "Watonomous è un team di progettazione dell'Università di Waterloo che trasforma una Chevy Bolt in un veicolo autonomo di livello 4. In Watonomous mi sono occupata della pianificazione locale del veicolo, in particolare del controller MPC, acquisendo preziosa esperienza con ROS."
    },
    buttons: [
      {
        text: { en: "Read more", it: "Leggi di più" },
        url: "https://www.watonomous.ca/"
      }
    ]
  },
  {
    media: "capstoneVideo",
    type: 'video',
    title: {
      en: "Capstone Project (2023)",
      it: "Progetto di Tesi (2023)"
    },
    subtitle: {
      en: "Multi-robot exploration and SLAM in a simulated warehouse",
      it: "Esplorazione multi-robot e SLAM in un magazzino simulato"
    },
    description: {
      en: "Multi-robot SLAM system for exploring and mapping a 80000 sqft virtual warehouse.",
      it: "Sistema SLAM multi-robot per esplorare e mappare un magazzino virtuale di 7.500 m²."
    },
    buttons: [
      {
        text: { en: "Read more", it: "Leggi di più" },
        url: "https://github.com/FireScopeRobotics"
      }
    ]
  },
  {
    media: "webappImg",
    type: 'image',
    title: {
      en: "Webapp Hackathon Projects",
      it: "Progetti Hackathon Webapp"
    },
    subtitle: {
      en: "Best Use of Google Cloud Award (Purrtector, NWHacks 2021)",
      it: "Premio Miglior Utilizzo di Google Cloud (Purrtector, NWHacks 2021)"
    },
    description: {
      en: "Intelibatch (left) is a webapp for displaying and predicting COVID19 cases across North America using React (front end), Flask (back end), and Tensorflow (prediction) to compute the optimal batch size for repeated testing. Purrtector (right) is a chrome extension for encouraging planet positive behaviors by rewarding users with digital pets using React and Flask.",
      it: "Intelibatch (sinistra) è una webapp per visualizzare e prevedere i casi COVID-19 in Nord America usando React (front end), Flask (back end) e TensorFlow (previsione) per calcolare la dimensione ottimale del batch per i test ripetuti. Purrtector (destra) è un'estensione Chrome che incoraggia comportamenti ecosostenibili premiando gli utenti con animali digitali usando React e Flask."
    },
    buttons: [
      {
        text: { en: "Intelibatch", it: "Intelibatch" },
        url: "https://devpost.com/software/pool-sampler"
      },
      {
        text: { en: "Purrtector", it: "Purrtector" },
        url: "https://devpost.com/software/purrtech"
      }
    ]
  },
  {
    media: "wearableImg",
    type: 'image',
    title: {
      en: "Wearable Hackathon Projects",
      it: "Progetti Hackathon Wearable"
    },
    subtitle: {
      en: "1st Place (VisionSense, MakeUofT 2019)",
      it: "1° Posto (VisionSense, MakeUofT 2019)"
    },
    description: {
      en: "VisionSense (left) is an IoT outfit to haptically guide users with visual impairments/obstructions while monitoring their environment. Nightlight (right) is a wearable that allows bike users to signal turns at night via motion-sensing technologies which will activate turn lights.",
      it: "VisionSense (sinistra) è un dispositivo IoT indossabile per guidare apticamente gli utenti con disabilità visive monitorando l'ambiente circostante. Nightlight (destra) è un indossabile che permette ai ciclisti di segnalare le svolte di notte tramite tecnologie di rilevamento del movimento che attivano le luci di direzione."
    },
    buttons: [
      {
        text: { en: "VisionSense", it: "VisionSense" },
        url: "https://devpost.com/software/visionsense"
      },
      {
        text: { en: "NightLight", it: "NightLight" },
        url: "https://devpost.com/software/team-18-go-team"
      }
    ]
  },
  {
    media: "mte380Img",
    type: 'image',
    title: {
      en: "BOFA, the Line Follower Robot",
      it: "BOFA, il Robot Segui-linea"
    },
    subtitle: {
      en: "2nd highest competition mark",
      it: "2° posto nella competizione"
    },
    description: {
      en: "Lead the mechanical design for a line following robot using SolidWorks, drafted Bill of Material, and oversee software, mechanical, and electrical developments as project manager",
      it: "Guidato la progettazione meccanica di un robot segui-linea con SolidWorks, redatta la distinta base, e supervisionato lo sviluppo software, meccanico ed elettrico in qualità di project manager"
    },
    buttons: [
      {
        text: { en: "Read More", it: "Leggi di più" },
        url: "https://github.com/B-O-F-A"
      }
    ]
  },
  {
    media: "hisecurityImage",
    type: 'image',
    title: {
      en: "HiSecurity!",
      it: "HiSecurity!"
    },
    subtitle: {
      en: "Hack the north, 2019",
      it: "Hack the north, 2019"
    },
    description: {
      en: "This camera system which utilizes machine vision (OpenCV and Sktlearn) to physically track and identify faces using the stepper motors onboard. The handy ui also enables users to track the system remotely and in real time.",
      it: "Questo sistema di telecamere utilizza la visione artificiale (OpenCV e Sklearn) per tracciare e identificare fisicamente i volti tramite i motori passo-passo a bordo. La pratica interfaccia utente consente anche il monitoraggio remoto in tempo reale."
    },
    buttons: [
      {
        text: { en: "Read More", it: "Leggi di più" },
        url: "https://devpost.com/software/acs-htn2019"
      }
    ]
  },
  {
    media: "vexImg",
    type: 'image',
    title: {
      en: "VEX Robotics",
      it: "VEX Robotics"
    },
    subtitle: {
      en: "Finalists, Alberta Provincial Championship 2017 and 2018",
      it: "Finalisti, Campionato Provinciale Alberta 2017 e 2018"
    },
    description: {
      en: "Over the three years, we explored various robotics systems such as holonomic drives, reverse double four bar lifts, and even learned C programming and programed PID controllers from scratch in a team of three.",
      it: "Nel corso di tre anni, il nostro team di tre persone ha esplorato vari sistemi robotici come azionamenti olonomici e sollevatori a doppia barra a quattro, imparando la programmazione C e sviluppando da zero controller PID."
    },
    buttons: [
      {
        text: { en: "Read More", it: "Leggi di più" },
        url: "https://globalnews.ca/video/3355924/sir-winston-churchill-students-head-to-vex-robotics-world-championship/"
      }
    ]
  },
  {
    media: "pilotImg",
    type: 'image',
    title: {
      en: "Pilot",
      it: "Pilota"
    },
    subtitle: {
      en: "\"Oh! I slipped the surly bonds of earth and danced the skies on bright yellow wings.\"",
      it: "\"Oh! Ho rotto i bruschi legami della terra e ho danzato i cieli su ali gialle e luminose.\""
    },
    description: {
      en: "I finally touched the sky when I earned my glider pilot license in 2016 and private pilot license in 2017. This was an breathtaking experiences that inspires me to build robotics airplanes to this date.",
      it: "Ho finalmente toccato il cielo quando ho ottenuto la licenza di pilota di aliante nel 2016 e la licenza di pilota privato nel 2017. È stata un'esperienza mozzafiato che ancora oggi mi ispira a costruire aerei robotici."
    },
    buttons: []
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
  it: "Parliamo di robot!"
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