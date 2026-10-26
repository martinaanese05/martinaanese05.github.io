import React, { useEffect, useRef } from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { useLanguage } from "../../contexts/LanguageContext"

// Videos: put these files in src/images/sidequests/
import videoGo2Terminal from "../../images/sidequests/go2-terminal.mp4"
import videoGo2Fair from "../../images/sidequests/go2-fair.mp4"
import videoCups from "../../images/sidequests/cr5-cups.mp4"
import videoCamera from "../../images/sidequests/cr5-camera.mp4"
import videoFlower from "../../images/sidequests/cr5-flower.mp4"
import videoPizza from "../../images/sidequests/cr5-pizza.mp4"
import videoBubbles from "../../images/sidequests/cr5-bubbles.mp4" // horizontal

const content = {
  en: {
    title: "Side Quests",
    intro:
      "Not every project takes months. These are small things I built with the robots I had access to, about three hours each, mostly to see whether I could.",
    go2: "Unitree Go2 Pro",
    go2Text:
      "The Pro version is meant to be driven with its joystick and app, not programmed. Using an unofficial open-source library, I control it from my laptop over Wi-Fi.",
    cr5: "Dobot CR5",
    cr5Text:
      "The same arm as the Robot Barman, used for quick tests of grip, precision and working close to people.",
    clips: {
      go2Terminal: ["No joystick required", "Standing up and lying down on commands typed in the terminal"],
      go2Fair: ["Meeting the crowd", "Walking among visitors at Maker Faire Trieste, May 2026"],
      cups: ["Cup castle", "Gentle grips and exact placement, one cup at a time"],
      camera: ["Camera operator", "Slow, close shots that never touch the objects"],
      flower: ["Flower delivery", "Light and fragile"],
      pizza: ["Pizza delivery", "Soft, floppy, and sliding in the gripper"],
      bubbles: ["Bubbles at Maker Faire Trieste", "Soap bubbles for visitors, May 2026"],
    },
    back: "← Back to Projects",
  },
  it: {
    title: "Side Quests",
    intro:
      "Non tutti i progetti richiedono mesi. Queste sono piccole cose che ho realizzato con i robot a cui avevo accesso, circa tre ore ciascuna, soprattutto per vedere se ci riuscivo.",
    go2: "Unitree Go2 Pro",
    go2Text:
      "La versione Pro è pensata per essere guidata con joystick e app, non per essere programmata. Con una libreria open-source non ufficiale la controllo dal mio portatile via Wi-Fi.",
    cr5: "Dobot CR5",
    cr5Text:
      "Lo stesso braccio del Robot Barman, usato per test veloci di presa, precisione e lavoro vicino alle persone.",
    clips: {
      go2Terminal: ["Niente joystick", "Si alza e si sdraia con comandi scritti nel terminale"],
      go2Fair: ["Tra il pubblico", "In giro tra i visitatori alla Maker Faire di Trieste, maggio 2026"],
      cups: ["Castello di bicchieri", "Prese delicate e posizionamento preciso, un bicchiere alla volta"],
      camera: ["Operatore di ripresa", "Riprese lente e ravvicinate, senza mai toccare gli oggetti"],
      flower: ["Consegna del fiore", "Leggero e fragile"],
      pizza: ["Consegna della pizza", "Morbida, flessibile e scivola nella pinza"],
      bubbles: ["Bolle alla Maker Faire di Trieste", "Bolle di sapone per i visitatori, maggio 2026"],
    },
    back: "← Torna ai Progetti",
  },
  de: {
    title: "Side Quests",
    intro:
      "Nicht jedes Projekt dauert Monate. Das hier sind kleine Dinge, die ich mit den Robotern gebaut habe, zu denen ich Zugang hatte – jeweils etwa drei Stunden, meistens um zu sehen, ob es klappt.",
    go2: "Unitree Go2 Pro",
    go2Text:
      "Die Pro-Version ist dafür gedacht, mit Joystick und App gesteuert zu werden, nicht programmiert. Mit einer inoffiziellen Open-Source-Bibliothek steuere ich ihn über WLAN von meinem Laptop aus.",
    cr5: "Dobot CR5",
    cr5Text:
      "Derselbe Arm wie beim Robot Barman, für schnelle Tests zu Greifen, Präzision und Arbeiten in der Nähe von Menschen.",
    clips: {
      go2Terminal: ["Ohne Joystick", "Aufstehen und Hinlegen per Befehl aus dem Terminal"],
      go2Fair: ["Unter Menschen", "Unterwegs zwischen Besuchern auf der Maker Faire Triest, Mai 2026"],
      cups: ["Becherburg", "Sanft greifen und genau absetzen, Becher für Becher"],
      camera: ["Kamerafrau", "Langsame Nahaufnahmen, ohne die Gegenstände zu berühren"],
      flower: ["Blumenlieferung", "Leicht und zerbrechlich"],
      pizza: ["Pizzalieferung", "Weich, labbrig und rutscht im Greifer"],
      bubbles: ["Seifenblasen auf der Maker Faire Triest", "Seifenblasen für die Besucher, Mai 2026"],
    },
    back: "← Zurück zu den Projekten",
  },
}

// Same look as the videos on the other project pages, but each clip
// only plays while it's on screen so the page doesn't run all of them at once.
const VideoElement = ({ src, label, horizontal = false }) => {
  const ref = useRef(null)

  useEffect(() => {
    const video = ref.current
    if (!video || typeof window === "undefined") return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    if (!("IntersectionObserver" in window)) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => {})
        else video.pause()
      },
      { threshold: 0.4 }
    )
    observer.observe(video)
    return () => observer.disconnect()
  }, [])

  return (
    <video
      ref={ref}
      src={src}
      aria-label={label}
      controls
      muted
      loop
      playsInline
      preload="metadata"
      style={{
        width: "100%",
        aspectRatio: horizontal ? "16 / 9" : "9 / 16",
        objectFit: "cover",
        background: "#f2f2f2",
        borderRadius: "8px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        display: "block",
      }}
    />
  )
}

const captionTitle = { fontSize: "0.95rem", fontWeight: 600, color: "#333", marginTop: "10px", marginBottom: "2px" }
const captionText = { fontSize: "0.9rem", color: "#666", fontStyle: "italic", margin: 0 }
const rowStyle = { display: "flex", gap: "20px", alignItems: "flex-start", marginTop: "30px" }
const sectionTitle = { color: "#8F00FF", marginTop: "60px" }

const Clip = ({ src, caption, horizontal }) => (
  <div style={{ flex: 1, minWidth: 0 }}>
    <VideoElement src={src} label={`${caption[0]}: ${caption[1]}`} horizontal={horizontal} />
    <p style={captionTitle}>{caption[0]}</p>
    <p style={captionText}>{caption[1]}</p>
  </div>
)

const ProjectContent = () => {
  const { language } = useLanguage()
  const current = content[language] || content.en
  const c = current.clips

  return (
    <div style={{ padding: "120px 20px", maxWidth: "800px", margin: "0 auto", textAlign: "left", lineHeight: "1.6" }}>
      <h1 style={{ fontSize: "2.5rem", color: "#333", marginBottom: "30px" }}>{current.title}</h1>
      <p>{current.intro}</p>

      {/* CR5 */}
      <h2 style={sectionTitle}>{current.cr5}</h2>
      <p>{current.cr5Text}</p>
      <div style={rowStyle}>
        <Clip src={videoCups} caption={c.cups} />
        <Clip src={videoCamera} caption={c.camera} />
      </div>
      <div style={{ ...rowStyle, marginTop: "40px" }}>
        <Clip src={videoFlower} caption={c.flower} />
        <Clip src={videoPizza} caption={c.pizza} />
      </div>
      <div style={{ ...rowStyle, marginTop: "40px" }}>
        <Clip src={videoBubbles} caption={c.bubbles} horizontal />
      </div>

      {/* Go2 */}
      <h2 style={sectionTitle}>{current.go2}</h2>
      <p>{current.go2Text}</p>
      <div style={rowStyle}>
        <Clip src={videoGo2Terminal} caption={c.go2Terminal} />
        <Clip src={videoGo2Fair} caption={c.go2Fair} />
      </div>

      <div style={{ marginTop: "60px", borderTop: "1px solid #eee", paddingTop: "20px" }}>
        <a href="/#publications" style={{ color: "#8F00FF", textDecoration: "none", fontWeight: "bold" }}>
          {current.back}
        </a>
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