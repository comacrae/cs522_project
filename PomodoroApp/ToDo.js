import React from 'react';
import {Text} from 'react-native-paper';
import {MaterialHeaderButtons} from './Header';

function ToDoScreen({navigation}) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <MaterialHeaderButtons navigation={navigation}></MaterialHeaderButtons>
      ),
      title: 'ToDo',
    });
  }, [navigation]);
  return <Text>ToDo</Text>;
}

export default ToDoScreen;
