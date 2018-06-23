import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './src/store/configureStore'
import AppNavigator from './src/config/routes';

const store = configureStore();

/**
 * @name App.js
 * @type { Stateful Component }
 * @author KARAN PRATAP SINGH
 * @requires Expo,Redux,React-Navigation
 * @description This is a app which provides crypto currency exchange rates.
 */

export default class App extends React.Component {

  render() {

    return (

      <Provider store={store}>
          <AppNavigator />
      </Provider>
    
    );
  }
}
