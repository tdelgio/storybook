import React, { useState } from "react";

import overlay from "../../static/overlay.png";

const Video = ({ videoSrcURL, videoTitle, ...props }) => {
  const [play, setPlay] = useState(false);
  const url = play
    ? "https://www.youtube.com/embed/pwwSABLg2fk?autoplay=1"
    : "https://www.youtube.com/embed/pwwSABLg2fk?";

  return (
    <div className="relative max-w-lg">
      {play || (
        <img
          className="absolute rounded-lg border"
          src={overlay}
          height="300px"
          width="100%"
        />
      )}
      <iframe
        width="100%"
        height="300px"
        className="rounded-lg shadow-lg"
        src={url}
        title="Janax Pacha"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        frameBorder="0"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
        allowFullScreen
      />
      {play || (
        <button
          className="absolute top-32 text-white w-full"
          onClick={() => setPlay(true)}
          ariaLabel="play button"
        >
          <svg
            className="mx-auto"
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M25 0C11.2142 0 0 11.2152 0 25C0 38.7848 11.2142 50 25 50C38.7858 50 50 38.7848 50 25C50 11.2152 38.7858 0 25 0ZM34.9386 25.8759L20.3553 35.2509C20.1844 35.3617 19.987 35.4167 19.7917 35.4167C19.6208 35.4167 19.4479 35.3739 19.2933 35.2895C18.9575 35.1064 18.75 34.7564 18.75 34.375V15.625C18.75 15.2436 18.9575 14.8936 19.2933 14.7104C19.6229 14.5294 20.0358 14.5405 20.3553 14.7491L34.9386 24.1241C35.2356 24.3153 35.4167 24.646 35.4167 25C35.4167 25.354 35.2356 25.6846 34.9386 25.8759Z"
              fill="#E5E5E5"
            />
          </svg>
        </button>
      )}
    </div>
  );
};

export default Video;
