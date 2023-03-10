import {AppRegistry} from 'react-native';

import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import store from './src/store/store';
import React from 'react';
import CharacterStack from './src/screens/CharacterStack';

AppRegistry.registerComponent(appName, () => {
  return () => {
    return (
      <Provider store={store}>
        <CharacterStack />
      </Provider>
    );
  };
});
