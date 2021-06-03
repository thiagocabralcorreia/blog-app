import React, { useState, useEffect } from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = (price) => {
    // price === '$' || '$$' || '$$$'
    return results.filter(result => {
      return result.price === price;
    })
  }
 
  return (
    <View style={{ flex: 1 }}>
      <SearchBar
      term={term}
      onTermChange={setTerm}
      onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text style={styles.results}>We have found {results.length} results</Text>
      <ScrollView>
        <ResultsList
        title='Cost Effective'
        results={filterResultsByPrice('$')}
        />
        <ResultsList
        title='Bit Pricier'
        results={filterResultsByPrice('$$')}
        />
        <ResultsList
        title='Big Spender'
        results={filterResultsByPrice('$$$')}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  results: {
    marginLeft: 15
  }
})

export default SearchScreen;
