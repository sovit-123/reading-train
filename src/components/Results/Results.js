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
        booksInfo[i] = allBooks[i];
      }
    }
  }

  return (
    <div className="images-box">
      {booksInfo.map((data, key = 0) => {
        return (
          <div>
            <div className="book">
              <a
                href={data.volumeInfo.infoLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={data.volumeInfo.imageLinks.thumbnail}
                  key={key + 1}
                  alt=""
                  className="thumb-images"
                />
              </a>
              <span className="book-info">
                <p>
                  <a
                    href={data.accessInfo.webReaderLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="title"
                  >
                    {data.volumeInfo.title}{" "}
                  </a>
                  <a
                    href={data.volumeInfo.previewLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="preview"
                  >
                    Preview
                  </a>
                </p>
                <p className="author">{data.volumeInfo.authors}</p>
              </span>
            </div>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default Results;
