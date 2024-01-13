import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';

const HomeScreen = () => {
  return (
    <LinearGradient
      colors={['#00152A', '#00001A']} // Darker blue gradient background (night sky)
      style={styles.container}
    >
      <View style={styles.centerContainer}>
        <Text style={styles.title}>Home Screen</Text>
        <Text style={styles.text}>New</Text>
      </View>

      <StatusBar style="auto" />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerContainer: {
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    color: '#fff',
  },
});

export default HomeScreen;