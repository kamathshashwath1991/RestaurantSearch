import {useState, useEffect} from 'react';
import yelp from '../api/yelp';

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchApi = async searchTerm => {
    try {
      const respone = await yelp.get('/search', {
        params: {
          limit: 50,
          term: searchTerm,
          location: 'iselin',
        },
      });
      setResults(respone.data.businesses);
    } catch (err) {
      setErrorMessage('Something went Wrong');
    }
  };
  useEffect(() => {
    searchApi('pasta');
  }, []);

  return [searchApi, results, errorMessage];
};
