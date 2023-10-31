import React from 'react';
import {Text} from 'react-native-paper';
import {DefaultHeader} from './Header';

function SettingsScreen({navigation}) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <DefaultHeader navigation={navigation}></DefaultHeader>
      ),
    });
  });
  return <Text>Settings</Text>;
}

export default SettingsScreen;
