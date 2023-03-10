import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import store from './src/store/store';
import React from 'react';

AppRegistry.registerComponent(appName, () => {
  return () => {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <App />
        </NavigationContainer>
      </Provider>
    );
  };
});
