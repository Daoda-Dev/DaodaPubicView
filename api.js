import AsyncStorage from '@react-native-async-storage/async-storage';

const API_URL = 'http://localhost:3005'; // Your backend port – swap to local IP (e.g., 192.168.x.x:3005) for phone testing

export async function signup(email, password) {
  try {
    const res = await fetch(`${API_URL}/signup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    if (data.error) throw new Error(data.error);
    return data; // Returns user ID or whatever
  } catch (err) {
    console.error('Signup fail:', err);
    return null;
  }
}

export async function login(email, password) {
  try {
    const res = await fetch(`${API_URL}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    if (data.token) {
      await AsyncStorage.setItem('token', data.token);
      return true;
    }
    throw new Error(data.error || 'Login glitch');
  } catch (err) {
    console.error('Login fail:', err);
    return false;
  }
}

export async function createActivity(title, desc, coords) {
  try {
    const token = await AsyncStorage.getItem('token');
    if (!token) throw new Error('No token – log in first');
    const res = await fetch(`${API_URL}/activities`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ title, desc, coords }),
    });
    const data = await res.json();
    if (data.error) throw new Error(data.error);
    return data;
  } catch (err) {
    console.error('Create activity fail:', err);
    return null;
  }
}

export async function getActivities() {
  try {
    const res = await fetch(`${API_URL}/activities`);
    const data = await res.json();
    if (data.error) throw new Error(data.error);
    return data;
  } catch (err) {
    console.error('Get activities fail:', err);
    return [];
  }
}

// Bonus: Logout function if you add it later
export async function logout() {
  await AsyncStorage.removeItem('token');
}