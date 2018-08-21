import React from 'react';
import { Text, View, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation';

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

const SignUp = (props) => {
	const { navigation } = props;
	return (
		<View style={{flex: 1, justifyContent: 'center' }}>
			<Text>Componente SignUp</Text>
			<Button
				title="SignIn" 
				onPress={() => {navigation.goBack()}}
			/>
		</View>
	);
}

const NoAuthsRoutes = createStackNavigator({
	SignIn: {
		screen: SignIn,
	},
	SignUp: {
		screen: SignUp,
	}
},
{
	headerMode: 'none',
});

export { NoAuthsRoutes };