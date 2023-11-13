import React from "react";
Button;
import "./About.css";
import { Button } from "react-bootstrap";

export const About = () => {
  return (
    <div className=" about container ">
      <h1 className="aboutHeading">About</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit quas
        dolores sunt odio culpa, dolor veritatis voluptatum veniam harum,
        distinctio iure quis! Numquam, nihil. Quam facilis nobis voluptate minus
        fugiat. Aliquam nobis necessitatibus nemo suscipit voluptates corrupti
        id non, at odit sit optio explicabo recusandae exercitationem nihil
        amet. Facere minus accusantium at sit! Culpa eligendi atque dolore omnis
        ea fugit? Architecto tempore vero eligendi ipsa veniam officia fuga quia
        commodi, porro quam quod dolores natus cupiditate, saepe magnam ipsam
        dolor ducimus maiores aut dicta quidem? Voluptate earum quos
        exercitationem veritatis? Quia a optio, reprehenderit quod quaerat, ad
        fugiat ipsam nostrum, aut quis maxime veritatis excepturi recusandae
        ullam minima cumque eos? Repudiandae nemo modi dicta magnam sit ex earum
        nihil aspernatur!
      </p>
      <Button variant="info" className="btn-read">
        Read more
      </Button>{" "}
    </div>
  );
};
