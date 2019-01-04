import React from 'react';
import {
  StyleSheet, View, ScrollView,
} from 'react-native';
import { COLOR } from 'react-native-material-ui';
import MovieTile from './MovieTile';

const styles = StyleSheet.create({
  searchResults: {
    flex: 1,
    backgroundColor: COLOR.amber50,
  }
});

class SearchResults extends React.Component {
  render() {
    const { results, onMovieRequest } = this.props;
    return (
      <View style={styles.searchResults}>
        <ScrollView>
          {results.map(movie => (
            <MovieTile
              key={movie.imdbID}
              movie={movie}
              onPress={onMovieRequest}
            />
          ))}
        </ScrollView>
      </View>
    );
  }
}

export default SearchResults;