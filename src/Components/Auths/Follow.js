import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class Follow extends Component {
  render() {
    const { navigation } = this.props;
    return (
     <View style={styles.container}>
      	<Text>Follow</Text>
        <Button 
          title='Author'
          onPress={ () => {navigation.navigate('Author')} }
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


export default Follow;