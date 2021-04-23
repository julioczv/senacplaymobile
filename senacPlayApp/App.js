import React from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import Home from './pages/Home'

const Stack = createStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home" headerMode={'none'}>
      <Stack.Screen  name="Home" component={Home} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}




export default App;
