import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const App = () => {

  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Feed" component={ } />
      <Drawer.Screen name="Article" component={ } />
    </Drawer.Navigator>
  );
}
    















const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
