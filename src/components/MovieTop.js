import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { withTheme } from 'react-native-material-ui';

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },

  item: {
    flexDirection: 'row',
    marginRight: 15,
  },

  title: {
    fontSize: 24,
    color: 'lightgrey'
  }
});

class MoviesTop extends React.Component {
  render() {
    const { result, theme } = this.props;
    const { primaryColor } = theme.palette;
    return (
      <View style={[styles.container, { backgroundColor: primaryColor }]}>
        <View >
          <Text style={styles.title}>{result.Title}</Text>
        </View>
        <View>
          <View>
            <Text>{result.Genre}</Text>
          </View>
        </View>
        <View>
          <View>
            <Text>Year: {result.Year}</Text>
          </View>
          <View>
            <Text>Runtime: {result.Runtime}</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default withTheme(MoviesTop);