import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class Home extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
      	<Text>Home</Text>
        <Button 
        title="Author"
        onPress={() => { navigation.navigate('Author'); }}
        />
        <Button 
        title="Comments"
        onPress={() => { navigation.navigate('Comments')}}
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


export default Home;