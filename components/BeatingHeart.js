import React, { useRef, useEffect } from 'react';
import { Text, View, StyleSheet, Animated } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Beating heart for the heart rate screen - created as a component

const BeatingHeart = ({}) => {
  const anim = useRef(new Animated.Value(1));

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

  return (
    <View style={styles.container}>
        
        <View style={styles.container2}>
            <Animated.View style={{ transform: [{ scale: anim.current }] }}>
            <Ionicons name="md-heart" size={250} color="red" />
            </Animated.View>
            <Text style={styles.heartText}> 90 </Text>
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
    marginTop: '-38%'
  },

  container2: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    marginTop: '-100%',
    marginLeft: '-20%'
  },

  heartText: {
    color: '#00FF00',
    borderRadius: 25,
    textAlign: 'center',
    fontWeight: 'bold',
    marginLeft: '-42%',
    padding: "2%",
    fontSize:  50,
    marginTop: '-5%'
  },
});

export default BeatingHeart;