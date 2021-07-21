import React from 'react'
import Book from "./Book";

import books from '../resources/books.json';

export default function BooksContainer() {
    const booksList = books.books;
    return (
        <div className="books">
          <h2>📖 Books I love:</h2>
          <div className="books-flex-container">
            {booksList.map((book, index) => {
              return <Book book={book} key={index} />;
            })}
          </div>
        </div>
    )
}
