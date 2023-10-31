import React from 'react';
import {Text, IconButton} from 'react-native-paper';
import {StyleSheet, View, Dimensions} from 'react-native';
import {MaterialHeaderButtons} from './Header';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {SimpleGrid} from 'react-native-super-grid';

function HomeScreen({navigation}) {
  const [items, setItems] = React.useState([
    {
      name: 'Timer',
      component: (
        <IconButton
          icon="timer"
          size={100}
          onPress={() => navigation.navigate('Timer')}
        />
      ),
    },
    {
      name: 'Flashcards',
      component: (
        <IconButton
          icon="card-bulleted"
          size={100}
          onPress={() => navigation.navigate('Flashcards')}
        />
      ),
    },
    {
      name: 'Calls',
      component: (
        <IconButton
          icon="video"
          size={100}
          onPress={() => navigation.navigate('Calls')}
        />
      ),
    },
    {
      name: 'To-Do',
      component: (
        <IconButton
          icon="clipboard-check"
          size={100}
          onPress={() => navigation.navigate('ToDo')}
        />
      ),
    },
  ]);
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <MaterialHeaderButtons navigation={navigation}></MaterialHeaderButtons>
      ),
      title: 'Hello, Lucy!',
    });
  }, [navigation]);
  return (
    <SimpleGrid
      style={{justifyContent: 'center'}}
      data={items}
      renderItem={({item}) => <View>{item.component}</View>}></SimpleGrid>
  );
}

export default HomeScreen;

/*
 */
