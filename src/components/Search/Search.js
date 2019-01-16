import React, { Component } from 'react';
import axios from 'axios';

import './Search.css';

const convert = require('xml-js');

//const BASE_URL = 'https://www.goodreads.com/search.xml?key=';
const BASE_URL = 'https://www.googleapis.com/books/v1/volumes?q=';
//const KEY = process.env.REACT_APP_GR_API_KEY;
const KEY = process.env.REACT_APP_GOOGLE_API_KEY;

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
      result: '',
      error: null
    };
  }

  onSubmit = event => {
    const { query } = this.state;

    axios
      //.get(`https://cors-anywhere.herokuapp.com/${BASE_URL}${KEY}&q=${query}`)
      .get(`${BASE_URL}${query}&key=${KEY}`)
      .then(res => {
        //const result = convert.xml2json(res.data, { compact: true, spaces: 4 });
        const result = (res.data);
        console.log(result);
        this.setState({ result });
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  onChange = event => {
    this.setState({
      query: event.target.value
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} className="search-form">
          <input
            className="search-input"
            name="search"
            value={this.state.query}
            onChange={this.onChange}
            type="text"
            placeholder="Search..."
          />
          <button type="Submit" className="search-button">
            Search
          </button>
        </form>
      </div>
    );
  }
}

export default Search;
