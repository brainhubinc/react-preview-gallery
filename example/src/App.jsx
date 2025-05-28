import React, { useState } from "react";
import Gallery from "react-preview-gallery";
import "react-preview-gallery/style.css";

function App() {
  const imgArr = [
    { src: "../images/black-max-watch.jpeg", alt: "max watch" },
    { src: "../images/black-watch.jpeg", alt: "black watch" },
    { src: "../images/blue-watch.jpeg", alt: "blue watch" },
    { src: "../images/white-watch.jpeg", alt: "white watch" },
  ];

  const [isShowVideo, setIsShowVideo] = useState(false);
  return (
    <div
      style={{
        padding: "20px",
        margin: "0 auto",
      }}
    >
      <center>
        <h1>Watchs Gallery</h1>
        <Gallery
          imagesArr={imgArr}
          isShowVideo={isShowVideo}
          videoFile={"../images/apple-watch.mp4"}
        />
         <button
          style={{
            border: "0px",
            width: "100px",
            height: "40px",
            background: "white",
            color: "red",
            cursor: "pointer",
          }}
          onClick={() => {
            setIsShowVideo(!isShowVideo);
          }}
        >
          <strong>{isShowVideo ? "show gallery" : "show video"}</strong>
        </button>
      </center>
    </div>
  );
}

export default App;
