import React from 'react';
//import {  View, Text, StyleSheet } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Activity from './screens/Activity'
import Home from './screens/Home'
import List from './screens/List'
import Settings from './screens/Settings'

export default class App extends React.Component {
  render() {
    return (
      <AppContainer />
    );
  }
}

const AppNavigator = createStackNavigator({
  Home: Home,
  Activity: Activity,
  List: List,
  Settings: Settings
}, {
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  },
})
const AppContainer = createAppContainer(AppNavigator)

