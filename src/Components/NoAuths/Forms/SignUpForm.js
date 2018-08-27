import React, { Component } from 'react';
import {
  View, Text, StyleSheet, TextInput, Button,
} from 'react-native';
import { Field, reduxForm } from 'redux-form';

const fieldName = (props) => {
  return (
    <View>
      <TextInput
				style={styles.textInput}
				placeholder={props.placeholder}
				onChangeText={props.input.onChange}
				value={props.input.value}
				keyboardType={props.input.name === 'email' ? 'email-address' : 'default'}
				autoCapitalize="none"
				onBlur={props.input.onBlur}
				secureTextEntry={props.input.name === 'password' || props.input.name === 'conf_password'}
  		/>
      { props.meta.touched && props.meta.error && <Text style={styles.error}>{props.meta.error}</Text>}
      <View style={styles.line} />
    </View>
  );
};

const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = 'required';
  } else if (values.name.length < 5) {
    errors.name = 'name is too short';
  } else if (values.name.length > 10) {
    errors.name = 'name too long';
  }

  if (!values.email) {
    errors.email = 'required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'invalid email address';
  }

  if (!values.password) {
    errors.password = 'required';
  } else if (values.password.length < 5) {
    errors.password = 'password is too short';
  } else if (values.password.length > 15) {
    errors.password = 'password is too long';
  }

  if (!values.conf_password) {
    errors.conf_password = 'required';
  } else if (values.conf_password !== values.password) {
    errors.conf_password = 'password does not match with confirmation';
  }

  return errors;
};

const SignUpForm = (props) => {
  return (
    <View>
      <Field name="name" component={fieldName} placeholder="nombre" />
      <Field name="email" component={fieldName} placeholder="e-mail" />
      <Field name="password" component={fieldName} placeholder="password" />
      <Field name="conf_password" component={fieldName} placeholder="confirm password" />
      <Button
        title="Registrar"
        onPress={props.handleSubmit(props.userRegisterHandler
      )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    marginBottom: 5,
    height: 16,
    color: '#fff'
  },
  line: {
    height: 2,
    backgroundColor: '#DCDCDC',
  },
  error: {
    color: '#EF2929FF',
    fontStyle: 'italic',
  },
});

export default reduxForm({ form: 'SignUpForm', validate })(SignUpForm);
