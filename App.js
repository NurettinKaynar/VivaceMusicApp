import React, {useEffect} from 'react';
import RNBootSplash from 'react-native-bootsplash';
import VivaceNavigator from './navigation/VivaceNavigator';
import {StatusBar, LogBox} from 'react-native';
import Colors from './constants/Colors';
import ProfileSettingsScreen from './screens/ProfileSettingsScreen';

LogBox.ignoreLogs(['Reanimated 2']);

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      RNBootSplash.hide();
    }, 1000);
  });
  return (
    <>
      <StatusBar backgroundColor={Colors.backgroundColor} />
      {/* <VivaceNavigator /> */}
      <ProfileSettingsScreen />
    </>
  );
};

export default App;
