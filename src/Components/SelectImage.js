import React, { Component } from 'react';
import { Image, View, TouchableOpacity, StyleSheet } from 'react-native';
import { ImagePicker } from 'expo';

class SelectImage extends Component {
  pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });
    //console.log(result);
    if (!result.cancelled) {
      this.props.loadSignUpImage(result);
      //this.setState({ image: result.uri });
    }
  };

  render() {
    let { image } = this.props;
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.pickImage}>
          <Image source={ image ? { uri: image.uri } : require('../../assets/blank-profile-picture.png') } 
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