import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';
import Watch from './pages/Watch';
import Register from './pages/Register';
import Login from './pages/Login';
import CfgUsuario from './pages/CfgUsuario';

const Stack = createStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" headerMode={'none'}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Watch" component={Watch} />
        <Stack.Screen name="CfgUsuario" component={CfgUsuario} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;