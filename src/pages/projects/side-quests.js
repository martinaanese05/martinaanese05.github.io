import React, { useEffect, useRef } from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { useLanguage } from "../../contexts/LanguageContext"
import "../../styles/sideQuests.scss"

// Videos: put these files in src/images/sidequests/
import videoGo2Terminal from "../../images/sidequests/go2-terminal.mp4"
import videoCamera from "../../images/sidequests/cr5-camera.mp4"
import videoCups from "../../images/sidequests/cr5-cups.mp4"
import videoFlower from "../../images/sidequests/cr5-flower.mp4"
import videoPizza from "../../images/sidequests/cr5-pizza.mp4"
import videoBubbles from "../../images/sidequests/cr5-bubbles.mp4" // horizontal
import videoGo2Fair from "../../images/sidequests/go2-fair.mp4"

// Muted looping clip that only plays while it's on screen,
// so the page doesn't run every video at once.
const LoopVideo = ({ src, label, orientation = "vertical" }) => {
  const ref = useRef(null)

  useEffect(() => {
    const video = ref.current
    if (!video || typeof window === "undefined") return
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduceMotion || !("IntersectionObserver" in window)) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {})
        } else {
          video.pause()
        }
      },
      { threshold: 0.4 }
    )
    observer.observe(video)
    return () => observer.disconnect()
  }, [])

  return (
    <video
      ref={ref}
      className={`sq-video sq-video--${orientation}`}
      src={src}
      aria-label={label}
      muted
      loop
      playsInline
      controls
      preload="metadata"
    />
  )
}

const content = {
  en: {
    title: "Side Quests",
    intro:
      "Not every project takes months. These are small things I built with the robots I had access to, about three hours each, mostly to see whether I could. Most of them use the Dobot CR5 arm from the Robot Barman and a Unitree Go2 Pro.",
    entries: {
      go2: {
        title: "No joystick required",
        subtitle: "Controlling the Unitree Go2 Pro from the terminal",
        text: "The Pro version of the Go2 is meant to be driven with its joystick and app, not programmed. Using an unofficial open-source library, I connected to it over Wi-Fi and sent commands straight from the terminal: stand up, lie down, and back up again. A small step, but it's the base for scripting anything else on the robot.",
        tags: ["Unitree Go2 Pro", "Terminal", "Wi-Fi"],
        label: "The Go2 standing up and lying down on commands sent from the terminal",
      },
      camera: {
        title: "Camera operator",
        subtitle: "The CR5 as a slow, precise camera rig",
        text: "I mounted a camera on the arm and had it glide slowly around small objects on a table, filming them up close. The point was precision: bringing the lens very near things and moving around them without ever touching them, the kind of smooth, repeatable shot that's hard to get by hand.",
        tags: ["Dobot CR5", "Precision motion"],
        label: "The robot arm moving a camera slowly around objects on a table",
      },
      cups: {
        title: "Cup castle",
        subtitle: "Stacking a tower of cups with the CR5",
        text: "The arm picks up cups one at a time and builds a castle out of them. Cups are light and slightly flexible, so each one has to be gripped gently and placed exactly on the layer below, or the whole thing comes down.",
        tags: ["Dobot CR5", "Pick and place"],
        label: "The robot arm stacking cups into a castle",
      },
      delivery: {
        title: "Delivery service",
        subtitle: "Handing a flower, and a slice of pizza, to a person",
        text: "Two quick ones about giving things to people. A flower is light and fragile; a slice of pizza is soft, floppy and shifts in the gripper. Both times the arm has to hold the object firmly enough not to drop it, gently enough not to crush it, and bring it to the person.",
        tags: ["Dobot CR5", "Grasping", "Human–robot interaction"],
        labelFlower: "The robot arm handing a flower to a person",
        labelPizza: "The robot arm handing a slice of pizza to a person",
      },
      fair: {
        title: "Maker Faire Trieste",
        subtitle: "Bubbles and a robot dog, May 2026",
        text: "At Maker Faire Trieste the CR5 made soap bubbles with a bubble wand for visitors, while the Go2 walked around and met the crowd. A different kind of test from the lab: the demo has to work every time, with people standing right next to the robots.",
        tags: ["Dobot CR5", "Unitree Go2 Pro", "Public demo"],
        labelBubbles: "The robot arm making soap bubbles at Maker Faire Trieste",
        labelDog: "The Go2 walking among visitors at Maker Faire Trieste",
      },
    },
    back: "← Back to Projects",
  },
  it: {
    title: "Side Quests",
    intro:
      "Non tutti i progetti richiedono mesi. Queste sono piccole cose che ho realizzato con i robot a cui avevo accesso, circa tre ore ciascuna, soprattutto per vedere se ci riuscivo. Quasi tutte usano il braccio Dobot CR5 del Robot Barman e un Unitree Go2 Pro.",
    entries: {
      go2: {
        title: "Niente joystick",
        subtitle: "Controllare l'Unitree Go2 Pro dal terminale",
        text: "La versione Pro del Go2 è pensata per essere guidata con joystick e app, non per essere programmata. Usando una libreria open-source non ufficiale mi sono collegata via Wi-Fi e ho inviato i comandi direttamente dal terminale: alzarsi, sdraiarsi e rialzarsi. Un piccolo passo, ma è la base per automatizzare qualsiasi altra cosa sul robot.",
        tags: ["Unitree Go2 Pro", "Terminale", "Wi-Fi"],
        label: "Il Go2 che si alza e si sdraia con comandi inviati dal terminale",
      },
      camera: {
        title: "Operatore di ripresa",
        subtitle: "Il CR5 come carrello di ripresa lento e preciso",
        text: "Ho montato una videocamera sul braccio e l'ho fatto muovere lentamente attorno a piccoli oggetti su un tavolo, riprendendoli da vicino. L'obiettivo era la precisione: portare l'obiettivo vicinissimo alle cose e girarci intorno senza mai toccarle, il tipo di ripresa fluida e ripetibile che a mano è difficile ottenere.",
        tags: ["Dobot CR5", "Movimenti di precisione"],
        label: "Il braccio robotico che muove una videocamera lentamente attorno a oggetti su un tavolo",
      },
      cups: {
        title: "Castello di bicchieri",
        subtitle: "Costruire una torre di bicchieri con il CR5",
        text: "Il braccio prende i bicchieri uno alla volta e ci costruisce un castello. I bicchieri sono leggeri e un po' flessibili, quindi ognuno va preso con delicatezza e appoggiato esattamente sullo strato sotto, altrimenti crolla tutto.",
        tags: ["Dobot CR5", "Pick and place"],
        label: "Il braccio robotico che impila bicchieri formando un castello",
      },
      delivery: {
        title: "Servizio a domicilio",
        subtitle: "Consegnare un fiore, e una fetta di pizza, a una persona",
        text: "Due progetti veloci sul porgere oggetti alle persone. Un fiore è leggero e fragile; una fetta di pizza è morbida, flessibile e si sposta nella pinza. In entrambi i casi il braccio deve tenere l'oggetto abbastanza saldo da non farlo cadere, abbastanza delicato da non schiacciarlo, e portarlo alla persona.",
        tags: ["Dobot CR5", "Presa", "Interazione uomo-robot"],
        labelFlower: "Il braccio robotico che porge un fiore a una persona",
        labelPizza: "Il braccio robotico che porge una fetta di pizza a una persona",
      },
      fair: {
        title: "Maker Faire Trieste",
        subtitle: "Bolle di sapone e un cane robot, maggio 2026",
        text: "Alla Maker Faire di Trieste il CR5 faceva bolle di sapone per i visitatori, mentre il Go2 girava tra il pubblico. Un test diverso dal laboratorio: la demo deve funzionare ogni volta, con le persone a pochi passi dai robot.",
        tags: ["Dobot CR5", "Unitree Go2 Pro", "Demo pubblica"],
        labelBubbles: "Il braccio robotico che fa bolle di sapone alla Maker Faire di Trieste",
        labelDog: "Il Go2 che cammina tra i visitatori alla Maker Faire di Trieste",
      },
    },
    back: "← Torna ai Progetti",
  },
  de: {
    title: "Side Quests",
    intro:
      "Nicht jedes Projekt dauert Monate. Das hier sind kleine Dinge, die ich mit den Robotern gebaut habe, zu denen ich Zugang hatte – jeweils etwa drei Stunden, meistens um zu sehen, ob es klappt. Die meisten nutzen den Dobot-CR5-Arm vom Robot Barman und einen Unitree Go2 Pro.",
    entries: {
      go2: {
        title: "Ohne Joystick",
        subtitle: "Den Unitree Go2 Pro über das Terminal steuern",
        text: "Die Pro-Version des Go2 ist dafür gedacht, mit Joystick und App gesteuert zu werden, nicht programmiert. Mit einer inoffiziellen Open-Source-Bibliothek habe ich mich über WLAN verbunden und Befehle direkt aus dem Terminal geschickt: aufstehen, hinlegen und wieder aufstehen. Ein kleiner Schritt, aber die Grundlage, um alles Weitere auf dem Roboter zu automatisieren.",
        tags: ["Unitree Go2 Pro", "Terminal", "WLAN"],
        label: "Der Go2 steht auf und legt sich hin, gesteuert über Befehle aus dem Terminal",
      },
      camera: {
        title: "Kamerafrau",
        subtitle: "Der CR5 als langsames, präzises Kamerasystem",
        text: "Ich habe eine Kamera am Arm befestigt und ihn langsam um kleine Gegenstände auf einem Tisch gleiten lassen, um sie aus nächster Nähe zu filmen. Es ging um Präzision: das Objektiv ganz nah an die Dinge heranzubringen und sich um sie herumzubewegen, ohne sie je zu berühren – die Art von ruhiger, wiederholbarer Aufnahme, die von Hand schwer gelingt.",
        tags: ["Dobot CR5", "Präzise Bewegung"],
        label: "Der Roboterarm bewegt eine Kamera langsam um Gegenstände auf einem Tisch",
      },
      cups: {
        title: "Becherburg",
        subtitle: "Mit dem CR5 einen Turm aus Bechern stapeln",
        text: "Der Arm nimmt die Becher einzeln auf und baut daraus eine Burg. Becher sind leicht und etwas flexibel, also muss jeder sanft gegriffen und genau auf die Schicht darunter gesetzt werden, sonst fällt alles um.",
        tags: ["Dobot CR5", "Pick and Place"],
        label: "Der Roboterarm stapelt Becher zu einer Burg",
      },
      delivery: {
        title: "Lieferservice",
        subtitle: "Einer Person eine Blume – und ein Stück Pizza – überreichen",
        text: "Zwei schnelle Projekte rund ums Übergeben von Dingen an Menschen. Eine Blume ist leicht und zerbrechlich; ein Stück Pizza ist weich, labbrig und verrutscht im Greifer. Beide Male muss der Arm das Objekt fest genug halten, damit es nicht herunterfällt, sanft genug, um es nicht zu zerdrücken, und es zur Person bringen.",
        tags: ["Dobot CR5", "Greifen", "Mensch-Roboter-Interaktion"],
        labelFlower: "Der Roboterarm überreicht einer Person eine Blume",
        labelPizza: "Der Roboterarm überreicht einer Person ein Stück Pizza",
      },
      fair: {
        title: "Maker Faire Triest",
        subtitle: "Seifenblasen und ein Roboterhund, Mai 2026",
        text: "Auf der Maker Faire in Triest hat der CR5 für die Besucher Seifenblasen gemacht, während der Go2 durch die Menge lief. Ein anderer Test als im Labor: Die Demo muss jedes Mal funktionieren, mit Menschen direkt neben den Robotern.",
        tags: ["Dobot CR5", "Unitree Go2 Pro", "Öffentliche Demo"],
        labelBubbles: "Der Roboterarm macht Seifenblasen auf der Maker Faire Triest",
        labelDog: "Der Go2 läuft zwischen Besuchern auf der Maker Faire Triest",
      },
    },
    back: "← Zurück zu den Projekten",
  },
}

const Tags = ({ tags }) => (
  <ul className="sq-tags">
    {tags.map(tag => (
      <li key={tag}>{tag}</li>
    ))}
  </ul>
)

const EntryText = ({ entry }) => (
  <div className="sq-text">
    <h2>{entry.title}</h2>
    <p className="sq-subtitle">{entry.subtitle}</p>
    <p>{entry.text}</p>
    <Tags tags={entry.tags} />
  </div>
)

const ProjectContent = () => {
  const { language } = useLanguage()
  const current = content[language] || content.en
  const e = current.entries

  return (
    <div className="sq-page">
      <header className="sq-header">
        <h1>{current.title}</h1>
        <p className="sq-intro">{current.intro}</p>
      </header>

      <article className="sq-entry">
        <div className="sq-media">
          <LoopVideo src={videoGo2Terminal} label={e.go2.label} />
        </div>
        <EntryText entry={e.go2} />
      </article>

      <article className="sq-entry">
        <div className="sq-media">
          <LoopVideo src={videoCamera} label={e.camera.label} />
        </div>
        <EntryText entry={e.camera} />
      </article>

      <article className="sq-entry">
        <div className="sq-media">
          <LoopVideo src={videoCups} label={e.cups.label} />
        </div>
        <EntryText entry={e.cups} />
      </article>

      <article className="sq-entry sq-entry--pair">
        <div className="sq-media sq-media--pair">
          <LoopVideo src={videoFlower} label={e.delivery.labelFlower} />
          <LoopVideo src={videoPizza} label={e.delivery.labelPizza} />
        </div>
        <EntryText entry={e.delivery} />
      </article>

      <article className="sq-entry sq-entry--wide">
        <div className="sq-media sq-media--wide">
          <LoopVideo src={videoBubbles} label={e.fair.labelBubbles} orientation="horizontal" />
          <LoopVideo src={videoGo2Fair} label={e.fair.labelDog} />
        </div>
        <EntryText entry={e.fair} />
      </article>

      <div className="sq-back">
        <a href="/#publications">{current.back}</a>
      </div>
    </div>
  )
}

const SideQuestsPage = () => (
  <Layout>
    {/* eslint-disable-next-line react/jsx-pascal-case */}
    <SEO title="Side Quests" />
    <ProjectContent />
  </Layout>
)

export default SideQuestsPage