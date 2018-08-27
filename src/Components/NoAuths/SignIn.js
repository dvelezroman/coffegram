import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, Button, StyleSheet } from 'react-native';
import SignInForm from './Forms/SignInForm';
import { userSignIn } from '../../ActionCreators/index';

const mapStateToProps = state => ({
	
});

const mapDispatchToProps = dispatch => ({
	userSignIn: values => dispatch(userSignIn(values)),
})

class SignIn extends Component {
	userSignInHandler = (values) => {
		this.props.userSignIn(values);
	}

	render = () => {
		const { navigation } = this.props;
		return (
			<View style={styles.container}>
				<Text style={{ color: '#EEEEECFF'}}>SignIn</Text>
				<SignInForm userSignInHandler={this.userSignInHandler} />
				<Button
					title="Sign Up" 
					onPress={() => {navigation.navigate('SignUp')}}
				/>
			</View>
		);
	};
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#2E3436FF',
		justifyContent: 'center',
		paddingHorizontal: 16,  
	}
})

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);