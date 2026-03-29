import React from "react";
import ReactDOM from "react-dom/client";

import "./style.css";

import car1 from "./assets/image/car1.jpg";
import car2 from "./assets/image/car2.jpg";
import car3 from "./assets/image/car3.jpg";
import car4 from "./assets/image/car4.jpg";
import car5 from "./assets/image/car5.jpg";
import car6 from "./assets/image/car6.jpg";
import car7 from "./assets/image/car7.jpg";
import car8 from "./assets/image/car8.jpg";
import car9 from "./assets/image/car9.jpg";
import car10 from "./assets/image/car10.jpg";
import car11 from "./assets/image/car11.jpg";
import car12 from "./assets/image/car12.jpg";





function Navbar() {
  return (
    <nav className="nav">
      <h1>CARS</h1>
    </nav>
  )
}

function Poster(){
 return(
  <div className="poster">
    <h1>Drive it like you stole It !!</h1>
  </div>
 )
}

function Gallery() {
  const images = [
    car1, car2, car3, car4, car5, car6,
    car7, car8, car9, car10, car11, car12
  ];

    const quotes = [
    "Life is too short to drive boring cars",
    "Speed is my therapy",
    "Born to drive",
    "Drive your dream",
    "Fuel your passion",
    "Feel the power",
    "Cars speak louder than words",
    "Drive with attitude",
    "Power meets style",
    "Ride with pride",
    "Fast but classy",
    "Engine is the heart"
  ];

  return (
   <div className="gallery">
      {images.map((image, index) => (
        <div className="image-container" key={index}>
          <img src={image} alt="car" />
          <div className="quote">{quotes[index]}</div>
        </div>
      ))}
    </div>
  );
}


function About() {
  return (
    <section className="about">
      <h2>About This Gallery</h2>
      <p>
        This car gallery showcases a collection of stunning vehicles that reflect
        power, style, and performance. Each car represents passion, speed, and
        engineering excellence. Built using React, this project demonstrates a
        modern responsive image gallery with interactive UI.
      </p>
    </section>
  );
}


const root = ReactDOM.createRoot(document.getElementById("root"));


    root.render(
<div>
  <Navbar></Navbar>
  <Poster></Poster>
   <Gallery></Gallery> 
   <About></About>
  </div>
);