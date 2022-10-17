import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import HeartRate from './screens/HeartRate';
import Temperature from './screens/Temperature';

// Main app layout
// Contains navigation stack
// Allows for seamless navigation between screens

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name='Home'
          component={HomeScreen}
          options={{ title: 'Home' }}
          />

        <Stack.Screen
          name='Heart Rate'
          component={HeartRate}
          options={{ title: 'Heart Rate' }}
        />
        
        <Stack.Screen
          name='Temperature'
          component={Temperature}
          options={{ title: 'Temperature' }}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  buttons: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
});
