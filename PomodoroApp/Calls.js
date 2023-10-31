import React from 'react';
import {Text} from 'react-native-paper';
import {MaterialHeaderButtons} from './Header';

function CallsScreen({navigation}) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <MaterialHeaderButtons navigation={navigation}></MaterialHeaderButtons>
      ),
      title: 'Calls',
    });
  }, [navigation]);
  return <Text>Calls</Text>;
}

export default CallsScreen;
