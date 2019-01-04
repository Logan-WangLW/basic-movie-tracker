import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { Toolbar, withTheme } from 'react-native-material-ui';
import FitImage from 'react-native-fit-image';

import * as movieActions from '../actions/movie';
import * as libraryActions from '../actions/library';
import MainView from '../components/MainView';
import MovieTop from '../components/MovieTop';
import MovieInfo from '../components/MovieInfo';

const styles = StyleSheet.create({
  moviePoster: {},
  result: {},
});

class MovieScreen extends React.Component {
  static defaultProps = {
    loading: true,
    result: null,
  };

  componentWillMount() {
    if (!this.props.result) {
      const movieId = this.props.selectedMovie.imdbID;
      this.props.movieActions.fetchMovie(movieId);
    }
  }

  handleLeftIconPress = () => {
    this.props.navigation.goBack();
  }

  handleListIconPress = () => {
    if (this.props.libraryListAdded) {
      this.props.libraryActions.listRemove(this.props.selectedMovie);
    } else {
      this.props.libraryActions.listAdd(this.props.selectedMovie);
    }
  }

  handleFavoriteIconPress = () => {
    if (this.props.libraryFavoritesAdded) {
      this.props.libraryActions.favoritesRemove(this.props.selectedMovie);
    } else {
      this.props.libraryActions.favoritesAdd(this.props.selectedMovie);
    }
  }

  handleRightElementPress = (info) => {
    if (info.index === 0) {
      this.handleListIconPress();
    } else {
      this.handleFavoriteIconPress();
    }
  }

  render() {
    const {
      selectedMovie, loading, result, theme,
      libraryListAdded, libraryFavoritesAdded
    } = this.props;
    return (
      <MainView>
        <Toolbar
          leftElement="md-arrow-back"
          onLeftElementPress={this.handleLeftIconPress}
          centerElement="Movie Information"
          rightElement={[
            libraryListAdded ? 'md-remove-circle-outline' : 'md-add',
            libraryFavoritesAdded ? 'md-heart' : 'md-heart-empty',
          ]}
          onRightElementPress={this.handleRightElementPress}
        />
        <ScrollView>
          <FitImage
            style={styles.moviePoster}
            source={{ uri: selectedMovie.Poster }}
          />
          {loading ?
            <View>
              <Text>Loading</Text>
            </View>
            :
            <View style={styles.result}>
              <MovieTop result={result} />
              <MovieInfo result={result} />
            </View>
          }
        </ScrollView>
      </MainView>
    );
  }
}

const stateToProps = ({ movie, library }, ownProps) => {
  const selectedMovie = ownProps.navigation.getParam('movie');
  const movieId = selectedMovie.imdbID;
  const movieDesc = movie.resultsById[movieId] || {};

  return {
    selectedMovie,
    loading: movieDesc.loading,
    result: movieDesc.result,
    libraryListAdded: !!library.sections.list.find(m => m.imdbID === movieId),
    libraryFavoritesAdded: !!library.sections.favorites.find(m => m.imdbID === movieId),
  };
};

const dispatchToProps = dispatch => ({
  movieActions: bindActionCreators(movieActions, dispatch),
  libraryActions: bindActionCreators(libraryActions, dispatch),
});

export default connect(stateToProps, dispatchToProps)(
  withTheme(MovieScreen)
);