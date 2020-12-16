import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import FastImage from 'react-native-fast-image';
import {useSelector} from 'react-redux';

import MealList from '../components/MealList';
// import {MEALS} from '../data/dummy-data';

const FavoritesScreen = (props) => {
  const favMeals = useSelector((state) => state.meals.favoritesMeals);
  console.log('favMeals :' + favMeals);

  if (favMeals.length === 0 || !favMeals) {
    return (
      <View style={styles.screen}>
        <Text style={{textAlign:"center"}}>Favorite meals not found.</Text>
      </View>
    );
  }
  // const displayFavMeal = favMeals.filter(
  //   (meal) => meal.id === 'm1' || meal.id === 'm2',
  // );
  // return <MealList ItemData={displayFavMeal} navigation={props.navigation} />;

  return <MealList ItemData={favMeals} navigation={props.navigation} />;

  // return (
  //   <View style={styles.screen}>
  //     <Text>The Favorites Screen</Text>
  //   </View>
  // );
};

FavoritesScreen.navigationOptions = (navigationData) => {
  return {
    headerTitle: 'Your Favorites',
    headerLeft: (

      <TouchableOpacity
        onPress={() => {
          navigationData.navigation.toggleDrawer();
        }}>
        <FastImage
          style={{width: 40, height: 40}}
          source={require('../assets/fonts/ic_menu.png')}
        />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
});

export default FavoritesScreen;
