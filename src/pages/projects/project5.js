import React from "react"
import Layout from "../../components/layout"
import { useLanguage } from "../../contexts/LanguageContext"

import videoDrink from "../../images/publications/Project4_Video4_old.mp4"
import videoSetup from "../../images/publications/Project4_Video4_old.mp4"
import fotoMenu from "../../images/publications/Project5_Photo1.jpg"
import fotoCustom from "../../images/publications/Project5_Photo1.jpg"
import fotoCustomer from "../../images/publications/Project5_Photo1.jpg"
import fotoOperator from "../../images/publications/Project5_Photo1.jpg"

const ProjectContent = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "Robot Barman",
      overview: "Overview",
      overviewText: "I built Robot Barman for fun. I had been learning how to program the robot — testing libraries, code and small exercises — and when I asked people what they would most want to see it do, a cocktail-making robot won by a mile. It runs on a Dobot collaborative arm.",
      overviewText2: "The interface lives in the browser (HTML, CSS and JavaScript) while the logic — robot control, recipes and inventory — is written in Python. The two communicate through a small local web server: the browser sends orders and reads the live state, and Python drives the arm. In short, you click something on screen and the arm moves.",
      setup: "Setting it up",
      setupText: "In setup mode you teach the robot the key positions — the glass station and each dispenser — using drag mode: you move the arm by hand and it repeats the motion to that exact point with high precision. You can also tune the movement speed, add the bottles and write the drink recipes. Nothing is hard-coded, so the whole system can be shaped to any bar layout.",
      features: "Features",
      feat1: "Physical dispensers release each beverage in 30 ml increments, which the arm presses using the glass it is holding.",
      feat2: "A fixed glass station where the arm picks up the glass at the start and sets it down when the drink is ready.",
      feat3: "A customer mode with two screens: a touchscreen for the customer and an operator panel with a live terminal and the core controls (reset the e-stop, send all joints to zero, initialise and command the gripper).",
      feat4: "Customers order a preset recipe or build their own drink. Every order updates the bottle levels, and when a bottle drops below one shot (30 ml) it is flagged and any drink using it is blocked — so the robot never pours what isn't there.",
      orderLabel: "Ordering — a preset or your own drink",
      prepLabel: "While the drink is being made — the two screens",
      captionDrink: "A customer orders, and the arm builds the drink from start to finish.",
      captionSetup: "Teaching each position by hand, in drag mode.",
      captionMenu: "Choosing from the preset recipes.",
      captionCustom: "Building a custom drink from the loaded bottles.",
      captionCustomer: "The customer screen during preparation.",
      captionOperator: "The operator console: live terminal and controls.",
      back: "← Back to Projects",
    },
    it: {
      title: "Robot Barman",
      overview: "Panoramica",
      overviewText: "Ho realizzato Robot Barman per divertimento. Stavo imparando a programmare il robot — provando librerie, codice e piccoli esercizi — e quando ho chiesto alle persone cosa avrebbero voluto vedergli fare, un robot che prepara cocktail ha vinto a mani basse. Funziona su un braccio collaborativo Dobot.",
      overviewText2: "L'interfaccia vive nel browser (HTML, CSS e JavaScript) mentre la logica — controllo del robot, ricette e inventario — è scritta in Python. I due comunicano tramite un piccolo server web locale: il browser invia gli ordini e legge lo stato in tempo reale, e Python muove il braccio. In pratica, clicchi qualcosa sullo schermo e il braccio si muove.",
      setup: "La configurazione",
      setupText: "In modalità configurazione si insegnano al robot le posizioni chiave — la stazione del bicchiere e ogni dispenser — usando la modalità drag: si sposta il braccio a mano e lui ripete il movimento verso quel punto esatto con grande precisione. Si possono anche regolare le velocità di movimento, aggiungere le bottiglie e scrivere le ricette. Niente è fisso, quindi l'intero sistema può essere adattato a qualsiasi allestimento.",
      features: "Funzionalità",
      feat1: "Dei dispenser fisici erogano ogni bevanda in incrementi da 30 ml, che il braccio preme usando il bicchiere che tiene in mano.",
      feat2: "Una stazione fissa dove il braccio prende il bicchiere all'inizio e lo posa quando il drink è pronto.",
      feat3: "Una modalità cliente con due schermi: un touchscreen per il cliente e un pannello operatore con un terminale live e i comandi principali (reset dell'e-stop, tutti i giunti a zero, inizializzazione e comando del gripper).",
      feat4: "Il cliente ordina una ricetta predefinita o crea il proprio drink. Ogni ordine aggiorna i livelli delle bottiglie e, quando una scende sotto uno shot (30 ml), viene segnalata e ogni drink che la usa viene bloccato — così il robot non versa mai ciò che non c'è.",
      orderLabel: "Ordinare — una ricetta o un drink personalizzato",
      prepLabel: "Durante la preparazione — i due schermi",
      captionDrink: "Un cliente ordina e il braccio prepara il drink dall'inizio alla fine.",
      captionSetup: "Insegnamento di ogni posizione a mano, in modalità drag.",
      captionMenu: "Scelta tra le ricette predefinite.",
      captionCustom: "Creazione di un drink personalizzato con le bottiglie caricate.",
      captionCustomer: "La schermata cliente durante la preparazione.",
      captionOperator: "La console operatore: terminale live e controlli.",
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

      {/* Hero: robot making a drink (on top) */}
      <div style={{ marginBottom: "60px" }}>
        <VideoElement src={videoDrink} />
        <p style={captionStyle}>{current.captionDrink}</p>
      </div>

      {/* Why + elements */}
      <section style={{ marginBottom: "60px" }}>
        <h2 style={{ color: "#8F00FF" }}>{current.overview}</h2>
        <p>{current.overviewText}</p>
        <p>{current.overviewText2}</p>

        {/* Setup: text left, video right */}
        <div style={{ display: "flex", gap: "20px", alignItems: "flex-start", marginTop: "40px" }}>
          <div style={{ flex: 1 }}>
            <h3 style={{ fontSize: "1.2rem", marginTop: "0" }}>{current.setup}</h3>
            <p>{current.setupText}</p>
          </div>
          <div style={{ flex: 1 }}>
            <VideoElement src={videoSetup} />
            <p style={captionStyle}>{current.captionSetup}</p>
          </div>
        </div>
      </section>

      {/* Features */}
      <h2 style={{ color: "#8F00FF", marginTop: "40px" }}>{current.features}</h2>
      <ul style={{ background: "#f8f9fa", padding: "20px 40px", borderRadius: "8px" }}>
        <li style={{ marginBottom: "10px" }}>{current.feat1}</li>
        <li style={{ marginBottom: "10px" }}>{current.feat2}</li>
        <li style={{ marginBottom: "10px" }}>{current.feat3}</li>
        <li>{current.feat4}</li>
      </ul>

      {/* Order panel: two vertical photos */}
      <h3 style={{ fontSize: "1.2rem", marginTop: "60px", marginBottom: "20px" }}>{current.orderLabel}</h3>
      <div style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
        <div style={{ flex: 1 }}>
          <img src={fotoMenu} alt="Order panel — preset menu" style={{ width: "100%", borderRadius: "8px", boxShadow: "0 4px 12px rgba(0,0,0,0.05)" }} />
          <p style={captionStyle}>{current.captionMenu}</p>
        </div>
        <div style={{ flex: 1 }}>
          <img src={fotoCustom} alt="Order panel — custom drink" style={{ width: "100%", borderRadius: "8px", boxShadow: "0 4px 12px rgba(0,0,0,0.05)" }} />
          <p style={captionStyle}>{current.captionCustom}</p>
        </div>
      </div>

      {/* Prepping: two vertical photos */}
      <h3 style={{ fontSize: "1.2rem", marginTop: "60px", marginBottom: "20px" }}>{current.prepLabel}</h3>
      <div style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
        <div style={{ flex: 1 }}>
          <img src={fotoCustomer} alt="Customer panel while the drink is being made" style={{ width: "100%", borderRadius: "8px", boxShadow: "0 4px 12px rgba(0,0,0,0.05)" }} />
          <p style={captionStyle}>{current.captionCustomer}</p>
        </div>
        <div style={{ flex: 1 }}>
          <img src={fotoOperator} alt="Operator panel while the drink is being made" style={{ width: "100%", borderRadius: "8px", boxShadow: "0 4px 12px rgba(0,0,0,0.05)" }} />
          <p style={captionStyle}>{current.captionOperator}</p>
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

const PaginaRobotBarman = () => (
  <Layout>
    <ProjectContent />
  </Layout>
)

export default PaginaRobotBarman