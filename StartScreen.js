import React, { useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';

const StartScreen = ({ navigation }) => {
  const titleRef = useRef(null);

  const handleTitlePress = () => {
    // Start the expand and return animation when the title is pressed
    titleRef.current.animate([{ scale: 1.2 }, { scale: 1 }], 300);
  };

  const handleEnterPress = () => {
    // Navigate to the HomeScreen
    navigation.navigate('Home');
  };

  const handleSettingsPress = () => {
    // Navigate to the SettingsScreen
    navigation.navigate('Settings');
  };

  return (
    <LinearGradient
      colors={['#00152A', '#00001A']} // Darker blue gradient background (night sky)
      style={styles.container}
    >
      <View style={styles.leftContainer}>
        <TouchableOpacity onPress={handleTitlePress}>
          <Animatable.Text
            ref={titleRef}
            style={[styles.title, { opacity: 0 }]}
            animation="fadeIn"
            duration={1500}
          >
            KinderVERSE
          </Animatable.Text>
        </TouchableOpacity>
        <Text style={styles.enterNameText}>Enter name here</Text>
        <TouchableOpacity style={styles.button} onPress={handleEnterPress}>
          <Text style={styles.buttonText}>Enter!</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.rightContainer}>
        {/* Animated sheep image goes here */}
        {/* Replace with your sheep image */}
      </View>

      {/* Settings button in the top right corner */}
      <TouchableOpacity style={styles.settingsButton} onPress={handleSettingsPress}>
        <Text style={styles.settingsButtonText}>Settings</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  leftContainer: {
    alignItems: 'flex-start',
  },
  rightContainer: {
    alignItems: 'flex-end',
  },
  title: {
    fontSize: 60,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    // Use a more noticeable gradient for the title
    backgroundClip: 'text',
    color: 'transparent',
    backgroundImage: 'linear-gradient(90deg, #FFD700, #FFA500)',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  enterNameText: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#00FF00', // Lime Green button color
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff', // White button text color
  },
  settingsButton: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  settingsButtonText: {
    fontSize: 16,
    color: '#fff',
  },
});

export default StartScreen;