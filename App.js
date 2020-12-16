import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import MealsNavigator from './navigation/MealsNavigator';
import MealReducers from './store/reducers/meals';
import SplashScreen from './screens/SplashScreen';

const rootReducers = combineReducers({
  meals: MealReducers,
});
const AppNavigator = createStackNavigator({
  SplashScreen: {
    screen: SplashScreen,
    navigationOptions: {
      header: null,
    },
  },
  MealsNavigator: {
    screen: MealsNavigator,
    navigationOptions: {
      header: null,
    },
  },
});
const AppContainer = createAppContainer(AppNavigator);
const store = createStore(rootReducers);

export default function App() {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
}
