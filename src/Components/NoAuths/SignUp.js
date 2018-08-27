import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, Button, StyleSheet } from 'react-native';
import { incrementaUser } from '../../ActionCreators/index';
import SignUpForm from './Forms/SignUpForm';
import { newUserRegister } from '../../ActionCreators/index';

const mapStateToProps = state => ({
	numero: state.userReducer,
});

const mapDispatchToProps = dispatch => ({
	userRegister: values => dispatch(newUserRegister(values)),
});

class SignUp extends Component {
	userRegisterHandler = (values) => {
		this.props.userRegister(values);
	}

	render() {
		const { navigation } = this.props;
		return (
			<View style={styles.container}>
				<Text style={{ color: '#EEEEECFF'}}>Sign Up</Text>
				<SignUpForm userRegisterHandler={this.userRegisterHandler} />
				<Button
					title="Sign In" 
					onPress={() => {navigation.goBack()}}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#2E3436FF',
		justifyContent: 'center',
		paddingHorizontal: 16,  
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);