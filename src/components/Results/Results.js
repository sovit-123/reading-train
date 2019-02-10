import React from "react";

import store from "../../store";

import "./Results.css";

let booksInfo = [];

const Results = () => {
  const allBooks = store.getState().fetchState.books.items;
  for (let i = 0; i < allBooks.length; i++) {
    if (allBooks[i].volumeInfo.imageLinks !== undefined) {
      booksInfo[i] = 0;
      booksInfo[i] = allBooks[i].volumeInfo.imageLinks.thumbnail;
    }
  }

    return (
      <div className="images-box">
        {booksInfo.map((images, key) => {
          return (
            <div>
              <img src={images} alt="" key={key} className="thumb-images" />
              <hr />
            </div>
          );
        })}
      </div>
    );
};

export default Results;
