import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // For that modern icon touch

export default function CreateActivityScreen({ navigation }) {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  const handleCreate = () => {
    if (!title || !desc) return; // Quick check to avoid empty creates
    console.log('New Activity:', { title, desc });
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Create New Activity</Text>
      <TextInput
        style={styles.input}
        placeholder="Activity Title (e.g., Dinner Meetup in Thamel)"
        onChangeText={setTitle}
        value={title}
      />
      <TextInput
        style={[styles.input, styles.descInput]} // Taller for desc
        placeholder="Description (e.g., Chill vibes, bring your stories!)"
        onChangeText={setDesc}
        value={desc}
        multiline
      />
      <TouchableOpacity
        style={[styles.button, (!title || !desc) && styles.buttonDisabled]}
        onPress={handleCreate}
        disabled={!title || !desc}
      >
        <Icon name="add-circle" size={20} color="#fff" style={styles.buttonIcon} />
        <Text style={styles.buttonText}>Create Activity</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f9fa', // Light bg for modern feel
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10, // Rounded corners
    padding: 15,
    marginBottom: 15,
    backgroundColor: '#fff',
    fontSize: 16,
    ...Platform.select({ // Subtle shadows
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  descInput: {
    height: 100, // Taller for multiline
    textAlignVertical: 'top',
  },
  button: {
    backgroundColor: '#007bff', // Modern blue
    borderRadius: 10,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  buttonDisabled: {
    backgroundColor: '#ccc',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonIcon: {
    marginRight: 10,
  },
});