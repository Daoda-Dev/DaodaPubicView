import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function ProfileScreen() {
  // Fake user data – Hook up auth later for real deets
  const user = {
    name: 'Sonup Raj Chaudhary',
    handle: '@SonupChaudhary',
    location: 'Kathmandu, NP',
    bio: 'Building cool apps in React Native. Current time: Feb 07, 2026 Lets code',
    avatar: './assets/splash-icon.png', // Swap with real image URL
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: user.avatar }} style={styles.avatar} />
      <Text style={styles.name}>{user.name}</Text>
      <Text style={styles.handle}>{user.handle}</Text>
      <Text style={styles.location}>Location: {user.location}</Text>
      <Text style={styles.bio}>{user.bio}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', padding: 20 },
  avatar: { width: 100, height: 100, borderRadius: 50, marginBottom: 20 },
  name: { fontSize: 24, fontWeight: 'bold' },
  handle: { fontSize: 16, color: 'gray' },
  location: { fontSize: 16, marginTop: 10 },
  bio: { fontSize: 14, textAlign: 'center', marginTop: 10 },
});