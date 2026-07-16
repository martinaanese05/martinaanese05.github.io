import React from "react"
import Layout from "../../components/layout"
import { useLanguage } from "../../contexts/LanguageContext"

import fotoPrincipale from "../../images/publications/Project1_Photo1.png" 
import fotoLogica from "../../images/publications/Project1_Photo2.png"

const ProjectContent = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "Obstacle Avoiding Car",
      overview: "Overview",
      overviewText: "This project was my very first entry into the world of robotics, developed in April 2022. The goal was to create a vehicle that avoids collisions and is able to decide on the most efficient path. Instead of a fixed sensor, I mounted the ultrasonic eyes on a rotating servo to give the robot a 180° field of vision.",
      components: "Main Components",
      logic: "Logic and Code",
      logicText: "In order to work correctly, this robot uses a comparative logic loop:",
      detection: "1. Detection",
      detectionText: "The robot drives forward until the ultrasonic sensor percieves an obstacle at d < 25cm.",
      analysis: "2. Analysis",
      analysisText: "Once an obstacle is detected, the robot stops and performs a look around sequence:",
      analysisA: "a. Backtracks for 100ms to create clearance",
      analysisB: "b. Rotate servo to 0° (Right) and ping distance",
      analysisC: "c. Rotate servo to 180° (Left) and ping distance",
      execution: "3. Execution",
      executionText: "The Arduino compares the two variables: Direction = max(d_left, d_right) and then turns in the direction with the greatest distance available.",
      back: "← Back to Projects",
    },
    it: {
      title: "Auto evita ostacoli",
      overview: "Panoramica",
      overviewText: "Questo progetto è stato il mio primo approccio al mondo della robotica, sviluppato in aprile 2022. L'obiettivo era costruire un veicolo in grado di evitare collisioni e scegliere il percorso più efficiente. Invece di un sensore fisso, ho montato il sensore ultrasonico su un servo rotante per dare al robot un campo visivo di 180°.",
      components: "Componenti Principali",
      logic: "Logica e Codice",
      logicText: "Per funzionare correttamente, questo robot utilizza un ciclo logico comparativo:",
      detection: "1. Rilevamento",
      detectionText: "Il robot avanza finché il sensore ultrasonico rileva un ostacolo a d < 25cm.",
      analysis: "2. Analisi",
      analysisText: "Una volta rilevato un ostacolo, il robot si ferma ed esegue una sequenza di scansione",
      analysisA: "a. Si ritrae per 100ms per creare distanza",
      analysisB: "b. Ruota il servo a 0° (destra) e misura la distanza",
      analysisC: "c. Ruota il servo a 180° (sinistra) e misura la distanza",
      execution: "3. Esecuzione",
      executionText: "L'Arduino confronta le due variabili: Direzione = max(d_sinistra, d_destra) e poi svolta nella direzione con la distanza maggiore disponibile.",
      back: "← Torna ai Progetti",
    },
    de: {
      title: "Hindernisvermeidendes Auto",
      overview: "Überblick",
      overviewText: "Dieses Projekt war mein allererster Einstieg in die Welt der Robotik, entwickelt im April 2022. Das Ziel war es, ein Fahrzeug zu bauen, das Kollisionen vermeidet und den effizientesten Weg wählen kann. Anstelle eines fest montierten Sensors habe ich die Ultraschall-Augen auf einem rotierenden Servo montiert, um dem Roboter ein Sichtfeld von 180° zu geben.",
      components: "Hauptkomponenten",
      logic: "Logik und Code",
      logicText: "Um korrekt zu funktionieren, verwendet dieser Roboter eine vergleichende Logikschleife:",
      detection: "1. Erkennung",
      detectionText: "Der Roboter fährt vorwärts, bis der Ultraschallsensor ein Hindernis bei d < 25 cm wahrnimmt.",
      analysis: "2. Analyse",
      analysisText: "Sobald ein Hindernis erkannt wird, stoppt der Roboter und führt eine Umschausequenz durch:",
      analysisA: "a. Fährt für 100ms zurück, um Abstand zu schaffen",
      analysisB: "b. Dreht den Servo auf 0° (rechts) und misst die Entfernung",
      analysisC: "c. Dreht den Servo auf 180° (links) und misst die Entfernung",
      execution: "3. Ausführung",
      executionText: "Der Arduino vergleicht die beiden Variablen: Richtung = max(d_links, d_rechts) und wendet sich dann in die Richtung mit der größten verfügbaren Entfernung.",
      back: "← Zurück zu den Projekten",
    }
  };

  const current = language === "it" ? content.it : language === "de" ? content.de : content.en;

  return (
    <div style={{ padding: "120px 20px", maxWidth: "800px", margin: "0 auto", textAlign: "left", lineHeight: "1.6" }}>
      
      <h1 style={{ fontSize: "2.5rem", color: "#333", marginBottom: "20px" }}>{current.title}</h1>
      
      <img src={fotoPrincipale} alt="Obstacle Avoiding Car" style={{ width: "100%", borderRadius: "12px", marginBottom: "40px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }} />

      <h2 style={{ color: "#7A28CB" }}>{current.overview}</h2>
      <p>{current.overviewText}</p>

      <h2 style={{ color: "#7A28CB", marginTop: "40px" }}>{current.components}</h2>
      <ul style={{ background: "#f8f9fa", padding: "20px 40px", borderRadius: "8px" }}>
        <li><strong>Controller: </strong> Arduino Uno R3</li>
        <li><strong>Actuators: </strong> 4 DC Gear Motors</li>
        <li><strong>Motor Control: </strong> L293D Shield</li>
        <li><strong>Vision: </strong> HC-SR04 Ultrasonic Sensor</li>
        <li><strong>Neck: </strong> SG90 Servo</li>
      </ul>

      <h2 style={{ color: "#7A28CB", marginTop: "40px" }}>{current.logic}</h2>

      <img src={fotoLogica} alt="Logic Flow" style={{ width: "100%", maxWidth: "500px", display: "block", margin: "20px auto", borderRadius: "8px" }} />

      <p>{current.logicText}</p>

      <p><strong>{current.detection}</strong></p>
      <p>{current.detectionText}</p>
      
      <p><strong>{current.analysis}</strong></p>
      <p>{current.analysisText}</p>
      <p> {current.analysisA}</p>
      <p> {current.analysisB}</p>
      <p> {current.analysisC}</p>

      <p><strong>{current.execution}</strong></p>
      <p>{current.executionText}</p>

      <div style={{ marginTop: "60px", borderTop: "1px solid #eee", paddingTop: "20px" }}>
        <a href="/#publications" style={{ color: "#7A28CB", textDecoration: "none", fontWeight: "bold" }}>
          {current.back}
        </a>
      </div>
    </div>
  );
};

const PaginaProgetto1 = () => (
  <Layout>
    <ProjectContent />
  </Layout>
)

export default PaginaProgetto1