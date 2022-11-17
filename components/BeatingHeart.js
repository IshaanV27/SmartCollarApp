import React, { useRef, useEffect, useState } from 'react';
import { Text, View, StyleSheet, Animated } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Beating heart for the heart rate screen - created as a component

const BeatingHeart = ({}) => {
  const anim = useRef(new Animated.Value(1));
  const [heartRate, setheartRate] = useState({
    currheartRate: [],
  });

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

  const getheartRate = async () => {
    try {
      const res = await fetch(
        "https://api.thingspeak.com/channels/1920263/fields/1.json?api_key=0N5L6ZF3MI6DRJKB&results=1"
      );
      const data = await res.json();
      const pulledheartRate = Math.round(data.feeds[0].field1);

      setheartRate({
        currheartRate: pulledheartRate
      });
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const intervalCall = setInterval(() => {
      getheartRate();
    }, 10000);
    return () => {
      clearInterval(intervalCall);
    };
  }, []);

  return (
    <View style={styles.container}>
        
        <View style={styles.container1}>
          <Animated.View style={{ transform: [{ scale: anim.current }] }}>
          <Ionicons name="md-heart" size={250} color="red" />
          </Animated.View>
        </View>
        <View style={styles.container2}>
          {heartRate.currheartRate < 50 ? <Text style={styles.analyzeText}> Analyzing... </Text> : <Text style={styles.heartText}> {heartRate.currheartRate} </Text>}
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
    marginTop: '-200%'
  },

  container1: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '-100%',
    marginLeft: '15%'
  },

  container2: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    marginTop: '-100%',
    marginLeft: '-60%'
  },

  heartText: {
    color: '#00FF00',
    borderRadius: 25,
    textAlign: 'center',
    fontWeight: 'bold',
    marginLeft: '-40%',
    padding: "2%",
    fontSize:  50,
    marginTop: '-5%'
  },

  analyzeText: {
    color: '#00FF00',
    borderRadius: 25,
    textAlign: 'center',
    fontWeight: 'bold',
    marginLeft: '-40%',
    padding: "2%",
    fontSize:  30,
    marginTop: '-5%'
  },
});

export default BeatingHeart;