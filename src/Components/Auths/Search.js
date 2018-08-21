import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class Search extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
      	<Text>Search</Text>
        <Button 
          title='Publications'
          onPress={() => { navigation.navigate('Publication')}}
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


export default Search;