import React from 'react';
import {Text} from 'react-native-paper';
import {MaterialHeaderButtons} from './Header';

function FlashcardsScreen({navigation}) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <MaterialHeaderButtons navigation={navigation}></MaterialHeaderButtons>
      ),
      title: 'Flashcards',
    });
  }, [navigation]);
  return <Text>Flashcards</Text>;
}

export default FlashcardsScreen;
