import React from 'react';
import {Text, Button} from 'react-native-paper';
import {MaterialHeaderButtons} from './Header';

function HomeScreen({navigation}) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <MaterialHeaderButtons navigation={navigation}></MaterialHeaderButtons>
      ),
      title: 'Hello, Lucy!',
    });
  }, [navigation]);
  return (
    <Button onPress={() => navigation.navigate('Settings')}>go Settings</Button>
  );
}

export default HomeScreen;
