import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';

const SettingsScreen = ({ navigation }) => {
  const handleBackPress = () => {
    // Navigate back to the StartScreen
    navigation.goBack();
  };

  return (
    <LinearGradient
      colors={['#00152A', '#00001A']} // Darker blue gradient background (night sky)
      style={styles.container}
    >
      <View style={styles.centerContainer}>
        <Text style={styles.title}>Settings Screen</Text>

        {/* Back button */}
        <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
          <Text style={styles.backButtonText}>Back to Start</Text>
        </TouchableOpacity>
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
  backButton: {
    backgroundColor: '#00FF00', // Lime Green button color
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  backButtonText: {
    fontSize: 18,
    color: '#fff',
  },
});

export default SettingsScreen;
