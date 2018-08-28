import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Image, View, TouchableOpacity, StyleSheet } from 'react-native';
import { ImagePicker } from 'expo';
import { loadSignUpImage, clearSignUpImage } from '../ActionCreators/index';

const mapStateToProps = state => ({
  image: state.imageSignUpReducer.image,
});

const mapDispatchToProps = dispatch => ({
  loadSignUpImage: values => dispatch(loadSignUpImage(values)),
  clearSignUpImage: () => dispatch(clearSignUpImage()),
})

class SelectImage extends Component {
  pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });
    console.log(result);
    if (!result.cancelled) {
      this.props.loadSignUpImage(result)
      //this.setState({ image: result.uri });
    }
  };

  componentWillUnmount() {
    this.props.clearSignUpImage();
  }

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

export default connect(mapStateToProps, mapDispatchToProps)(SelectImage);