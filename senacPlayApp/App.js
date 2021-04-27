import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import Home from './pages/Home'
import Watch from './pages/Watch'

const Stack = createStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home" headerMode={'none'}>
      <Stack.Screen  name="Home" component={Home} />
      <Stack.Screen name="Watch" component={Watch} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}




export default App;
