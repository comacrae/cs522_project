import React from 'react';
import {Text, Banner} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import {
  HeaderButtons,
  HeaderButton,
  Item,
  OverflowMenu,
  HiddenItem,
} from 'react-navigation-header-buttons';

// define IconComponent, color, sizes and OverflowIcon in one place
const MaterialHeaderButton = props => (
  <HeaderButton
    IconComponent={MaterialCommunityIcons}
    iconSize={23}
    color="blue"
    {...props}
  />
);

const CustomOverflowMenu = props => (
  <OverflowMenu
    OverflowIcon={
      <MaterialCommunityIcons name="menu" size={23} color="blue" />
    }></OverflowMenu>
);

export const MaterialHeaderButtons = props => {
  return (
    <HeaderButtons HeaderButtonComponent={MaterialHeaderButton} {...props}>
      <Item
        iconName="home"
        onPress={navigation => props.navigation.navigate('Home')}
      />
    </HeaderButtons>
  );
};
