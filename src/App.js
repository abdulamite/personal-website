import React from "react";
import About from "./components/About";
import Header from "./components/Header";
import ProjectContainer from "./components/ProjectContainer";
import BooksContainer from "./components/BooksContainer";
import Socials from "./components/Socials";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <About />
        <ProjectContainer />
        <BooksContainer />
        <Socials />
      </div>
    </div>
  );
}
