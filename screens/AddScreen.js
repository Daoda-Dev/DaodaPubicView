import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AddScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Add Activity Placeholder – Drop your ideas here soon! 📝</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 18, color: '#FF0000' },
});