import React from 'react';
import {NavigationContainer} from '@react-navigation/native'

import {createDrawerNavigator} from '@react-navigation/drawer';
import IndexScreen from './src/screens/IndexScreen';
import {DrawerContentScreen} from './src/screens/DrawerContentScreen'
const Drawer = createDrawerNavigator();

const App = () => {
  return (
  <NavigationContainer>
    <Drawer.Navigator drawerContent={props => <DrawerContentScreen {...props}/>}>
      <Drawer.Screen name = 'Index' component={IndexScreen} />
      {/* <Drawer.Screen name = 'Drawer' component={DrawerContent} /> */}
    </Drawer.Navigator>
  </NavigationContainer>
  );
}

export default App;