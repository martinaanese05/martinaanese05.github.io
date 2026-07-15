import React from "react"
import Layout from "../../components/layout"
import { useLanguage } from "../../contexts/LanguageContext"

import videoPrincipale from "../../images/publications/Project2_Video1.mp4" 

const ProjectContent = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "Dino Game Player",
      overview: "Overview",
      overviewText: "This is a simple project I built in June 2022 to play the Google Chrome Dino Game automatically. By using a light sensor to see the screen and a servo motor to press the key, the system bypasses the need for software integration with the browser.",
      components: "Main Components",
      logic: "Logic and Code",
      logicText: "The system operates by monitoring real-time light levels on the monitor through a physical interface:",
      step1: "1. Light Monitoring",
      step1Text: "The Arduino constantly reads the analog value from the GL5528 photoresistor taped to the screen. It establishes a baseline brightness for the white background.",
      step2: "2. Obstacle Detection",
      step2Text: "When a cactus passes under the sensor, the light level drops significantly. The code detects this change immediately.",
      step3: "3. Physical Action",
      step3Text: "Once the threshold is crossed, the Arduino commands the SG90 servo motor to rotate, physically hitting the spacebar to make the dinosaur jump.",
      back: "← Back to Projects",
    },
    it: {
      title: "Giocatore di Dino Game",
      overview: "Panoramica",
      overviewText: "Questo è un semplice hack hardware costruito in giugno 2022 per giocare automaticamente al Dino Game di Chrome. Utilizzando un sensore di luce per vedere lo schermo e un servo motore per premere il tasto, il sistema evita qualsiasi integrazione software con il browser.",
      components: "Componenti Principali",
      logic: "Logica e Codice",
      logicText: "Il sistema funziona monitorando in tempo reale i livelli di luminosità sul monitor attraverso un'interfaccia fisica:",
      step1: "1. Monitoraggio Luce",
      step1Text: "L'Arduino legge costantemente il valore analogico dalla fotoresistenza GL5528 fissata allo schermo, stabilendo una luminosità di base per lo sfondo bianco.",
      step2: "2. Rilevamento Ostacoli",
      step2Text: "Quando un cactus (oggetto scuro) passa sotto il sensore, il livello di luce scende drasticamente. Il codice rileva immediatamente questa variazione.",
      step3: "3. Azione Fisica",
      step3Text: "Una volta superata la soglia, l'Arduino comanda al servomotore SG90 di ruotare, premendo fisicamente la barra spaziatrice per far saltare il dinosauro.",
      back: "← Torna ai Progetti",
    }
  };

  const current = language === "it" ? content.it : content.en;

  return (
    <div style={{ padding: "120px 20px", maxWidth: "800px", margin: "0 auto", textAlign: "left", lineHeight: "1.6" }}>
      
      <h1 style={{ fontSize: "2.5rem", color: "#333", marginBottom: "20px" }}>{current.title}</h1>

      <video
        src={videoPrincipale}
        controls
        autoPlay
        muted
        loop
        style={{ width: "100%", maxWidth: "600px", display: "block", margin: "20px auto", borderRadius: "8px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
      >
        Il tuo browser non supporta il tag video.
      </video>

      <h2 style={{ color: "#7A28CB" }}>{current.overview}</h2>
      <p>{current.overviewText}</p>

      <h2 style={{ color: "#7A28CB", marginTop: "40px" }}>{current.components}</h2>
      <ul style={{ background: "#f8f9fa", padding: "20px 40px", borderRadius: "8px" }}>
        <li><strong>Controller: </strong> Arduino Uno R3</li>
        <li><strong>Sensor: </strong> GL5528 Photoresistor (LDR)</li>
        <li><strong>Actuator: </strong> SG90 Servo Motor</li>
      </ul>

      <h2 style={{ color: "#7A28CB", marginTop: "40px" }}>{current.logic}</h2>

      <p>{current.logicText}</p>

      <p><strong>{current.step1}</strong></p>
      <p>{current.step1Text}</p>

      <p><strong>{current.step2}</strong></p>
      <p>{current.step2Text}</p>

      <p><strong>{current.step3}</strong></p>
      <p>{current.step3Text}</p>

      <div style={{ marginTop: "60px", borderTop: "1px solid #eee", paddingTop: "20px" }}>
        <a href="/#publications" style={{ color: "#7A28CB", textDecoration: "none", fontWeight: "bold" }}>
          {current.back}
        </a>
      </div>
    </div>
  );
};

const PaginaDinoBot = () => (
  <Layout>
    <ProjectContent />
  </Layout>
)

export default PaginaDinoBot