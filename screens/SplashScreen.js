import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';

const SplashScreen = (props) => {
  useEffect(() => {
    setTimeout(() => {
      props.navigation.replace({routeName: 'MealsNavigator'});
    }, 1500);
  }, []);

  return (
    <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
      <FastImage
        source={require('../assets/fonts/lunch-box.png')}
        style={{height: 200, width: 200}}
      />
      <Text style={{fontSize: 24, fontWeight: 'bold', paddingTop: 20}}>
        Meal Plan
      </Text>
    </View>
  );
};

export default SplashScreen;
