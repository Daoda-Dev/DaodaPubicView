import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Login'); // Ditch the back button, straight to login
    }, 2000); // 2-sec chill time

    return () => clearTimeout(timer); // Clean up
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/splash-icon.png')} // Adjust path if needed
        style={styles.logo}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff', // Match your app.json splash bg
  },
  logo: {
    width: '60%', // Scale it cool
    height: '60%',
  },
});