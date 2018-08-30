import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, Button, StyleSheet } from 'react-native';
import { blur, change } from 'redux-form';
import SignUpForm from './Forms/SignUpForm';
import SelectImage from '../SelectImage';
import { newUserRegister, loadSignUpImage, clearSignUpImage } from '../../ActionCreators/index';

const mapStateToProps = state => ({
	numero: state.userReducer,
  image: state.imageSignUpReducer.image,
});

const mapDispatchToProps = dispatch => ({
	userRegister: values => dispatch(newUserRegister(values)),
	loadSignUpImage: (values) => {
		dispatch(loadSignUpImage(values));
		dispatch(blur('SignUpForm', 'image', Date.now()));
	},
  clearSignUpImage: () => dispatch(clearSignUpImage()),
});

class SignUp extends Component {
	userRegisterHandler = (values) => {
		this.props.userRegister(values);
	}

	componentWillUnmount() {
    this.props.clearSignUpImage();
  }

	render() {
		const { navigation } = this.props;
		return (
			<View style={styles.container}>
				<SelectImage image={this.props.image} loadSignUpImage={this.props.loadSignUpImage} />
				<SignUpForm userRegisterHandler={this.userRegisterHandler} image={this.props.image} />
				<View style={{flex: 2, paddingHorizontal: 16}}>
					<Button
						title="Sign In" 
						onPress={() => {navigation.goBack()}}
					/>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#2E3436FF',
	},
})

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);