import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { StyleSheet, TextInput } from 'react-native';
import { Toolbar, withTheme } from 'react-native-material-ui';

import * as searchActions from '../actions/search';
import MainView from '../components/MainView';
import SearchResults from '../components/SearchResults';

const styles = StyleSheet.create({
  title: {
    color: 'white',
  },
});

class SearchScreen extends React.Component {

  handleSearchTermChange = (searchTerm) => {
    this.props.searchActions.searchTermChange(searchTerm);
  }

  handleSearchSubmit = () => {
    const searchTerm = this.props.searchTerm.trim();
    this.props.searchActions.search(searchTerm);
  }

  handleBackIconPress = () => {
    this.props.navigation.goBack();
  }

  handleMovieRequest = (movie) => {
    this.props.navigation.navigate('Movie', {
      movie,
    });
  }

  render() {
    const { searchTerm, results, theme, } = this.props;

    return (
      <MainView>
        <Toolbar
          leftElement="md-arrow-back"
          onLeftElementPress={this.handleBackIconPress}
          centerElement={(
            <TextInput
              autoFocus
              value={searchTerm}
              onChangeText={this.handleSearchTermChange}
              onSubmitEditing={this.handleSearchSubmit}
              placeholder="Type here to search for movies"
              style={[
                theme.toolbar.title,
                theme.toolbarSearchActive.title,
                styles.title,
              ]}
            />
          )}
        />
        <SearchResults

          results={results}
          onMovieRequest={this.handleMovieRequest}
        />
      </MainView>
    );
  }
}

const stateToProps = ({ search }) => ({
  searchTerm: search.term,

  results: search.results,
});

const dispatchToProps = dispatch => ({
  searchActions: bindActionCreators(searchActions, dispatch),
});

export default connect(stateToProps, dispatchToProps)(
  withTheme(SearchScreen)
);