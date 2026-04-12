import React, { useState } from 'react';
import PresentationConfig from './PresentationConfig';
import PresentationMode from './PresentationMode';

const Presentation = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [config, setConfig] = useState(null);

  const handleStart = (configuration) => {
    setConfig(configuration);
    setIsPlaying(true);
    // Request fullscreen when starting presentation
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen().catch(err => {
         console.warn(`Error attempting to enable fullscreen: ${err.message}`);
      });
    }
  };

  const handleExit = () => {
    setIsPlaying(false);
    // Exit fullscreen
    if (document.fullscreenElement && document.exitFullscreen) {
      document.exitFullscreen();
    }
  };

  return (
    <>
      {isPlaying && config ? (
        <PresentationMode config={config} onExit={handleExit} />
      ) : (
        <PresentationConfig onStart={handleStart} initialConfig={config || {}} />
      )}
    </>
  );
};

export default Presentation;
