import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ImageBackground, TouchableOpacity} from 'react-native';
import Thermometer from '../components/Thermometer';
import styled from 'styled-components/native';

// Temperature screen - created as a component

const Temperature = ({}) => {
  return (
    <ImageBackground
      source={require('../assets/background.jpg')}
      style={styles.background}
    >  

      <View style={styles.background}>
        <BlackBox>
        </BlackBox>
        <TempDisplayContainer>
          <TempDisplay>
            <Thermometer></Thermometer>
          </TempDisplay>
        </TempDisplayContainer>
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

const TempDisplayContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  marginTop: -920px;
`;

const TempDisplay = styled.View`
  display: flex;
  border-radius: 50%;
  color: #ffffff;
  height: 200px;
  width: 220px;
  text-align: center;
  justify-content: center;
  align-items: center;
  font-size: 48px;
  border: 3px #ffffff solid;
  transition: background 0.5s;
`;

const styles = StyleSheet.create({

  background : {
    flex: 1,
    width: '100%',
    height: '100%',
  },

});

export default Temperature;