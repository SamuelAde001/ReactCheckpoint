import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero/Hero";
import { About } from "./components/About/About";
import { Works } from "./components/Works/Works";
import { Comments } from "./components/comment/Comments";
function App() {
  return (
    <>
      {/* header section */}
      <header>
        <Header />
      </header>
      {/* hero component */}
      <Hero />
      {/* about component */}
      <About />
      <Works />
      <Comments />
    </>
  );
}

export default App;
