import React from 'react';
import { StyleSheet } from 'react-native';
import FitImage from 'react-native-fit-image';
import { Card, Subheader } from 'react-native-material-ui';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 5,
    paddingBottom: 5,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: 'grey'
  },

  movieTitle: {
    fontSize: 15,
    color: 'white'
  },
});

class MovieCard extends React.Component {

  static defaultProps = {
    style: {},
    onPress: () => { },
  };

  handlePress = () => {
    this.props.onPress(this.props.movie);
  }

  render() {
    const { movie, style: propsStyle = {} } = this.props;
    return (
      <Card
        style={{ container: [styles.container, propsStyle.container] }}
        onPress={this.handlePress}
      >
        <Subheader
          lines={2}
          text={`${movie.Title} - ${movie.Year}`}
          style={{
            text: styles.movieTitle,
          }}
        />
        <FitImage
          source={{ uri: movie.Poster }}
        />
      </Card>
    );
  }
}

export default MovieCard;