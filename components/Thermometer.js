import React, { useRef, useEffect } from 'react';
import { Text, View, StyleSheet, Animated } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Pulsing thermometer for the thermometer screen - created as a component

const Thermometer = ({}) => {
  const anim = useRef(new Animated.Value(1));

  useEffect(() => {
    // makes the sequence loop
    Animated.loop(
      // runs given animations in a sequence
      Animated.sequence([
        // increase size
        Animated.timing(anim.current, {
          toValue: 1.2, 
          duration: 200,
          useNativeDriver: true,
        }),
        // decrease size
        Animated.timing(anim.current, {
          toValue: 1, 
          duration: 200,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  return (
    <View style={styles.container}>

        <View style={styles.container1}>
            <Text style={styles.heartText}> 72 </Text>
        </View>
        
        <View style={styles.container2}>
            <Animated.View style={{ transform: [{ scale: anim.current }] }}>
            <Ionicons name="thermometer-outline" size={32} color="blue" />
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
    marginTop: '-38%'
  },

  container2: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    marginTop: '-120%',
    marginLeft: '-68%'
  },

  heartText: {
    color: '#FFFFFF',
    borderRadius: 25,
    textAlign: 'center',
    fontWeight: 'bold',
    marginLeft: '10%',
    padding: "2%",
    fontSize:  33,
    marginTop: '-100%'
  },
});

export default Thermometer;