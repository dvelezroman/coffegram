import React from 'react';
import { Text, View, Button } from 'react-native';

const SignIn = (props) => {
	const { navigation } = props;
	return (
		<View style={{flex: 1, justifyContent: 'center' }}>
			<Text>Componente SignIn</Text>
			<Button
				title="SignUp" 
				onPress={() => {navigation.navigate('SignUp')}}
			/>
		</View>
	);
};

export default SignIn;