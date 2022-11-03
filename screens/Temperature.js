import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ImageBackground, TouchableOpacity} from 'react-native';
import Thermometer from '../components/Thermometer';
import css from './index.css';
// Temperature screen - created as a component

const Temperature = ({}) => {
  return (
    <ImageBackground
      source={require('../assets/background.jpg')}
      style={styles.background}
    >
      <View style={styles.background}>

        <Thermometer></Thermometer>

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

export default Temperature;