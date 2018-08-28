import React, { Component } from 'react';
import { Button, Image, View, TouchableOpacity, StyleSheet } from 'react-native';
import { ImagePicker } from 'expo';

class SelectImage extends Component {
  state = {
    image: null,
  };

  pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });

    console.log(result);

    if (!result.cancelled) {
      this.setState({ image: result.uri });
    }
  };

  render() {
    let { image } = this.state;

    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.pickImage}>
          <Image source={this.state.image ? { uri: this.state.image } : require('../../assets/coffee-2698122_640.jpg')} 
            style={styles.image} 
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create ({
  container: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 160,
    height: 160,
    borderRadius: 80,
  }
})

export default SelectImage;