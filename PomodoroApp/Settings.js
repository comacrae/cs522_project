import React from 'react';
import {Text} from 'react-native-paper';
import {MaterialHeaderButtons} from './Header';

function SettingsScreen({navigation}) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <MaterialHeaderButtons navigation={navigation}></MaterialHeaderButtons>
      ),
      title: 'Calls',
    });
  }, [navigation]);
  return <Text>Settings</Text>;
}

export default SettingsScreen;
