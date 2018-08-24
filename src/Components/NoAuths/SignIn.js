import React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import SignInForm from './Forms/SignInForm';

const mapStateToProps = state => ({
	numero: state.userReducer,
});

const mapDispatchToProps = dispatch => ({
	incrementaUser: user => dispatch(incrementaUser(user)),
})

const SignIn = (props) => {
	const { navigation } = props;
	return (
		<View style={styles.container}>
			<Text style={{ color: '#EEEEECFF'}}>SignIn</Text>
			<SignInForm />
			<Button
				title="Sign Up" 
				onPress={() => {navigation.navigate('SignUp')}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#2E3436FF',
		justifyContent: 'center',
		paddingHorizontal: 16,  
	}
})

export default SignIn;