import React from "react";

import store from "../../store";

import "./Results.css";

let booksInfo = [];

const Results = () => {
  const allBooks = store.getState().fetchState.books.items;
  if (store.getState() && allBooks !== undefined) {
    for (let i = 0; i < allBooks.length; i++) {
      if (allBooks[i].volumeInfo.imageLinks !== undefined) {
        booksInfo[i] = 0;
        booksInfo[i] = allBooks[i].volumeInfo;
      }
    }
  }

  return (
    <div className="images-box">
      {booksInfo.map((data, key = 0) => {
        return (
          <div>
            <a href={data.infoLink} target="_blank" rel="noopener noreferrer">
              <div className="book">
                <img
                  src={data.imageLinks.thumbnail}
                  key={key + 1}
                  alt=""
                  className="thumb-images"
                />
                <span className="title-author">
                  <p>{data.title}</p>
                  <p className="author">{data.authors}</p>
                </span>
              </div>
            </a>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default Results;
