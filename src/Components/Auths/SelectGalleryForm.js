import React, { Component } from 'react';
import {
  View, Text, StyleSheet, TextInput, Button,
} from 'react-native';
import { Field, reduxForm } from 'redux-form';

const fieldImage = props => (
  <View style={{ alignItems: 'center' }}>
  <View>
  		{ props.meta.touched && props.meta.error && <Text style={styles.error}>{props.meta.error}</Text>}
		</View>
	</View>
);

const fieldName = props => (
  <View>
    <TextInput
      style={styles.textInput}
      placeholder={props.placeholder}
      onChangeText={props.input.onChange}
      value={props.input.value}
      keyboardType="default"
      autoCapitalize="none"
      multiline
      onBlur={props.input.onBlur}
    />
    { props.meta.touched && props.meta.error && <Text style={styles.error}>{props.meta.error}</Text>}
    <View style={styles.line} />
   </View>
);

const validate = (values, props) => {
  const errors = {};

  if (!props.image) {
    errors.image = 'required';
  }

  if (values.comments && values.comments.length > 140) {
    errors.comments = 'comments too long';
  }

  return errors;
};

const SelectGalleryForm = props => (
  <View style={styles.container}>
    <Field name="image" component={fieldImage} />
    <Field name="comments" component={fieldName} placeholder="Comments" />
    <Button
      title="Publish"
      onPress={props.handleSubmit(props.imagePublishHandler)}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 3,
    paddingHorizontal: 16,
  },
  textInput: {
    marginBottom: 4,
    height: 16,
    color: 'black',
  },
  line: {
    height: 1,
    backgroundColor: '#DCDCDC',
  },
  error: {
    color: '#EF2929FF',
    fontStyle: 'italic',
  },
});

export default reduxForm({ form: 'SelectGalleryForm', validate })(SelectGalleryForm);
