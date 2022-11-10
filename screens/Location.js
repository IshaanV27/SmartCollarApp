import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ImageBackground, TouchableOpacity, Dimensions} from 'react-native';
import MapView, { Marker } from 'react-native-maps';

// Location screen - created as a component

const Location = ({}) => {
  return (
    <ImageBackground
      source={require('../assets/background.jpg')}
      style={styles.background}
    >
      <View style={styles.container}>
        <MapView 
          style={styles.map}
          mapType={'hybrid'}
          region={{
            latitude: 40.42874,
            longitude: -86.91198,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        >
        <Marker
            coordinate={{latitude: 40.42874,
            longitude: -86.91198}}
            title={"Current Location"}
            description={"Live location of your pet"}
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