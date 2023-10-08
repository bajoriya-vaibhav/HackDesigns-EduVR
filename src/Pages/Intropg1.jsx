import React, { useEffect, useState } from "react";
import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import Navbar from '../Components/Navbar'
function Intropg1() {
  const [isFullScreen, setIsFullScreen] = useState(false);
  useEffect(() => {
    if (isFullScreen) {
      enterFullScreen();
    } else {
      exitFullScreen();
    }
  }, [isFullScreen]);

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
    <>
    <Navbar/>
    <div className="ml-20">
    <AnimatePresence>
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
      <h1 className="intro-title" style={{fontSize:"3em"}}> The Future of Learning is Here Beyond Books: VR-Powered Education  </h1>
      <p style={{width:"30em", position:"absolute", top:"17em", left:"10em", textAlign:"left", fontSize:"0.9em"}}>
      Welcome to EDU-VR, where we revolutionize education through the power of virtual reality. Our platform offers an immersive learning experience like no other, allowing students to step into dynamic virtual classrooms, explore interactive educational content, and connect with peers and educators from around the world. Say goodbye to traditional boundaries and hello to a new era of learning where knowledge comes to life in 3D. Join us on this exciting journey as we empower minds and reshape the future of education.
      </p>
      
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
        <source src="./DemoVR.mp4" type="video/mp4" />
        </video>
        <Icon icon="clarity:play-solid" scale="6" color="white" />
      </div>
      </div>
      <div className="intro-img">
        <img src='./introImg.png'></img>
      </div>
    </motion.div>
    </AnimatePresence>
    </div>
    </>
  );
}

export default Intropg1;
