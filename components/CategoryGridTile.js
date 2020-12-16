import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  TouchableNativeFeedback,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconExpandable from 'react-native-vector-icons/Feather';
import Colors from '../constants/Colors';

const CategoryGridTile = (props) => {
  let Touchablecmp = TouchableOpacity;

  if (Platform.OS === 'android' && Platform.Version >= 21) {
    Touchablecmp = TouchableNativeFeedback;
  }

  return (
    <View style={styles.gridItem}>
      <Touchablecmp style={{flex: 1}} onPress={props.onSelect} activeOpacity={1}>
        <View style={{...styles.container, ...{backgroundColor: props.color}}}>
          <Icon name="food-fork-drink" size={30} color="#fff" light />
          <Text style={styles.title} numberOfLines={2}>
            {props.title}
          </Text>
          <IconExpandable
            style={{
              right: 5,
              position: 'absolute',
              alignContent: 'center',
              alignSelf: 'center',
            }}
            name="arrow-right"
            size={30}
            color="#fff"
            light
          />
        </View>
      </Touchablecmp>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
  },
  container: {
    flex: 1,
    borderRadius: 10,
    shadowColor: Colors.shadowColor,
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 10,
    elevation: 3,
    padding: 16,
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  title: {
    fontSize: 22,
    paddingLeft: 15,
  },
});

export default CategoryGridTile;
