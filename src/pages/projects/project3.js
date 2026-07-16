import React from "react"
import Layout from "../../components/layout"
import { useLanguage } from "../../contexts/LanguageContext"

import videoRobotArm from "../../images/publications/Project3_Video1.mp4" 

const ProjectContent = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "Robot Arm v1",
      overview: "Overview",
      overviewText: "This project I started in July 2022 is a 5 Degrees of Freedom Robotic arm designed and 3D printed to explore 3D modeling, kinematics, and programming. Built using PLA+ and high-torque servos, it is capable of precise movements within its workspace.",
      appDescription: "It is controlled via a custom mobile app that allows the user to manipulate joint positions, speed, and record sequences.",
      components: "Main Components",
      logic: "Logic and Code",
      logicText: "The Robotic arm operates within the following framework:",
      step1: "1. Data Transmission",
      step1Text: "The mobile app sends data packets via Bluetooth containing slider values (0° to 180°) for each motor.",
      step2: "2. Parsing and Safety",
      step2Text: "The Arduino parses these values and sends them to the PCA9685 driver, strictly enforcing software-defined joint limits to prevent mechanical stress.",
      step3: "3. Speed and Automation",
      step3Text: "A dedicated slider manages speed via interpolation delays. Users can save coordinates and execute recorded sequences automatically.",
      back: "← Back to Projects",
    },
    it: {
      title: "Robot Arm v1",
      overview: "Panoramica",
      overviewText: "Questo progetto, sviluppato tra luglio 2022 e agosto 2023, è un braccio robotico a 5 gradi di libertà progettato e stampato in 3D per esplorare la modellazione 3D, la cinematica e la programmazione. Costruito in PLA+ e servomotori ad alta coppia, è capace di movimenti precisi all'interno dello spazio di lavoro.",
      appDescription: "È controllato tramite un'app mobile personalizzata che permette di manipolare le posizioni dei giunti, la velocità e registrare sequenze.",
      components: "Componenti Principali",
      logic: "Logica e Codice",
      logicText: "Il braccio robotico opera secondo il seguente schema:",
      step1: "1. Trasmissione Dati",
      step1Text: "L'app mobile invia pacchetti dati via Bluetooth contenenti i valori degli slider (da 0° a 180°) per ogni motore.",
      step2: "2. Parsing e Sicurezza",
      step2Text: "L'Arduino analizza questi valori e li invia al driver PCA9685, applicando rigorosamente limiti software ai giunti per prevenire stress meccanici.",
      step3: "3. Velocità e Automazione",
      step3Text: "Uno slider dedicato gestisce la velocità tramite ritardi di interpolazione. L'utente può salvare coordinate ed eseguire sequenze registrate.",
      back: "← Torna ai Progetti",
    },
    de: {
      title: "Robot Arm v1",
      overview: "Überblick",
      overviewText: "Dieses Projekt, das ich im Juli 2022 begonnen habe, ist ein Roboterarm mit 5 Freiheitsgraden, der entworfen und 3D-gedruckt wurde, um 3D-Modellierung, Kinematik und Programmierung zu erkunden. Gebaut aus PLA+ und Hochdrehmoment-Servos, ist er zu präzisen Bewegungen innerhalb seines Arbeitsbereichs fähig.",
      appDescription: "Er wird über eine speziell entwickelte mobile App gesteuert, mit der der Benutzer Gelenkpositionen und Geschwindigkeit steuern sowie Sequenzen aufzeichnen kann.",
      components: "Hauptkomponenten",
      logic: "Logik und Code",
      logicText: "Der Roboterarm arbeitet nach folgendem Schema:",
      step1: "1. Datenübertragung",
      step1Text: "Die mobile App sendet Datenpakete über Bluetooth mit Schieberegler-Werten (0° bis 180°) für jeden Motor.",
      step2: "2. Auswertung und Sicherheit",
      step2Text: "Der Arduino wertet diese Werte aus und sendet sie an den PCA9685-Treiber, wobei softwaredefinierte Gelenkgrenzen strikt eingehalten werden, um mechanische Belastung zu vermeiden.",
      step3: "3. Geschwindigkeit und Automatisierung",
      step3Text: "Ein eigener Schieberegler steuert die Geschwindigkeit über Interpolationsverzögerungen. Nutzer können Koordinaten speichern und aufgezeichnete Sequenzen automatisch ausführen.",
      back: "← Zurück zu den Projekten",
    }
  };

  const current = language === "it" ? content.it : language === "de" ? content.de : content.en;

  return (
    <div style={{ padding: "120px 20px", maxWidth: "1000px", margin: "0 auto", textAlign: "left", lineHeight: "1.6" }}>
      
      <h1 style={{ fontSize: "2.5rem", color: "#333", marginBottom: "40px" }}>{current.title}</h1>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "40px", alignItems: "center", marginBottom: "60px" }}>
        <div style={{ flex: "1", minWidth: "300px" }}>
          <h2 style={{ color: "#7A28CB" }}>{current.overview}</h2>
          <p>{current.overviewText}</p>
          <p>{current.appDescription}</p>
        </div>
        
        <div style={{ flex: "1", minWidth: "300px" }}>
          <video
            src={videoRobotArm}
            controls
            autoPlay
            muted
            loop
            style={{ width: "100%", borderRadius: "8px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
          >
            Il tuo browser non supporta il tag video.
          </video>
        </div>
      </div>

      <h2 style={{ color: "#7A28CB", marginTop: "40px" }}>{current.components}</h2>
      <ul style={{ background: "#f8f9fa", padding: "20px 40px", borderRadius: "8px", listStyleType: "square" }}>
        <li><strong>Controller:</strong> Arduino Uno R3 & HM-10 Bluetooth module</li>
        <li><strong>Actuators:</strong> 6x MG996R Servo Motors & PCA9685 16-channel driver</li>
        <li><strong>Structure:</strong> Custom 3D printed components (PLA+)</li>
        <li><strong>Power Supply:</strong> 5V 5A DC power source</li>
      </ul>

      <h2 style={{ color: "#7A28CB", marginTop: "40px" }}>{current.logic}</h2>
      <p>{current.logicText}</p>

      <div style={{ marginTop: "20px" }}>
        <p><strong>{current.step1}</strong></p>
        <p>{current.step1Text}</p>

        <p><strong>{current.step2}</strong></p>
        <p>{current.step2Text}</p>

        <p><strong>{current.step3}</strong></p>
        <p>{current.step3Text}</p>
      </div>

      <div style={{ marginTop: "60px", borderTop: "1px solid #eee", paddingTop: "20px" }}>
        <a href="/#publications" style={{ color: "#7A28CB", textDecoration: "none", fontWeight: "bold" }}>
          {current.back}
        </a>
      </div>
    </div>
  );
};

const PaginaRobotArm = () => (
  <Layout>
    <ProjectContent />
  </Layout>
)

export default PaginaRobotArm