import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; // Keep if needed later
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialIcons';

import MomentsScreen from './screens/MomentsScreen'; // New: Home/Moments
import NearbyScreen from './screens/NearbyScreen'; // New: Map
import AddScreen from './screens/AddScreen'; // New: Placeholder (or link to CreateActivity)
import MessagesScreen from './screens/MessagesScreen'; // New: Placeholder
import ProfileScreen from './screens/ProfileScreen'; // New: User details
import FreelancingScreen from './screens/FreelancingScreen'; // New: Placeholder

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator(); // If you wanna nest stacks later

// Bottom Tab Navigator (this is the "Home" interface)
function HomeTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Moments"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Moments') iconName = 'home';
          else if (route.name === 'Nearby') iconName = 'location-on';
          else if (route.name === 'Add') iconName = 'add-circle';
          else if (route.name === 'Messages') iconName = 'message';
          else if (route.name === 'Profile') iconName = 'person';
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#FF0000', // Red vibe for that "red note" feel
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Moments" component={MomentsScreen} options={{ title: 'Moments' }} />
      <Tab.Screen name="Nearby" component={NearbyScreen} options={{ title: 'Nearby' }} />
      <Tab.Screen name="Add" component={AddScreen} options={{ title: 'Add' }} />
      <Tab.Screen name="Messages" component={MessagesScreen} options={{ title: 'Messages' }} />
      <Tab.Screen name="Profile" component={ProfileScreen} options={{ title: 'Profile' }} />
    </Tab.Navigator>
  );
}

// Main Drawer Navigator
function MainDrawer() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: true,
        headerLeft: () => null, // Customize if you want a burger icon, but drawer swipes open
        drawerPosition: 'left', // Top nav feel, but it's side drawer
      }}
    >
      <Drawer.Screen 
        name="Home" 
        component={HomeTabs} 
        options={{ 
          title: 'Home', 
          headerTitle: 'Dao Da', // Top title
          headerRight: () => <Icon name="menu" size={24} onPress={() => { /* Open drawer if needed */ }} style={{ marginRight: 15 }} />
        }} 
      />
      <Drawer.Screen name="Freelancing" component={FreelancingScreen} options={{ title: 'Freelancing' }} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MainDrawer />
    </NavigationContainer>
  );
}