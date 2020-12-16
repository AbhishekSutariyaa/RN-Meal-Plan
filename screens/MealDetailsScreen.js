import React, {useEffect, useCallback, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
// import Icon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useSelector, useDispatch} from 'react-redux';
import FastImage from 'react-native-fast-image';
// import {MEALS} from '../data/dummy-data';
import HeaderButton from '../components/HeaderButton';
import {toggleFavorite} from '../store/actions/meals';
import Colors from '../constants/Colors';

const ListItem = (props) => {
  return (
    <View style={styles.listItem}>
      <Text>{props.children}</Text>
    </View>
  );
};

const MealDetailsScreen = (props) => {
  const mealId = props.navigation.getParam('mealId');
  const availableMeals = useSelector((state) => state.meals.meals);
  const currentMealIsFavorite = useSelector((state) =>
    state.meals.favoritesMeals.some((meal) => meal.id === mealId),
  );

  // const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  const selectedMeal = availableMeals.find((meal) => meal.id === mealId);
  const [isFavorite, setFavorite] = useState(currentMealIsFavorite);

  const dispatch = useDispatch();

  const toggleFavoriteHandler = useCallback(() => {
    setFavorite(!isFavorite);
    dispatch(toggleFavorite(mealId));
  }, [dispatch, mealId]);

  useEffect(() => {
    props.navigation.setParams({toggleFav: toggleFavoriteHandler});
  }, [toggleFavoriteHandler]);

  useEffect(() => {
    props.navigation.setParams({isFav: currentMealIsFavorite});
  }, [currentMealIsFavorite]);

  return (
    <View style={{backgroundColor: '#ffffff'}}>
      <ScrollView>
        <FastImage
          source={{
            uri: selectedMeal.imageUrl,
          }}
          style={styles.image}
        />
        <View style={styles.details}>
          <TouchableOpacity
            style={{
              marginRight: 15,
              alignItems: 'center',
              justifyContent: 'center',
              position: 'absolute',
              right: 0,
              top: 10,
            }}
            onPress={() => toggleFavoriteHandler()}>
            <Icon
              name={isFavorite ? 'favorite' : 'favorite-border'}
              color={Colors.accentColor}
              size={25}
            />
          </TouchableOpacity>
          <Text style={{color: 'white'}}>
            {selectedMeal.complexity.toUpperCase()}
          </Text>
          <Text style={{color: 'white'}}>{selectedMeal.duration}m</Text>

          <Text style={{color: 'white'}}>
            {selectedMeal.affordability.toUpperCase()}
          </Text>
        </View>
        <Text style={styles.title}>Ingredients : </Text>
        {selectedMeal.ingredients.map((ingredients) => (
          <ListItem key={ingredients}>{ingredients}</ListItem>
        ))}
        <Text style={styles.title}>Steps : </Text>
        {selectedMeal.steps.map((steps) => (
          <ListItem key={steps}>{steps}</ListItem>
        ))}
      </ScrollView>
    </View>
  );
};

// MealDetailsScreen.navigationOptions = (navigationData) => {
//   // const mealId = navigationData.navigation.getParam('mealId');
//   const selectedMeal = navigationData.navigation.getParam('mealTitle');
//   // const selectedMeal = MEALS.find((meal) => meal.id === mealId);
//   const toggleFavorite = navigationData.navigation.getParam('toggleFav');
//   const isFavorite = navigationData.navigation.getParam('isFav');

//   console.log('toggleFavortites :' + toggleFavorite);

//   return {
//     // headerTitle: selectedMeal.title,
//     headerTitle: selectedMeal,

//     headerRight: (
//       <TouchableOpacity
//         style={{
//           flex: 1,
//           marginRight: 15,
//           alignItems: 'center',
//           justifyContent: 'center',
//         }}
//         onPress={()=> toggleFavoriteHandler()}
//         >
//         <Icon name="favorite-border" color={Colors.accentColor} size={25} />
//       </TouchableOpacity>
//     ),
//   };
// };

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  imageLocal: {
    height: 40,
    width: 40,
  },
  image: {
    height: 200,
  },
  details: {
    flexDirection: 'row',
    padding: 16,
    justifyContent: 'space-around',
  },
  title: {
    fontSize: 22,
    paddingLeft: 16,
    color: '#000000',
  },
  listItem: {
    marginVertical: 8,
    marginHorizontal: 16,
    borderColor: Colors.shadowColor,
    borderWidth: 1,
    padding: 8,
  },
});

export default MealDetailsScreen;
