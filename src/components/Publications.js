import React, { useState, useRef, useEffect } from "react"
import Fade from "./animations/Fade"
import { useLanguage } from "../contexts/LanguageContext"
import { getText } from "../data"
import "../styles/publications.scss"


// Import publication the images/videos
import Project1_header from "../images/publications/Project1_Photo1.png"
import Project2_header from "../images/publications/Project2_Photo1.png"
import Project3_header from "../images/publications/Project3_Photo1.png"
import Project4_header from "../images/publications/Project4_Photo3.jpg"
import carterOutdoorVideo from "../images/nvidia/Carter Outdoor.mp4"
import clawVideo from "../images/nvidia/claw.mp4"

// Helper function to detect if file is a video
const isVideoFile = (url) => {
  if (!url) return false;
  const videoExtensions = ['.mp4', '.webm', '.mov', '.avi'];
  return videoExtensions.some(ext => url.toLowerCase().endsWith(ext));
};

const Publications = () => {
  const { language } = useLanguage();
  const [videoErrors, setVideoErrors] = useState({});
  const videoRefs = useRef([]);

  // Force video play when videos come into view (helps with iOS autoplay restrictions)
  useEffect(() => {
    try {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const video = entry.target;
            try {
              forceVideoPlay(video);
            } catch (error) {
              console.warn('Error forcing video play:', error);
            }
          }
        });
      }, {
        threshold: 0.5 // Trigger when 50% of video is visible
      });

      // Observe all video elements
      videoRefs.current.forEach(video => {
        if (video) {
          try {
            observer.observe(video);
          } catch (error) {
            console.warn('Error observing video:', error);
          }
        }
      });

      return () => {
        try {
          observer.disconnect();
        } catch (error) {
          console.warn('Error disconnecting observer:', error);
        }
      };
    } catch (error) {
      console.warn('Error setting up intersection observer:', error);
    }
  }, []);

  const handleVideoError = (publicationId) => {
    console.warn(`Video failed to load for publication ${publicationId}`);
    setVideoErrors(prev => ({ ...prev, [publicationId]: true }));
  };

  const forceVideoPlay = (videoElement) => {
    if (videoElement) {
      videoElement.muted = true;
      videoElement.loop = true;
      
      const playPromise = videoElement.play();
      
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.log('Autoplay failed, attempting manual play:', error);
          setTimeout(() => {
            videoElement.play().catch(e => console.log('Manual play also failed:', e));
          }, 100);
        });
      }
    }
  };

  const handleVideoEnded = (videoElement) => {
    if (videoElement) {
      videoElement.currentTime = 0;
      videoElement.play().catch(e => console.log('Loop restart failed:', e));
    }
  };

  const canPlayVideo = (publication) => {
    return !videoErrors[publication.id];
  };
  
  // Publication data with actual links
const { getLanguageUrl } = useLanguage();

const publicationsData = [
  {
    id: 0,
    title: "Quadruped robot V1",
    subtitle: "",
    imageSrc: Project4_header,
    projectLink: getLanguageUrl(language, "/projects/project4"),
    type: "PERSONAL PROJECT"
  },
  {
    id: 1,
    title: "Robot arm V1",
    subtitle: "",
    imageSrc: Project3_header,
    projectLink: getLanguageUrl(language, "/projects/project3"),
    type: "PERSONAL PROJECT"
  },
  {
    id: 2,
    title: "Dino player",
    subtitle: "",
    imageSrc: Project2_header,
    projectLink: getLanguageUrl(language, "/projects/project2"),
    type: "PERSONAL PROJECT"
  },
  {
    id: 3,
    title: "Obstacle avoiding car",
    subtitle: "",
    imageSrc: Project1_header,
    projectLink: getLanguageUrl(language, "/projects/project1"),
    type: "PERSONAL PROJECT"
  },
  /*
  {
    id: 4,
    title: "Software-in-the-Loop Testing for Robots With OpenUSD, Isaac Sim, and ROS I",
    subtitle: "NVIDIA GTC 2025",
    imageSrc: carterOutdoorVideo,
    projectLink: "https://www.nvidia.com/en-us/on-demand/session/gtc25-dlit71326/",
    type: "NVIDIA"
  },
  {
    id: 5,
    title: "Learn OpenUSD: Robotics Best Practices I",
    subtitle: "NVIDIA GTC 2025",
    imageSrc: clawVideo,
    projectLink: "https://www.nvidia.com/en-us/on-demand/session/gtc25-dlit71288/",
    type: "NVIDIA"
  }
    */
];

  return (
    <div className="section" id="publications">
      <div className="container">
        <Fade bottom cascade distance="20px">
          <h1>{getText({ en: "Projects", it: "Progetti" }, language)}</h1>
        </Fade>
        <div className="publications-wrapper">
          <div className="grid">
            <Fade bottom distance="20px">
              {publicationsData.map((publication, index) => (
                <div key={index} className="publication-card">
                  <div
                    className="background-media"
                    style={{
                      // Per immagini (png, jpg, gif, ecc.) usa backgroundImage
                      // Per video non serve, ci pensa il tag <video>
                      backgroundImage: !isVideoFile(publication.imageSrc)
                        ? `linear-gradient(to bottom, transparent 0%, transparent 80%, rgba(240, 248, 255, 0.5) 70%, rgba(240, 248, 255, 0.9) 85%, rgba(240, 248, 255, 1.0) 100%), url(${publication.imageSrc})`
                        : 'none',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                    }}
                  >
                    {/* Mostra il video solo se il file è un video */}
                    {isVideoFile(publication.imageSrc) && canPlayVideo(publication) && (
                      <video
                        ref={el => {
                          try {
                            videoRefs.current[publication.id] = el;
                          } catch (error) {
                            console.warn(`Error setting video ref for publication ${publication.id}:`, error);
                          }
                        }}
                        className="background-video"
                        src={publication.imageSrc}
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        loading="lazy"
                        controls={false}
                        disablePictureInPicture
                        onError={() => {
                          try {
                            handleVideoError(publication.id);
                          } catch (error) {
                            console.warn(`Error in video error handler for publication ${publication.id}:`, error);
                          }
                        }}
                        onLoadStart={() => {
                          try {
                            console.log(`Loading video for publication ${publication.id}`);
                          } catch (error) {
                            console.warn(`Error in video load start handler for publication ${publication.id}:`, error);
                          }
                        }}
                        onCanPlay={(e) => {
                          try {
                            console.log(`Video can play for publication ${publication.id}`);
                            forceVideoPlay(e.target);
                          } catch (error) {
                            console.warn(`Error in video can play handler for publication ${publication.id}:`, error);
                          }
                        }}
                        onLoadedData={(e) => {
                          try {
                            console.log(`Video loaded for publication ${publication.id}`);
                            forceVideoPlay(e.target);
                          } catch (error) {
                            console.warn(`Error in video loaded data handler for publication ${publication.id}:`, error);
                          }
                        }}
                        onEnded={(e) => {
                          try {
                            console.log(`Video ended for publication ${publication.id}, restarting loop`);
                            handleVideoEnded(e.target);
                          } catch (error) {
                            console.warn(`Error in video ended handler for publication ${publication.id}:`, error);
                          }
                        }}
                        style={{
                          WebkitTransform: 'translateZ(0)',
                          transform: 'translateZ(0)',
                        }}
                      />
                    )}

                    {/* Fallback se il video non si carica */}
                    {isVideoFile(publication.imageSrc) && !canPlayVideo(publication) && (
                      <div
                        className="background-video video-fallback"
                        style={{
                          backgroundColor: '#e9ecef',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '0.9rem',
                          color: '#666',
                          textAlign: 'center',
                          padding: '20px'
                        }}
                      >
                        <div>
                          🎬<br/>
                          <small>Video preview not available<br/>on this device</small>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="content">
                    <div className="publication-type" data-type={publication.type}>{publication.type}</div>
                    <h3 className="header">{publication.title}</h3>
                    <h4 className="subtitle">{publication.subtitle}</h4>
                    <button
                      onClick={() => {
                        window.location.href = publication.projectLink;
                      }}
                      type="button"
                      className="btn"
                    >
                      {getText({ en: "View Project", it: "Visualizza progetto" }, language)}
                    </button>
                  </div>
                </div>
              ))}
            </Fade>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Publications