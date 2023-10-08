import React, { useEffect, useState } from "react";
import { useSnapshot } from "valtio";
import { state } from ".";
import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import { DemoVR, introImg } from "../assets";


function Intropg1() {
  const snap = useSnapshot(state);
  const [isFullScreen, setIsFullScreen] = useState(false);

  useEffect(() => {
    if (isFullScreen) {
      enterFullScreen();
      document.addEventListener("keydown", handleKeyDown);
    } else {
      exitFullScreen();
      document.removeEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isFullScreen]);

  const handleKeyDown = (event) => {
    if (event.keyCode === 27) {
      // Check if the Escape key (key code 27) is pressed
      setIsFullScreen(false);
    }
  };

  const enterFullScreen = () => {
    const video = document.getElementById('fullscreen-video');
    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.mozRequestFullScreen) { // Firefox
      video.mozRequestFullScreen();
    } else if (video.webkitRequestFullscreen) { // Chrome, Safari, and Opera
      video.webkitRequestFullscreen();
    }
  };

  const exitFullScreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) { // Firefox
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) { // Chrome, Safari, and Opera
      document.webkitExitFullscreen();
    }
  };

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };
  

  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.div
          className="intro"
          key="modal"
          initial={{ scale: 1.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 1.5, opacity: 0 }}
          transition={{ duration: 0.2, ease: 'easeInOut' }}
        >
          <div className="intro-sub">
            <a>
            Take education to next level with Virtual Reality
            </a>
          </div>
          <h1 className="Intro-title" style={{fontSize:"9em"}}> The Future of Learning is Here Beyond Books: VR-Powered Education  </h1>
          <h1 style={{width:"50em", position:"absolute", top:"22em", left:"10em", textAlign:"left"}}>
          Welcome to EDU-VR, where we revolutionize education through the power of virtual reality. Our platform offers an immersive learning experience like no other, allowing students to step into dynamic virtual classrooms, explore interactive educational content, and connect with peers and educators from around the world. Say goodbye to traditional boundaries and hello to a new era of learning where knowledge comes to life in 3D. Join us on this exciting journey as we empower minds and reshape the future of education.
          </h1>
          
          <div className="vid-intro">
          <a>
              Watch demo
          </a>
          <div className="intro-vid-player" onClick={toggleFullScreen}>
            <video
              id="fullscreen-video"
              controls
              style={{ display: isFullScreen ? 'block' : 'none' }}
            >
            <source src={DemoVR} type="video/mp4" />
            </video>
            <Icon icon="clarity:play-solid" scale="6" color="white" />
          </div>
          </div>
          <div className="intro-img">
            <img src={introImg}></img>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Intropg1;
