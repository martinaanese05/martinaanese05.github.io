import React from "react"
import Layout from "../../components/layout"
import { useLanguage } from "../../contexts/LanguageContext"

import videoDrink from "../../images/publications/Project5_Video1.mp4"
import videoSetup from "../../images/publications/Project5_Video2.mp4"
import fotoMenu from "../../images/publications/Project5_Photo2.png"
import fotoCustom from "../../images/publications/Project5_Photo3.png"
import fotoCustomer from "../../images/publications/Project5_Photo4.png"
import fotoOperator from "../../images/publications/Project5_Photo5.png"

const ProjectContent = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "Robot Barman",
      overview: "Overview",
      overviewText: "I built this Robot Barman because I had been learning how to program the robot via Python instead of its original software, which didn't allow to add external elements, when I asked my friends what they would most want to see it do, a cocktail making robot won by popular demand.",
      overviewText2: "The interface lives in the HTML file, while the logic and control is implemented in Python. The two communicate through a small local web server: the browser sends orders and reads the live state, and Python drives the arm.",
      setup: "Setting it up",
      setupText: "In setup mode you teach the robot the key positions regarding the glass station and each dispenser using drag mode: you move the arm by hand and it repeats the motion to that exact point with high precision. You can also tune the movement speed, add the bottles and write the drink recipes. This way the whole system can be shaped to any bar layout.",
      features: "Features",
      feat1: "Physical dispensers release each beverage in 30 ml increments, which the arm presses using the glass it's holding.",
      feat2: "A fixed glass station where the arm picks up the glass at the start and sets it down when the drink is ready.",
      feat3: "A customer mode with two screens: a touchscreen for the customer and an operator panel with a live terminal and the core controls (reset the e-stop, send all joints to zero, initialise and command the gripper).",
      feat4: "Customers can order a recipe from the menu or build their own drink. Every order updates the bottle levels, and when a bottle drops below one shot (30 ml) it is flagged and any drink using it is blocked so the robot never pours what isn't there.",
      orderLabel: "Ordering a drink",
      prepLabel: "During the preparation of the drink",
      captionDrink: "Video of the Robot Barman making a drink",
      captionSetup: "Video of the whole setup",
      captionMenu: "Choosing from the menu",
      captionCustom: "Building a custom drink",
      captionCustomer: "The customer screen during preparation",
      captionOperator: "The operator console: live terminal and controls",
      back: "← Back to Projects",
    },
    it: {
      title: "Robot Barman",
      overview: "Panoramica",
      overviewText: "Ho realizzato questo Robot Barman perché stavo imparando a programmare il robot in Python invece del suo software originale, che non permetteva di aggiungere elementi esterni; quando ho chiesto ai miei amici cosa avrebbero voluto vedergli fare, un robot che prepara cocktail ha vinto per richiesta popolare.",
      overviewText2: "L'interfaccia si trova nel file HTML, mentre la logica e il controllo sono implementati in Python. I due comunicano tramite un piccolo server web locale: il browser invia gli ordini e legge lo stato in tempo reale, e Python muove il braccio.",
      setup: "La configurazione",
      setupText: "In modalità configurazione si insegnano al robot le posizioni chiave relative alla stazione del bicchiere e a ciascun dispenser usando la modalità drag: si sposta il braccio a mano e lui ripete il movimento verso quel punto esatto con grande precisione. Si possono anche regolare le velocità di movimento, aggiungere le bottiglie e scrivere le ricette. In questo modo l'intero sistema può essere adattato a qualsiasi allestimento.",
      features: "Funzionalità",
      feat1: "Dei dispenser fisici erogano ogni bevanda in incrementi da 30 ml, che il braccio preme usando il bicchiere che tiene in mano.",
      feat2: "Una stazione fissa dove il braccio prende il bicchiere all'inizio e lo posa quando il drink è pronto.",
      feat3: "Una modalità cliente con due schermi: un touchscreen per il cliente e un pannello operatore con un terminale live e i comandi principali (reset dell'e-stop, tutti i giunti a zero, inizializzazione e comando del gripper).",
      feat4: "Il cliente può ordinare una ricetta dal menu o creare il proprio drink. Ogni ordine aggiorna i livelli delle bottiglie e, quando una scende sotto uno shot (30 ml), viene segnalata e ogni drink che la usa viene bloccato, così il robot non versa mai ciò che non c'è.",
      orderLabel: "Ordinare un drink",
      prepLabel: "Durante la preparazione del drink",
      captionDrink: "Video del Robot Barman che prepara un drink",
      captionSetup: "Video dell'intera configurazione",
      captionMenu: "Scelta dal menu",
      captionCustom: "Creazione di un drink personalizzato",
      captionCustomer: "La schermata cliente durante la preparazione",
      captionOperator: "La console operatore: terminale live e controlli",
      back: "← Torna ai Progetti",
    },
    de: {
      title: "Robot Barman",
      overview: "Überblick",
      overviewText: "Ich habe diesen Robot Barman gebaut, weil ich gelernt hatte, den Roboter mit Python statt mit seiner ursprünglichen Software zu programmieren, die das Hinzufügen externer Elemente nicht erlaubte. Als ich meine Freunde fragte, was sie ihn am liebsten tun sehen würden, gewann ein Cocktail-mixender Roboter auf allgemeinen Wunsch.",
      overviewText2: "Die Oberfläche befindet sich in der HTML-Datei, während die Logik und die Steuerung in Python umgesetzt sind. Die beiden kommunizieren über einen kleinen lokalen Webserver: der Browser sendet Bestellungen und liest den Live-Status, und Python steuert den Arm.",
      setup: "Die Einrichtung",
      setupText: "Im Einrichtungsmodus bringt man dem Roboter die wichtigen Positionen für die Glasstation und jeden Dispenser bei, und zwar im Drag-Modus: Man bewegt den Arm von Hand, und er wiederholt die Bewegung mit hoher Präzision genau zu diesem Punkt. Man kann außerdem die Bewegungsgeschwindigkeit einstellen, die Flaschen hinzufügen und die Rezepte schreiben. So lässt sich das gesamte System an jedes Bar-Layout anpassen.",
      features: "Funktionen",
      feat1: "Physische Dispenser geben jedes Getränk in 30-ml-Schritten ab, die der Arm mit dem Glas in seiner Hand betätigt.",
      feat2: "Eine feste Glasstation, an der der Arm das Glas zu Beginn aufnimmt und wieder absetzt, wenn das Getränk fertig ist.",
      feat3: "Ein Kundenmodus mit zwei Bildschirmen: ein Touchscreen für den Kunden und ein Bedienpanel mit einem Live-Terminal und den wichtigsten Steuerbefehlen (Not-Aus zurücksetzen, alle Gelenke auf null, Greifer initialisieren und ansteuern).",
      feat4: "Kunden können ein Rezept aus dem Menü bestellen oder ihr eigenes Getränk zusammenstellen. Jede Bestellung aktualisiert die Füllstände der Flaschen, und wenn eine Flasche unter einen Shot (30 ml) fällt, wird sie markiert und jedes Getränk, das sie verwendet, gesperrt, sodass der Roboter nie etwas eingießt, was nicht vorhanden ist.",
      orderLabel: "Ein Getränk bestellen",
      prepLabel: "Während der Zubereitung des Getränks",
      captionDrink: "Video des Robot Barman bei der Zubereitung eines Getränks",
      captionSetup: "Video der gesamten Einrichtung",
      captionMenu: "Auswahl aus dem Menü",
      captionCustom: "Zusammenstellen eines eigenen Getränks",
      captionCustomer: "Der Kundenbildschirm während der Zubereitung",
      captionOperator: "Die Bedienkonsole: Live-Terminal und Steuerung",
      back: "← Zurück zu den Projekten",
    }
  };

  const current = language === "it" ? content.it : language === "de" ? content.de : content.en;
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

        {/* Setup: text, then video below */}
        <h3 style={{ fontSize: "1.2rem", marginTop: "40px" }}>{current.setup}</h3>
        <p>{current.setupText}</p>
        <div style={{ marginTop: "30px" }}>
          <VideoElement src={videoSetup} />
          <p style={captionStyle}>{current.captionSetup}</p>
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