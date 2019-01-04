import { createStackNavigator, createAppContainer } from 'react-navigation';

import HomeScreen from './containers/HomeScreen';
import SearchScreen from './containers/SearchScreen';
import MovieScreen from './containers/MovieScreen';

const StackNavigator = createStackNavigator({
  Home: HomeScreen,
  Search: SearchScreen,
  Movie: MovieScreen,
}, {
    headerMode: 'none' //removes white space on default header
  });

const AppNavigator = createAppContainer(StackNavigator);
export default AppNavigator;