import React from 'react';
import { Provider } from 'react-redux';
import store from './src/Store/store';
import { StyleSheet, Text, View } from 'react-native';
import VerifyIfSession from './src/Components/VerifyIfSession';

console.disableYellowBox = ['Remote debugger'];

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Provider store={store}>
          <VerifyIfSession />
        </Provider>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
