import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Button,
  Text
} from 'react-native';

class Publication extends Component {
  render() {
  	const { navigation } = this.props;
    return (
      <View style={styles.container}>
      	<Text>Publication</Text>
      	<Button 
      		title='Author'
      		onPress={() => { navigation.navigate('Author') }}
      	/>
      	<Button
      		title='Comments'
      		onPress={() => { navigation.navigate('Comments') }}
      	/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',  
	}
});


export default Publication;