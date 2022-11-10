import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ImageBackground, TouchableOpacity} from 'react-native';
import BeatingHeart from '../components/BeatingHeart';
import styled from 'styled-components/native';

// Heart rate screen - created as a component

const HeartRate = ({}) => {
  return (
    <ImageBackground
      source={require('../assets/background.jpg')}
      style={styles.background}
    >
      <View style={styles.background}>
        <BlackBox></BlackBox>
        <BeatingHeart></BeatingHeart>
      </View>

    </ImageBackground>
  )
}

const BlackBox = styled.View`
  height: 100%;
  width: 100%;
  background: #000000;
  // border-radius: 20px;
  // marginLeft: 0px;
  // marginTop: 20px;
  opacity: 0.5;
`;

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