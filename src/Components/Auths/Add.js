import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class Add extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Button 
          title='Gallery'
          onPress={() => { navigation.navigate('SelectImage') }}
        />
        <Button
          title='Take a Picture'
          onPress={() => { navigation.navigate('SelectImage') }}
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


export default Add;