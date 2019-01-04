import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { StyleSheet, ScrollView, View } from 'react-native';
import { withNavigation } from 'react-navigation';

import TabContent from '../../components/TabContent';
import MovieTile from '../../components/MovieTile';
import NoMovies from '../../components/NoMovies';

const styles = StyleSheet.create({
  noMoviesContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  row: {
    flex: 1,
    flexDirection: 'row',
  },

  movieTile: {
    marginBottom: 0,
    marginTop: 0,
  },

  fillView: {
    flex: 1,
  },
});

class LibraryTabContent extends React.Component {
  static propTypes = {
    rows: PropTypes.arrayOf(PropTypes.array).isRequired,
    rowLength: PropTypes.number.isRequired,
  };

  handleMovieTilePress = (movie) => {
    this.props.navigation.navigate('Movie', {
      movie,
    });
  }

  handleNoMoviesPress = () => {
    this.props.navigation.navigate('Search');
  }

  render() {
    const { rows } = this.props;
    return (
      <TabContent>
        {rows.length === 0 ?
          <View style={styles.noMoviesContainer}>
            <NoMovies
              onPress={this.handleNoMoviesPress}
            />
          </View>
          :
          <ScrollView>
            {rows.map((row, i) => (
              <View
                key={i}
                style={styles.row}
              >
                {row.map(movie => (
                  <MovieTile
                    key={movie.imdbID}
                    movie={movie}
                    onPress={this.handleMovieTilePress}
                    style={{ container: styles.movieTile }}
                  />
                ))}
                {}
              </View>
            ))}
          </ScrollView>
        }
      </TabContent>
    );
  }
}
function createRows(list, rowLength) {
  if (list.length === 0) return [];
  const rows = [[]];
  for (let i = 0; i < list.length; i++) {
    const row = rows[rows.length - 1];
    if (row.length === rowLength) {
      rows.push([list[i]]);
    } else {
      row.push(list[i]);
    }
  }
  return rows;
}
const stateToProps = ({ library }, ownProps) => {
  const list = library.sections[ownProps.section];
  const rowLength = library.rowLengths[ownProps.section];
  return {
    rows: createRows(list, rowLength),
    rowLength,
  };
};

const dispatchToProps = dispatch => ({});

export default connect(stateToProps, dispatchToProps)(
  withNavigation(LibraryTabContent)
);
