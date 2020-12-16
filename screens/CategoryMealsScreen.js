import React from 'react';
import {View, StyleSheet, FlatList, Text} from 'react-native';
import {useSelector} from 'react-redux';

// import {CATEGORIES, MEALS} from '../data/dummy-data';
import {CATEGORIES} from '../data/dummy-data';
import MealList from '../components/MealList';

const CategoryMealsScreen = (props) => {
  const catId = props.navigation.getParam('categoryId');
  // const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);

  const availableMeals = useSelector((state) => state.meals.filteredMeals);

  const displayedMeals = availableMeals.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0,
  );

  if (displayedMeals.length === 0 || !displayedMeals) {
    return (
      <View style={styles.screen}>
        <Text style={{textAlign: 'center'}}>Meals not found.</Text>
      </View>
    );
  }

  return <MealList ItemData={displayedMeals} navigation={props.navigation} />;

  // const renderMealItem = (itemData) => {
  //   return (
  //     <MealItem
  //       title={itemData.item.title}
  //       duration={itemData.item.duration}
  //       complexity={itemData.item.complexity}
  //       affordability={itemData.item.affordability}
  //       image={itemData.item.imageUrl}
  //       onSelectMeal={() => {
  //         props.navigation.navigate({
  //           routeName: 'MealDetails',
  //           params: {
  //             mealId: itemData.item.id,
  //           },
  //         });
  //       }}
  //     />

  //     // <View>
  //     //   <Text>{itemData.item.title}</Text>
  //     // </View>
  //   );
  // };

  // return (
  //   <View style={styles.screen}>
  //     <FlatList
  //       data={displayedMeals}
  //       keyExtractor={(item, index) => item.id}
  //       renderItem={renderMealItem}
  //     />
  //   </View>
  //   // <View style={styles.screen}>
  //   //   <Text>The Category Meals Screen</Text>
  //   //   <Text>{selectedCategory.title}</Text>
  //   //   <Button
  //   //     title="Go to Details!"
  //   //     onPress={() => {
  //   //       props.navigation.navigate({routeName: 'MealDetails'});
  //   //       //   props.navigation.navigate('MealDetails');
  //   //     }}
  //   //   />
  //   //   <Button
  //   //     title="Go Back"
  //   //     onPress={() => {
  //   //       props.navigation.pop();
  //   //     }}
  //   //   />
  //   // </View>
  // );
};

CategoryMealsScreen.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam('categoryId');
  console.log('catid : ', catId);

  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);
  console.log('selected Category : ', selectedCategory.title);

  return {
    headerTitle: selectedCategory.title,
    // headerStyle: {
    //   backgroundColor: Colors.primaryColor,
    // },
    // headerTintColor: Colors.headerTitleColor,
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    margin: 16,
  },
});

export default CategoryMealsScreen;
