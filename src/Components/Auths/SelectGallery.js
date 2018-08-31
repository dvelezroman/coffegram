import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  Button,
  Text,
  StyleSheet, 
} from 'react-native';
import { blur } from 'redux-form';
import { loadImageFromGallery, unloadImageFromGallery, publishImage } from '../../ActionCreators/index';
import SelectImage from '../SelectImage';
import SelectGalleryForm from './SelectGalleryForm';

// import Dimensions from 'Dimensions';
// const { width, height } = Dimensions.get('window');

class SelectGallery extends Component {
  static navigationOption: {
    tabBarVisible: false,
  }

  imagePublishHandler = values => {
    this.props.publishImage(Object.assign({}, values, {createdAt: Date().split('(')[0]}));
  }

  componentWillUnmount() {
    this.props.unloadImageFromGallery();
  }

  render() {
    //console.log('Resolucion: ', width,' X ', height)
    const { imageToUpload, comments, createdAt, loadImageFromGallery } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.blank}/>
        <View style={styles.image}>
          <SelectImage 
            gallery={true} 
            image={imageToUpload} 
            loadImageFromGallery={loadImageFromGallery} 
          />
        </View>
        <View style={styles.text}>
          <SelectGalleryForm 
            image={imageToUpload} 
            imagePublishHandler={this.imagePublishHandler}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  blank: {
    flex: 1,
  },
  image: {
    flex: 5,
  },
  text: {
    flex: 2,
  },
});

const mapStateToProps = state => ({
    imageToUpload: state.imageGalleryReducer.image,
});

const mapDispatchToProps = dispatch => ({
    loadImageFromGallery: values => {
      dispatch(loadImageFromGallery(values));
      dispatch(blur('SelectGalleryForm', 'image', Date.now()));
    },
    unloadImageFromGallery: () => dispatch(unloadImageFromGallery()),
    publishImage: values => dispatch(publishImage(values)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectGallery);
