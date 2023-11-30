import React, { useRef } from "react";

const VideoPlayer = () => {
  const videoRef = useRef(null);

  return (
    <div>
      <video ref={videoRef} width="840" height="360" controls>
        <source src="/promoVideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
