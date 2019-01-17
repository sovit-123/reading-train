import React from 'react';

import './Landing.css';

const Landing = () => {
  return (
    <div>
      <img
        src={require('../../assets/images/landing-books.png')}
        alt="Stack of books"
        className="landing-image"
      />
    </div>
  );
};

export default Landing;
