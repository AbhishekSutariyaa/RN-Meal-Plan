import React, {useState, useEffect, useCallback} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Switch,
  Platform,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {setFilters} from '../store/actions/meals';
import FastImage from 'react-native-fast-image';
import Colors from '../constants/Colors';

const FilterSwitch = (props) => {
  return (
    <View style={styles.filterContainer}>
      <Text>{props.label}</Text>
      <Switch
        thumbColor={
          Platform.OS === 'android'
            ? Colors.primaryColor
            : Colors.headerTitleColor
        }
        value={props.state}
        onValueChange={props.onChange}
      />
    </View>
  );
};

const FiltersScreen = (props) => {
  const {navigation} = props;

  const [isGlutenFree, SetIsGlutenFree] = useState(false);
  const [isLactoseFree, SetIsLactoseFree] = useState(false);
  const [isVegan, SetIsVegan] = useState(false);
  const [isVegetarian, SetIsVegetarian] = useState(false);

  const dispatch = useDispatch();
  const saveFilters = useCallback(() => {
    const appliedFilters = {
      glutenFree: isGlutenFree,
      lactoseFree: isLactoseFree,
      vegan: isVegan,
      vegetarian: isVegetarian,
    };
    console.log(appliedFilters);
    dispatch(setFilters(appliedFilters));
  }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian]);

  useEffect(() => {
    console.log('===useEffect====');
    navigation.setParams({save: saveFilters});
  }, [saveFilters]);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters</Text>
      <FilterSwitch
        label="Lactose-free"
        state={isLactoseFree}
        onChange={(newValue) => SetIsLactoseFree(newValue)}
      />
      <FilterSwitch
        label="Vegan"
        state={isVegan}
        onChange={(newValue) => SetIsVegan(newValue)}
      />
      <FilterSwitch
        label="Vegetatian"
        state={isVegetarian}
        onChange={(newValue) => SetIsVegetarian(newValue)}
      />
      <FilterSwitch
        label="Gluten-free"
        state={isGlutenFree}
        onChange={(newValue) => SetIsGlutenFree(newValue)}
      />
    </View>
  );
};

FiltersScreen.navigationOptions = (navigationData) => {
  return {
    headerTitle: 'Filters',
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
    headerRight: (
      <TouchableOpacity onPress={navigationData.navigation.getParam('save')}>
        <FastImage
          style={{width: 40, height: 40}}
          tintColor={"red"}
          source={require('../assets/fonts/ic_save.png')}
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
  title: {
    fontSize: 22,
    margin: 16,
    textAlign: 'center',
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'center',
    width: '100%',
    paddingLeft: 32,
    paddingRight: 32,
    marginVertical: 16,
  },
});

export default FiltersScreen;
