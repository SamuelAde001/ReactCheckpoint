import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Hero.css";

export const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <h1 className="Display-1" variant="secondary">
          HEY! Welcome to my Webpage...... How do you do?
        </h1>
      </div>
      <Carousel className="carousel-wrapper container">
        <Carousel.Item>
          <img
            src="https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=1950&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <Carousel.Caption>
            <h3>Wonderful Land scape</h3>
            <p>The land is green</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://images.unsplash.com/photo-1466854076813-4aa9ac0fc347?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <Carousel.Caption>
            <h3>The mountain View</h3>
            <p>Gliding through the peaks of the Mountains</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://images.unsplash.com/photo-1502657877623-f66bf489d236?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <Carousel.Caption>
            <h3>Night sky</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
