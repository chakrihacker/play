import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './redux'
import thunk from 'redux-thunk';

import ComponentA from './src/ComponentA'
import ComponentB from './src/ComponentB'

const store = createStore(rootReducer, applyMiddleware(thunk))

export default class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <View style={styles.container}>
          <ComponentA />
          <ComponentB />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
});
