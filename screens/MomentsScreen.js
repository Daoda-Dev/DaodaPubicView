import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function MomentsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Moments Feed Coming Soon – Stay Tuned! 🚀</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 18, color: '#FF0000' },
});