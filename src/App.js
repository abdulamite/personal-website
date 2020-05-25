import React, { useState } from "react";
import Project from "./components/Project";
import Book from "./components/Book";
import {
  TiSocialTwitter,
  TiSocialGithub,
  TiSocialLinkedin,
} from "react-icons/ti";

export default function App() {
  const [projects] = useState([
    {
      title: "Phoney Kiosk",
      summary:
        "Simple VueJS frontend to rewrite the QLess Kiosk Application to a dynamic form. The original project was built using KnockoutJS, though with this refactor, the codebase would be much slimmer, more accessible, and much easier to test.",
      tools: ["Vuejs", "QLess API"],
      link: "https://github.com/abdulamite/PhoneyKiosk",
    },
    {
      title: "Montebello Historical Society",
      summary:
        "I worked as a freelance web developer to redesign and develop the Montebello Historical Society Website to create a more responsive, dynamic, and accessible site.",
      link: "https://montebellohistoricalsociety.org/",
      tools: ["Netlify", "Jekyll", "Firebase"],
    },
    {
      title: "To Do list",
      summary:
        "This is just a simple todo list app that basically every frontend developer has built at somepoint.",
      link: "https://sad-perlman-1a6469.netlify.app/",
      tools: ["Netlify", "Vuejs"],
    },
  ]);
  const [books] = useState([
    {
      title: "Brotopia",
      link:
        "https://www.amazon.com/Brotopia-Breaking-Boys-Silicon-Valley/dp/0735213534",
      image: "https://m.media-amazon.com/images/I/51w+bH2qzYL.jpg",
    },
    {
      title: "Eloquent JavaScript",
      link:
        "https://www.amazon.com/Eloquent-JavaScript-3rd-Introduction-Programming-ebook/dp/B07C96Q217/ref=sr_1_1?crid=1GSUPPVJ1LNRJ&dchild=1&keywords=eloquent+javascript&qid=1590383931&s=books&sprefix=Eloqu%2Cstripbooks%2C215&sr=1-1",
      image: "https://m.media-amazon.com/images/I/51-5ZXYtcML.jpg",
    },
    {
      title: "Plant of the Apes",
      link: "https://www.amazon.com/Planet-Apes-Pierre-Boulle/dp/0345447980",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/51caPObAIQL._SX301_BO1,204,203,200_.jpg",
    },
  ]);
  return (
    <div className="App">
      <div className="container">
        <div className="head">
          <img
            src="https://avatars0.githubusercontent.com/u/7246246?s=460&u=e3c39dc66c0f6eeed7da359385c9a1af86dd233f&v=4"
            alt="profile photo"
          />
          <div className="head-title">
            <h1>Abdul Shaikh</h1>
            <span>Frontend Developer</span>
          </div>
        </div>
        <div className="about">
          <h2>👋 Hi!</h2>
          <p>
            Welcome to my website. This site is meant to showcase some of my
            work and help you learn a little bit more about me. I am Frontend
            Developer based out of{" "}
            <a
              href="https://www.google.com/maps/place/Pasadena,+CA/data=!4m2!3m1!1s0x80c2c2dc38330b51:0x52b41161ad18f4a?sa=X&ved=2ahUKEwiMhe-Y8M3pAhWzoFsKHTEpBdIQ8gEwAHoECAsQAQ"
              target="_blank"
            >
              Pasadena, CA
            </a>
            . I currently work as a Frontend developer at QLess Inc. where I
            create unique user interfaces for our applications, write lots of
            JavaScript, and work to improve developer culture. Many of the
            projects that I work on a daily basis are for my company, so my
            projects are a bit sparse, though I do love playing new tools and
            technologies when I have a chance.
          </p>
        </div>
        <div className="projects">
          <h2>🏗 Projects: </h2>
          {projects.map((project) => {
            return <Project project={project} />;
          })}
        </div>
        <div className="books">
          <h2>📖 Books I love:</h2>
          <div className="books-flex-container">
            {books.map((book) => {
              return <Book book={book} />;
            })}
          </div>
        </div>
        <div className="socials">
          <h2>🧑‍💻 Socials:</h2>
          <ul>
            <li>
              <a href="https://twitter.com/AbdulIsBomb" target="_blank">
                <TiSocialTwitter />
              </a>
            </li>
            <li>
              <a href="https://github.com/abdulamite" target="_blank">
                <TiSocialGithub />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/abdul-shaikh-7a9583114/"
                target="_blank"
              >
                <TiSocialLinkedin />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
