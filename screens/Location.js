import React, { useRef, useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ImageBackground, TouchableOpacity, Dimensions} from 'react-native';
import MapView, { Marker } from 'react-native-maps';

// Location screen - created as a component

const Location = ({}) => {
  const [region, setRegion] = useState({
    latitude: 40.42874,
    longitude: -86.91198,
    latitudeDelta: 0.015,
    longitudeDelta: 0.010,
  });

  const getLocation = async () => {
    try {
      const res = await fetch(
        "https://api.thingspeak.com/channels/1920263/fields/2.json?api_key=0N5L6ZF3MI6DRJKB&results=1"
      );
      const data = await res.json();
      const pulledLatitude = data.feeds[0].field2;

      const res1 = await fetch(
        "https://api.thingspeak.com/channels/1920263/fields/3.json?api_key=0N5L6ZF3MI6DRJKB&results=1"
      );
      const data1 = await res1.json();
      const pulledLongitude = data1.feeds[0].field3;

      setRegion({
        latitude: pulledLatitude,
        longitude: pulledLongitude,
      });
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const intervalCall = setInterval(() => {
      getLocation();
    }, 10000);
    return () => {
      clearInterval(intervalCall);
    };
  }, []);

  // this.state = {
  //   mapRegion: {
  //     latitude: 40.42874,
  //     longitude: -86.91198,
  //     latitudeDelta: 0.015,
  //     longitudeDelta: 0.0121,
  //   },
  //   markerCoordinate: {
  //     latitude: 40.42874,
  //     longitude: -86.91198,
  //   }
  // }

  // const coordinate = new MapView.AnimatedRegion({
  //   latitude: newRegion.latitude,
  //   longitude: newRegion.longitude,
  //   latitudeDelta: 0,
  //   longitudeDelta: 0,
  // });

  return (
    <ImageBackground
      source={require('../assets/background.jpg')}
      style={styles.background}
    >

      <View style={styles.container}>
        <MapView 
          style={styles.map}
          mapType={'hybrid'}
          region={region}
          // onMapReady={this.onMapReady}
          // onRegionChangeComplete={this.onRegionChange}
        >
        <Marker
            coordinate={{
              latitude: region.latitude,
              longitude: region.longitude,
            }}
            title={"Current Location"}
            description={"Live location of your pet"}
            // draggable
        />
        </MapView>
      </View>

    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  background : {
    flex: 1,
    width: '100%',
    height: '100%',
  },

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default Location;