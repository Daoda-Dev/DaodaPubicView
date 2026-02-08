import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Reuse your icons for that pro touch

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

const handleLogin = async () => {
  const res = await fetch('http://localhost:3005/login', { // Or your PC's local IP (e.g., 192.168.x.x:3000) for phone testing
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: username, password }),
  });
  const data = await res.json();
  if (data.token) {
    // Store token (use AsyncStorage)
    navigation.replace('Home');
  } else alert('Login fail');
};

  return (
    <View style={styles.container}>
      <Text style={styles.header}>DaoDa welcomes you</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={setUsername}
        value={username}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />
      <TouchableOpacity
        style={[styles.button, (!username || !password) && styles.buttonDisabled]}
        onPress={handleLogin}
        disabled={!username || !password}
      >
        <Icon name="login" size={20} color="#fff" style={styles.buttonIcon} />
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#f8f9fa', // Light and modern, like your Create screen
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 40,
    color: '#333',
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    backgroundColor: '#fff',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#007bff', // Blue pop
    borderRadius: 10,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
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