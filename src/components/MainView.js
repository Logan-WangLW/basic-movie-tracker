import React from 'react';
import { StyleSheet } from 'react-native';
import { Constants } from 'expo';
import { SafeAreaView } from 'react-navigation';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    paddingTop: Constants.statusBarHeight,
  },
});

const MainView = ({ children }) => (
  <SafeAreaView style={styles.container}>
    {children}
  </SafeAreaView>
);

export default MainView;