import React from "react"
import Layout from "../../components/layout"
import { useLanguage } from "../../contexts/LanguageContext"

import videoRobotDog from "../../images/publications/Project4_Video1.mp4" 
import videoFinale1 from "../../images/publications/Project4_Video2.mp4"
import videoFinale2 from "../../images/publications/Project4_Video3.mp4"
import fotoDettaglio1 from "../../images/publications/Project4_Photo1.png"
import fotoDettaglio2 from "../../images/publications/Project4_Photo2.png"
import videoSottoTutto from "../../images/publications/Project4_Video4.mp4"

const ProjectContent = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "Quadruped Robot V1",
      overview: "Overview",
      overviewText: "The Quadruped Robot V1 represents my first deep dive into complex robotics and was started in September 2023. What started as a natural progression from simpler projects evolved into an autonomous, 12 Degrees of Freedom quadruped robot. This version focuses on the transition from a concept to a functional, battery-powered robot capable of walking via custom Inverse Kinematics.",
      overviewText2: "V2 is currently under development, aiming to integrate ROS 2 simulations, a controller interface, and computer vision.",
      design: "Designing the Leg and the Body",
      designText: "Designed in Fusion 360, the chassis had to balance structural rigidity with weight efficiency. I developed four distinct leg prototypes before reaching the final design: early versions were either too chunky, adding unnecessary inertia, or too flimsy, causing the legs to buckle under the weight of 12 servos. The final iteration uses a slim, reinforced geometry that allows the servos to operate within their optimal torque range.",
      designText2: "During the initial development phase, I used a wooden platform to house the components, allowing me to focus entirely on leg kinematics. Once the movement was perfected, I designed and 3D printed a custom body that organizes all electronic parts and includes mounting points for a camera and a touch display for the V2.",
      components: "Main Components",
      logic: "Kinematics and Code",
      logicText: "The robot's movement is managed by complex mathematical calculations handled by the Raspberry Pi 5:",
      step1: "1. Inverse Kinematics",
      step1Text: "Equations derived using trigonometry and geometry allow commanding the foot to specific (x, y, z) coordinates.",
      step2: "2. Real-time Calculation",
      step2Text: "The code calculates the necessary angles for the three motors of each leg in real-time to achieve the desired position.",
      step3: "3. Possible Movements",
      step3Text: "Through Inverse Kinematics the robot is capable of walking forward, backward and side to side on command.",
      captionV1: "Version 1.1 walking.",
      captionV2: "Showing version V1.1 at Asperastra Innovation Lab.",
      captionP1: "Top view of the internal electronic arrangement of version V1.2.",
      captionP2: "Detail of the 3D printed joint structure.",
      captionVBottom: "Version 1.2 walking.",
      back: "← Back to Projects",
    },
    it: {
      title: "Robot Quadrupede V1",
      overview: "Panoramica",
      overviewText: "Il Robot Quadrupede V1 rappresenta la mia prima vera immersione nella robotica complessa, iniziata a settembre 2023. Nato come naturale progressione da progetti più semplici, si è evoluto in un robot quadrupede autonomo con 12 gradi di libertà. Questa versione si concentra sulla transizione da concept a robot funzionale alimentata a batteria, capace di camminare tramite cinematica inversa personalizzata.",
      overviewText2: "La V2 è attualmente in fase di sviluppo e punta a integrare simulazioni ROS 2, un'interfaccia di controllo e computer vision.",
      design: "Design delle Zampe e del Corpo",
      designText: "Progettato in Fusion 360, il telaio doveva bilanciare rigidità strutturale ed efficienza nel peso. Ho sviluppato quattro prototipi di zampa prima di raggiungere il design finale: le versioni iniziali erano o troppo massicce, aggiungendo inerzia inutile, o troppo fragili, causando cedimenti sotto il peso dei 12 servo. L'iterazione finale utilizza una geometria sottile e rinforzata che permette ai servo di operare nel loro range di coppia ottimale.",
      designText2: "Durante la fase iniziale di sviluppo, ho utilizzato una piattaforma in legno per alloggiare i componenti, permettendomi di concentrarmi interamente sulla cinematica delle zampe. Una volta perfezionato il movimento, ho progettato e stampato in 3D un corpo personalizzato che organizza tutte le parti elettroniche e include punti di fissaggio per una fotocamera e un display touch per la V2.",
      components: "Componenti Principali",
      logic: "Cinematica e Codice",
      logicText: "Il movimento del robot è gestito da calcoli matematici complessi elaborati dal Raspberry Pi 5:",
      step1: "1. Cinematica Inversa",
      step1Text: "Le equazioni derivate tramite trigonometria e geometria permettono di comandare il piede verso coordinate (x, y, z) specifiche.",
      step2: "2. Calcolo in Tempo Reale",
      step2Text: "Il codice calcola istantaneamente gli angoli necessari per i tre motori di ogni zampa per raggiungere la posizione desiderata.",
      step3: "3. Movimenti Possibili",
      step3Text: "Tramite la cinematica inversa, il robot è capace di camminare in avanti, indietro e lateralmente su comando.",
      captionV1: "Versione 1.1 in cammino.",
      captionV2: "Presentazione della versione V1.1 all'Asperastra Innovation Lab.",
      captionP1: "Vista dall'alto della disposizione elettronica interna della versione V1.2.",
      captionP2: "Dettaglio della struttura stampata in 3D dei giunti.",
      captionVBottom: "Versione 1.2 in cammino.",
      back: "← Torna ai Progetti",
    }
  };

  const current = language === "it" ? content.it : content.en;
  const captionStyle = { fontSize: "0.9rem", color: "#666", marginTop: "10px", fontStyle: "italic" };
  
  const VideoElement = ({ src }) => (
    <video 
      src={src} 
      controls 
      autoPlay 
      muted 
      loop 
      playsInline
      style={{ width: "100%", borderRadius: "8px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }} 
    />
  );

  return (
    <div style={{ padding: "120px 20px", maxWidth: "900px", margin: "0 auto", textAlign: "left", lineHeight: "1.6" }}>
      
      <h1 style={{ fontSize: "2.5rem", color: "#333", marginBottom: "40px" }}>{current.title}</h1>

      <section style={{ marginBottom: "60px" }}>
        <h2 style={{ color: "#8F00FF" }}>{current.overview}</h2>
        <p>{current.overviewText}</p>
        <p>{current.overviewText2}</p>
        
        <h3 style={{ fontSize: "1.2rem", marginTop: "20px" }}>{current.design}</h3>
        <p>{current.designText}</p>
        <p>{current.designText2}</p>

        <div style={{ marginTop: "30px" }}>
          <VideoElement src={videoRobotDog} />
        </div>
      </section>

      <h2 style={{ color: "#8F00FF", marginTop: "40px" }}>{current.components}</h2>
      <ul style={{ background: "#f8f9fa", padding: "20px 40px", borderRadius: "8px" }}>
        <li><strong>Microcontroller:</strong> Raspberry Pi 5</li>
        <li><strong>Actuators:</strong> 12x MG996R Servos, PCA9685 servo driver</li>
        <li><strong>Power System:</strong> 12V LiPo Battery, PDB, 2x step down converters</li>
        <li><strong>Safety:</strong> On-Off Switch & Emergency Button</li>
      </ul>

      <h2 style={{ color: "#8F00FF", marginTop: "40px" }}>{current.logic}</h2>
      <p>{current.logicText}</p>

      <div style={{ marginTop: "20px", marginBottom: "40px" }}>
        <p><strong>{current.step1}</strong></p>
        <p>{current.step1Text}</p>
        <p><strong>{current.step2}</strong></p>
        <p>{current.step2Text}</p>
        <p><strong>{current.step3}</strong></p>
        <p>{current.step3Text}</p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "50px", marginTop: "60px" }}>
        
        <div>
          <VideoElement src={videoFinale1} />
          <p style={captionStyle}>{current.captionV1}</p>
        </div>

        {/* Video 3 and Photo 1 side by side */}
        <div style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
          <div style={{ flex: 1 }}>
            <VideoElement src={videoFinale2} />
            <p style={captionStyle}>{current.captionV2}</p>
          </div>
          <div style={{ flex: 1 }}>
            <img
              src={fotoDettaglio1}
              alt="Robot detail 1"
              style={{ width: "100%", borderRadius: "8px", boxShadow: "0 4px 12px rgba(0,0,0,0.05)" }}
            />
            <p style={captionStyle}>{current.captionP1}</p>
          </div>
        </div>

        <div>
          <img src={fotoDettaglio2} alt="Robot detail 2" style={{ width: "100%", borderRadius: "8px", boxShadow: "0 4px 12px rgba(0,0,0,0.05)" }} />
          <p style={captionStyle}>{current.captionP2}</p>
        </div>

        <div>
          <VideoElement src={videoSottoTutto} />
          <p style={captionStyle}>{current.captionVBottom}</p>
        </div>

      </div>

      <div style={{ marginTop: "60px", borderTop: "1px solid #eee", paddingTop: "20px" }}>
        <a href="/#publications" style={{ color: "#8F00FF", textDecoration: "none", fontWeight: "bold" }}>
          {current.back}
        </a>
      </div>
    </div>
  );
};

const PaginaRobotDog = () => (
  <Layout>
    <ProjectContent />
  </Layout>
)

export default PaginaRobotDog