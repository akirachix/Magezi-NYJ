import React, { useState } from "react";
import uberworkRevenue from '../Assets/revenue.mp4';
import uberfeaturesVideo from '../Assets/uberFeatures.mp4';
import userExperienceVideo from '../Assets/user_experience.mp4';
import uberIntroduction from '../Assets/introduction.mp4';
import uberUsercase from '../Assets/usecase.mp4';
import './index.css';
import '@fontsource/libre-baskerville';

const VideoPlayer = () => {
  const [fullscreenVideo, setFullscreenVideo] = useState(null);

  const toggleFullscreen = (index) => {
    setFullscreenVideo(fullscreenVideo === index ? null : index);
  };

  const videoData = [
    { title: "History of Uber and how it started.", source: uberIntroduction },
    { title: "Features of Videos and Importance", source: uberworkRevenue },
    { title: "How does It generate money 🚗", source: uberfeaturesVideo },
    { title: "Pros and Cons of Uber", source: userExperienceVideo },
    { title: "User Experience Of Uber", source:  uberUsercase}
  ];

  return (
    <div className="videoSection">
      <div className="videoTitle">
        <div className="line-text">
          <h1>Videos</h1>
        </div>
        <h4 style={{ fontFamily: 'Libre Baskerville, serif' }}>View, Learn and Engage</h4>
      </div>
      <div className="videoGrid">
        <div className="topVideos">
          {videoData.slice(0, 3).map((video, index) => (
            <div key={index} className={`videoCard ${fullscreenVideo === index ? 'fullscreen' : ''}`}>
              <video
                controls
                className="videoPlayer"
                onClick={() => toggleFullscreen(index)}
              >
                <source src={video.source} type="video/mp4" />
              </video>
              <h3 className="videoHeading">{video.title}</h3>
              
            </div>
          ))}
        </div>
        <div className="bottomVideos">
          {videoData.slice(3).map((video, index) => (
            <div key={index + 3} className={`videoCard ${fullscreenVideo === index + 3 ? 'fullscreen' : ''}`}>
              <video
                controls
                className="videoPlayer"
                onClick={() => toggleFullscreen(index + 3)}
              >
                <source src={video.source} type="video/mp4" />
              </video>
              <h3 className="videoHeading">{video.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;