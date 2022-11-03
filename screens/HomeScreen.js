import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ImageBackground, TouchableOpacity} from 'react-native';

// Home screen - created as a component

const HomeScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={require('../assets/background.jpg')}
      style={styles.background}
    >
      <View>

        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Heart Rate')
          }
        >
          <Text style={styles.buttonHeart}>Heart Rate</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Temperature')
          }
        >
          <Text style={styles.buttonTemp}>Temperature</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Location')
          }
        >
          <Text style={styles.buttonLocation}>Location</Text>
        </TouchableOpacity>

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

  buttonHeart: {
    backgroundColor: 'white',
    color: '#3A59FF',
    width: "65%",
    borderRadius: 25,
    textAlign: 'center',
    fontWeight: 'bold',
    marginLeft: '18%',
    padding: "2%",
    fontSize:  33,
    marginTop: '110%'
  },

  buttonTemp: {
    backgroundColor: 'white',
    color: '#3A59FF',
    width: "65%",
    borderRadius: 25,
    textAlign: 'center',
    fontWeight: 'bold',
    marginLeft: '18%',
    padding: "2%",
    fontSize:  33,
    marginTop: '5%'
  },

  buttonLocation: {
    backgroundColor: 'white',
    color: '#3A59FF',
    width: "65%",
    borderRadius: 25,
    textAlign: 'center',
    fontWeight: 'bold',
    marginLeft: '18%',
    padding: "2%",
    fontSize:  33,
    marginTop: '5%'
  },

});

export default HomeScreen;