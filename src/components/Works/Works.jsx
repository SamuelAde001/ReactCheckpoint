import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
export const Works = () => {
  return (
    <>
      <div
        className=""
        style={{
          width: "100vw",
          height: "80vh",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          margin: "20px 0",
        }}
      >
        <Card
          style={{
            width: "18rem",
            boxShadow: " rgba(0, 0, 0, 0.24) 0px 3px 8px",
            height: "300px",
          }}
        >
          <Card.Img
            variant="top"
            src="https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=600"
          />
          <Card.Body>
            <Card.Title>First Project</Card.Title>
            <Button variant="primary">Check more</Button>
          </Card.Body>
        </Card>
        <Card
          style={{
            width: "18rem",
            boxShadow: " rgba(0, 0, 0, 0.24) 0px 3px 8px",
            height: "300px",
          }}
        >
          <Card.Img
            variant="top"
            src="https://images.pexels.com/photos/574077/pexels-photo-574077.jpeg?auto=compress&cs=tinysrgb&w=600"
          />
          <Card.Body>
            <Card.Title>Second project</Card.Title>
            <Button variant="primary">Check more content</Button>
          </Card.Body>
        </Card>
        <Card
          style={{
            width: "18rem",
            boxShadow: " rgba(0, 0, 0, 0.24) 0px 3px 8px",
            height: "300px",
          }}
        >
          <Card.Img
            variant="top"
            src="https://images.pexels.com/photos/943096/pexels-photo-943096.jpeg?auto=compress&cs=tinysrgb&w=600"
          />
          <Card.Body>
            <Card.Title>Third Project</Card.Title>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};
