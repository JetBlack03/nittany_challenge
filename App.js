import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import StartScreen from './StartScreen';
import SettingsScreen from './SettingsScreen';
import HomeScreen from './HomeScreen';
import * as ScreenOrientation from 'expo-screen-orientation'; // Correct import statement

const Stack = createStackNavigator();

export default function App() {
    //useEffect(() => {
        // Set the initial screen orientation to landscape
        //ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
        
        // Optionally, you can unlock the orientation when the component unmounts
      //}, []);

    return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen name="Start" component={StartScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}