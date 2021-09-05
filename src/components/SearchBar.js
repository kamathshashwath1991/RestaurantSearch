import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

const SearchBar = ({term, onTermChange}) => {
  return (
    <View style={styles.background}>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        inputStyle={styles.inputStyle}
        placeholder="Search"
        value={term}
        onChangeText={newTerm => onTermChange(newTerm)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: 'rgb(220,220,220)',
    height: 50,
    borderRadius: 10,
    marginHorizontal: 15,
    padding:20,
  },
  inputStyle:{
      fontSize: 18,
  },
});

export default SearchBar;
