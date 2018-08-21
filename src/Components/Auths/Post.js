import React, { Component } from 'react';

import { StyleSheet, View, Text, Button } from 'react-native';

class Post extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
      <Text>Post</Text>
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
    justifyContent: 'center',
    alignItems: 'center', 
  }
});


export default Post;