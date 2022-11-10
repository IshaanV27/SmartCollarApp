import React, { useRef, useEffect, useState } from 'react';
import { Text, View, StyleSheet, Animated } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Pulsing thermometer for the thermometer screen - created as a component

const Thermometer = ({}) => {
  const anim = useRef(new Animated.Value(1));
  const [temp, setTemp] = useState(0);
  
  useEffect(() => {
    // makes the sequence loop
    Animated.loop(
      // runs given animations in a sequence
      Animated.sequence([
        // increase size
        Animated.timing(anim.current, {
          toValue: 1.2, 
          duration: 750,
          useNativeDriver: true,
        }),
        // decrease size
        Animated.timing(anim.current, {
          toValue: 1, 
          duration: 750,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  // useEffect(() => {
  //   const interval = setInterval(fetchTemp, 5000);

  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, []);

  // const fetchTemp =  async () => {
  //   const response = await fetch(
  //     'https://api.thingspeak.com/channels/1920263/fields/3.json?api_key=0N5L6ZF3MI6DRJKB&results=2'
  //   )
  //   const data = response.json();
  //   const dataTemp = data.field3;

  //   setTemp({field3: dataTemp})


  //   })
  //   temp = jsonTemp.    // currently working on this shit
  // }

  return (
    <View style={styles.container}>

        <View style={styles.container1}>
            <Text style={styles.heartText}> 72 </Text>
        </View>
        
        <View style={styles.container2}>
            <Animated.View style={{ transform: [{ scale: anim.current }] }}>
            <Ionicons name="thermometer-outline" size={40} color="blue" />
            </Animated.View>
        </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
  },

  container1: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '65%'
  },

  container2: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    marginTop: '0%',
    marginLeft: '-40%'
  },

  heartText: {
    color: '#FFFFFF',
    borderRadius: 25,
    textAlign: 'center',
    fontWeight: 'bold',
    marginLeft: '20%',
    padding: "2%",
    fontSize:  50,
    marginTop: '-100%'
  },
});

export default Thermometer;