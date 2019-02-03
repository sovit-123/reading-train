import axios from '/axios';

const BASE_URL = 'https://www.googleapis.com/books/v1/volumes?q=';
const KEY = process.env.REACT_APP_GOOGLE_API_KEY;

const fetchBooks = query =>
  axios
    .get(`${BASE_URL}${query}&key=${KEY}`)
    .then(res => {
      const result = res.data;
      this.setState({ result, isSubmitted: !this.state.isSubmitted });
      console.log(this.state.result);
    })
    .catch(error => {
      this.setState({ error });
    });

export { fetchBooks };
