import React from "react";
import "./Project.css";

export default function Project(prop) {
  return (
    <div className="project">
      <h3>
        <a href={prop.project.link} target="_blank" rel="noopener noreferrer">
          {prop.project.title}
        </a>
      </h3>
      <p>{prop.project.summary}</p>
      <div className="tools">
        <span>Built With:</span>
        <ul>
          {prop.project.tools.map((tool, index) => {
            return <li key={index}>{tool}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}
