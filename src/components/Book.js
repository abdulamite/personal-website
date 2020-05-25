import React from "react";
import "./Book.css";

export default function Book(props) {
  return (
    <div className="book">
      <div className="book-image">
        <img src={props.book.image} alt="" />
      </div>
      <div className="book-info">
        <a href={props.book.link} target="_blank">{props.book.title}</a>
      </div>
    </div>
  );
}
