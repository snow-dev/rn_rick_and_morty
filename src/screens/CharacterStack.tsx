import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import App from '../App';
import Details from './Details';
import {NavigationContainer} from '@react-navigation/native';
import {RootStackParamList} from '../services/types';
import EpisodesGrid from './EpisodesGrid';
import tw from '../../lib/tailwind';

const Stack = createNativeStackNavigator<RootStackParamList>();

const CharacterStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="App">
        <Stack.Screen
          name="App"
          component={App}
          options={{title: "Character's", headerShown: false}}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          initialParams={{id: 1}}
          options={{
            title: 'Details',
            headerStyle: styles.container,
            headerTitleStyle: styles.title,
            headerTintColor: styles.tintColor,
            headerBackTitle: 'Home',
          }}
        />

        <Stack.Screen
          name="Episodes"
          component={EpisodesGrid}
          options={{
            title: 'Episodes',
            headerStyle: styles.container,
            headerTitleStyle: styles.title,
            headerTintColor: styles.tintColor,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default CharacterStack;

const styles = {
  container: tw`bg-rickGreen-300`,
  title: tw`text-xl font-bold text-rickPink-400`,
  tintColor: tw.color('text-rickPink-400'),
};
