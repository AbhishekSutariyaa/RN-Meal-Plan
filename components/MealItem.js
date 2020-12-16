import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import FastImage from 'react-native-fast-image';

import Colors from '../constants/Colors';

const MealItem = (props) => {
  return (
    <View style={styles.mealIteam}>
      <TouchableOpacity onPress={props.onSelectMeal} activeOpacity={1}>
        <View>
          <View style={{...styles.mealRow, ...styles.mealHeader}}>
            <FastImage source={{uri: props.image}} style={styles.bgImage}>
              <View style={styles.titleContainer}>
                <Text style={styles.title} numberOfLines={1}>
                  {props.title}
                </Text>
              </View>
            </FastImage>
          </View>
          <View style={{...styles.mealRow, ...styles.mealDetail}}>
            <Text>{props.duration}m</Text>
            <Text>{props.complexity.toUpperCase()}</Text>
            <Text>{props.affordability.toUpperCase()}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mealIteam: {
    height: 200,
    backgroundColor: Colors.mealFooteBgColor,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,

    margin: 10,
  },
  bgImage: {
    height: '100%',
    width: '100%',
    justifyContent: 'flex-end',
    borderRadius: 10,
  },
  mealRow: {
    flexDirection: 'row',
  },
  mealHeader: {
    height: '85%',
  },
  mealDetail: {
    paddingHorizontal: 8,
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '15%',
  },
  titleContainer: {
    backgroundColor: Colors.mealTitleBgColor,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 20,
    color: Colors.headerTitleColor,
    textAlign: 'center',
  },
});

export default MealItem;
