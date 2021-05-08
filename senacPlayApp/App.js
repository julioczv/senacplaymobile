import React from 'react';
import FlashMessage from 'react-native-flash-message';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';
import Watch from './pages/Watch';
import Register from './pages/Register';
import Login from './pages/Login';
import ConfigUser from './pages/ConfigUser';

const Stack = createStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Register" headerMode={'none'}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Watch" component={Watch} />
        <Stack.Screen name="ConfigUser" component={ConfigUser} />

      </Stack.Navigator>
      <FlashMessage
        position="top"
        animated
        hideStatusBar
        duration={3000}
        floating
      />
    </NavigationContainer>
  );
};

export default App;