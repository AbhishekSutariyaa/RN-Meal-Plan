// import React from 'react';
// import {HeaderButton} from 'react-navigation-header-buttons';
// import {Ionicons} from '@expo/vector-icons';

// import Colors from '../constants/Colors';

// const CustomHeaderButton = (props) => {
//   return (
//     <HeaderButton
//       {...props}
//       IconComponents={Ionicons}
//       iconSize={23}
//       color={Colors.headerTitleColor}
//     />
//   );
// };

// export default CustomHeaderButton;
import React from 'react';
// import {Platform} from 'react-native';
import {HeaderButton} from 'react-navigation-header-buttons';
// import {Ionicons} from '@expo/vector-icons';
// import IoniconsFont from '@expo/vector-icons/website/src/fonts/Ionicons.ttf';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Colors from '../constants/Colors';

const CustomHeaderButton = (props) => {
  return (
    <HeaderButton
      {...props}
      IconComponent={Ionicons}
      iconSize={40}
      color={Colors.headerTitleColor}
    />
  );
};

export default CustomHeaderButton;
