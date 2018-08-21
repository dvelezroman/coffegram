import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NoAuthsRoutes } from './src/Components/NoAuths/NoAuthsRoutes';
import { AuthsRoutes } from './src/Components/Auths/AuthsRoutes';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <AuthsRoutes/>
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
