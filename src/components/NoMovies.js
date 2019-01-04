import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { COLOR, Card } from 'react-native-material-ui';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    borderRadius: 8,
    backgroundColor: COLOR.amber50,
  },

  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    fontSize: 25
  },
});

class NoMovies extends React.Component {

  render() {
    const { onPress } = this.props;
    return (
      <Card style={{ container: styles.container }} onPress={onPress}>
        <View style={styles.content}>
          <View>
            <Text style={styles.text}>Click me to start {"\n"}Searching!</Text>
          </View>
        </View>
      </Card>
    );
  }
}

export default NoMovies;