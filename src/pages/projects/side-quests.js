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
      "Some fun little things I did, either to figure out how the robots worked when we had just bought them, or just for fun!",
    go2: "Unitree Go2 Pro",
    go2Text:
      "This version of the robot dog is meant to be driven with its joystick and app, and doesn't allow for custom programming.",
    cr5: "Dobot CR5",
    cr5Text:
      "The Dobot CR5AS is great for both big and small projects, and it's built to work alongside humans.",
    clips: {
      go2Terminal: ["No joystick required", "I found a way to control the dog with custom scripts instead of the joystick"],
      go2Fair: ["Meeting the crowd", "Showing the robot dog at Maker Faire Trieste, May 2026"],
      cups: ["Cup castle", "This was the first project I made with the robot arm"],
      camera: ["Camera operator", "We used the robot arm to shoot a promotional video, testing its precision"],
      flower: ["Flower delivery", "Diving into the concept of human–robot interaction for an event"],
      pizza: ["Pizza delivery", "Because who wouldn't want a slice of pizza served by a robot?"],
      bubbles: ["Bubbles at Maker Faire Trieste", "Soap bubbles for visitors, May 2026"],
    },
    back: "← Back to Projects",
  },
  it: {
    title: "Side Quests",
    intro:
      "Piccoli progetti divertenti che ho fatto, a volte per capire come funzionavano i robot appena acquistati, a volte solo per divertimento!",
    go2: "Unitree Go2 Pro",
    go2Text:
      "Questa versione del cane robot è pensata per essere guidata con il joystick e l'app, e non permette una programmazione personalizzata.",
    cr5: "Dobot CR5",
    cr5Text:
      "Il Dobot CR5AS è ottimo sia per progetti grandi che piccoli, ed è pensato per lavorare accanto alle persone.",
    clips: {
      go2Terminal: ["Niente joystick", "Ho trovato un modo per controllare il cane con script personalizzati invece del joystick"],
      go2Fair: ["Tra il pubblico", "Il cane robot in mostra alla Maker Faire di Trieste, maggio 2026"],
      cups: ["Castello di bicchieri", "Il mio primo progetto con il braccio robotico"],
      camera: ["Operatore di ripresa", "Abbiamo usato il braccio robotico per girare un video promozionale, mettendo alla prova la sua precisione"],
      flower: ["Consegna del fiore", "Un primo approccio all'interazione uomo-robot, per un evento"],
      pizza: ["Consegna della pizza", "Perché a chi non piacerebbe una fetta di pizza servita da un robot?"],
      bubbles: ["Bolle alla Maker Faire di Trieste", "Bolle di sapone per i visitatori, maggio 2026"],
    },
    back: "← Torna ai Progetti",
  },
  de: {
    title: "Side Quests",
    intro:
      "Kleine, lustige Projekte – manchmal, um herauszufinden, wie die Roboter funktionieren, als wir sie gerade gekauft hatten, und manchmal einfach aus Spaß!",
    go2: "Unitree Go2 Pro",
    go2Text:
      "Diese Version des Roboterhunds ist dafür gedacht, mit Joystick und App gesteuert zu werden, und erlaubt keine eigene Programmierung.",
    cr5: "Dobot CR5",
    cr5Text:
      "Der Dobot CR5AS eignet sich für große und kleine Projekte und ist dafür gemacht, mit Menschen zusammenzuarbeiten.",
    clips: {
      go2Terminal: ["Ohne Joystick", "Ich habe einen Weg gefunden, den Hund mit eigenen Skripten statt mit dem Joystick zu steuern"],
      go2Fair: ["Unter Menschen", "Der Roboterhund auf der Maker Faire Triest, Mai 2026"],
      cups: ["Becherburg", "Mein erstes Projekt mit dem Roboterarm"],
      camera: ["Kamerafrau", "Wir haben mit dem Roboterarm ein Werbevideo gedreht und dabei seine Präzision getestet"],
      flower: ["Blumenlieferung", "Ein erster Einstieg in die Mensch-Roboter-Interaktion, für eine Veranstaltung"],
      pizza: ["Pizzalieferung", "Denn wer möchte nicht ein Stück Pizza, serviert von einem Roboter?"],
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