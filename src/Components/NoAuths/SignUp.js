import React from 'react';
import { connect } from 'react-redux';
import { Text, View, Button, StyleSheet } from 'react-native';
import { incrementaUser } from '../../ActionCreators/index';
import SignUpForm from './Forms/SignUpForm';

const mapStateToProps = state => ({
	numero: state.userReducer,
});

const mapDispatchToProps = dispatch => ({
	incrementaUser: user => dispatch(incrementaUser(user)),
})

const SignUp = (props) => {
	const { navigation } = props;
	return (
		<View style={styles.container}>
			<Text style={{ color: '#EEEEECFF'}}>SignUp</Text>
			<SignUpForm />
			<Button
				title="Sign In" 
				onPress={() => {navigation.goBack()}}
			/>
		</View>
	);
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