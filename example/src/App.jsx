import React from "react";
import Gallery from "react-preview-gallery";
import "react-preview-gallery/style.css";

function App() {
  const imgArr = [
    { src: "../images/black-max-watch.jpeg", alt: "max watch" },
    { src: "../images/black-watch.jpeg", alt: "black watch" },
    { src: "../images/blue-watch.jpeg", alt: "blue watch" },
    { src: "../images/white-watch.jpeg", alt: "white watch" },
  ];
  return (
    <div
      style={{
        padding: "20px",
        margin: "0 auto",
      }}
    >
      <center>
        <h1>Watchs Gallery</h1>
        <Gallery imagesArr={imgArr} />
      </center>
    </div>
  );
}

export default App;
