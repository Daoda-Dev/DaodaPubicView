import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Button, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

export default function HomeScreen({ navigation }) {
  const [location, setLocation] = useState(null);
  const [activities, setActivities] = useState([
    { id: '1', title: 'Coffee Hang', coords: { latitude: 27.7172, longitude: 85.3240 }, desc: 'Chill in Kathmandu' }, // Sample
  ]);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') return;

      let loc = await Location.getCurrentPositionAsync({ accuracy: Location.Accuracy.High });
      setLocation(loc.coords);
    })();
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        provider="google" // Google Maps vibe
        initialRegion={{
          latitude: location?.latitude || 27.7172, // Default to Kathmandu
          longitude: location?.longitude || 85.3240,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        showsUserLocation={true}
      >
        {activities.map((act) => (
          <Marker key={act.id} coordinate={act.coords} title={act.title} description={act.desc} />
        ))}
      </MapView>
      <View style={styles.listContainer}>
        <Text style={styles.header}>Nearby Activities</Text>
        <FlatList
          data={activities}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text>{item.title} - {item.desc}</Text>
            </View>
          )}
        />
        <Button title="Create Activity" onPress={() => navigation.navigate('Create')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  map: { width: Dimensions.get('window').width, height: '60%' },
  listContainer: { flex: 1, padding: 10 },
  header: { fontSize: 20, fontWeight: 'bold' },
  item: { padding: 10, borderBottomWidth: 1, borderColor: '#ccc' },
});