import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ImageBackground, TouchableOpacity} from 'react-native';
import BeatingHeart from '../components/BeatingHeart';

// Heart rate screen!

const HeartRate = ({}) => {
  return (
    <ImageBackground
      source={require('../assets/background.jpg')}
      style={styles.background}
    >
      <View style={styles.background}>

        <BeatingHeart></BeatingHeart>
        
        {/* <TouchableOpacity>
          <Text style={styles.buttonHeart}>Heart Rate</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.buttonTemp}>Temperature</Text>
        </TouchableOpacity> */}

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

export default HeartRate;