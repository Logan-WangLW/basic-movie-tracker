import React from 'react';
import { Provider } from 'react-redux';
import { ThemeContext, getTheme } from 'react-native-material-ui';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './src/store';
import { uiTheme } from './src/styles/theme';
import AppNavigator from './src/navigator';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeContext.Provider value={getTheme(uiTheme)}>
            <AppNavigator />
          </ThemeContext.Provider>
        </PersistGate>
      </Provider>
    );
  }
}