import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createDrawerNavigator} from 'react-navigation-drawer';
import FastImage from 'react-native-fast-image';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import FiltersScreen from '../screens/FiltersScreen';
import Colors from '../constants/Colors';
import Icon from 'react-native-vector-icons/Feather';

const defaultStackNavOptions = {
  headerStyle: {
    backgroundColor: Colors.primaryColor,
  },
};

const MealsNavigator = createStackNavigator(
  {
    Categories: CategoriesScreen,
    CategoryMeals: {
      screen: CategoryMealsScreen,
    },
    MealDetails: MealDetailsScreen,
  },
  {
    defaultNavigationOptions: defaultStackNavOptions,

    // initialRouteName: 'Categories',
    // defaultNavigationOptions: {
    //   headerStyle: {
    //     backgroundColor: Colors.primaryColor,
    //   },
    //   headerTintColor: Colors.headerTitleColor,
    // },
  },
);

const FavNavigator = createStackNavigator(
  {
    Favorites: FavoritesScreen,
    MealDetails: MealDetailsScreen,
  },
  {
    defaultNavigationOptions: defaultStackNavOptions,
  },
);

const filter = createStackNavigator({
  FiltersScreen: FiltersScreen,
});

const MealsFavTabNavigator = createBottomTabNavigator(
  {
    Meals: {
      screen: MealsNavigator,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return (
            <FastImage
              style={{width: 40, height: 40}}
              source={require('../assets/fonts/ic_restaurant.png')}
            />
          );
        },
      },
    },
    Favorites: {
      screen: FavNavigator,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return (
            <FastImage
              style={{width: 40, height: 40}}
              tintColor={'red'}
              source={require('../assets/fonts/ic_star.png')}
            />
          );
        },
      },
    },
    Filter: {
      screen: filter,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return <Icon size={23} name={'filter'} color={'red'} />;
        },
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: Colors.accentColor,
    },
  },
);

const styles = StyleSheet.create({
  imageLocal: {
    height: 50,
    width: 50,
  },
});

const FiltersNavigator = createStackNavigator(
  {
    Filters: FiltersScreen,
  },
  {
    defaultNavigationOptions: defaultStackNavOptions,
  },
);

// const MainNavigator = createDrawerNavigator(
//   {
//     MealsFavs: {
//       screen: MealsFavTabNavigator,
//       navigationOptions: {
//         drawerLabel: 'All Meals',
//       },
//     },
//     Filters: FiltersNavigator,
//   },
//   {
//     contentOptions: {
//       activeTintColor: Colors.primaryColor,
//     },
//   },
// );

// export default createAppContainer(MealsNavigator);
// export default createAppContainer(MealsFavTabNavigator);
export default createAppContainer(MealsFavTabNavigator);
