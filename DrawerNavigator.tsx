/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable jsx-quotes */
/* eslint-disable no-trailing-spaces */
/* eslint-disable comma-dangle */
/* eslint-disable no-alert */
/* eslint-disable keyword-spacing */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  Button,
  StyleSheet,
  Text,
  Image,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabNavigation from './components/tabNavigation';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const HomeScreen = ({navigation}:any) =>{
  return(
    <View style={style.container}>
      <Button title="Go to details" onPress={()=>navigation.navigate('Details')}/>
    </View>
  )
}

const DetailsScreen = ({navigation}:any) =>{
  return(
    <View style={style.container}>
      <Button title="Go to home" onPress={()=>navigation.navigate('Home')}/>
    </View>
  )
}

function DrawerNavigation(): JSX.Element {
  return(
  //  <TabNavigation/>
   <NavigationContainer>
    <Drawer.Navigator initialRouteName='Home' >
      <Drawer.Screen name='Home' component={HomeScreen}/>
      <Drawer.Screen name='Details' component={DetailsScreen}/>
    </Drawer.Navigator>
   </NavigationContainer>
  );
}

const style = StyleSheet.create({
  container : {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  }
})

export default DrawerNavigation;
