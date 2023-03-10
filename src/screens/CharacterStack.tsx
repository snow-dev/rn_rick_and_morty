import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import App from '../App';
import Details from './Details';
import {NavigationContainer} from '@react-navigation/native';
import {RootStackParamList} from '../services/types';
import EpisodesGrid from './EpisodesGrid';

const Stack = createNativeStackNavigator<RootStackParamList>();

const CharacterStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="App">
        <Stack.Screen
          name="App"
          component={App}
          options={{title: "Character's"}}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          initialParams={{id: 1}}
        />

        <Stack.Screen
          name="Episodes"
          component={EpisodesGrid}
          options={{title: 'Episodes'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default CharacterStack;
