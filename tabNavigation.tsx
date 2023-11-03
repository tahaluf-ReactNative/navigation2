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
import ScreenNavigation from './components/screenNavigation';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// const Tab = createBottomTabNavigator();
// const Tab = createMaterialBottomTabNavigator();
const Tab = createMaterialTopTabNavigator();


const Stack = createNativeStackNavigator();

const HomeScreen = ({navigation}) =>{
  return(
    <View>
      <Text>This is home </Text>
      <Button title="Go to details" onPress={()=> navigation.navigate('Details') } />
    </View>
  )
}

const SettingsScreen = () =>{
  return(
    <View style={style.container}>
      <Text>This is Settings </Text>
    </View>
  )
}

const DetailsScreen = () =>{
  return(
    <View style={style.container}>
      <Text>This is Details </Text>
    </View>
  )
}

const HomeStack = () =>{
 return(
  <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Details" component={DetailsScreen} />
  </Stack.Navigator>
 )
}


function TabNavigation(): JSX.Element {
  return(
    // <ScreenNavigation/>
    <NavigationContainer>
       <Tab.Navigator screenOptions={{headerShown:false}}>
        <Tab.Screen name='Home' component={HomeStack}/>
        <Tab.Screen name='Settings' component={SettingsScreen}/>
        {/* <Tab.Screen name='Details' component={DetailsScreen}/> */}
       </Tab.Navigator>
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

export default TabNavigation;
