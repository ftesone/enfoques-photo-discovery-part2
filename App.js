import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Discover } from './screens/Discover';
import { Favs } from './screens/Favs';

const Stack = createNativeStackNavigator();

export function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Discover">
        <Stack.Screen name="Discover" component={Discover} options={{ headerShown: false }} />
        <Stack.Screen name="Favs" component={Favs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
