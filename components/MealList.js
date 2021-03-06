import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

import MealItem from './MealItem';

const MealList = (props) => {
  const renderMealItem = (itemData) => {
    return (
      <MealItem
        title={itemData.item.title}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        image={itemData.item.imageUrl}
        onSelectMeal={() => {
          props.navigation.navigate({
            routeName: 'MealDetails',
            params: {
              mealId: itemData.item.id,
              mealTitle: itemData.item.title,
            },
          });
        }}
      />
    );
  };

  return (
    <View style={styles.list}>
      <FlatList
        data={props.ItemData}
        contentContainerStyle={{marginBottom:10 , flexGrow:1}}
        keyExtractor={(item, index) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={renderMealItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    margin:15,    
  },
});

export default MealList;
