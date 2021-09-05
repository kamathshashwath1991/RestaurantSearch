import React from 'react';
import {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import yelp from '../api/yelp';
import SearchBar from '../components/SearchBar';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchApi = async () => {
    try {
      const respone = await yelp.get('/search', {
        params: {
          limit: 50,
          term: term,
          location: 'iselin',
        },
      });
      setResults(respone.data.businesses);
    } catch (err) {
      setErrorMessage('Something went Wrong');
    }
  };
  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={newTerm => setTerm(newTerm)}
        onTermSubmit={() => searchApi()}
      />
      <Text>We have found {results.length} results</Text>
      {errorMessage ? <Text>{errorMessage}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
