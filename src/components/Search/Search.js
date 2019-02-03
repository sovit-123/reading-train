import React, { Component } from 'react';
import axios from 'axios';

import './Search.css';
import store from '../../store';
import searchBooks from '../../Actions';

const BASE_URL = 'https://www.googleapis.com/books/v1/volumes?q=';
const KEY = process.env.REACT_APP_GOOGLE_API_KEY;

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
      result: [],
      error: null,
      isSubmitted: false
    };
  }

  onSubmit = event => {
    const { query } = this.state;

    axios
      .get(`${BASE_URL}${query}&key=${KEY}`)
      .then(res => {
        const result = res.data;
        this.setState({ result });
        console.log(this.state.result);
        store.dispatch(searchBooks(this.state.result));
        console.log('The books are', store.getState())
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
    const { query } = this.state;

    axios
      .get(`${BASE_URL}${query}&key=${KEY}`)
      .then(res => {
        const result = res.data;
        this.setState({ result });
        console.log(this.state.result);
      })
      .catch(error => {
        this.setState({ error });
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
