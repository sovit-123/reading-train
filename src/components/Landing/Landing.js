import React from 'react';

import './Landing.css'

const Landing = () => {
  return (
    <div className="landing-section">
      <div className="image-section">
        <img
          src={require('../../assets/images/landing-books.png')}
          alt="Stack of books"
          className="landing-image"
        />
      </div>
      <div className="description">
        <p>
          Want to spend a rainy Saturday morning or lazy Sunday afternoon with
          book in one hand and coffee in the other?<br />
          Well, look no further, because you are at the right station. Just buy
          your book and hop on to the Reading Train. <br />
          <b>
            <em>Your journey awaits you.</em>
          </b>
        </p>
      </div>
      <div className="what-to-find">
        <h3>What will you find here?</h3>
        <p>
          Search for your favourite books. Find the books you want to read and
          explore the huge library.
        </p>
      </div>
    </div>
  );
};

export default Landing;
