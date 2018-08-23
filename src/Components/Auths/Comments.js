import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  Button
} from 'react-native';

class Comments extends Component {
  static navigationOptions = { // para esconder la tabBar
    tabBarVisible: false,
  };
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
      <Text>Comments</Text>
      <Button 
      title='Author'
      onPress={ () => { navigation.navigate('Author')} }
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center', 
  }
});


export default Comments;