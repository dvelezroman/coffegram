import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class Profile extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
      	<Text>Profile</Text>
        <Button 
        title='Post'
        onPress={() => { navigation.navigate('Post'); }}
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


export default Profile;