import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { withTheme } from 'react-native-material-ui';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: 'lightgrey'
  },
  text: {
    fontSize: 15,
  },
});

class MovieInfo extends React.Component {
  render() {
    const { result } = this.props;
    return (
      <View style={styles.container}>
        <View >
          <Text style={styles.text}>{result.Plot}</Text>
        </View>
      </View>
    );
  }
}

export default withTheme(MovieInfo);