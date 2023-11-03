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

import React, { useState } from 'react';
import {
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
import Icon from 'react-native-vector-icons/FontAwesome';
import { Avatar, Button, Card, Title, Paragraph, BottomNavigation } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />;

const MyCard = () => {
  return (
    <Card>
      <Card.Title title="the title of the card" subtitle="card subtitle" left={LeftContent} />
      <Card.Content>
        <Card.Cover source={require('./images/test.jpg')} />
        <Title>Content title</Title>
        <Paragraph>here is the paragraph</Paragraph>
        <Card.Actions>
          <Button>
            Buy
          </Button>
          <Button>
            Cancel
          </Button>
        </Card.Actions>
      </Card.Content>
    </Card>
  )
}


const MusicRoute = () => <Text>Music screen</Text>
const AlbumRoute = () => <Text>Album screen</Text>
const RecentRoute = () => <Text>Recent screen</Text>



const BNavigation = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'music', title: 'Music', icon: 'music' },
    { key: 'albums', title: 'Albums', icon: 'folder-open' },
    { key: 'recent', title: 'Recents', icon: 'history' }])


    const renderScene = BottomNavigation.SceneMap({
      music:MusicRoute,
      albums:AlbumRoute,
      recent:RecentRoute
    })

     
  return(
    <BottomNavigation 
     navigationState={{index,routes}}
     onIndexChange={setIndex}
     renderScene={renderScene}
     renderIcon={({route,focused, color})=>(
      <Icon name={route.icon} size={20} color={color}/>
     )}

    />

  )
  
  }


function App(): JSX.Element {
  return (
    <>
    <SafeAreaProvider>
      <BNavigation />
      </SafeAreaProvider>
      {/* <MyCard/> */}
      {/* <Icon name="rocket"  size={100} color="blue"/>
     <Icon.Button name='facebook' 
      backgroundColor="#3b5998"
      onPress={()=>alert("Login with Facebook")}
     >Login with Facebook</Icon.Button>
      */}
    </>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 20,
  },
  iconContainer: {
    marginTop: 16,
    marginBottom: 16,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  footerTitle: {
    fontSize: 18,
    textAlign: 'center',
    color: 'grey',
  },
  footerText: {
    fontSize: 16,
    textAlign: 'center',
    color: 'grey',
  },
});

export default App;
