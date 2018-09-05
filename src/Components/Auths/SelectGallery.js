import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Button, Text, StyleSheet, Alert } from 'react-native';
import { blur } from 'redux-form';
import { loadImageFromGallery, unloadImageFromGallery, publishImage, getPublications, resetPublishState } from '../../ActionCreators/index';
import SelectImage from '../SelectImage';
import SelectGalleryForm from './SelectGalleryForm';

// import Dimensions from 'Dimensions';
// const { width, height } = Dimensions.get('window');

class SelectGallery extends Component {
  imagePublishHandler = values => {
    this.props.publishImage(Object.assign({}, values, {createdAt: Date().split('(')[0]}));
  }

  componentWillUnmount() {
    this.props.unloadImageFromGallery();
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps.publishState);
    if (this.props.publishState !== nextProps.publishState) {
      if (nextProps.publishState === 'SUCCESS') {
        Alert.alert(
          'Success',
          'The publication was published...',
          [{ text: 'OK', onPress: () => {
            this.props.resetPublishState();
            this.props.getPublications();
            this.props.navigation.goBack();
          }}]
        );
      };
      if (nextProps.publishState === 'ERROR') {
        Alert.alert(
          'Error',
          'The publication was not published...',
          [{ text: 'OK', onPress: () => {
            this.props.resetPublishState();
          }}]
        );
      }
    }
  }

  render() {
    //console.log('Resolucion: ', width,' X ', height)
    const { camera } = this.props.navigation.state.params;
    const { imageToUpload, comments, createdAt, loadImageFromGallery } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.blank}/>
        <View style={styles.image}>
          <SelectImage 
            camera={camera} 
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
  publishState: state.publishStateReducer.info,
});

const mapDispatchToProps = dispatch => ({
  loadImageFromGallery: values => {
    dispatch(loadImageFromGallery(values));
    dispatch(blur('SelectGalleryForm', 'image', Date.now()));
  },
  unloadImageFromGallery: () => dispatch(unloadImageFromGallery()),
  publishImage: values => dispatch(publishImage(values)),
  getPublications: () => dispatch(getPublications()),
  resetPublishState: () => dispatch(resetPublishState()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectGallery);
