import React from "react";

export default function About() {
  return (
    <div className="about">
      <h2>👋 Hi!</h2>
      <p>
        Welcome to my website. This site is meant to showcase some of my work
        and help you learn a little bit more about me. I am Frontend Developer
        based out of{" "}
        <a
          href="https://www.google.com/maps/place/Pasadena,+CA/data=!4m2!3m1!1s0x80c2c2dc38330b51:0x52b41161ad18f4a?sa=X&ved=2ahUKEwiMhe-Y8M3pAhWzoFsKHTEpBdIQ8gEwAHoECAsQAQ"
          target="_blank"
          rel="noopener noreferrer"
        >
          Pasadena, CA
        </a>
        . I currently work as a Frontend developer at QLess Inc. where I create
        unique user interfaces for our applications, write lots of JavaScript,
        and work to improve developer culture. Many of the projects that I work
        on a daily basis are for my company, so my projects are a bit sparse,
        though I do love playing new tools and technologies when I have a
        chance.
      </p>
      <p>
        {" "}
        You can also just access my JSON resume if you would like:{" "}
        <a href="/resume.json" target="_blank" rel="noopener noreferrer">
          Resume
        </a>
      </p>
    </div>
  );
}
