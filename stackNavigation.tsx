/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
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

import React, {useState, useLayoutEffect} from 'react';
import {
  Button,
  Text,
  Image,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

const HomeScreen = ({navigation}) =>{

  const [count, setCount] = useState(0);

  useLayoutEffect(()=>{
    navigation.setOptions({
      headerRight : () =>(
        <Button title="increase count" onPress={()=>setCount((c)=>c + 1)}/>
      )
    })
  },[]);




  const username = "Esraa";
  const age = 20;
  return(
    <View>
    <Text>Home Screen and this is the count {count}</Text>
    <Button title="Go to details" onPress={()=> navigation.navigate('Details', {username,age}) } />
    </View>
  );
}

const DetailsScreen = ({route,navigation }) =>{
  const username = route.params.username;
  const {id} = route.params;



  return(
    <View>
    <Text>Details Screen, welcome {username} and {id}</Text>
    <Button title="Go Back" onPress={()=> navigation.goBack()} />
    <Button title= "Go to Home " onPress={()=> navigation.navigate('Home')}/> 
    </View>
  );
}


const Logo = () => {

<Image style={{width:100, height:60}} source={require('../images/test.jpg')}  />
}

function ScreenNavigation(): JSX.Element {
  return(
       <>
       <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} options={
            {
            // title:"my home",
            // headerStyle:{backgroundColor:"pink"}
            headerTitle:(props)=> <Logo {...props}/>,
            headerRight : () => (
              <Button onPress={()=> alert('more information')}
               title='Info'
               color="green"
              />
            )          
            }
            } />
          <Stack.Screen name="Details" component={DetailsScreen} initialParams={{username:"to our application"}}/>
        </Stack.Navigator>
       </NavigationContainer>
       </>
  );
}

export default ScreenNavigation;
