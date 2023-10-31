import {NavigationContainer, useNavigation} from '@react-navigation/native';
import React from 'react';
import {PaperProvider, Text, Button} from 'react-native-paper';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SettingsScreen from './Settings';
import FlashcardsScreen from './Flashcards';
import ToDoScreen from './ToDo';
import CallsScreen from './Calls';
import TimerScreen from './Timer';
import HomeScreen from './Home';
import {MaterialHeaderButtons} from './Header';
import {HeaderButtonsProvider} from 'react-navigation-header-buttons';

const Stack = createNativeStackNavigator();

function getIcon({focused, color, size}, name) {
  let iconName;
  iconName = focused ? name : name + '-outline';
  return (
    <MaterialCommunityIcons
      name={iconName}
      color={color}
      size={size}></MaterialCommunityIcons>
  );
}

function MyTabs() {
  return (
    <SafeAreaProvider>
      <PaperProvider>
        <HeaderButtonsProvider>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name="Settings" component={SettingsScreen} />
              <Stack.Screen name="Flashcards" component={FlashcardsScreen} />
              <Stack.Screen name="ToDo" component={ToDoScreen} />
              <Stack.Screen name="Calls" component={CallsScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        </HeaderButtonsProvider>
      </PaperProvider>
    </SafeAreaProvider>
  );
}

export default MyTabs;
