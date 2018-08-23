import React from 'react';
import { Provider } from 'react-redux';
import store from './src/Store/store';
import { StyleSheet, Text, View } from 'react-native';
import { NoAuthsRoutes } from './src/Components/NoAuths/NoAuthsRoutes';
import { AuthsRoutes } from './src/Components/Auths/AuthsRoutes';

console.disableYellowBox = ['Remote debugger'];

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Provider store={store}>
          <NoAuthsRoutes/>
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
