import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ResepList from './components/ResepList';
import ResepDetail from './components/ResepDetail';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Resep List" component={ResepList} />
        <Stack.Screen name="Detail" component={ResepDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
