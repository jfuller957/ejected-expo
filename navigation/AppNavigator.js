import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'

import MainTabNavigator from './MainTabNavigator';

import * as firebase from 'firebase';
import LoginScreen from '../screens/LoginScreen';
import AuthLoadingScreen from '../screens/AuthLoadingScreen';
import RegisterScreen from '../screens/RegisterScreen';

//put in the config stuff here
const firebaseConfig = {
  apiKey: "AIzaSyBDgO4-__VMSSLUM_61o-f1evii7u-df9s",
  authDomain: "spark-charlie.firebaseapp.com",
  databaseURL: "https://spark-charlie.firebaseio.com",
  projectId: "spark-charlie",
  storageBucket: "spark-charlie.appspot.com",
  messagingSenderId: "293828812888",
  appId: "1:293828812888:web:03565edf697b4695496a2d",
  measurementId: "G-ETD6MYYBKW"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const AuthStacK = createStackNavigator({
  Login: LoginScreen,
  Register: RegisterScreen
})

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      Main: MainTabNavigator,
      Auth: AuthStacK,
    },
    {
      initialRouteName: 'AuthLoading'
    }
  )
);

// export default createAppContainer(
//   createSwitchNavigator({
//     // You could add another route here for authentication.
//     // Read more at https://reactnavigation.org/docs/en/auth-flow.html
//     Main: MainTabNavigator,
//   })
// );
