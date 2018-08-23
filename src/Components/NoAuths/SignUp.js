import React from 'react';
import { connect } from 'react-redux';
import { Text, View, Button } from 'react-native';
import { incrementaUser } from '../../ActionCreators/index';

const mapStateToProps = state => ({
	numero: state.userReducer,
});

const mapDispatchToProps = dispatch => ({
	incrementaUser: user => dispatch(incrementaUser(user)),
})

const SignUp = (props) => {
	console.log(props.numero);
	const { navigation } = props;
	return (
		<View style={{flex: 1, justifyContent: 'center' }}>
			<Text>Componente SignUp</Text>
			<Button
				title="SignIn" 
				onPress={() => {navigation.goBack()}}
			/>
			<Button
				title='Incrementa'
				onPress={() => {props.incrementaUser(1)}}
			/>
		</View>
	);
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);