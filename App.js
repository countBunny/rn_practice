/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { createStackNavigator, createAppContainer,} from "react-navigation"
import { Platform, StyleSheet, Text, View, Image } from 'react-native';
import HomeScreen from './components/learn_nav/HomeScreen'
import ProfileScreen from './components/learn_nav/ProfileScreen'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Profile: ProfileScreen,
  },
  {
    initialRouteName: 'Home',
  });

export default createAppContainer(AppNavigator);
