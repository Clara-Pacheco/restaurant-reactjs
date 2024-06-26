import React from "react";

import "./Intro.css";

import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import { meal } from "../../constants";

export const Intro = () => {
  const [playVideo, setPlayVideo] = React.useState(false);
  const [showOverlay, setShowOverlay] = React.useState(true);
  const vidRef = React.useRef();

  function handleVideo() {
    setPlayVideo((prevPlayVideo) => !prevPlayVideo);

    if (playVideo) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
  }

  return (
    <div className="app__video">
      <video
        ref={vidRef}
        src={meal}
        type="video/mp4"
        loop
        controls={false}
        muted
        onPlay={() => setShowOverlay(false)}
        onClick={() => setShowOverlay(true)}
      />
      {showOverlay && (
        <div className="app__video-overlay flex__center">
          <div
            className="app__video-overlay_circle flex__center"
            onClick={handleVideo}
          >
            {playVideo ? (
              <BsPauseFill color="#fff" fontSize={30} />
            ) : (
              <BsFillPlayFill color="#fff" fontSize={30} />
            )}
          </div>
        </div>
      )}
    </div>
  );
};
