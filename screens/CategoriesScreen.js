import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import {CATEGORIES} from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';
import Colors from '../constants/Colors';

const CategoriesScreen = (props) => {
  //   console.log('Props Data : ', props);

  const renderGridItem = (itemData) => {
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onSelect={() => {
          props.navigation.navigate({
            routeName: 'CategoryMeals',
            params: {
              categoryId: itemData.item.id,
            },
          });
        }}
      />
    );
  };

  return (
    <View style={{backgroundColor:'#ffffff'}}>
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={CATEGORIES}
        renderItem={renderGridItem}
        showsVerticalScrollIndicator={false}
        numColumns={1}
      />
    </View>

    // <View style={styles.screen}>
    //   <Text>The Categories Screen</Text>
    //   <Button
    //     title="Go to Meals!"
    //     onPress={() => {
    //       props.navigation.navigate({routeName: 'CategoryMeals'});
    //       //   props.navigation.navigate('CategoryMeals');
    //       // props.navigation.push('CategoryMeals');
    //       //   props.navigation.replace('CategoryMeals');
    //     }}
    //   />
    // </View>
  );
};

CategoriesScreen.navigationOptions = (navigationData) => {
  return {
    headerTitle: 'All Categories',
    headerLeft: (
      // <View>
      //   <View>
      //     <Icon name="ios-add" size={30} />
      //   </View>
      //   <View>
      //     <Icon name="ios-add" size={30} />
      //   </View>
      // </View>
      <TouchableOpacity
        onPress={() => {
          navigationData.navigation.toggleDrawer();
        }}>
        <Image
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
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
  },
  imageLocal: {
    height: 50,
    width: 50,
  },
});

export default CategoriesScreen;
